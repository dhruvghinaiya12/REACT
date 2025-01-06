import React from 'react'
import Form from './components/Form'
import Timer from './components/Timer'
import Fakeapi from './components/Fakeapi'

const App = () => {
  return (
    <div>

      <Form/>
      {/* <Timer duration={30} /> */}
     <Timer duration={60} />
     <Fakeapi/>
    
    </div>
  )
}

export default App
