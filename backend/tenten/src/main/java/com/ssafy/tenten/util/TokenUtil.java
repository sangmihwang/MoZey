package com.ssafy.tenten.util;

import com.ssafy.tenten.config.auth.PrincipalDetails;
import com.ssafy.tenten.dto.TokenDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Date;

public class TokenUtil {
    @Value("${jwt.secret_key}")
    private String jwtSecret;

    @Value("${jwt.access_expiration_ms}")
    private long accessExpirationMs;

    @Value("${jwt.refresh_expiration_ms}")
    private long refreshExpirationMs;

    public String generateAccessToken(AuthenticationManager authenticationManager, String userId, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userId, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        return makeToken(authentication).getAccessToken();
    }

    public TokenDto generateAccessAndRefreshTokens(AuthenticationManager authenticationManager, String userId, String password) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userId, password));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return makeToken(authentication);
    }

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
//    public static String createToken (String userId, String key, long expireTimeMs) {
//        Claims claims = Jwts.claims();
//        claims.put("userId", userId);
//
//        return Jwts.builder()
//                .setClaims(claims)
//                .setIssuedAt(new Date(System.currentTimeMillis()))
//                .setExpiration(new Date(System.currentTimeMillis() + expireTimeMs))
//                .signWith(SignatureAlgorithm.HS256, key)
//                .compact();
//    }

    public TokenDto makeToken(Authentication authentication) {
        PrincipalDetails userPrincipal = (PrincipalDetails) authentication.getPrincipal();

        TokenDto token = new TokenDto();

        token.setAccessToken(
                Jwts.builder()
//                        .setSubject(userPrincipal.getUsername())
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
//                        .setSubject(userPrincipal.getUsername())
                        .setSubject(userPrincipal.getUser().getEmail())
                        .setIssuer("mozey")
                        .setIssuedAt(new Date())
                        .setExpiration(new Date((new Date()).getTime() + refreshExpirationMs))
//                        .claim("id", userPrincipal.getId())
                        .claim("id", userPrincipal.getUser().getUserId())
                        .signWith(SignatureAlgorithm.HS512, jwtSecret)
                        .compact());

        return token;
    }
}
