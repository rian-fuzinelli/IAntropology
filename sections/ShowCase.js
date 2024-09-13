import { showcase } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const ShowCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='EXIBIÇÃO' /> <br />
            <br />
            <Title title='Ideias inovadoras. Design criativo. Entrega inteligente.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {showcase.map((item) => (
              <Card data={item} key={item.id} caption={item.post} />
            ))}
          </div>
          <div className='py btn'>
            <button className='secondary-button'>Ver mais</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShowCase
