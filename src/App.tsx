import { useState } from 'react'
import './App.css'

import logo from './assets/images/iguatemi.png'

function App() {
  const [username, setUsername] = useState('')

  function ejectData() {
    event?.preventDefault()
    console.log('data here');
  }

  return (
    <main>
    <div className="box">
    <header>
          <img src={logo} alt="" className='logo'/>
        </header>
      <div className="loginBox">
        

        <form action="" onSubmit={ejectData}>
        <h1 className='title'>Bem-vindo</h1>
        <p className='description'>Portal do Lojista, para acessar insira seus dados.</p>
        <label htmlFor="">
        Usuário
        </label>
        <input type="text"  id="username" value="" placeholder='Digite seu usuário' autoComplete='false' />
        <label htmlFor="">
        Senha
        </label>
        <input type="password"  id="password" value="rafael" placeholder='Digite sua senha' autoComplete='false' />
        <small className='warn'>Esqueceu sua senha? <a href='#'>clique aqui</a>
  </small>
        <button>Entrar</button>
        </form>
      </div>
      <footer>© Portal do Lojista 2022</footer>
    </div>
    </main>
  )
}

export default App
