---
id: 9
title: '[프론트엔드] CSS를 편하게, SASS(SCSS)'
date: '2023-02-09'
author: 'otter'
categories: 'front-end'
---

## 개요

<figure>
    <img src="../assets/bear_not_working.gif" width="300"/>
    <figcaption>css 지맘대로 작동할 때</figcaption>
</figure>

CSS를 계속해서 쓰다보면 정신이 없다.
수정하려고 하니까 밑에 작성한 코드 때문에 우선순위가 밀려 내 생각대로 적용도 잘 안되고,
id나 class가 점점 늘어남에 따라 css 파일도 엄청 길어지고… 머리가 아프다!

프론트엔드는 또 CSS를 잘 컨트롤할 수 있어야 수정할 때 빠르고 정확하게 할 수 있지 않겠는가!
그래서, 이번 시간에는 이 머리 아픈 CSS의 단점을 메워줄 수 있는 SASS, SCSS에 대해 알아보려고 한다.

---

## CSS란?

### CSS

**Cascading Style Sheets - 종속형 시트**

**Cascading**은 폭포, **위에서 아래로 쏟아지는**이라는 뜻을 가진 단어이며, 이 Cascading은 CSS에서 가장 중요한 스타일 적용 규칙이기도 하다. 자세한 내용은 위 링크 참고하자.

- 특징
  - 작업, 코드가 많아질수록 유지보수 측면에서 굉장히 불편하다.
  - 선택자를 만들 때 매번 불필요한 부모 요소 선택자를 적어야 한다.
  - function같은 게 없어서, 자동화하기 어렵고 수동으로 일일이 변경해줘야 한다.

## SASS, SCSS란?

저 단점들을 보완하기 위해 ~~혜성처럼 등장한~~ SASS, SCSS를 한번 알아보자.

### CSS 전처리기

SASS, SCSS가 무엇인지 들어가기에 앞서 먼저 **CSS 전처리기**가 무엇인지 알아보려고 한다.
전처리기가 가진 특별한 syntax로 CSS를 생성하도록 하는 프로그램이다.

- 특징

  - CSS 문서의 양을 효율적으로 처리해주고, 관리해준다.
  - CSS를 편리하게 사용할 수 있도록 하는 기능들이 있는 확장판 스크립트 **언어**
  - 웹서버는 CSS만 인식하는 바보라 각 CSS 전처리기에 맞는 Compiler를 사용해줘야 알아먹는다. 즉, 직접 동작시키거나 **CSS 대체 언어는 아니라는 뜻.**

- 장점

  - 코드의 재활용성, 가독성을 높임 (개발의 효율을 올리기 위함)
  - CSS를 구조화하여 표현할 수 있음
  - Selector의 중첩을 통해 반복되는 부모 Selector 사용을 줄일 수 있음
  - 변수를 사용하여 CSS 속성값을 통일하여 관리 가능
  - 조건문, 반복문으로 동적 CSS 관리 가능

- 단점

  - 전처리기를 위한 도구 필요
  - Compile 시간 소요

- 예

<figure>
    <img src="https://github.com/bono-log/bono-log.github.io/assets/144116866/8ce83aa8-2c52-45bf-889a-08012a6af38f" width="500"/>
    <figcaption>2024.02.09. 기준</figcaption>
</figure>

