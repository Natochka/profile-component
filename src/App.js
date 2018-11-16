import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Comments from './components/Comments'

function App() {
  return (
    <Profile>
      <Header />
      <Comments />
    </Profile>
  )
}

const Profile = styled.section``

export default App
