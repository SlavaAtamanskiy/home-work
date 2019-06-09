export const authenticate = async function({ login, password }) {
  const { status, data } = await this.$axios({
    url: '/auth/login',
    method: 'post',
    data: {
      login,
      password
    }
  })

  const res = {
    status,
    message: data.message || '',
    data: {
      success: data.success || false,
      user: data.user || {}
    }
  }

  if (status === 200) {
    const response = await this.app.$api.auth.getToken(
      data.client_id,
      data.client_secret
    )
    if (response.status === 200) {
      const cookies = Object.assign(response.data, data)
      setCookies(cookies, this)
    }
  }
  return res
}

export const reset = async function() {
  await this.app.$cookies.removeAll()
  delete this.$axios.defaults.headers.common.Authorization
  return true
}

export const getToken = async function(id, secret) {
  const { status, data } = await this.$axios({
    url: '/auth/token',
    method: 'get',
    params: {
      id,
      secret
    }
  })
  const res = {
    status,
    data: {
      token: data.token || '',
      expires: data.expires ? new Date(data.expires) : undefined
    }
  }
  if (status === 200) {
    this.app.$cookies.set('token', data.token, {
      path: '/',
      expires: new Date(data.expires)
    })
  }
  return res
}

const setCookies = function(data, context) {
  const keys = Object.keys(data)
  const cookieList = []
  const options = {
    path: '/'
  }

  for (const key of keys) {
    if (key === 'token') {
      cookieList.push({
        name: 'token',
        value: data.token,
        opts: {
          path: '/',
          expires: new Date(data.expires)
        }
      })
      continue
    } else if (key === 'expires' || key === 'success' || key === 'message') {
      continue
    }
    cookieList.push({ name: key, value: data[key], opts: options })
  }

  context.app.$cookies.setAll(cookieList)
}
