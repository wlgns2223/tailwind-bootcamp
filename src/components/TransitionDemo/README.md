# TailwindCSS Transition 강의 가이드

## 📋 강의 개요

이 강의는 TailwindCSS를 활용한 transition과 애니메이션 효과를 학습하는 프론트엔드 부트캠프 수강생들을 위한 강의입니다.

## 🎯 학습 목표

- TailwindCSS의 transition 클래스 이해
- 다양한 hover, focus, active 상태 활용
- Transform 속성을 활용한 애니메이션 구현
- 실전 UI에서 사용할 수 있는 애니메이션 패턴 습득

## 📁 파일 구조

```
src/components/TransitionDemo/
├── TransitionDemo.tsx           # 강의용 데모 컴포넌트
├── TransitionPractice.tsx       # 실습 템플릿
├── TransitionDemoModule.tsx     # 모듈 export
└── TransitionDemo.module.css    # 고급 CSS 애니메이션
```

## 🚀 강의 진행 순서

### 1단계: 이론 설명 (15분)

**TransitionDemo.tsx**를 사용하여 다음 개념들을 설명합니다:

#### 기본 Transition 개념

- `transition-colors`: 색상 변화
- `transition-transform`: 변형 효과
- `transition-opacity`: 투명도 변화
- `transition-all`: 모든 속성 변화

#### Duration (지속시간)

```css
duration-150  /* 150ms */
duration-300  /* 300ms */
duration-500  /* 500ms */
duration-700  /* 700ms */
```

#### Easing (이징 함수)

```css
ease-linear   /* 일정한 속도 */
ease-in       /* 천천히 시작 */
ease-out      /* 천천히 끝 */
ease-in-out   /* 양쪽 모두 천천히 */
```

### 2단계: Transform 효과 (20분)

다음 transform 속성들을 시연하고 설명합니다:

#### Scale (크기 변화)

```css
scale-95      /* 95% 크기 */
scale-100     /* 원래 크기 */
scale-105     /* 105% 크기 */
scale-110     /* 110% 크기 */
scale-125     /* 125% 크기 */
```

#### Rotate (회전)

```css
rotate-0      /* 회전 없음 */
rotate-12     /* 12도 회전 */
rotate-45     /* 45도 회전 */
rotate-90     /* 90도 회전 */
rotate-180    /* 180도 회전 */
```

#### Translate (이동)

```css
translate-x-0    /* x축 이동 없음 */
translate-x-1    /* x축으로 0.25rem 이동 */
translate-y-1    /* y축으로 0.25rem 이동 */
-translate-y-2   /* y축으로 -0.5rem 이동 */
```

### 3단계: 실전 UI 패턴 (15분)

실제 웹사이트에서 자주 사용되는 패턴들을 보여줍니다:

#### 카드 Hover 효과

```css
transition-all duration-300 hover:shadow-lg hover:-translate-y-2
```

#### 버튼 상호작용

```css
transition-all duration-200 hover:scale-105 active:scale-95
```

#### 아이콘 애니메이션

```css
transition-transform duration-300 hover:rotate-180
```

## 🛠️ 실습 가이드

### 실습 1: 기본 Hover 효과 (10분)

**목표**: 버튼에 hover시 배경색이 부드럽게 변하도록 만들기

**정답**:

```tsx
<button className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold transition-colors duration-300 hover:bg-blue-600">
  Hover Me!
</button>
```

**가르칠 포인트**:

- `transition-colors`의 역할
- `duration-300`의 의미
- hover 상태 활용법

### 실습 2: Transform 효과 (15분)

**목표**: 카드에 hover시 살짝 위로 올라가고 그림자가 커지도록 만들기

**정답**:

```tsx
<div className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
  {/* 내용 */}
</div>
```

**가르칠 포인트**:

- `transition-all` vs 개별 transition
- `-translate-y-2`의 의미
- 그림자 효과 조합

### 실습 3: 클릭 애니메이션 (15분)

**목표**: 버튼 클릭시 상태에 따라 크기가 변하도록 만들기

**정답**:

```tsx
className={`px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold
  transition-transform duration-200
  ${isClicked ? 'scale-110' : 'scale-100'}
`}
```

**가르칠 포인트**:

- React state와 CSS 클래스 조합
- 조건부 클래스 적용법
- 템플릿 리터럴 활용

### 실습 4: 복합 애니메이션 (20분)

**목표**: 배경색, 회전, 크기, 그림자가 동시에 변하는 애니메이션

**정답**:

```tsx
className={`w-24 h-24 rounded-lg flex items-center justify-center text-2xl
  transition-all duration-500 ease-in-out
  ${currentStep === 1
    ? 'bg-red-500 rotate-0 scale-100 shadow-md'
    : 'bg-blue-500 rotate-180 scale-125 shadow-xl'
  }
`}
```

**가르칠 포인트**:

- 여러 효과 동시 적용
- easing 함수의 차이점
- 복잡한 상태 관리

## 💡 강의 팁

### 1. 성능 최적화 가이드

- `transform`과 `opacity` 속성 우선 사용 (GPU 가속)
- `will-change-transform` 활용법
- 불필요한 `transition-all` 지양

### 2. 접근성 고려사항

```css
@media (prefers-reduced-motion: reduce) {
  .no-motion {
    transition: none;
  }
}
```

- `motion-reduce:transition-none` 클래스 활용
- 애니메이션에 민감한 사용자 배려

### 3. 실전 활용 예시

- 로딩 상태 표시
- 사용자 피드백 제공
- 주의 집중 유도
- 브랜드 경험 향상

## 🔧 문제 해결 가이드

### 자주 발생하는 오류들:

#### 1. 애니메이션이 적용되지 않는 경우

- 클래스명 오타 확인
- duration 클래스 누락 확인
- Tailwind CSS 설정 확인

#### 2. 성능 이슈

- `transition-all` 남용 방지
- 복잡한 애니메이션은 `transform` 속성 활용
- 60fps 유지를 위한 최적화

#### 3. 모바일 호환성

- Touch 이벤트 고려
- viewport 크기에 따른 조정
- 터치 피드백 추가

## 📚 추가 학습 자료

### TailwindCSS 공식 문서

- [Transition Property](https://tailwindcss.com/docs/transition-property)
- [Transition Duration](https://tailwindcss.com/docs/transition-duration)
- [Transition Timing Function](https://tailwindcss.com/docs/transition-timing-function)

### 고급 주제

- CSS Animation vs Transition
- JavaScript 기반 애니메이션 라이브러리
- Web Animations API
- Framer Motion과의 비교

## 🎉 마무리 활동

### 포트폴리오 프로젝트 제안

수강생들에게 다음과 같은 미니 프로젝트를 제안할 수 있습니다:

1. **인터랙티브 카드 갤러리**

   - 다양한 hover 효과가 적용된 카드들
   - 필터링 애니메이션

2. **애니메이션 버튼 라이브러리**

   - 다양한 스타일의 버튼 컴포넌트
   - Storybook으로 문서화

3. **로딩 애니메이션 컬렉션**
   - 다양한 로딩 스피너
   - 프로그레스 바 애니메이션

이 가이드를 참고하여 효과적인 TailwindCSS transition 강의를 진행하시기 바랍니다! 🚀
