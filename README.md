## 기획 의도
보조지표 알림을 받을 수 있는 서비스는 유료밖에 없어서 이를 무료로 사용할 수 있는 서비스를 개발하였습니다. 
단, 1분에 5개 종목만 받아올 수 있습니다. 

배포 URL: https://stock-alert-app.vercel.app/

## 주요 개발 포인트 (이슈, 버그, 개선)
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
