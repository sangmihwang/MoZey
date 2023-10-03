import create from "zustand";
import { persist } from 'zustand/middleware';

// User state information
export const userInfoStore = create(persist(
  set => ({
    User: {
      id: 0, // user_id
      username: "", // 이름
      email: "", // 이메일
      gender: "", // 성별
      img: "", // 프로필 사진
      term: "", // 기수
      campus: "", // 캠퍼스
      unit: "", // 특화 반
      point: 0, // 포인트
      coin1: 0, // 코인1
      coin2: 0, // 코인2
      sub_yn: 0, // 구독 정보
    },
    isLoggedIn: false,
    setUserInfo: (user) => set((state) => ({
      ...state,
      User: {
        id: user.userId, // 수정 필요
        username: user.name, // 수정 필요
        email: user.email,
        gender: user.gender,
        img: user.image,
        term: user.term,
        campus: user.campus,
        unit: user.group, // 수정 필요
        point: user.point,
        coin1: user.coin1,
        coin2: user.coin2,
        sub_yn: user.sub_yn,
      },
      isLoggedIn: true
    })),
    deleteUserInfo: () => set((state) => { 
      localStorage.clear();
      sessionStorage.clear();
      return {
        ...state,
        User: {
          id: 0, // user_id
          username: "", // 이름
          email: "", // 이메일
          gender: "", // 성별
          img: "", // 프로필 사진
          term: "", // 기수
          campus: "", // 캠퍼스
          unit: "", // 특화 반
          point: 0, // 포인트
          coin1: 0, // 코인1
          coin2: 0, // 코인2
          sub_yn: 0, // 구독 정보
        },
        isLoggedIn: false
      }
    })
  }),
  {
    name: "userInfo",
    partialize: (state) => ({
      User: {
        id: state.User.id,
        username: state.User.username,
        email: state.User.email,
        gender: state.User.gender,
        img: state.User.img,
        term: state.User.term,
        campus: state.User.campus,
        unit: state.User.group,
        point: state.User.point,
        coin1: state.User.coin1,
        coin2: state.User.coin2,
        sub_yn: state.User.sub_yn,
      },
      isLoggedIn: state.isLoggedIn
    })
  }
));
