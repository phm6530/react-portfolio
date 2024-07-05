# portfolio

Front

- React + typeScript

lib
tanstack-Query , react-hook-form , react-route-dom , framer , Mui

Backend

- express.js

lib
Jwt, multer

Deploy
S3 + Cloud Front, ES2 , RDS

React + express.js + Mysql 기반의 개인포트폴리오 입니다.
지속적으로 독학하며 리펙토링을 지속적으로 반영하여 제작하였습니다.

# Figma"

Figma를 사용하여 레이아웃을 디자인하고, CSS 코드를 통해 색상과 구조를 쉽게 추출하여 사용했습니다.

# React.js"

VCA 패턴을 이용하여 컴포넌트를 설계했습니다.
Higher-Order Components (HOC)와 Custom Hooks를 사용하여 재사용성을 높이고, 권한 제어를 구현했습니다.
Infinity Scroll, Throttling, Debouncing을 활용하여 통신 최적화와 페이징을 접목시켜 UI 렌더링을 최소화했습니다.
useQuery와 Axios를 사용하여 데이터 패칭 로직을 간소화하고, stale time과 gc time을 통해 불필요한 데이터 요청을 최소화했습니다.
useHookForm을 이용하여 FormData와 Post 데이터를 처리했습니다.
Toast-netify + tanstack Query를 이용한 전역 비동기 통신 에러처리,
스켈레톤 UI + Loading Spiner를 이용한 사용자에게 현재 상태에 대한 피드백을 유도하였습니다.
CSS in JS를 통해 테마를 관리하며, 동적 Css를 컨트롤 하였으며,
Context API에서 Redux를 거쳐 Zustand로 전환하면서 전역 데이터 처리 방식을 학습했습니다.
TypeScript를 도입하여 React 코드베이스를 JSX에서 TSX로 리팩토링하며 타입 시스템을 익혔습니다.

# Express.js"

MVC 패턴을 적용하여 Model, Controller, Service 로직을 분리했습니다.
솔팅 및 해시 키를 사용하여 비밀번호를 암호화/복호화했습니다.
데이터베이스 풀을 이용해 트랜잭션 생성과 반환 로직을 추상화하여 보일러플레이트 코드를 최소화했습니다.

# MySQL"

3정규화 원칙을 준수하여 데이터 중복을 최소화하고, 데이터베이스 구조화를 최적화했습니다.
