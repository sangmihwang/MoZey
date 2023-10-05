package com.ssafy.tenten.config;

import com.ssafy.tenten.api.repository.UserRepository;
import com.ssafy.tenten.api.service.UserService;
import com.ssafy.tenten.config.jwt.JwtFilter;
import com.ssafy.tenten.config.jwt.JwtService;
import com.ssafy.tenten.config.oauth.PrincipalOauth2UserService;
import com.ssafy.tenten.config.oauth.handler.LoginFailureHandler;
import com.ssafy.tenten.config.oauth.handler.LoginSuccessHandler;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
@Slf4j
public class SecurityConfig {
    private final UserService userService;
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PrincipalOauth2UserService principalOauth2UserService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.cors();
        httpSecurity
                .httpBasic().disable()
                .csrf().disable()

                .formLogin().disable()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // jwt 사용하는 경우 씀
                .and()
                .authorizeRequests()
                .anyRequest().permitAll()
//                .antMatchers("/api/user/join/**", "/api/user/login").permitAll()
//                .antMatchers("/api/**").permitAll()
                .and()

                // oauth 인증 후 리디렉션할 URI 지정
                .oauth2Login()
//                .defaultSuccessUrl("/login-success")
                .userInfoEndpoint().userService(principalOauth2UserService)
                .and()
                .successHandler(loginSuccessHandler())
                .failureHandler(loginFailureHandler());

        httpSecurity.addFilterBefore(new JwtFilter(userService), UsernamePasswordAuthenticationFilter.class);

        return httpSecurity.build();
    }

    //소셜 로그인
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public LoginSuccessHandler loginSuccessHandler() {
        return new LoginSuccessHandler(jwtService, userRepository);
    }

    @Bean
    public LoginFailureHandler loginFailureHandler() {
        return new LoginFailureHandler();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration config = new CorsConfiguration();

        config.setAllowCredentials(true);
//        config.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:8000", "https://accounts.kakao.com/login",
//                "http://j9a510.p.ssafy.io:3000", "http://j9a510.p.ssafy.io:8000", "http://j9a510.p.ssafy.io"));
        config.setAllowedOrigins(List.of("*"));
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("*"));
        config.setExposedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }
}