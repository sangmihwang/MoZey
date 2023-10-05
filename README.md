# SSAFY 9기 특화프로젝트

# A510 TenTen

![메인베너](./assets/images/Logo2.png)

## **0️⃣ 프로젝트 개요**

🎈 프로젝트명 : Mozey

📌 프로젝트 컨셉 : ghrltla

🛠 개발 기간 : 23.08.28 ~ 23.10.06 (6주)

🧑🏻 팀원 : 이민웅, 송채은, 임병국, 조윤상, 지한얼, 황상미

💻 사용 기술스택 : SpringBoot, React, AWS + (4. 시스템 아키텍처 참고)



## **1️⃣ 팀원 정보 및 업무 분담 내역**

<table>
  <tr>
    <td align="center"><a href="https://github.com/MinWoongL"><img src="https://avatars.githubusercontent.com/u/65647667?v=4" width="100px;" alt=""/><br /><sub><b>이민웅</b></sub></a><br /><sub><b>팀장</b><br>ENFJ</br></sub></td>
    <td align="center"><a href="https://github.com/SongChaee"><img src="https://avatars.githubusercontent.com/u/122426072?v=4" width="100px;" alt=""/><br /><sub><b>송채은</b></sub></a><br /><sub><b>서기</b><br>ENFP</br></sub></td>
    <td align="center"><a href="https://github.com/bbangkku"><img src="https://avatars.githubusercontent.com/u/122846143?v=4" width="100px;" alt=""/><br /><sub><b>임병국</b></sub></a><br /><sub><b>서기</b><br>ENFP</br></sub></td>      
    <td align="center"><a href="https://github.com/YOUNPRIZE"><img src="https://avatars.githubusercontent.com/u/76830587?v=4" width="100px;" alt=""/><br /><sub><b>조윤상</b></sub></a><br /><sub><b>컨텐츠(산출물)</b><br>ISFJ</br></sub></td>  
	<td align="center"><a href="https://github.com/jihaneol"><img src="https://avatars.githubusercontent.com/u/104291422?v=4" width="100px;" alt=""/><br /><sub><b>지한얼</b></sub></a><br /><sub><b>컨텐츠(영상)</b><br>ENTJ</br></sub></td>      
	<td align="center"><a href="https://github.com/sangmihwang"><img src="https://avatars.githubusercontent.com/u/102012985?v=4" width="100px;" alt=""/><br /><sub><b>황상미</b></sub></a><br /><sub><b>컨텐츠(PPT)</b><br>ENTP</br></sub></td>  
  </tr>
</table>

| 이름          | 역할       | 설명                                                         |
| ------------- | ---------- | ------------------------------------------------------------ |
| 이민웅 (팀장) | Full Stack |                                                              |
| 송채은        | Full Stack |                                                              |
| 임병국        | Full Stack |                                                              |
| 조윤상        | Full Stack | [FrontEnd] User JSX 설계 및 구현<br />[FrontEnd] Zustand를 이용한 UserInfoStore 구현<br/>[BackEnd] User API 설계 및 구현 |
| 지한얼        | Full Stack |                                                              |
| 황상미        | Full Stack |                                                              |



## **2️⃣ 서비스 대표 기능**

<h4>Web</h4>

| 기능               | 세부기능                                                     |
| ------------------ | ------------------------------------------------------------ |
| 회원 기능          | - 회원가입 / 로그인 / 로그아웃 - 회원정보 변경 및 탈퇴       |
| 프로필             | - 사용자 정보 조회 - 파충류 정보 조회                        |
| 케이지 상태 조회   | - 케이지 온도 / 습도 / UV 등 표시 - 실시간 영상 송출 - 카메라 위치 조종 |
| 케이지 상태 조절   | - 케이지 온도 / 습도 / UV 등 환경 설정                       |
| 파충류별 정보 등록 | - 동물의 종류 등록 - 종류별 가이드라인 제공                  |
| 먹이 주기 알림     | - 먹이를 제공하는 시간에 맞춰 알림 - 먹이 주기 입력          |
| 물품 판매처 제공   | - 판매처 연결                                                |



## 3️⃣ 서비스 화면





## 4️⃣ 시스템 아키텍처 및 개발 환경

<h4>🌐 공통</h4>

| 상세               |       내용        |
| ------------------ | :---------------: |
| GitLab             |     형상 관리     |
| Jira               | 일정 및 이슈 관리 |
| Mattermost         |   커뮤니케이션    |
| Notion             | 일정 및 문서 관리 |
| IntelliJ           |   IDE (2022.02)   |
| Visual Studio Code |        IDE        |

</br>

<h4>📱 FrontEnd</h4>

