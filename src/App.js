import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Comments from './components/Comments'
import { pageCommon } from './styles/common-style'

function App() {
  return (
    <Profile>
      <Content>
        <Header />
        <Comments />
      </Content>
    </Profile>
  )
}

const Profile = styled.section`
  ${pageCommon};
  height: 100vh;
  padding: 35px 17px 17px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#002c71 95px, #fff 95px);
  box-sizing: border-box;
`
const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export default App
