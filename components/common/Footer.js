import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <TitleLogo title='ntropology' caption='IA' className='logobg' />
              <br />
              <span>
                Dúvidas? Encontre-nos <br /> Segunda – Sexta das 9:00 às 17:00
              </span>
              <br />
              <br />
              <h3>+55 250 95996-5214</h3>
              <br />
              <button className='button-primary'>Conversar</button>
            </div>
            <ul>
              <h3>EMPRESA</h3>
              <li>
                <Link href='/'>Agência</Link>
              </li>
              <li>
                <Link href='/'>Equipe</Link>
              </li>
              <li>
                <Link href='/'>Vitrine</Link>
              </li>
              <li>
                <Link href='/'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Sistema de Design</Link>
              </li>
              <li>
                <Link href='/'>Contato</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVIÇOS</h3>
              <li>
                <Link href='/'>Desenvolvimento & Deisgn Web</Link>
              </li>
              <li>
                <Link href='/'>Marca & Serviços Criativos</Link>
              </li>
              <li>
                <Link href='/'>Marketing Digital</Link>
              </li>
              <li>
                <Link href='/'>E-Commerce</Link>
              </li>
            </ul>
            <ul>
              <h3>CONECTAR</h3>
              <div className='connect'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 HORIZON. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>EMPRESA HORIZON</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMOS & CONDIÇÕES</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
