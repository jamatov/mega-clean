import React from 'react'

export default function Footer() {
  return (
    <footer className='Footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className='logo-info'>© 2023, Perfect Clean – профессиональная <br /> химчистка ковров в Ташкенте</p>
          </div>
          <div className="col-md-6">
            <div className='footer-list'>
              <ul>
                <li>О нас</li>
                <li>Услуги</li>
                <li>Этапы</li>
              </ul>

              <ul>
                <li>Цены</li>
                <li>Контакты</li>
                <li>Доставка</li>
              </ul>

              <ul>
                <li>Telegram</li>
                <li>Instagram</li>
                <li>(90) 003 00 69</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
