import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Comments from './components/Comments'
import { pageCommon } from './styles/common-style'

function App() {
  return (
    <Profile>
      <Header />
      <Comments />
    </Profile>
  )
}

const Profile = styled.section`
  ${pageCommon};
  height: 100vh;
  padding: 0 17px;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(#002c71 95px, #fff 95px);
`

export default App
