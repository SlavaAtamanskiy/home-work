export const actions = {
  async nuxtServerInit({ dispatch }, context) {
    const cookies = context.app.$cookies.getAll()
    const cookiesOk =
      cookies.hasOwnProperty('user') &&
      cookies.hasOwnProperty('client_secret') &&
      cookies.hasOwnProperty('client_id')
    const payload = {
      user: cookies.user || {},
      success: false
    }

    if (cookiesOk) {
      let statusCode = 200
      if (!cookies.hasOwnProperty('token')) {
        const res = await context.app.$api.auth.getToken(
          cookies.client_id,
          cookies.client_secret
        )
        statusCode = res.status
      }
      payload.success = statusCode === 200
    } else {
      await context.app.$api.auth.reset()
    }

    dispatch('auth/setState', payload)
  }
}
