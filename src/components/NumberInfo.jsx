import React from 'react'

export default function NumberInfo() {
  return (
    <section className='NumberInfo'>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3 mb-4 number-block">
            <div className="card">
              <h3>15</h3>
              <p>Сотрудников</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 mb-4 number-block">
            <div className="card">
              <h3>1200</h3>
              <p>Постоянных клиентов</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 mb-4 number-block">
            <div className="card">
              <h3>25.000</h3>
              <p>Почишено м²</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3 mb-4 number-block">
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
