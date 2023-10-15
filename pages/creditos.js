import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'
import credits from '../data/credits'
import { styled } from '../stitches.config'

export async function getStaticProps() {
  const meta = {
    title: 'Créditos',
    description:
      'É importante reconhecer aqueles que disponibilizam seu tempo e recursos para criar conteúdo e disponibilizar de maneira gratuita.',
    tagline: 'Créditos.',
    image: '/static/images/filosofo-sd.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Creditos(props) {
  const { title, description, image } = props

  const renderCredits = () => {
    return credits.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h2>{item.person}</h2>
          <span dangerouslySetInnerHTML={{ __html: item.description }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Contact href={item.licenseUrl} target="_blank">
              {item.license}
            </Contact>
            <Contact href={item.contact} target="_blank">
              Contato
            </Contact>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://tiagogodoy.com/creditos" property="og:url" />
        <meta content={`https://tiagogodoy.com${image}`} property="og:image" />
      </Head>
      <strong>
        É importante reconhecer aqueles que disponibilizam seu tempo e recursos
        para criar conteúdo e disponibilizar de maneira gratuita.
      </strong>
      {renderCredits()}
    </>
  )
}

const Contact = styled('a', {
  textAlign: 'center',
  margin: '0 20px',
  width: '100px',
})

Creditos.Layout = Base

export default Creditos
