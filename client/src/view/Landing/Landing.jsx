import React from 'react'
import {useHistory} from 'react-router-dom'
import style from './Landing.module.css'
import logo  from '../../imagen/logo.png'
import face from '../../imagen/face.svg'
import ig from '../../imagen/ig.svg'
import git from '../../imagen/git.svg'
import linkeding from '../../imagen/lin.svg'
import gmail from  '../../imagen/gmail.svg'


const Landing = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/home');
  };
  return (
    <div>
      <img src={logo} alt='logo' className={style.logo}/>
      <div className={style.todo}>
        <h1>Bienvenido a mi PI</h1>
        <button onClick={handleClick} className={style.boton}>Ingrese</button>
      </div>
      <section className={style.pie}>
            <a href="https://www.facebook.com/josealberto.orellana.5" target='blank'>
              <img src={face} alt='face' className={style.icono}/>
            </a>
            <a href="https://www.instagram.com/joseaot/" target='blank'>
              <img src={ig} alt='ig' className={style.icono}/>
            </a>
            <a href="https://www.linkedin.com/in/joseorellanaot/" target='blank'>
              <img src={linkeding} alt='linkeding' className={style.icono}/>
            </a>
            <a href="https://github.com/joseaot" target='blank'>
              <img src={git} alt='git' className={style.icono}/>
            </a>
            <a href="mailto:josealbertoaot@gmail.com">
              <img src={gmail} alt='gmail' className={style.icono}/>
            </a>
        </section>
    </div>
  )
}

export default Landing