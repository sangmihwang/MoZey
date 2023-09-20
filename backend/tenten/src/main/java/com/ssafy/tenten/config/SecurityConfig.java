package com.ssafy.tenten.config;

import com.ssafy.tenten.api.service.UserService;
import com.ssafy.tenten.config.jwt.JwtFilter;
import com.ssafy.tenten.config.oauth.PrincipalOauth2UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final UserService userService;

    @Autowired
    private PrincipalOauth2UserService principalOauth2UserService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
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
                .loginPage("/login")
                .userInfoEndpoint()
                .userService(principalOauth2UserService)
//                .addFilterBefore(new JwtFilter(userService), UsernamePasswordAuthenticationFilter.class)
                ;

        httpSecurity.addFilterBefore(new JwtFilter(userService), UsernamePasswordAuthenticationFilter.class);
//        httpSecurity.addFilter(new JwtFilter(userService));
        return httpSecurity.build();
    }
}