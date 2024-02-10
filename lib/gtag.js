export const GA_TRACKING_ID = 'G-T7D71Z1N88'

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
