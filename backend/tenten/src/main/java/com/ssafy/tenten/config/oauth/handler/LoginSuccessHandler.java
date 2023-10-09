package com.ssafy.tenten.config.oauth.handler;

import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.config.auth.PrincipalDetails;
import com.ssafy.tenten.config.jwt.JwtService;
import com.ssafy.tenten.domain.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
public class LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        String email = extractEmail(authentication);
        String accessToken = jwtService.createAccessToken(email);

        User user = getMember(authentication);
        log.info("accessToken : ", accessToken);
        if (user.getName() == null) {
            // 회원 가입 x
            response.sendRedirect("http://j9a510.p.ssafy.io/oauth2?token=" + accessToken + "&email=" + email);
            jwtService.sendAccessAndRefreshToken(response, accessToken, null);
            return;
        }

        String refreshToken = jwtService.createRefreshToken(email);
        response.addHeader(jwtService.getAccessHeader(), "Bearer " + accessToken);
        response.addHeader(jwtService.getRefreshHeader(), "Bearer " + refreshToken);

        jwtService.sendAccessAndRefreshToken(response, accessToken, refreshToken);

        userRepository.findByEmail(email)
                .ifPresent(u -> {
                    u.updateRefreshToken(refreshToken);
                    userRepository.saveAndFlush(u);
                });

        response.sendRedirect("http://j9a510.p.ssafy.io/login?email=" + email);
    }

    private String extractEmail(Authentication authentication) {
        PrincipalDetails userDetails = (PrincipalDetails) authentication.getPrincipal();
        return userDetails.getName();
    }

    private User getMember(Authentication authentication) {
        PrincipalDetails memberDetails = (PrincipalDetails) authentication.getPrincipal();
        return memberDetails.getUser();
    }
}