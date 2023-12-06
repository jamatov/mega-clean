import React from 'react'
import logo1 from '../images/partners1.svg'
import logo2 from '../images/partners2.svg'
import logo3 from '../images/partners3.png'
import logo4 from '../images/partners4.svg'
import logo5 from '../images/partners5.svg'
import logo6 from '../images/partners6.svg'
import logo7 from '../images/partners7.svg'
import logo8 from '../images/partners8.svg'




export default function Partners() {
  return (
    <section className='NumberInfo'>
      <div className="container">
        <div className="row">
          <h2><span>Наши</span> довольные <br /> клиенты</h2>
          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo1} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo2} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img className='qush' src={logo3} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo4} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo5} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo6} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo7} alt="logo" />
            </div>
          </div>

          <div className="col-md-3 number-block mb-3">
            <div className="card">
              <img src={logo8} alt="logo" />
            </div>
          </div>

         

          
        </div>
      </div>
    </section>
  )
}
