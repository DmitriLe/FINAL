import React, { useState } from 'react'

export default function Registration() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    return (
      <div className='registration'>
        <form className='form'>
          <h1 className='form_title'>Добавление товара</h1>
          
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Название' />
          </div>
          
          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Описание' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Автор' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Дата издания' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Жанр' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Цена' />
          </div>

          <div className='form_group'>
          <input className='form_input' name='login' type='text' placeholder='Длинна' />
          </div>

          
          <button className='form_button' type='submit'>Добавить</button>
        </form>
      </div>
    )
}