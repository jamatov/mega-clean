import React from 'react'
import logo1 from '../images/partner1.svg'

export default function Partners() {
  return (
    <section className='NumberInfo'>
      <div className="container">
        <div className="row">
          <h2><span>Наши</span> довольные <br /> клиенты</h2>
          <div className="col-md-3 number-block">
            <div className="card">
              <img src={logo1} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block">
            <div className="card">
              <h3>1200</h3>
              <p>Постоянных клиентов</p>
            </div>
          </div>

          <div className="col-md-3 number-block">
            <div className="card">
              <h3>25.000</h3>
              <p>Почишено м²</p>
            </div>
          </div>

          <div className="col-md-3 number-block">
            <div className="card">
              <h3>78</h3>
              <p>Онлайн заказов</p>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  )
}
