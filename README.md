## 📌 제작 의도
시가 총액 상위 100개 미국 주식 중 RSI(Relative Strengh Index) 보조지표 기준 과매수/과매도 상태인 종목을 알려주는 웹앱입니다.
단, 1분에 5개 종목만 받아올 수 있습니다 (무료 API 사용하였습니다.) 

### 배포 URL: https://stock-alert-app.vercel.app/



|                                                라이트모드                                                 |                                                다크모드                                                 |
| :-----------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| ![234](https://github.com/saul-atomrigs/stock-alert-app/assets/82362278/5b393628-883c-4af9-b7f7-a36f85654a51) | ![123](https://github.com/saul-atomrigs/stock-alert-app/assets/82362278/210fe56c-2f8f-4211-b0ec-86ba82c3da4c) |



## 📌 Authors
- [@saul-atomrigs](https://www.github.com/saul-atomrigs)


## 📌 Tech Stack
- 프론트엔드: React18, Next.js13, Styled-Components
- 주가 데이터 API: polygon.io
- 차트 라이브러리: apexcharts, react-financial-charts
- 코드 컨벤션: eslint, prettier

## 📌 Design System
https://github.com/saul-atomrigs/stock-alert-app/tree/main/styles

![ezgif com-video-to-gif](https://github.com/saul-atomrigs/stock-alert-app/assets/82362278/d66a0e88-369f-4d69-9c24-da4dcbb5a735)

## 📌 Performance (성능, 속도 개선)
- `React Suspense` 및 `lazy loading` 컴포넌트
  ```js
  import { Suspense, lazy } from 'react';

  const RsiPage = lazy(() => import('./RsiPage'));

  <Suspense fallback={<div>Loading...</div>}>
    <RsiPage />
  </Suspense>
  ```

## 📌 Debugging (이슈, 버그)
### July 31, 2023 [타입 에러]

[에러 내용] `styled-component` 사용 시 `prop` 들에 대한 타입 정의 필요 

[해결] `styled.button<타입>` ← 이런 식

[커밋] https://github.com/saul-atomrigs/stock-alert-app/commit/71099cd4deebf14b2a119a907b4a795be847ce86

[출처] https://stackoverflow.com/questions/52404958/using-styled-components-with-typescript-prop-does-not-exist

### July 31, 2023 ****[Next.js] Vercel 배포 시 나타난 'Build optimization failed: found page without a React Component as default export in pages/...' error****

[이유] valid React Component가 아닌 것을 export하는 페이지는 렌더링 될 때 오류를 일으키거나 빌드 성능을 저하시킬 수 있다

[해결]  `pages` 디렉터리와 동일한 레벨에 있는 `data`디렉터리로 옮기니 성공적으로 배포됨

[커밋] https://github.com/saul-atomrigs/stock-alert-app/commit/21c5f007c59a4c2c46244373e454cb94abf0cef3

[출처] [https://velog.io/@bjy100/Next.js-Vercel-배포-시-나타난-Build-optimization-failed-found-page-without-a-React-Component-as-default-export-in-pages](https://velog.io/@bjy100/Next.js-Vercel-%EB%B0%B0%ED%8F%AC-%EC%8B%9C-%EB%82%98%ED%83%80%EB%82%9C-Build-optimization-failed-found-page-without-a-React-Component-as-default-export-in-pages)...-error

### August 3, 2023 **[Next.js] 환경변수가 undefined 일 때**

[에러 내용] 개발환경에서는 잘 작동되었지만 프로덕션 환경에서 env 변수가 `undefined` 반환하는 이슈

GET https://api.polygon.io/v1/indicators/rsi/AAPL?timespan=day&adjusted=true&window=14&series_type=close&order=desc&limit=1&apiKey=undefined 401

[이유] 서버사이드에서는 잘 읽히는 환경변수가 클라이언트 사이드에서는 읽히지 않는것

[해결] 두 가지 해결 방법. 첫째는 환경변수 앞에 `NEXT_PUBLIC_` 을 붙여주는 것. 다른 방법은 `next.config.js` 에 다음 코드스니펫 추가:

```jsx
module.exports = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
```

[커밋] https://github.com/saul-atomrigs/stock-alert-app/commit/b6c2584338d33c00f898a0d4719274b68bb9dca0

[출처] https://stackoverflow.com/a/68189283/19228776

### September 7, 2023 Next.js 에서 Styled-Components 사용 시 스타일이 적용되지 않은 HTML 코드가 먼저 렌더링

[이유] 자바스크립트 코드가 적용이 되지 않은 페이지가 미리 렌더링되기 때문에 `CSS-in-JS`로 스타일링을 하면 **스타일이 적용되지 않은 html 코드가 먼저 렌더링**되는 문제가 발생하게 된다.

[해결] **`html` 파일에 `CSS-in-JS` 형식으로 작성된 스타일 요소들을 주입**시켜서 스타일이 뒤늦게 적용되는 문제를 해결 (https://nextjs.org/docs/pages/building-your-application/routing/custom-document#customizing-renderpage)

[출처] [https://velog.io/@eunnbi/NextJS-styled-components와-함께-사용하기](https://velog.io/@eunnbi/NextJS-styled-components%EC%99%80-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

### October 27, 2023 모바일 웹브라우저에서 주소창 또는 하단 탭바에 엘리먼트가 가려지는 이슈

[원인] `height: 100vh` 는 모바일 웹브라우저의 상단 주소창 또는 하단 탭바가 열고 닫혀있을 때를 유동적으로 고려하지 않음 

[해결] `dvh` (dynamic view height)를 사용해줌

[출처] https://stackoverflow.com/questions/52848856/100vh-height-when-address-bar-is-shown-chrome-mobile

### November 8, 2023 Responsive 한 width 설정을 위해 media query 대신 더 간결한 CSS 함수인 `clamp` 사용

[예시] 

```tsx
// 가로길이 최소값 300px, 평상시 90%, 최대 700px (media query 대신 사용함):
  width: clamp(300px, 90%, 700px);
```
