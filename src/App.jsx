import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Footer} from './components/Footer'
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
       <Footer />
      

      
    </div>
  )
}

export default App
