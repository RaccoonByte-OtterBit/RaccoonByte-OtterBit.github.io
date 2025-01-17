---
id: 10
title: '[프론트엔드] SASS(SCSS)를 쓰는 방법'
date: '2023-02-09'
author: 'otter'
categories: 'front-end'
---

# 개요

> SCSS를 잘 활용하려면 역시 문법을 알아야겠지? SCSS 문법에 대해서 알아보자.

---

# SCSS 문법

## 0. 주석

원래 CSS는 /\* 내용 \*/ 하여 주석 처리를 한다.

SCSS 또한 /\* 내용 \*/을 하면 주석 처리한 것도 컴파일 돼서 CSS파일에 그대로 보이는데, //로 주석 처리를 할 경우 컴파일 되지 않는다.

```scss
/* SCSS */

// 이것은 한 줄 주석입니다.

/* 이것은 여러 줄 주석입니다. */

/* Compile to CSS */

/* 이것은 여러 줄 주석입니다. */
```

## **1. Data Types(데이터 유형)**

SCSS는 다양한 데이터 타입을 정의하고 있어 이를 **변수**처럼 활용할 수 있다.

| types    | 유형                                  | 예시                                     |
| -------- | ------------------------------------- | ---------------------------------------- |
| Numbers  | 숫자                                  | 1, .82, 20px, 2em…                       |
| Strings  | 문자                                  | bold, relative, "/images/a.png", "dotum" |
| Colors   | 색상 표현                             | red, blue, #FFFF00, rgba(255,0,0,.5)     |
| Booleans | 논리                                  | true, false                              |
| Nulls    | 아무것도 없음                         | null                                     |
| Lists    | 공백이나 ,로 구분된 값의 목록         | (apple, orange, banana), apple orange    |
| Maps     | Lists와 유사하나 값이 Key: Value 형태 | (apple: a, orange: o, banana: b)         |

```scss
/* SCSS */

$font-size: 14px;
$color: #333;

.element {
  font-size: $font-size;
  color: $color;
}

/* Compile to CSS */

.element {
  font-size: 14px;
  color: #333;
}
```

## **2. Nesting (중첩)**

원래 css는 **.parent → .child, 부모 자식** **순**으로 작성되고, 요소의 스타일은 상속을 통해 적용이 된다.

하지만 중첩(Nesting)을 통해 부모 선택자의 반복을 줄일 수 있고, 복잡한 구조를 개선시킬 수 있다!

```css
/* SCSS */

.container {
  width: 100%;

  .box {
    padding: 10px;

    p {
      color: blue;
    }
  }
}

/* Compile to CSS */

.container {
  width: 100%;
}

.container .box {
  padding: 10px;
}

.container .box p {
  color: blue;
}
```

### **🔎@at-root으로 중첩 벗어나기**

상위 요소의 변수를 사용을 하지만, 상위 요소를 참조하여 중첩하고 싶진 않을 때가 있다.

```scss
/* SCSS */

.section {
  $w: 100px;
  $h: 50px;
  .item {
    width: $w;
    height: $h;
  }
  @at-root .box {
    width: $w;
    height: $h;
  }
}

/* Compile to CSS */

.section {
  $w: 100px;
  $h: 50px;
}

.section .item {
  width: $w;
  height: $h;
}
.box {
  width: $w;
  height: $h;
}
```

### **🔎중첩된 속성**

font-, padding- 등과 같이 동일한 네임 스페이스를 가지는 속성들은 다음과 같이 중첩하여 사용할 수 있다.

```scss
/* SCSS */

.parent {
  font: {
    family: Arial;
    size: 14px;
  }
}

/* Compiled to CSS */

.parent {
  font-family: Arial;
  font-size: 14px;
}
```

## **3. & (상위 선택자 참조)**

중첩(Nesting) 내부에서 **&** 키워드를 사용한다면, **상위(부모) 요소**를 선택해준다!

