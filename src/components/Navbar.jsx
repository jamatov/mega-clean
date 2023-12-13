import React from 'react'
import img from '../images/logo-01.svg'
import { Link } from 'react-scroll'


export default function Navbar() {
  return (
    <nav className='Navbar'>
      <div className="container">
        <div className="nav-body">
          <Link to='Header' spy={true} smooth={true} offset={0} duration={100}>
            <img className='nav-logo' src={img} alt="logo" />
          </Link>

          <ul>
            <li><Link to='Primushestva' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Преимущетсва</Link></li>
            <li><Link to='About' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>О нас</Link></li>
            <li><Link to='Services' activeClass="active" spy={true} smooth={true} offset={-120} duration={100}>Услуги</Link></li>
            <li><Link to='WorkLevel' spy={true} smooth={true} offset={-120} duration={100}>Этапы</Link></li>
            <li><Link to='FAQ' spy={true} smooth={true} offset={-120} duration={100}>FAQ</Link></li>
            <li><Link to='Contact' spy={true} smooth={true} offset={-120} duration={100}>Контакты</Link></li>
          </ul>
          
        </div>
      </div>
    </nav>
  )
}
