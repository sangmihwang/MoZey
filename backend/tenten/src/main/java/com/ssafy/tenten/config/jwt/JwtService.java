package com.ssafy.tenten.config.jwt;

import com.ssafy.tenten.config.auth.PrincipalDetails;
import com.ssafy.tenten.dto.TokenDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.util.Date;

@Service
@RequiredArgsConstructor
@Getter
@Slf4j
public class JwtService {
    @Value("${jwt.secretKey}")
    private String jwtSecret;

    @Value("${jwt.access.expiration}")
    private static long accessExpirationMs;

    @Value("${jwt.refresh.expiration}")
    private static long refreshExpirationMs;

    @Value("${jwt.access.header}")
    private String accessHeader;

    @Value("${jwt.refresh.header}")
    private String refreshHeader;

//    public String generateAccessToken(AuthenticationManager authenticationManager, String userId, String password) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(userId, password));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        return makeToken(authentication).getAccessToken();
//    }
//
//    public TokenDto generateAccessAndRefreshTokens(AuthenticationManager authenticationManager, String userId, String password) {
//        Authentication authentication = authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(userId, password));
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//
//        return makeToken(authentication);
//    }

    // 토큰으로부터 id 값을 가져오기
    public static String getUserId(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().get("userId", String.class);
    }

    // 만료됐는지?
    public static boolean isExpired(String token, String secretKey) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
                .getBody().getExpiration().before(new Date());
    }
    
    // 토큰 생성
    public static String createAccessToken (String key) {
        Claims claims = Jwts.claims();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + accessExpirationMs))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
    }
    public static String createRefreshToken (String key) {
        Claims claims = Jwts.claims();
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + refreshExpirationMs))
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();
    }

    public TokenDto makeToken(Authentication authentication) {
        PrincipalDetails userPrincipal = (PrincipalDetails) authentication.getPrincipal();

        TokenDto token = new TokenDto();

        token.setAccessToken(
                Jwts.builder()
                        .setSubject(userPrincipal.getUser().getEmail())
                        .setIssuer("mozey")
                        .setIssuedAt(new Date())
                        .setExpiration(new Date((new Date()).getTime() + accessExpirationMs))
                        .claim("id", userPrincipal.getUser().getUserId())
                        .claim("role", userPrincipal.getUser().getRole())
                        .signWith(SignatureAlgorithm.HS512, jwtSecret)
                        .compact());

        token.setRefreshToken(
                Jwts.builder()
                        .setSubject(userPrincipal.getUser().getEmail())
                        .setIssuer("mozey")
                        .setIssuedAt(new Date())
                        .setExpiration(new Date((new Date()).getTime() + refreshExpirationMs))
                        .claim("id", userPrincipal.getUser().getUserId())
                        .signWith(SignatureAlgorithm.HS512, jwtSecret)
                        .compact());

        return token;
    }
    public void sendAccessAndRefreshToken(HttpServletResponse response, String accessToken, String refreshToken) {
        response.setStatus(HttpServletResponse.SC_OK);
        setAccessTokenHeader(response, accessToken);
        setRefreshTokenHeader(response, refreshToken);
        log.info("Access Token, Refresh Token 헤더 설정 완료");
    }

    private void setAccessTokenHeader(HttpServletResponse response, String accessToken) {
        response.setHeader(accessHeader, accessToken);
    }

    private void setRefreshTokenHeader(HttpServletResponse response, String refreshToken) {
        response.setHeader(refreshHeader, refreshToken);
    }
}