btn처럼 자기 자신을 재선택할때도 잘 사용할 것 같다.

```css
/* SCSS */

.button {
  position: absolute;

  &.active {
    color: red;
  }
}

.list {
  li {
    &:last-child {
      margin-right: 0;
    }
  }
}

/* Compile to CSS */

.button {
  position: absolute;
}

.button.active {
  color: red;
}

.list li:last-child {
  margin-right: 0;
}
```

치환의 원리이기에 다음과 같이 하나의 요소에 다양한 변화값을 주고 싶을 때도 사용할 수도 있다.

```css
/* SCSS */

.frontmatter {
  &-small {
    font-size: 12px;
  }

  &-medium {
    font-size: 14px;
  }

  &-large {
    font-size: 16px;
  }
}

/* Compile to CSS */

.frontmatter {
  font-size: 12px;
}

.frontmatter-medium {
  font-size: 14px;
}

.frontmatter-large {
  font-size: 16px;
}
```

## **4. Variables (변수)**

반복적으로 사용되거나 관리하고 싶은 값을 이름 앞에 **$**를 붙여 변수로 지정할 수 있다.

```css
/* SCSS */

$color: red;

.parent {
  $color: blue;
  color: $color; /* blue */
}

.child {
  color: $color; /* red */
}

/* Compiled to CSS */

.parent {
  color: blue;
}

.child {
  color: red;
}
```

### **🔎 Variable Scope**

다만 변수는 **선언된 블록 내**에서만 유효 범위를 가진다. 그밖의 블록에서는 전혀 동작하지 않으니 참고!

```css
.box1 {
  $color: #111;
  background: $color;
}

/* Error */
.box2 {
  background: $color;
}
```

### **🔎 !global로 전역 설정하기**

하지만, !global 플래그를 사용하면 변수의 유효 범위를 전역으로 설정할 수 있다.

```scss
$color: #000;

.test1 {
  $color: #111 !global; //000->111
  background: $color;
}
.test2 {
  background: $color; //111
}
.test3 {
  $color: 222;
  background: $color; //222
}
```

### **🔎 #**

**#{ }**를 이용하면 JavaScript의 템플릿 리터럴처럼 코드의 어디든지 변수 값을 넣을 수 있다. react나 vue에서도 해당 문법을 자주 썼던 것 같다.

```css
/* SCSS */

$family: unquote('Droid+Sans');
@import url('http://fonts.googleapis.com/css?family=#{$family}');

/* Compile to CSS */

@import url('http://fonts.googleapis.com/css?family=Droid+Sans');
```

---

## **5. Operations (연산)**

연산자는 레이아웃을 디테일하게 디자인할 때 쓰일 것이다. 특히 나누기나 곱하기가 자주 쓰일듯하다.

| +   | 더하기 |                                      |
| --- | ------ | ------------------------------------ |
| -   | 빼기   |                                      |
| \*  | 곱하기 | 하나 이상의 값이 반드시 숫자(Number) |
| /   | 나누기 | 오른쪽 값이 반드시 숫자(Number)      |
| %   | 나머지 |                                      |

```scss
/* SCSS */
$width: 1000px;
$columns: 4;

.column {
  width: $width / $columns;
}

/* Compiled to CSS */

.column {
  width: 250px;
}
```

### 🔍 나누기 연산 주의사항

css는 속성값의 숫자를 분리할 때(`font:16px / 22px serif`; → `font-size: 16px`, `line-height:22px;`) /를 사용하기 때문에 /가 나누기 연산자로 제대로 동작하지 않을 수 있다.

나누기 연산을 활용하려면?

- 값 또는 값의 일부가 변수에 저장되거나 함수에 의해 반환되는 경우
- 값이 ()로 묶여있는 경우
- 값이 다른 산술 표현식의 일부로 사용되는 경우

---

## **6. Mixins (재활용)**

Mixin은 스타일 시트 전체에서 **재사용할 CSS 스타일**을 정의할 수 있는 좋은 기능이다.

