package com.ssafy.tenten.constant;

public enum CoinTransactionType {
    EARN, REDEEM;

    public static CoinTransactionType fromString(String type){
        switch(type.toLowerCase()){
            case "earn":
                return EARN;
            case "redeem":
                return REDEEM;
            default:
                throw new IllegalArgumentException("유효하지 않은 거래 타입: " + type);
        }
    }
}