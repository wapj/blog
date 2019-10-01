---
title: "MIL 10월에 공부한 것들"
date: "2019-10-01"
---

## react 

- `render` 함수만 필요한 경우는 함수형 컴포넌트로 작성하는게 좋다.


바벨을 사용해서 리액트 javascript 컴파일하기 
```
npx babel --watch src --out-dir . --presets @babel/preset-react
```

### 클래스형 컴포넌트와 함수형 컴포넌트
- 클래스 컴포넌트는 함수형 컴포넌트가 할 수 있는 모든 일을 할 수 있다.
- 새로운 버전(16.8 이후)에서는 함수형 컴포넌트가 좋다. 

### webpack

- 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 툴이다. 


#### 웹팩 실행하기
```
$ npx webpack
```


### create-react-app 

create-react-app 사용해서 프로젝트 만들기 
```
$ npx create-react-app {project_name}
```

시작하기
```
cd {project_name}
npm start
```