`@mixin`(선언하기)을 통해 스타일을 선언하고 `@include`(포함하기)을 통해 사용한다.

쉽게 말해 함수 같은 기능 같다! 참고로 `@mixin` 안의 변수는 없어도 된다.

```css
/* SCSS */

/* 선언 - @mixin */
@mixin flex($direction, $justify, $align) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: $align;
}

/* 사용 - @include */
.container {
  @include flex(column, center, center);
}

/* Compiled to CSS */
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
```

---

## **7. Functions (함수)**

하지만 찐 함수가 있다.(ㅋㅋ)

비슷하긴 하지만, 사실 Mixin에 당연하게도 return 값이 없었다.

그렇다! 함수와 Mixin의 차이점은 **return 값**에 있다.

### **Mixin과 함수의 차이점**

- **Mixin** : 지정한 스타일(Style)을 반환
- **함수** : 연산된 특정 값을 @return 지시어를 통해 반환

```css
/* SCSS */

@mixin square($size) {
  width: $size;
  height: $size;
}

.square {
  @include square(100px);
}

@function double($number) {
  @return $number * 2;
}

.double {
  font-size: double(12px);
}

/* Compiled to CSS */

.square {
  width: 100px;
  height: 100px;
}

.double {
  font-size: 24px;
}
```

---

## **8. Condition (조건)**

### **if (조건문, 참, 거짓)**

조건문은 다른 언어에서도 많이 보이듯이… 비슷하다. 조건의 참 거짓에 따라 하나의 값을 반환한다.

**JavaScript의 삼항 연산자**와 구조가 비슷해보인다.

`if(조건, 표현식1, 표현식2)` : 조건 값이 true면 표현식1, 조건 값이 false면 표현식2

```css
/* SCSS */
$width: 555px;

div {
  width: if($width > 300px, $width, null);
}

/* Compile to CSS */

div {
  width: 555px;
}
```

### **@if, @else, @else if**

이 또한 조건에 따른 분기 처리가 가능하다!

이것도 마찬가지로 **JavaScript의** **if-else문**과 구조가 비슷해보인다.

```css
/* SCSS */

$color: orange;

div {
  @if $color == strawberry {
    color: #fe2e2e;
  } @else if $color == orange {
    color: #fe9a2e;
  } @else if $color == banana {
    color: #ffff00;
  } @else  {
    color: #2a1b0a;
  }
}

/* Compile to CSS */

div {
  color: #fe9a2e;
}
```

---

## **9. Loop (반복)**

### **@for**

반복문도 다른 언어와 마찬가지로 반복적으로 출력해준다. 여기서는 주로 스타일을 반복적으로 출력해주겠지?

JavaScript의 **for문**과 유사하지만, 특이하게도 마지막 값을 포함/미포함하는 **through, to**가 있다.

이 through와 to에 따라서 **종료 조건**이 달라진다.

- from a **through** b : a부터 b까지 반복 (b 포함)
- from a **to** b : a부터 b 직전까지 반복 (b 포함X)

```css
/* SCSS */

/* 1부터 3까지 반복 (3번 반복) */

@for $i from 1 through 3 {
  .through:nth-child(#{$i}) {
    width: 20px * $i;
  }
}

/* 1부터 3 직전까지 반복 (2번 반복) */

@for $i from 1 to 3 {
  .to:nth-child(#{$i}) {
    width: 20px * $i;
  }
}

/* Compile to CSS */

.through:nth-child(1) {
  width: 20px;
}

.through:nth-child(2) {
  width: 40px;
}

.through:nth-child(3) {
  width: 60px;
}

.to:nth-child(1) {
  width: 20px;
}

.to:nth-child(2) {
  width: 40px;
}
```

### **@each**

List 또는 Map 데이터를 반복할 때 사용한다.

JavaScript의 **for-in / for-of문**과 유사하다! 생각보다 scss 문법도 다양한 것을 알 수 있다.

