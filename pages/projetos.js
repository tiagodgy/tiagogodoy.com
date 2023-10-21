import React from 'react'
import Head from 'next/head'
import { AnimateSharedLayout } from 'framer-motion'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import projects from '../data/projects'
import { styled } from '../stitches.config'
import Image from 'next/image'

export async function getStaticProps() {
  const meta = {
    title: 'Projetos',
    tagline: 'Idealizar. Prototipar. Compartilhar.',
    image: '/static/images/bot-microsoft-sd.jpg',
    primaryColor: 'yellow',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Projetos(props) {
  const { title, image } = props
  const description =
    'Possuo diversos projetos pessoais, a maioria gratuito para uso. Talvez aqui você encontre uma ferramenta útil ou uma ideia para se inspirar.'

  const renderProjects = () => {
    return projects.map((item, index) => {
      return (
        <Container key={index}>
          <div>
            <Image
              src={item.image}
              alt="Imagem do projeto"
              width="336"
              height="336"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
              priority
            />
          </div>
          <DataContainer>
            <h3>
              {item.title} - {item.year}
            </h3>
            <p style={{ textAlign: 'center' }}>{item.description}</p>
            <LinkContainer>
              {item.url && (
                <a href={item.url} target="_blank">
                  Site
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank">
                  Github
                </a>
              )}
              {item.playStore && (
                <a href={item.playStore} target="_blank">
                  Play Store
                </a>
              )}
              {item.appleStore && (
                <a href={item.appleStore} target="_blank">
                  Apple Store
                </a>
              )}
            </LinkContainer>
          </DataContainer>
        </Container>
      )
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://tiagogodoy.com/projetos" property="og:url" />
        <meta content={`https://tiagogodoy.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>{renderProjects()}</AnimateSharedLayout>
    </>
  )
}
const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
  '@bp2': { width: 800, flexDirection: 'row' },
})

const DataContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '@bp2': { width: 440, padding: 20 },
})

const LinkContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: 336,
  '@bp2': { width: 440 },
})

Projetos.Layout = Base

export default Projetos