| 상세             |  버전   |
| ---------------- | :-----: |
| React            |  5.0.1  |
| zustand          |  4.3.9  |
| react-router-dom | 6.14.2  |
| Node.js          | 18.17.0 |
| yarn             |  9.6.7  |

</br>

<h4>💾 BackEnd</h4>

| 상세           |    버전     |
| :------------- | :---------: |
| JDK (Zulu)     |   11.0.19   |
| SpringBoot     |   2.7.13    |
| MySQL          |   8.0.26    |
| Ubuntu         | 20.04.6 LTS |
| Nginx          |   1.18.0    |
| Docker         |   24.0.5    |
| Docker-compose |   2.20.2    |

</br>

<h4>System Architecture</h4>

![System Architecture](C:/Users/SSAFY/Desktop/ChameleHOME/exec/assets/Architecture.png)



## 5️⃣ 컴포넌트 구조 및 프로토타입

<h4>📱 FrontEnd</h4>

```markdown
📂 crawling
  ㄴ📄 AI_quiz_create.py
  ㄴ📄 news_crawling.py
📂 functions
	ㄴ📄 index.js
    ㄴ📄 package-lock.json
    ㄴ📄 package.json
📂 node_modules
📂 public
  ㄴ📂 images
  ㄴ📄 favicon.ico
  ㄴ📄 firebase-messaging-sw.js
  ㄴ📄 index.html
  ㄴ📄 manifest.json
📂 src
  ㄴ📂 api
  	ㄴ📄 coinPriceAPI.js
  	ㄴ📄 index.js
  	ㄴ📄 notificationAPI.js
  	ㄴ📄 voteAPI.js
  ㄴ📂 assets
  ㄴ📂 component
  	ㄴ📂 common
  	ㄴ📂 exchange
  	ㄴ📂 main
  	ㄴ📂 message
  	ㄴ📂 mypage
  	ㄴ📂 news
  	ㄴ📂 vote
  	ㄴ📄 AddBook.js
  	ㄴ📄 AddVote.jsx
  	ㄴ📄 auth.js
  	ㄴ📄 index.js
  	ㄴ📄 Notification.js
  ㄴ📂 config
  	ㄴ📄 firebase.js
  ㄴ📂 hooks
  	ㄴ📄 index.js
  	ㄴ📄 useCookie.js
  	ㄴ📄 useStore.js
  ㄴ📂 pages
  	ㄴ📂 exchange
  		ㄴ📄 Exchange.jsx
  	ㄴ📂 login
  		ㄴ📂 signup
  			ㄴ📄 SignUpForm.jsx
  			ㄴ📄 SignUpSuccess.jsx
  		ㄴ📄 AuthProcess.jsx
  		ㄴ📄 LoginPage.jsx
  		ㄴ📄 LoginSuccess.jsx
  	ㄴ📂 main
  		ㄴ📄 Main.jsx
  	ㄴ📂 message
  		ㄴ📄 Message.jsx
  	ㄴ📂 mypage
  		ㄴ📄 Mypage.jsx
  	ㄴ📂 news
  		ㄴ📄 NewsPage.jsx
  	ㄴ📂 vote
  		ㄴ📄 vote.jsx
  	ㄴ📄 index.js
  ㄴ📂 services
 	ㄴ📄 vote_services.js
  ㄴ📂 store
  	ㄴ📄 userInfoStore.jsx
  ㄴ📂 style
  	ㄴ📄 Globalstyles.js
  	ㄴ📄 index.js
  	ㄴ📄 Theme.js
  ㄴ📂 utils
  	ㄴ📄 index.js
  	ㄴ📄 utilsApi.js
  	ㄴ📄 utilsConstant.js
  	ㄴ📄 utilsFunction.js
  ㄴ📄 App.css
  ㄴ📄 App.js
  ㄴ📄 App.test.js
  ㄴ📄 index.css
  ㄴ📄 index.js
  ㄴ📄 logo.svg
  ㄴ📄 reportWebVitals.js
  ㄴ📄 Router.jsx
  ㄴ📄 service-worker.js
  ㄴ📄 serviceWorkerRegistration.js
  ㄴ📄 setupTests.js
  ㄴ📄 store.js
📄 .babelrc
📄 .env
📄 .env.dev
📄 .env.prd
📄 .firebaserc
📄 .gitignore
🐳 Dockerfile.nginx
📄 firebase.json
📄 jsconfig.json
📄 nginx.conf
📄 package.json
📄 webpack.config.js
📄 yarn.lock
```

<h4>💾 BackEnd</h4>

