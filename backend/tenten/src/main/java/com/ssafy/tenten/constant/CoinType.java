package com.ssafy.tenten.constant;

public enum CoinType {
    // 포인트 적립 및 사용의 경우에는 api 2.4에서 코인의 교환이 아니므로
    // toCoinName을 None으로 설정
    Point, Coin1, Coin2, None;
}