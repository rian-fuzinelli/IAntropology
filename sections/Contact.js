import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTATO' /> <br />
            <br />
            <Title title="Vamos começar agora!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>+55 250 95996-5214</h3>
                  <span>Ligue: Seg - Sex das 9:00 às 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>São Paulo, São Paulo, Brasil</h3>
                  <span>Rua Rian Caio, Fuzinelli, Centro - 250</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>iantropology@gmail.com</h3>
                  <span>Nos envie uma mensagem a qualquer hora!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>rh@executor.com</h3>
                  <span>Carreira na Mentes Criativas</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Faça um pedido online' />
              <p className='desc-p'>Algúma dúvida ou sugestão? Preencha o formulário abaixo para obter uma resposta. </p>

              <form>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Nome</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>E-mail</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>SEU ORÇAMENTO</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>Prazo</span>
                    <input type='text' />
                  </div>
                </div>
                <div className='inputs'>
                  <span>NOS CONTE UM POUCO SOBRE O SEU PROJETO*</span>
                  <textarea cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary'>PREENCHER</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
