import { styled } from '../stitches.config'

export default function Footer() {
  const links = [
    {
      title: 'Email',
      url: '/contact',
      icon: 'ri-mail-line',
    },
    {
      title: 'GitHub',
      url: 'https://github.com/tiagodgy',
      icon: 'ri-github-line',
    },
    {
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/tiago-godoy-0137811b9/',
      icon: 'ri-linkedin-line',
    },
    {
      title: 'Youtube',
      url: 'https://www.youtube.com/channel/UCz383XOzCyl6bIeHCtjFPSQ',
      icon: 'ri-youtube-line',
    },
    {
      title: 'Créditos',
      url: '/creditos',
      icon: 'ri-award-line',
    },
  ]

  const renderAnchor = (link, index) => {
    if (link.url.startsWith('http')) {
      return (
        <Anchor key={index} href={link.url} target="_blank">
          <Title>{link.title}</Title>
          <Icon className={link.icon} />
        </Anchor>
      )
    }

    return (
      <Anchor key={index} href={link.url}>
        <Title>{link.title}</Title>
        <Icon className={link.icon} />
      </Anchor>
    )
  }

  return <Container>{links.map(renderAnchor)}</Container>
}

const Container = styled('footer', {
  background: '$background',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
})

const Credits = styled('p', {
  fontSize: '13px',
})

const Icon = styled('i', {
  color: '$primary',
  opacity: 1,
  marginLeft: '5px',
  marginTop: '1px',
  fontSize: '24px',
  '@bp2': { opacity: 0, fontSize: '16px' },
})

const Anchor = styled('a', {
  color: '$secondary',
  display: 'flex',
  fontSize: '15px',
  border: 0,
  marginLeft: '20px',
  textDecoration: 'none',
  textTransform: 'lowercase',
  transition: 'color $duration ease-in-out',
  '&:hover, &:focus': {
    color: '$primary',
    opacity: 1,
  },
  [`&:hover ${Icon}`]: {
    transition: 'opacity $duration ease-in-out',
    opacity: 1,
  },
  '&:first-child': { margin: '0' },
})

const Title = styled('span', {
  display: 'none',
  '@bp2': { display: 'block' },
})
