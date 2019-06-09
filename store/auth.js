const types = Object.freeze({
  SET_STATE: 'SET_STATE'
})

const getDefaultState = () => ({
  user: {},
  success: false
})

// initial state
export const state = () => getDefaultState()

// getters
export const getters = {
  isAuthenticated(state) {
    return state.success
  }
}

// actions
export const actions = {
  async authenticate({ commit }, { credentials, handleResponse }) {
    try {
      const { status, data } = await this.$api.auth.authenticate(credentials)
      if (status === 200) {
        commit(types.SET_STATE, data)
        handleResponse()
      } else {
        throw new Error('Could not authenticate')
      }
    } catch (err) {
      handleResponse(err)
    }
  },
  async logOut({ commit }) {
    try {
      const success = await this.$api.auth.reset()
      if (success) {
        commit(types.SET_STATE, getDefaultState())
      }
    } catch (err) {
      return Promise.reject(err)
    }
  },
  setState({ commit }, payload) {
    commit(types.SET_STATE, payload)
  }
}

// mutations
export const mutations = {
  [types.SET_STATE](state, data) {
    state = Object.assign(state, data)
  }
}
