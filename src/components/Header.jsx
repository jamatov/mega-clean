import React from 'react'
import img from '../images/header-person.png'

export default function Header() {
  return (
    <section className='Header'>
      <div className="container">
        <div className="header-body row">
          <div className="header-body__info col-md-7 col-lg-6">
            <p>Выезжаем в удобное для вас время</p>
            <h2><span>Чистка и стирка</span><br /> ковров в Ташкенте</h2>
            <h5>Вывоз, доставка и подъём до квартиры — бесплатно!</h5>
            <button>Оставить заявку</button>
          </div>
          <div className="col-md-5 col-lg-6">
            <img src={img} alt="header-person" />
          </div>
        </div>
      </div>
    </section>
  )
}
