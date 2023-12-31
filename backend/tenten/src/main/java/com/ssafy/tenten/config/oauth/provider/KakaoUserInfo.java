package com.ssafy.tenten.config.oauth.provider;

import java.util.Map;

public class KakaoUserInfo implements OAuth2UserInfo {

    private Map<String, Object> attributes;

    public KakaoUserInfo(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    @Override
    public String getProviderId() {
        // Long 타입이기 때문에 toString으로 변환
        return attributes.get("id").toString();
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getEmail() {
        // kakao_account라는 Map에서 추출
        return (String) ((Map) attributes.get("kakao_account")).get("email");
    }

    @Override
    public String getName() {
        // kakao_account라는 Map에서 추출
        return (String) ((Map) attributes.get("properties")).get("nickname");
    }

    @Override
    public String getImage() {
        return (String) ((Map) attributes.get("properties")).get("nickname");
    }

    @Override
    public String getGender() {
        return (String) ((Map) attributes.get("kakao_account")).get("gender");
    }
}
