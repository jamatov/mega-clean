import React from 'react'
import img from '../images/consultation.png'
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";


export default function Consultation() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <section className='Consultation'>
      <div className="container">
        <div className="consultation-block">
          <div className='consultation-block__image'>
            <img src={img} alt="consultant" />
          </div>

          <div className='consultation-block__info'>
            <h2>Получите бесплатную<br /> <span>консультацию</span></h2>  
            <p>Ваш шаг к решению - всего лишь один <br /> звонок или сообщение!</p>
            <button onClick={() => setModalShow(true)}>Оставить заявку</button>
          </div>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </section>
  )
}
