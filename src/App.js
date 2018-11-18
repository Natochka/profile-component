import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Comments from './components/Comments'
import response from './response.json'
import { pageCommon } from './styles/common-style'

function App() {
  const {
    data: { comments, reactions, person }
  } = response
  return (
    <Profile>
      <Header reactions={reactions} person={person} />
      <Comments items={comments} />
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
