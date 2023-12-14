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
                <li>(97) 725 95 30</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="webmarketing col-12">
            <p>Сайт разработан студией</p><a href="https://www.instagram.com/webmarketing.uz/">Web Marketing</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