근데 이렇게까지 문법을 자세하게 사용할까 싶기도 하다.

```css
/* SCSS */

// List
@each $animal in puma, sea-slug, egret, salamander {

  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

// Map
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
  #{$header} {
    font-size: $size;
  }
}

/* Compile to CSS */

.puma-icon {
  background-image: url("/images/puma.png");
}

.sea-slug-icon {
  background-image: url("/images/sea-slug.png");
}

.egret-icon {
  background-image: url("/images/egret.png");
}

.salamander-icon {
  background-image: url("/images/salamander.png");
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

h3 {
  font-size: 1.2em;
}
```

---

## **10. Built-in Functions (내장 함수)**

Sass에선 기본적으로 다양한 [내장 함수](https://sass-lang.com/documentation/modules/)를 제공하는데, 코드가 복잡해질 때 한번씩 찾아보거나 하면 좋을 것 같다.

```scss
/* SCSS */
.element {
  color: lighten(blue, 20%);
  background-color: rgba(0, 0, 0, 0.5);
}

/* Compiled to CSS */
.element {
  color: #66a3ff;
  background-color: rgba(0, 0, 0, 0.5);
}
```

### 색상(RGB / HSL / Opacity)함수

- mix($color, $color2) : 두 개의 색을 섞는다.
- lighten($color, $amount) : 더 밝은 색을 만든다.
- darken($color, $amount) : 더 어두운 색을 만든다.
- saturate($color, $amount) : 색상의 채도를 올린다.
- desaturate($color, $amount) : 색상의 채도를 낮춘다.
- grayscale($color) : 색상을 회색으로 변환한다.
- invert($color) : 색상을 반전시킨다.
- rgba($color, $alpha) : 색상의 투명도를 변경한다. 예) rgba(red, 0.1)
- opacify($color, $amount) / fade-in($color, $amount) : 색상을 더 불투명하게 만든다.
- transparentize($color, $amount) / fade-out($color, $amount) : 색상을 더 투명하게 만든다.

### 문자(String)함수

- unquote($string) : 문자에서 따옴표를 제거한다.
- quote($string) : 문자에서 따옴표를 추가한다.
- str-insert($string, $insert, $index) : 문자의 index번째에 특정 문자를 삽입한다.
- str-index($string, $substring) : 문자에서 특정 문자의 첫 index를 반환한다.
- str-slice($string, $start-at, [$end-at]) : 문자에서 특정 문자(몇 번째 글자부터 몇 번째 글자까지)를 추출합니다.
- to-upper-case($string) : 문자를 대문자로 변환.
- to-lower-case($string) : 문자를 소문자로 변환.

### 숫자(Number)함수

- percentage($number) : 숫자(단위무시)를 백분율로 변환합니다.
- round($number) : 정수로 반올림한다.
- cell($number) : 정수로 올림한다.
- floor($number) : 정수로 내림(버림)한다.
- abs($number) : 숫자의 절대 값을 반환한다.
- min($numbers...) : 숫자 중 최소 값을 찾는다.
- max($numbers...) : 숫자 중 최대 값을 찾는다.
- random() : 0 부터 1사이의 랜덤한 숫자를 반환한다.

---

<img src="https://github.com/bono-log/bono-log.github.io/assets/144116866/42579b92-5250-4d99-b0d5-1546428464bf" width="300"/>

sass 문법에 관해 한번 공부해봤다.

sass는 컴파일을 해야하는 번거로움이 있기 때문에 사용하기가 어렵다는 말도 있는데, css를 아예 등한시하는 것이 아니라 좀 더 쉽게 사용하게끔 해주는 것이니 scss를 배우고, 프로젝트 때 사용한다고 해서 도움이 안되는 것은 아니라고 생각한다.

열심히 프로젝트에 적용해보자!

💡 본 포스팅에 대한 지적, 문의는 언제든지 환영입니다.
