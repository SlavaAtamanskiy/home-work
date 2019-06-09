export default function({ $axios, app }) {
  $axios.interceptors.request.use(
    async config => {
      // public pages requests are exceptions
      const url = config.url.replace(config.baseURL, '')
      if (
        /^\/auth\/login(\/|$)/.test(url) ||
        /^\/auth\/token(\/|$)/.test(url) ||
        /^\/auth\/register(\/|$)/.test(url)
      ) {
        return config
      }
      let token = app.$cookies.get('token')
      if (!token) {
        const { data } = await app.$api.auth.getToken(
          app.$cookies.get('client_id'),
          app.$cookies.get('client_secret')
        )
        token = data.token
      }
      config.headers.common.Authorization = `Bearer ${token}`
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )
}
