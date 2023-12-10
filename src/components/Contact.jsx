import React from 'react'

export default function Contact() {
  return (
    <section className='Contact'>
      <div className="container">
        <h2><span>Наши</span> контакты</h2>
        <div className="row">
          <div className="col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.7292563510368!2d69.28037936740728!3d41.31057562223877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2z0KHQutCy0LXRgCDQkNC80LjRgNCwINCi0LXQvNGD0YDQsA!5e0!3m2!1sru!2s!4v1701850396681!5m2!1sru!2s" width="100%" height="530px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-md-6 contact-info">
            <h3>Адрес</h3>
            <p>Г. Ташкент. Чиоланзарский район. Бешкурган 99</p>
            <h3>Телефон</h3>
            <p>(90) 003 00 69</p>
            <h3>Почта</h3>
            <p>megaclean@gmail.uz</p>
            <input className='col-12 mb-3' type="text" placeholder='Ваше Имя' />
            <input className='col-12 mb-4' type="text" placeholder='Номер Телефона' />
            <button className='mb-4'>Оставить заявку</button>

          </div>
        </div>
      </div>
    </section>
  )
}
