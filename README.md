# 🎨 TailwindCSS 실습 강의 프로젝트

![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-15.3.3-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

> **프론트엔드 부트캠프를 위한 TailwindCSS 완전 정복 실습 플랫폼**

## 📖 프로젝트 소개

이 프로젝트는 **프론트엔드 부트캠프 수강생**들이 TailwindCSS를 체계적으로 학습할 수 있도록 설계된 **단계별 실습 플랫폼**입니다. CSS Module에서 TailwindCSS로의 완벽한 전환을 목표로 합니다.

### ✨ 핵심 특징

- 🎯 **단계별 학습**: 기초부터 고급까지 체계적인 커리큘럼
- 👨‍💻 **실시간 데모**: 강사가 실시간으로 설명할 수 있는 데모 페이지
- 🛠️ **실습 중심**: 수강생이 직접 코딩하며 배우는 핸즈온 방식
- 📊 **목표 결과 제시**: 각 실습마다 완성된 정답을 먼저 보여주어 학습 목표 명확화
- 📱 **반응형 설계**: 모든 기기에서 최적화된 학습 경험
- ⭐ **난이도 표시**: 별표(⭐~⭐⭐⭐⭐⭐)로 난이도 시각화

## 🚀 빠른 시작

### 필수 요구사항

- **Node.js** 18+
- **npm** 또는 **yarn**

### 설치 및 실행

```bash
# 프로젝트 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 http://localhost:3000 접속
```

## 📚 강의 커리큘럼

### 🎨 핵심 모듈

| 모듈  | 주제              | 데모 페이지        | 실습 페이지            |
| ----- | ----------------- | ------------------ | ---------------------- |
| **1** | Flexbox Layout    | `/flex-demo`       | `/flex-practice`       |
| **2** | Grid Layout       | `/grid-demo`       | `/grid-practice`       |
| **3** | Text & Styling    | `/style-demo`      | `/style-practice`      |
| **4** | Responsive Design | `/responsive-demo` | `/responsive-practice` |
| **5** | Visual Effects    | `/effects-demo`    | `/effects-practice`    |
| **6** | Gradients         | `/gradient-demo`   | `/gradient-practice`   |
| **7** | Transitions       | `/transition-demo` | `/transition-practice` |

### 📋 각 모듈별 학습 내용

#### **Flex 실습** (`/flex-practice`)

- **기본 Flex 레이아웃** (⭐): `display: flex`, `flex-direction`
- **중앙 정렬** (⭐⭐): `justify-center`, `items-center`
- **플렉스 랩** (⭐⭐⭐): `flex-wrap`, 반응형 래핑
- **공간 분배** (⭐⭐⭐⭐): `justify-between`, `space-x`
- **고급 플렉스** (⭐⭐⭐⭐⭐): `flex-grow`, `flex-shrink`

#### **Grid 실습** (`/grid-practice`)

- **기본 그리드** (⭐): `grid`, `grid-cols`
- **그리드 갭** (⭐⭐): `gap`, 간격 조정
- **반응형 그리드** (⭐⭐⭐): 브레이크포인트별 컬럼
- **그리드 영역** (⭐⭐⭐⭐): `col-span`, `row-span`
- **복합 레이아웃** (⭐⭐⭐⭐⭐): 고급 그리드 기법

#### **Style 실습** (`/style-practice`)

- **기본 스타일링** (⭐): 색상, 폰트, 크기
- **텍스트 스타일** (⭐⭐): `font-weight`, `text-align`
- **여백과 패딩** (⭐⭐⭐): `margin`, `padding`
- **테두리 효과** (⭐⭐⭐⭐): `border`, `rounded`
- **고급 스타일링** (⭐⭐⭐⭐⭐): 복합 스타일 조합

#### **Responsive 실습** (`/responsive-practice`)

- **기본 반응형** (⭐): `sm:`, `md:`, `lg:`
- **반응형 그리드** (⭐⭐): 화면별 컬럼 조정
- **반응형 패딩** (⭐⭐⭐): 화면별 여백 조정
- **고급 반응형** (⭐⭐⭐⭐): 복합 반응형 레이아웃

#### **Effects 실습** (`/effects-practice`)

- **그림자 효과** (⭐): `shadow`, `drop-shadow`
- **호버 효과** (⭐⭐): `hover:` 상태 변화
- **변형 효과** (⭐⭐⭐): `transform`, `scale`, `rotate`
- **투명도 효과** (⭐⭐⭐⭐): `opacity` 조절
- **고급 효과** (⭐⭐⭐⭐⭐): 복합 시각적 효과

#### **Gradient 실습** (`/gradient-practice`)

- **기본 그라데이션** (⭐): `bg-gradient-to-r`
- **선형 그라데이션** (⭐⭐): 다양한 방향과 색상
- **그라데이션 카드** (⭐⭐⭐): 실용적 적용
- **고급 그라데이션** (⭐⭐⭐⭐): 텍스트 그라데이션, 복합 효과

#### **Transition 실습** (`/transition-practice`)

- **기본 전환** (⭐): `transition`, 기본 애니메이션
- **지속시간 조절** (⭐⭐): `duration` 클래스
- **전환 효과 조합** (⭐⭐⭐): 여러 속성 동시 전환
- **고급 전환** (⭐⭐⭐⭐): 복합 애니메이션, 순차 효과

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 메인 페이지
│   ├── flex-demo/         # Flex 데모
│   ├── flex-practice/     # Flex 실습
│   ├── grid-demo/         # Grid 데모
│   ├── grid-practice/     # Grid 실습
│   ├── style-demo/        # Style 데모
│   ├── style-practice/    # Style 실습
│   ├── responsive-demo/   # Responsive 데모
│   ├── responsive-practice/ # Responsive 실습
│   ├── effects-demo/      # Effects 데모
│   ├── effects-practice/  # Effects 실습
│   ├── gradient-demo/     # Gradient 데모
│   ├── gradient-practice/ # Gradient 실습
│   ├── transition-demo/   # Transition 데모
│   └── transition-practice/ # Transition 실습
├── components/            # 재사용 컴포넌트
│   ├── Navigation.tsx     # 네비게이션 바
│   └── Practice/          # 실습 컴포넌트들
│       ├── Flex/          # Flex 실습 컴포넌트
│       │   ├── FlexBasicPractice.tsx
│       │   └── Answer/    # 정답 컴포넌트
│       ├── Grid/          # Grid 실습 컴포넌트
│       ├── Style/         # Style 실습 컴포넌트
│       ├── Responsive/    # Responsive 실습 컴포넌트
│       ├── Effects/       # Effects 실습 컴포넌트
│       ├── Gradient/      # Gradient 실습 컴포넌트
│       └── Transition/    # Transition 실습 컴포넌트
└── styles/               # 글로벌 스타일
```

## 🎓 수강생 가이드

### 📖 학습 방법

1. **데모 페이지 먼저 확인**: 각 주제의 `-demo` 페이지에서 강사의 설명을 듣습니다
2. **실습 페이지로 이동**: `-practice` 페이지에서 직접 코딩을 시작합니다
3. **목표 결과 확인**: 각 단계별로 완성된 정답을 먼저 확인합니다
4. **단계별 진행**: ⭐ 난이도부터 시작해서 ⭐⭐⭐⭐⭐까지 순차적으로 진행
5. **반복 학습**: 이해되지 않는 부분은 반복해서 연습합니다

### 💡 실습 팁

- **주석 확인**: 각 실습 영역의 주석을 꼼꼼히 읽어보세요
- **목표 결과 비교**: 내 코드와 정답을 비교하며 차이점을 찾아보세요
- **브라우저 개발자 도구 활용**: 실시간으로 스타일 변화를 확인하세요
- **반응형 테스트**: 화면 크기를 변경하며 반응형이 잘 작동하는지 확인하세요

### 🔥 실습 예시

각 실습 페이지에서는 다음과 같은 형태로 학습이 진행됩니다:

```tsx
// TODO: 여기에 TailwindCSS 클래스를 추가하세요
<div className="">
  <div className="">Item 1</div>
  <div className="">Item 2</div>
  <div className="">Item 3</div>
</div>

// 힌트: flex, space-x-4, flex-1, p-4, bg-gray-100, rounded
// 정답은 각 섹션의 "목표 결과" 영역에서 확인할 수 있습니다
```

## 🎯 학습 목표

### 🏁 완주 후 달성 가능한 역량

- ✅ CSS Module을 TailwindCSS로 완벽 번역
- ✅ 반응형 디자인을 TailwindCSS로 구현
- ✅ 복잡한 레이아웃을 TailwindCSS Grid/Flexbox로 구성
- ✅ 인터랙티브 UI 요소를 TailwindCSS로 스타일링
- ✅ 모던 웹 개발 워크플로우 습득
- ✅ 컴포넌트 기반 스타일링 마스터

## 🚀 학습 전 준비사항

### 🎓 필요한 사전 지식

- **HTML/CSS 기초**: 기본적인 HTML 태그와 CSS 속성 이해
- **JavaScript 기초**: 변수, 함수, 조건문 등 기본 문법
- **React 기초**: 컴포넌트, JSX, props 개념 이해
- **CSS Module 경험**: CSS Module 사용 경험 (선택사항)

### 🛠️ 개발 환경 설정

```bash
# Node.js (v18 이상)
node --version

# npm (v9 이상)
npm --version

# 코드 에디터 (VS Code 권장)
# - TailwindCSS IntelliSense 확장 설치
# - ES7+ React/Redux/React-Native snippets 확장 설치
```

### 📚 추가 학습 자료

- [TailwindCSS 공식 문서](https://tailwindcss.com/docs)
- [Flexbox 가이드](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid 가이드](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Next.js 공식 문서](https://nextjs.org/docs)

## 🤝 기여하기

이 프로젝트는 교육 목적으로 제작되었으며, 개선 사항이나 버그 리포트를 환영합니다!

### 🐛 버그 리포트

- 문제 상황과 재현 단계를 상세히 기술해 주세요
- 브라우저 정보와 스크린샷 첨부를 권장합니다

### 💡 기능 제안

- 새로운 실습 모듈이나 개선 아이디어를 제안해 주세요
- 사용자 경험 개선을 위한 피드백을 부탁드립니다

---

**🎯 목표: 이 과정을 완주하면 TailwindCSS를 능숙하게 다룰 수 있게 됩니다!**

_이 프로젝트가 여러분의 프론트엔드 개발 여정에 도움이 되기를 바랍니다. 열심히 실습하고, 멋진 웹사이트를 만들어보세요! 🚀_
