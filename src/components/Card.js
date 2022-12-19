import React from 'react'

function Card(props) {
  return (
    <div className='catalog__item item'>
      <div className='item__subject'>
        <img className='item__img' src={props.picture}></img>
        <p className='item__name'>{props.title}</p>
      </div>
      <div className='item__description'>
        <p className='item__description__text'>{props.description}</p>
      </div>
      <div className='item__price'> 
        <p item__price__text>{props.price}</p>
      </div>
      
      <a className='item__button btn' onClick={props.sortItems}>
        Добавлено
      </a>
    </div>
  )
}

export default Card