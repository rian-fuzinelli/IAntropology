import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Nossas especialidades' />
            <p>Nossos especialidades se concentram nas principais maneiras de conexão entre tecnologia e melhora na qualidade de vida, nas quais são:</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='VER SOBRE' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
