import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SOBRE A AGÊNCIA' /> <br />
            <br />
            <Title title='A primeira agência de inteligência artificial do mundo' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Transformando suas ideias de negócios em produtos digitais inteligentes desde 2005' />
              <p className='desc-p'>Desde 2005, estamos comprometidos em transformar ideias inovadoras em realidade digital através da inteligência artificial. Nossa jornada é marcada por um profundo entendimento das necessidades dos nossos clientes e pela aplicação estratégica das mais avançadas tecnologias. Ao longo dos anos, temos ajudado empresas a automatizar processos, otimizar operações e criar experiências personalizadas que impulsionam o crescimento e a eficiência. Com um foco contínuo em inovação e qualidade, estamos prontos para enfrentar os desafios do futuro digital e continuar a moldar o sucesso de nossos clientes através de soluções inteligentes e impactantes.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Anos de Experiência</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Negócios Bem Sucedidos</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Premiações</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 py'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Nosso objetivo' />
              <br />
              <p className='misson-p'>Nosso objetivo é capacitar empresas a alcançar seu máximo potencial transformando ideias de negócios em produtos digitais inteligentes desde 2005. Com um compromisso firme com a inovação e a excelência tecnológica, trabalhamos incansavelmente para entender e atender às necessidades únicas de nossos clientes. Através da aplicação estratégica da inteligência artificial, automatizamos processos, otimizamos operações e criamos experiências personalizadas que não apenas satisfazem, mas superam as expectativas. Estamos comprometidos em continuar sendo líderes no setor, impulsionando o crescimento e o sucesso de nossos clientes em um mundo digital em constante evolução.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