```markdown
📂 src/main/java
  ㄴ📦 com.ssafy.tenten
  	ㄴ📄 TentenApplication.java
  	ㄴ📄 FcmMessage.java
  	ㄴ📦 api
  		ㄴ📦 controller
        	ㄴ📄 CoinInfoController.java
            ㄴ📄 FCMNotificationApiController.java
            ㄴ📄 FollowController.java
            ㄴ📄 ImageController.java
            ㄴ📄 MessageController.java
            ㄴ📄 MoneyController.java
            ㄴ📄 NewsController.java
            ㄴ📄 NewsReadController.java
            ㄴ📄 QuestionController.java
            ㄴ📄 QuizController.java
            ㄴ📄 QuizSolveController.java
            ㄴ📄 UserController.java
            ㄴ📄 VoteController.java
        ㄴ📦 repository
        	ㄴ📦 querydsl
        		ㄴ📄 QuestionRepositoryCustom
        		ㄴ📄 QuestionRepositoryCustomImpl.java
        		ㄴ📄 VoteRepositoryCustom
        		ㄴ📄 VoteRepositoryCustomImpl.java
        	ㄴ📄 CoinInfoRepository.java
        	ㄴ📄 FollowRepository.java
        	ㄴ📄 MoneyHistoryRepository.java
        	ㄴ📄 NewsReadRepository.java
        	ㄴ📄 NewsRepository.java
        	ㄴ📄 QuestionRepoRepository.java
        	ㄴ📄 QuizRepository.java
        	ㄴ📄 QuizSolveRepository.java
        	ㄴ📄 UserRepository.java
        	ㄴ📄 VoteCntRepository.java
        	ㄴ📄 VoteHistoryRepository.java
        ㄴ📦 service
			ㄴ📄 CoinInfoService
            ㄴ📄 CoinInfoServiceImpl.java
			ㄴ📄 FCMNotificationService.java
			ㄴ📄 FollowService
            ㄴ📄 FollowServiceImpl.java
			ㄴ📄 ImageService
            ㄴ📄 ImageServiceImpl.java
			ㄴ📄 MoneyHistoryService
		    ㄴ📄 MoneyHistoryServiceImpl.java
			ㄴ📄 NewsReadService
            ㄴ📄 NewsReadServiceImpl.java
			ㄴ📄 NewsService
            ㄴ📄 NewsServiceImpl.java
			ㄴ📄 QuestionService
            ㄴ📄 QuestionServiceImpl.java
			ㄴ📄 QuizService
            ㄴ📄 QuizServiceImpl.java
			ㄴ📄 QuizSolveService
            ㄴ📄 QuizSolveServiceImpl.java
			ㄴ📄 UserService
            ㄴ📄 UserServiceImpl.java
			ㄴ📄 VoteService
            ㄴ📄 VoteServiceImpl.java	
  	ㄴ📦 config
        ㄴ📦 auth
        	ㄴ📄 PrincipalDetails.java
        ㄴ📦 jwt
        	ㄴ📄 JwtFilter.java
        	ㄴ📄 JwtService.java
        ㄴ📦 oauth
        	ㄴ📦 handler
        		ㄴ📄 LoginFailureHandler.java
        		ㄴ📄 LoginSuccessHandler.java
        	ㄴ📦 provider
        		ㄴ📄 KakaoUserInfo.java
        		ㄴ📄 OAuth2UserInfo
        	ㄴ📄 PrincipalOauth2UserService.java
        ㄴ📄 FCMConfig.java
        ㄴ📄 RedisConfig.java
        ㄴ📄 SecurityConfig.java
        ㄴ📄 SwaggerConfig.java
    ㄴ📦 constant
    	ㄴ📄 CoinTransactionType
    	ㄴ📄 CoinType
    ㄴ📦 domain
    	ㄴ📦 embedded
    		ㄴ📄 MultipleChoice.java
    	ㄴ📄 CoinInfo.java
    	ㄴ📄 Follow.java
    	ㄴ📄 MoneyHistory.java
    	ㄴ📄 News.java
    	ㄴ📄 NewsRead.java
    	ㄴ📄 Question.java
    	ㄴ📄 Quiz.java
    	ㄴ📄 QuizSolve.java
    	ㄴ📄 User.java
    	ㄴ📄 VoteCount.java
    	ㄴ📄 VoteHistory.java
    ㄴ📦 dto
    	ㄴ📄 CoinInfoDto.java
    	ㄴ📄 FCMNotificationRequestDto.java
    	ㄴ📄 FollowDto.java
    	ㄴ📄 MoneyHistoryDto.java
    	ㄴ📄 NewsDto.java
    	ㄴ📄 NewsReadDto.java
    	ㄴ📄 QuestionDto.java
    	ㄴ📄 QuizDto.java
    	ㄴ📄 QuizSolveDto.java
    	ㄴ📄 TokenDto.java
    	ㄴ📄 UserDto.java
    	ㄴ📄 VoteDto.java
    ㄴ📦 exception
    	ㄴ📄 CustomException.java
    	ㄴ📄 CustomExceptionHandler.java
    	ㄴ📄 ErrorCode.java
    	ㄴ📄 ErrorResponseEntity.java
    	ㄴ📄 SuccessResponseEntity.java
    ㄴ📦 vo
    	ㄴ📦 Request
    		ㄴ📄 CoinInfoRequest.java
    		ㄴ📄 FollowRequest.java
    		ㄴ📄 MoneyHistoryRequest.java
    		ㄴ📄 NewsReadRequest.java
    		ㄴ📄 NewsRequest.java
    		ㄴ📄 QuestionRequest.java
    		ㄴ📄 QuizRequest.java
    		ㄴ📄 QuizSolveRequest.java
    		ㄴ📄 UserJoinRequest.java
    		ㄴ📄 UserRequest.java
    		ㄴ📄 UserUpdateRequest.java
    		ㄴ📄 VoteRequest.java
    	ㄴ📦 Response
    		ㄴ📄 CoinInfoResponse.java
    		ㄴ📄 FollowResponse.java
    		ㄴ📄 MessageResponse.java
    		ㄴ📄 MoneyHistoryResponse.java
    		ㄴ📄 NewsReadResponse.java
    		ㄴ📄 NewsResponse.java
    		ㄴ📄 PageResponse.java
    		ㄴ📄 QuestionResponse.java
    		ㄴ📄 QuizResponse.java
    		ㄴ📄 QuizSolveResponse.java
    		ㄴ📄 RecommendUserResponse.java
    		ㄴ📄 UserHintResponse.java
    		ㄴ📄 UserHintSelectedDataResponse.java
    		ㄴ📄 UserResponse.java
    		ㄴ📄 VoteResponse.java
📂 src/main/resources
    ㄴ📂 static
    ㄴ📂 templates
    ㄴ📄 application.yml
    ㄴ📄 application-oauth.yml
📄 .gitignore
📄 .gitkeep
🐳 Dockerfile.spring
🐘 build.gradle
🐘 gradlew
🐘 gradlew.bat
🐘 settings.gradle

```



