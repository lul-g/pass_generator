import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import alpha from './assets/alpha'

function App() {
  const [letter, setLetter] = useState('')
  const [pass1, setPass1] = useState('')
  const [pass2, setPass2] = useState('')
  const timer = ms => new Promise(res => setTimeout(res, ms))

  // function set1() {
    
  // }
  async function decode(pass, len) {
    for(let i =0; i < len; i++) {
        let rand = Math.floor(Math.random() * alpha.length);
        await timer(50);
        setLetter(prev => pass + alpha[rand] + alpha[rand + 1] + alpha[rand + 2])
    }    
    setLetter(prev => '')
}

  function generator() {
    setPass1(prev => '')
    setPass2(prev => '')
    let len = document.getElementById("text").value
    len = len ? (len > 10 ? 10: len) : 10

    decode(letter, len)    
    
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
          <p className='pass1'>{pass1}<span>{letter}</span></p>
          <p className='pass2'>{pass2}</p>
        </div>
        
      </div>
  )
}

export default App
