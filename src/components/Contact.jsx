import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../constants";
import InputMask from "react-input-mask";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [isLoading, setIsLoading] = useState(false);

  let text = `Name: ${name}.%0APhone number: ${phone}.`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Требуется номер телефона. Попробуйте еще раз.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Завершено успешно. Дождитесь обратного звонка!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };

  return (
    <section className='Contact' id='Contact'>
      <div className="container">
        <h2><span>Наши</span> контакты</h2>
        <div className="row">
          <div className="col-md-6">
          <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.53600889541997!2d69.17397636027809!3d41.23100640087921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae621432ed8485%3A0xadf5723e5dd62c9f!2z0JjRgNC60LjQvSwg0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1702367891191!5m2!1sru!2s" width="100%" height="530px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-md-6 contact-info">
            <h3>Адрес</h3>
            <p>Г. Ташкент. Чиоланзарский район. Бешкурган 99</p>
            <h3>Телефон</h3>
            <p>(90) 003 00 69</p>
            <h3>Почта</h3>
            <p>megaclean@gmail.uz</p>
            <form action="" onSubmit={sendFeedback}>
              <input className='col-12 mb-3' type="text" placeholder='Ваше Имя' value={name} onChange={(e) => setName(e.target.value)}/>
              <InputMask className='col-12 mb-4' type="text" placeholder='Номер Телефона' value={phone} onChange={(e) => setPhone(e.target.value)} mask="+998 (99) 999-99-99"/>
              <button className='mb-4' disabled={isLoading} type="submit">Оставить заявку</button>
            </form>

          </div>
        </div>
      </div>
    </section>
  )
}
