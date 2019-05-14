import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout menu="home">
    <h1>fake it till you make it</h1>
    <p>이번에는 진짜로 만든다~</p>
    <p>
      typography.js 의 테마는 github 테마를 사용했음. 한글을 잘 사용할 수 있는
      테마가 있으면 좋겠는데, 잘 모르겠다.
      <br />
      2019.05.14 <br />
      현재 활성화 된 메뉴에 대한 로직을 중복을 쓰지 않고 빼내서 기분이 좋다.
      data가 뭐냐? <br />
      React Component 밖에서 살 고 있는 애들은 모두 데이터다. (근엄, 진지) 관계
      없긴한데, emotion 플러그인 굉장히 강력하고 좋네
    </p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)
