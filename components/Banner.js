import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Nós estamos empolgados para começar um novo projeto' /> <br />
            <TitleLogo title='Vamos elevar o nível do seu negócio!' />
          </div>
          <div>
            <button className='button-primary'>Solicitar Retorno</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
