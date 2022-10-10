import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import alpha from './assets/alpha'

function App() {
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')
  function generator() {
    setPass1(pass => '')
    setPass2(pass => '')
    let len = document.getElementById("text").value
    len = len ? (len > 15 ? 15: len) : 1
    
    for(let i =0; i < len ; i++) {
      let rand = Math.floor(Math.random() * alpha.length);
      setPass1(prev => prev.concat(alpha[rand]))
    }
    for(let i =0; i < len ; i++) {
      let rand = Math.floor(Math.random() * alpha.length);
      setPass2(prev => prev.concat(alpha[rand]))
    }
  }
  return(
      <div className="container">
        <h1><div>Generate a </div> random password</h1>
        <p>Never use an insecure password again.</p>

        <div className='generator'>
          <button onClick={generator}>Generate passwords</button>
          <input type="text" id="text" placeholder='password length'/>
        </div>

        <div className='pass'>
          <p className='pass1'>{pass1}</p>
          <p className='pass2'>{pass2}</p>
        </div>
        
      </div>
  )
}

export default App
