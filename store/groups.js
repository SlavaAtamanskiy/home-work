const types = Object.freeze({
  SET_GROUPS: 'SET_GROUPS'
})

// initial state
export const state = () => ({
  all: [],
  item: {},
  loading: false
})

// getters
export const getters = {}

// actions
export const actions = {
  async getAll({ commit }) {
    try {
      const { status, data } = await this.$api.groups.getAll()
      if (status === 200) {
        commit(types.SET_GROUPS, data)
      } else {
        throw new Error('Could not load products')
      }
    } catch (err) {
      return Promise.reject(err)
    }
  }
}

// mutations
export const mutations = {
  [types.SET_GROUPS](state, items) {
    state.all = items
  }
}
