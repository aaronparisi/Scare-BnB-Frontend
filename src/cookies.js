import Cookies from 'js-cookie'

const getCSRFToken = () => {
  window.Cookies = Cookies;
  const tokens = {
    realToken: Cookies.get('X-CSRF-Token'),
    fakeToken: Cookies.get('fake-token')
  }
  return tokens
}

export default getCSRFToken