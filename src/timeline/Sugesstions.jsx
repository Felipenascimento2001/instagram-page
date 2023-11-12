import React from 'react'
import "./Sugesstions.css"
import { Avatar } from '@mui/material'

function Sugesstions() {
  return  <div className="suggestions">
    <div className="suggestions__title">Sugestões para você</div>
    <div className="suggestions__usernames">


      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
            <Avatar><img src="./src/img/felipe.jpg" className='umbu'></img></Avatar>
          </span>
          <div className="username__info">
            <span className="username">Felipe Nacimento</span>
            <span className="relation">Novo no instagram</span>
          </div>
        </div>
          <button className="follow__button">Seguir</button>

      </div>

      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
          <Avatar><img src="./src/img/gustavo.jpg" className='umbu'></img></Avatar>
          </span>
          <div className="username__info">
            <span className="username">Gustavo Melo</span>
            <span className="relation">Novo no instagram</span>
          </div>
        </div>
          <button className="follow__button">Seguir</button>

      </div>

      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
          <Avatar><img src="./src/img/camile.jpg" className='umbu'></img></Avatar>
          </span>
          <div className="username__info">
            <span className="username">Camile Pereira</span>
            <span className="relation">Novo no instagram</span>
          </div>
        </div>
          <button className="follow__button">Seguir</button>

      </div>

      <div className="suggestion__username">
        <div className="username__left">
          <span className="avatar">
          <Avatar><img src="./src/img/sejaumbu.jpg" className='umbu'></img></Avatar>
          </span>
          <div className="username__info">
            <span className="username">SejaUmbu</span>
            <span className="relation">Novo no instagram</span>
          </div>
        </div>
          <button className="follow__button">Seguir</button>

      </div>
    </div>
  </div>
  
}

export default Sugesstions