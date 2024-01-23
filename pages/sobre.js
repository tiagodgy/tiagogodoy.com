import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import Toast from '../components/Toast'
import stripHtml from '../lib/strip-html'
import items from '../data/about'
import academic from '../data/academic'

export async function getStaticProps() {
  const meta = {
    title: 'Sobre Tiago Godoy',
    description:
      'Meu nome é Tiago Godoy, iniciei minha carreira trabalhando como desenvolvedor de software na SmartGateway. Atualmente sou estagiário de Engenharia de Software e graduando em Defesa Cibernética na Faculdade XPe.',
    tagline: 'Sonho Grande. Mente Aberta.',
    image: '/static/images/csun-library.jpg',
    primaryColor: 'yellow',
    secondaryColor: 'pink',
  }

  return { props: meta }
}

function Sobre(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Tiago"
            src="/static/images/csun-library.jpg"
            width="336"
            height="336"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Olá, meu nome é Tiago Godoy</strong>, e minha jornada
            profissional tem sido marcada por experiências significativas.
            Iniciei minha carreira como desenvolvedor de software na
            SmartGateway, e atualmente, sou estagiário em Engenharia de
            Software, enquanto busco minha graduação em Defesa Cibernética na
            Faculdade XPe.
          </Paragraph>
          <Paragraph>
            Em 2024, tive a oportunidade incrível de participar de um curso
            executivo na <strong>Califórnia State University</strong>, focado em
            Digital Companies & E-Business Revolution. Durante esse período,
            tive acesso a profissionais experientes nas áreas de Data Analytics,{' '}
            <strong>Cibersegurança</strong>, Inteligência Artificial,
            Empreendedorismo voltado a Startups e Marketing.
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderCarreer = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const renderAcademic = () => {
    return academic.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://tiagogodoy.com/sobre" property="og:url" />
        <meta content={`https://tiagogodoy.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Carreira</h2>
      {renderCarreer()}
      <h2>Acadêmico</h2>
      {renderAcademic()}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

Sobre.Layout = Base

export default Sobre
