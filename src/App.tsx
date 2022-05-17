import { useState } from 'react'
import './App.css'

import { ThemeProvider } from 'styled-components'
import { theme } from './global/theme'

import logo from './assets/images/iguatemi.png'
import { Button } from './components/Button'

function App() {
  const [username, setUsername] = useState('')

  function ejectData() {
    event?.preventDefault()
    console.log('data here');
  }

  return (
    <ThemeProvider theme={theme}>
      <main>
        <div className="box">
        <header>
              <img src={logo} alt="" className='logo'/>
            </header>
          <div className="loginBox">
            
            <form onSubmit={ejectData}>
              <h1 className='title'>Bem-vindo</h1>
              <p className='description'>Portal do Lojista, para acessar insira seus dados.</p>
              <label htmlFor="">
              Usuário
              </label>
              <input type="text"  id="username" defaultValue="" placeholder='Digite seu usuário' autoComplete='false' />
              <label htmlFor="">
              Senha
              </label>
              <input type="password"  id="password" defaultValue="rafael" placeholder='Digite sua senha' autoComplete='false' />
              <small className='warn'>Esqueceu sua senha? <a href='#'>clique aqui</a></small>
              <Button size="full">rafael</Button>
            </form>
          </div>
          <footer>© Portal do Lojista 2022</footer>
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
