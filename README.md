# Portfolio (Legacy Version)

**React + Express.js + MySQL 기반의 개인 포트폴리오**  
지속적인 독학과 리팩토링 과정을 거쳐 제작했습니다.

---

## ⚛️ Frontend
- **React + TypeScript**
- **주요 라이브러리**
  - TanStack Query: 데이터 패칭 및 캐싱
  - React Hook Form: Form 관리
  - React Router DOM: 라우팅
  - Framer Motion: 애니메이션
  - Material UI: UI 컴포넌트

**특징**
- VCA 패턴으로 컴포넌트 설계
- HOC와 Custom Hook을 통한 재사용성 확보 및 권한 제어
- Infinity Scroll, Throttling, Debouncing을 활용한 통신 최적화
- Axios + useQuery로 데이터 패칭 로직 단순화, Stale Time/GC Time 설정으로 불필요한 요청 최소화
- Toastify + TanStack Query를 활용한 전역 비동기 에러 처리
- Skeleton UI + Loading Spinner로 사용자 피드백 제공
- CSS-in-JS로 테마 관리 및 동적 스타일링
- Context API → Redux → Zustand로 전역 상태 관리 학습 및 적용
- JSX → TSX로 리팩토링하며 타입 안정성 확보

---

## 🛠 Backend
- **Express.js**
- **주요 라이브러리**
  - JWT: 인증 및 권한 관리
  - Multer: 파일 업로드 처리

**특징**
- MVC 패턴 적용 (Model, Controller, Service 로직 분리)
- Bcrypt(솔팅 + 해시) 기반 비밀번호 암호화
- DB Connection Pool을 이용한 트랜잭션 관리 및 보일러플레이트 코드 최소화

---

## 🗄 Database
- **MySQL**
- 3정규화 원칙을 준수하여 데이터 중복 최소화 및 구조 최적화

---

## 🎨 Design
- **Figma**를 활용한 레이아웃 및 UI 설계
- 색상 및 구조를 CSS 코드로 추출하여 효율적인 스타일링 적용

---

## ☁️ Deploy
- **AWS**
  - S3 + CloudFront: 정적 파일 및 CDN
  - EC2: 서버 호스팅
  - RDS: MySQL 데이터베이스

---

## 📌 Summary
- Frontend: React + TypeScript, 최신 라이브러리 적극 활용
- Backend: Express.js 기반 MVC 구조, JWT 인증
- Database: MySQL 정규화, 안정적 모델링
- Deploy: AWS 환경 전체 운영 경험
