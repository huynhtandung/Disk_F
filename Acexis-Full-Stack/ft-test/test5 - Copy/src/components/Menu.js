import React from 'react'

export const Menu = () => {
  return (
    <div>
      <h3>Menu</h3>
      <ul id='menu'>
        <li>/dashboard</li>
        <li>/setting</li>
        <li><button data-test='logout__btn'>Logout</button></li>
      </ul>
    </div>
  )
}