import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import ModelThree from '../components/ModelThree'

export async function getStaticProps() {
  return {
    props: {
      title: 'Tiago Godoy',
      description: 'Transformando ideias em produtos',
      image: '/static/images/expert-xp.jpg',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://tiagogodoy.com" property="og:url" />
        <meta content={`https://tiagogodoy.com${image}`} property="og:image" />
      </Head>
      <Navbar />
      <Home>
        <PostContent>
          <PostContainer>
            <h1>{title}</h1>
            <p>
              <strong>Cibersegurança & Eng. de Software</strong>
              <br />
              {description}
            </p>
            <ShortcutHome />
          </PostContainer>
        </PostContent>
        <ModelThree />
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  flexDirection: 'column',
  '@bp2': { width: 800, flexDirection: 'row', paddingBottom: '0' },
  paddingBottom: '0',
})