[less vs sass vs stylus | npm trends](https://npmtrends.com/less-vs-sass-vs-stylus)

- SASS(SCSS)

  [Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)

  - 가장 먼저 나왔고, 다른 전처리기에 비해 상대적으로 다양한 기능이 제공된다고 한다.
  - 설치한 이용자도 가장 많은 것 같다. 업데이트도 잘 되고 있고!

- Less

  [Getting started | Less.js](https://lesscss.org/#)

  - 원래는 컴파일 속도가 빨랐다고 하는데, SASS도 업데이트 이후 큰 차이가 없다고 한다.

- Stylus

  [Stylus](https://stylus-lang.com/)

  - 전처리기 중 가장 나중에 나왔다고 한다. 기능도 많다고 하긴 하는데, 널리 사용되고 있는 SASS를 쓸 계획이다.
  - 홈페이지가 사실 제일 깔쌈하긴 하다.

### SASS vs SCSS

- SASS

  ```sass
  .content
    border: 1px solid #3bbfce
    margin: 8px
    padding: 4px
  ```

  - **Syntactically Awesome Style Sheets - 문법적으로 어썸!한 스타일시트**
  - 들여쓰기 + 줄바꿈 형식(Python 구문 스타일)

- SCSS

  ```scss
  .content {
    border: 1px solid #3bbfce;
    margin: 8px;
    padding: 4px;
  }
  ```

  - **Sassy CSS - 문법적으로 짱 멋진!, sass스러운(Sassy) CSS**
  - SASS의 3버전에서 등장한 언어
    - 좀 더 범용성이 넓고, CSS와 호환성이 좋음
    - SASS의 모든 기능을 지원하는 `Superset`
      - Superset : 표준 언어에 기능 추가
      - Subset : 표준 언어에 기능 축소
  - 중괄호 `{}` + 세미콜론 `;` 형식(JavaScript 구문 스타일) 📌sass와 가장 다른 차이점!
    - 중첩을 중괄호 `{}`로 표현
    - 세미콜론 `;`으로 속성 구분
  - 사용자 수도 많음

### SASS 써보기

- 컴파일러 설치

  ![](https://github.com/bono-log/bono-log.github.io/assets/144116866/c5071467-c188-4914-93f1-d5352481efbd)

  앞에 설명한 것처럼 CSS 언어가 아니기 때문에 웹 브라우저가 CSS로 읽을 수 있게 바꿔주어야한다. 고것이 바로 컴파일!

- [SassMeister](https://www.sassmeister.com/)
  - 이 사이트에서도 온라인으로 미리 테스트해볼 수는 있지만, VSCode에서 작업하는 경우가 많을 거니까 아래의 절차로 한번 설치를 해보자.
- 구현 방식

[ruby-sass](https://sass-lang.com/ruby-sass/) : 원래 ruby 언어로 만들어졌는데, 2019년부터 지원이 중단되었다고 한다. ~~사요나라~~

[lib-sass](https://sass-lang.com/libsass/) : ruby로 구현된 구버전에서 C/C++로 구현되어 업데이트 된 2세대 ~~포켓몬~~ sass. 하지만, 이 친구도 사라질 예정이다. 신규 기능은 이용할 수 없다고 한다. [~~사요나라~~](https://sass-lang.com/blog/libsass-is-deprecated/)

Dart-sass : 가장 따끈따끈한 친구다. 신규 기능도 담고 있기 때문에 나는 이걸로 진행할 거다! **(2024.02.09.기준)**

[Node.js](https://nodejs.org/en)

1. node.js를 설치해준다.
2. `$ npm install sass -g`: sass를 글로벌하게 설치해주세요! (어느 폴더도 작동되게 해주세요!)
3. `$ npm show sass version` : sass의 현재 버전을 보여주세요!
4. style.scss을 만든 후 아래 코드를 복붙한다. 아니면 자기가 원하는 color 값을 입력해보자!

   ```scss
   /* style.scss */
   $color: green;

   h1 {
     color: $color;
   }
   p {
     color: $color;
   }
   ```

5. `sass style.scss style.css` : scss파일을 css파일로 컴파일해주세요!

   ```css
   /* style.css */
   h1 {
     background-color: black;
     color: black;
   }

   p {
     color: black;
   ```

### SASS watch

근데, 앞의 명령어로 수동으로 sass를 컴파일해달라고 하자니 너무 번거롭다. 자동으로 컴파일해줄 순 없을까?

`sass --watch style.scss style.css` : `--watch` or `-w`라는 플래그를 붙여 자동으로 컴파일하게 할 수 있다.

[Sass: Dart Sass Command-Line Interface](https://sass-lang.com/documentation/cli/dart-sass/)

- [플래그](https://sass-lang.com/documentation/cli/dart-sass/)는 해당 문서 참고!

`sass --watch scss:css` : 폴더 경로로도 가능하다!

### VS Code Extension

[live-sass](https://marketplace.visualstudio.com/items?itemName=glenn2223.live-sass)

- 설치하면 우측 하단에 Watch Sass라는 항목이 나타난다.
  - 이 친구가 자동으로 감시를 해준다!

![](https://github.com/bono-log/bono-log.github.io/assets/144116866/44f663f1-a479-4131-90ad-d12099135167)

- `.map` 파일은 뭔데?

  scss 파일을 css로 컴파일을 하면, `.css.map` 파일이 같이 생긴다. 단어 그대로 scss, css를 mapping 시켜주는 파일이다.

  ![](https://github.com/bono-log/bono-log.github.io/assets/144116866/62045e18-63cd-4074-8db8-27ca27c2069d)

  개발자 도구에서 css 수정을 할 건데, 웹 브라우저는 css밖에 모르는 바보라 css를 보고, scss를 찾아가면서 수정을 해줘야한다. 하지만, map이 각 css의 짝인 scss를 매칭시켜줘 고마운 주선자 친구라고 할 수 있다.

  그래도 개발자용 파일이라 배포 시에는 필요가 없기에 자동으로 생기지 않게 하는 게 좋을 것 같다.

- 다양한 VS Code Extension

[scss-lint](https://marketplace.visualstudio.com/items?itemName=adamwalzer.scss-lint)

[vscode-scss-formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)

[scss-snippet](https://marketplace.visualstudio.com/items?itemName=Miladfathy.scss-snippet)

[scss-scope-helper](https://marketplace.visualstudio.com/items?itemName=ffpetrovic.scss-scope-helper)

[Wscats](https://marketplace.visualstudio.com/items?itemName=Wscats.eno)

그 외 다양한 extension이 있으니, 한번 설치하면서 확인해보도록 하자.

scss파일을 저장만 하면 바로 css로 컴파일해주는 친구도 있다.

일단 나는 맨 위의 live sass compiler로 해볼까 싶다.

### SCSS / CSS 폴더 분리

고마운 주선자 친구인 `map`도 없애줄 겸 css, scss 폴더를 분리하여 프로젝트를 구성해보자!

setting.json을 열고, 다음과 같이 코드를 추가해준다.

```json
// setting.json
{
    "liveSassCompile.settings.generateMap": false, // .map 자동 생성을 끄고 싶을 때
    "liveSassCompile.settings.formats": [
    {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": 경로
    }
    ],
    "liveServer.settings.donotShowInfoMsg": true
}
```

### React에서는?

1. 프로젝트 폴더에서 `$ npm install sass` 로 Dart Sass를 설치해준다.
2. `package-lock.json`의 `‘dependencies’`에 잘 설치됐는지 확인한다.

   ![Untitled](https://github.com/bono-log/bono-log.github.io/assets/144116866/b8ba9531-beec-4914-af91-d4fb75b6b50b)

3. App.css 이름을 App.scss로 바꿔준다.

   ![Untitled](https://github.com/bono-log/bono-log.github.io/assets/144116866/4e54bfd0-ee7e-467a-890e-e9172954e3fe)

4. App.js or App.tsx에서 import css 확장자명도 scss로 변경해준다!

   ![Untitled](https://github.com/bono-log/bono-log.github.io/assets/144116866/dd9d29e6-9cfc-4384-b97b-570de96e3ee0)

5. 잘했다!

---

scss는 현업에서 자주 쓰이는 지는 확인하지 못했다.

문법 관련해서는 다음 포스팅에 이어서 작성해볼 예정이다.

![](../assets/cat_coding.gif)

파이팅해보자!
