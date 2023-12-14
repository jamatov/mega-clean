import React, {useState} from 'react'
import img from '../images/logo-01.svg'
import { Link } from 'react-scroll'


export default function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState('nav__toggler')
  const navToggle = () => {
    active === 'nav__menu' 
      ? setActive('nav__menu nav__active') 
      : setActive("nav__menu");
    
    toggleIcon === 'nav__toggler'
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler")

    
  }

  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <Link to='Header' spy={true} smooth={true} offset={0} duration={100}>
            <img className='nav-logo' src={img} alt="logo" />
          </Link>

          <ul className={active}>
            <li><Link to='Primushestva' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Преимущетсва</Link></li>
            <li><Link to='About' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>О нас</Link></li>
            <li><Link to='Services' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Услуги</Link></li>
            <li><Link to='WorkLevel' spy={true} smooth={true} offset={-120} duration={100}>Этапы</Link></li>
            <li><Link to='FAQ' spy={true} smooth={true} offset={-120} duration={100}>FAQ</Link></li>
            <li><Link to='Contact' spy={true} smooth={true} offset={-120} duration={100}>Контакты</Link></li>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
          
        </div>
      </div>
    </nav>
  )
}
