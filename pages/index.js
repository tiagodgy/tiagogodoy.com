import { styled } from '../stitches.config'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import Image from 'next/image'

export async function getStaticProps() {
  return {
    props: {
      title: 'Tiago Godoy',
      description: 'Transformando ideias em produtos seguros e escaláveis',
      image: '/static/images/csun-library.jpg',
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
              <strong>Engenharia de Software & Cybersecurity</strong>
              <br />
              {description}
            </p>
            <ShortcutHome />
          </PostContainer>
        </PostContent>
        <div>
          <Image
            src="/static/images/tiago-csun-front.png"
            alt="Foto Tiago na Csun"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
            width={350}
            height={350}
          />
        </div>
      </Home>
      <Footer />
    </Wrapper>
  )
}

const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  textAlign: 'center',
  flexDirection: 'column',
  '@bp2': {
    width: 800,
    flexDirection: 'row',
    paddingBottom: '0',
    textAlign: 'start',
  },
  paddingBottom: '0',
})
