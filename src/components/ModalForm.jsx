import React, { useState }  from 'react'
import axios from "axios";

import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../constants";
import InputMask from "react-input-mask";

export default function ModalForm() {
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
    <div className='ModalForm row'>
      <form
          onSubmit={sendFeedback}
          className="col-12 col-md-12 contact-form"
          action=""
        >
          <h3>Получите бесплатную консультацию</h3>
          <h4>Введите ваш телефон, и технолог перезвонит вам в ближайшее время</h4>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="col-12"
            type="text"
            name="name"
            id="name"
            placeholder="Ваше имя"
          />

          <InputMask
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="+998 (99) 999-99-99"
            maskChar=""
            id="phone"
            type="text"
            placeholder="+998 (_) _ _ _"
            className="col-12"
          />

          <button disabled={isLoading} type="submit">
            {" "}
            {isLoading && (
              <i className="spinner-border spinner-border-sm text-white me-2"></i>
            )}
            Отправить
          </button>
        </form>
    </div>
  )
}
