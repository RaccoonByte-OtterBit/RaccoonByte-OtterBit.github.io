# 🐾 Bono-Log 🐾

## 🎉 Introduction

안녕하세요! 😀

Bono-Log는, Raccoon과 Otter가 함께 만드는 Tech git-blog입니다. \
저희들의 성장 과정을 기록할 수 있도록 블로그 운영을 고려하게 되었고, \
개발 역량을 향상시키기 위해 상용 플랫폼이 아닌, **자체 개발**을 하게 되었습니다! 😊

저희들의 성장 과정 그리고 git-blog에 관심이 있으신 분들은 아래 링크로 확인해주세요!

[🚀 Bono-Log 바로가기](https://bono-log.github.io/)


## 🦝 About Us 🦦

### Raccoon is..
- 비전공 현직 개발자입니다.
- 주로 프로젝트 관리를 맡고 있습니다.

### Otter is..
- 비전공 개발 취준생입니다.


## ⚡ Software Used

Bono-Log 개발에는 아래와 같은 기술 스택이 사용되었습니다! 💪

| Tech Stack | Used |
| :----: | :----: |
| Language | TypeScript |
| FrameWork | React |
| Package Manager | NPM |
| CI/CD | GitHub Actions <br> GitHub Pages |
| Project Managing | GitHub Projects <br> GitHub MileStones <br> GitHub Issues |


## 📌 Develop Rule

효과적인 협업&개발을 위해 저희가 채택한 팀 규칙입니다. 😀

### Develop Process

저희는 Agile 방법론을 기반으로 Develop Process를 설정하였습니다.

#### Sprint 구성

아래 Sprint 규칙에 따라 반복적으로 Sprint 수행함으로써 Project를 진행합니다. \
(개인 사정으로 일정 조정이 필요한 경우, 사전 공지하여 조율합니다.)

- Sprint 시작 전, Sprint 목표와 기간을 설정합니다.
  - 목표는 함께 설정합니다.
  - 주기는 1주~2주로 설정합니다.
  
- Sprint 종료 시, Self-Review를 통해 회고록을 작성합니다.
  - Self-Review는 30분을 넘지 않는 것을 목표로 합니다.
  - Self-Review 후, 기존 Sprint 종료와 동시에 새로운 Sprint를 재시작합니다.

#### GitHub Project & MileStone

프로젝트 관리의 최소 단위는 GitHub Issue입니다. \
Issue는 최대한 작은 단위로 작성하여 협업에 어려움이 없도록 합니다.

GitHub Project를 통해 전체적인 프로젝트 상황을 확인합니다.

- BackLog : 계획되지 않은 issue
- ToDo : 이번 Sprint에서 완료되어야 할 issue
- In Progress : 현재 작업 중인 isses
- On Review : 작업은 완료되었으나, Review 중인 issue
- Done : 완료된 issue

또한, GitHub MileStone을 통해 Sprint를 관리합니다.

### Commit Message Convention

효율적인 협업을 위해 Commit Message를 다음과 같이 작성합니다.

- Commit은 최대한 작은 단위로 작성합니다.
- 변경점의 유형과 한 문장으로 요약하여 작성합니다.(\<type\>: \<detail message\>)
- 필요 시, description을 통해 자세하게 작성합니다.
- 사용 가능한 type은 다음과 같습니다.
  - feature : 새로운 기능 추가
  - fix : 버그 수정
  - style : CSS 등 사용자 UI 디자인 변경
  - refactor : 코드 리팩토링
  - docs : 문서 수정
  - test : 테스트 추가, 테스트 리팩토링
  - ci : 빌드 부분 혹은 패키지 매니저 수정
  - rename : 코드에 영향을 주지 않는 변경사항(오타 수정, 탭 사이즈 변경, 변수명 변경, 파일 및 폴더 이름 변경)
  - remove : 코드/파일/폴더 삭제
  - chore : 그 외, 모든 변경점
- 예시) docs: update README.md / add Commit Message Convention
 
### Branch Strategy

저희는 GitHub Flow를 기반으로 Branch 전략을 구성하였습니다.

#### `work` branch

개발을 위한 새로운 branch를 생성합니다. \
branch naming rule은 다음과 같습니다.

- 작업 중인 내용을 잘 나타낼 수 있도록 작성합니다.
- 소문자로 작성합니다.
- 작업 성격을 가장 잘 나타내는 키워드를 입력하고 `/`로 구분한 뒤, 추가 작성합니다. (키워드는 위의 [여기](#commit-message-convention)를 참고!)
- 띄워쓰기는 `-`로 작성합니다.
- 예시 : feature/create-404-page

개발 중에는 수시로 원격 저장소에 push합니다. \
개발이 완료될 경우, PR & Review 과정을 통해 `main` branch로 병합됩니다. \
merge된 후, 해당 branch는 삭제하도록 합니다.

#### `main` Branch

`work` branch가 합쳐지는 branch입니다. \
Git Actions를 통한 CI/CD가 원활히 진행될 수 있도록 중간 역할을 합니다.

- CI : `work`->`main` PR 작성 시, Unit Test 및 Build Test 수행
- CD : `work`->`main` merge 시, `main`->`gh-pages` build 결과물 배포

#### 'gh-pages' Branch

GitHub Pages가 바라보는 배포 대상입니다. \
`main`에 의해 해당 branch에서 변경점이 발생할 경우, GitHub Pages에 의해 정의된 Git Actions CD 과정이 수행됩니다.

#### Pull Request & Code Review

변경점을 `main` branch에 적용하기 위한 과정입니다. \
PR 작성부터 Merge되기까지 다음과 같은 규칙을 지켜야합니다.

- PR 작성 시, Template에 따라 최대한 자세히 작성합니다.
- PR 제목에는 Gitmoji를 사용하여 PR 유형을 표현합니다. (사용 가능한 Gitmoji는 `PR 유형`에 정의되어 있습니다.)
- PR 제목 예시) 📝 create README.md
- 작성이 완료된 PR은 상대방에게 Code Review를 요청해야 하며, 정성을 담아 Review합니다.
- 상대방의 Review를 통해 Approve된 PR만 merge합니다.
- Merge 방식은 `Squash and merge`를 채택합니다.


## 👀 Contact Us

Bono-Log 관련된 소통을 원하신다면, [GitHub Issues](https://github.com/bono-log/bono-log.github.io/issues/new/choose)를 활용해주세요! 😁 

- 🐛 Bug Report
- 📃 Suggestion
- 🤷‍♀️ Question
- 🪐 Etc.. 

그 외, 문의는 아래 개인 E-mail을 활용해주세요!

- 🦝 Raccoon E-mail : sangyukraccoon@gmail.com
- 🦦 Otter E-mail : 
