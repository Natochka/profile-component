import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Comments from './components/Comments'
import response from './response.json'

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

const Profile = styled.section``

export default App