## 6️⃣ 데이터베이스 모델링 (ERD)



## 7️⃣ Convention

### Commit Convention

> **"[Type] #(Jira issue number) Commit message"**

- Type

  - **Fix** : 잘못된 동작을 고칠 때

    > fix function/error/typo in style.css

  - option

    - funtion : 고친 함수 명 (e.g. fix login function in index.html)
    - error : 수정한 에러 (e.g. fix [구체적 에러명] error in login.js)
    - typo : 오타 (e.g. fix typo in style.css)

  - **Add** : 새로운 것을 추가할 때

    > add mytest.test for test (새로운 파일 추가 시)

    > add blue color to style.css (기존 파일에 내용 추가 시)

  - **Move** : 코드나 파일을 이동할 때

    > move A to B (e.g. A를 B로 이동할 때)

  - **Rename** : 이름 변경이 있을 때

    > rename A to B (e.g. A를 B로 이름을 변경할 때)

  - **Update** : 정상적으로 동작하는 파일을 보완하는 경우

    > update test.js to use HTTPS (test.js에 기존의 프로토콜에서 HTTPS 프로토콜 사용으로 변경)

  - **Remove** : 삭제가 있을 때

    > remove test.js (파일 삭제 시)

    > remove black color from style.css (파일 내 부분 삭제 시)

- #(Jira issue number) : Click 시, Jira에서 해당 Issue에 대한 상세 내용 확인 가능

- Commit message : 변경 사항에 대해 명확하게 기술



## 8️⃣ Git Flow

```
master
└ develop
  ├ feature-front
  ├ feature-back
```

- master : 운영 서버로 배포하기 위한 브랜치
- develop : 다음 출시 기능을 개발하는 브랜치
- feature : 세부 기능을 개발하는 브랜치
  - front : 프론트엔드를 개발하는 브랜치
  - back : 백엔드를 개발하는 브랜치



## **9️⃣ 회고**

| 이름   | 내용                                                         |
| ------ | ------------------------------------------------------------ |
|        |                                                              |
|        |                                                              |
|        |                                                              |
| 조윤상 | 우선 불협화음없이 좋은 팀워크로 성공적인 프로젝트를 할 수 있게 해준 조원들에게 너무나 감사하고, |
|        |                                                              |
|        |                                                              |

