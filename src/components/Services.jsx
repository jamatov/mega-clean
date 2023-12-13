import React from 'react'
import img1 from '../images/service1.jpg'
import img2 from '../images/service2.jpg'
import img3 from '../images/service3.jpg'
import img4 from '../images/service4.jpg'
import Zoom from 'react-reveal/Zoom';
import Consultation from './Consultation'
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";


export default function Services() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section id='Services'>
      <div className='Services' >
      <div className="container">
        <Zoom cascade>
          <div className="row">
            <h2><span>Наши</span> услуги</h2>
            <div className=" col-md-4 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <img src={img1} alt="service" />
                  <h3>Химчистка <br /> ковров</h3>
                  <button onClick={() => setModalShow(true)} >Заказать чистку</button>
                </div>
              </div>
            </div>

            <div className=" col-md-4 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <img src={img2} alt="service" />
                  <h3>Химчистка <br /> одеяля</h3>
                  <button onClick={() => setModalShow(true)}>Заказать чистку</button>
                </div>
              </div>
            </div>

            <div className=" col-md-4 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <img src={img3} alt="service" />
                  <h3>Химчистка <br /> курпача</h3>
                  <button onClick={() => setModalShow(true)}>Заказать чистку</button>
                </div>
              </div>
            </div>

            <div className=" col-md-4 col-lg-3 mb-4">
              <div className="card">
                <div className="card-body">
                  <img src={img4} alt="service" />
                  <h3>Химчистка <br /> занавесок</h3>
                  <button onClick={() => setModalShow(true)}>Заказать чистку</button>
                </div>
              </div>
            </div>
          </div>

          
        </Zoom>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
    <Consultation/>
    </section>
  )
}
