import React from 'react'
import img from '../images/header-person.png'
import Fade from 'react-reveal/Fade';
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";


export default function Header() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className='Header' id='Header'>
      <div className="container">
        <div className="header-body row">
          <Fade left>
            <div className="header-body__info col-md-7 col-lg-6">
              <p>Выезжаем в удобное для вас время</p>
              <h2><span>Чистка и стирка</span><br /> ковров в Ташкенте</h2>
              <h5>Вывоз, доставка и подъём до квартиры — бесплатно!</h5>
              <button onClick={() => setModalShow(true)}>Оставить заявку</button>
            </div>
          </Fade>
          <Fade right>
            <div className="col-md-5 col-lg-6">
              <img src={img} alt="header-person" />
            </div>
          </Fade>
        </div>
        <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </div>
    </section>
  )
}
