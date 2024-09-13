import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='ntropology' caption='IA' className='logobg' />
          <h1 className='hero-title'>REVOLUCIONANDO A HUMANIDADE ATRAVÉS DA TECNOLOGIA</h1>

          <div className='sub-heading'>
            <TitleSm title='VÍDEOS' /> <span>.</span>
            <TitleSm title='ÁUDIOS' /> <span>.</span>
            <TitleSm title='FOTOS' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='A primeira agência de inteligência artificial do mundo' />
            <p>Liderando o desenvolvimento ético e inovador de tecnologias inteligentes, impulsionando soluções que promovem a eficiência, a sustentabilidade e o bem-estar global.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='video-section'>
        <div className='container'>
          <Title title='Assista ao nosso vídeo' />
          <div className='video-wrapper'>
          </div>
          <p className='video-caption'>Veja como estamos transformando o futuro da inteligência artificial.</p>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Últimas notícias & artigos' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
