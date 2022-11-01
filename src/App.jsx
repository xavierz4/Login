import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Form } from './components/Form';

function App() {
 
  const userIsRegisterd = false;

  return (
    
    <div className="flex-container">.

       <div className='formulario'>
          <Form
            isRegistered={userIsRegisterd}
          />
       </div>
      

      
    </div>
  )
}

export default App
