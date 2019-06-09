import { authenticate, reset, getToken } from './auth'
import { getAll } from './groups'

export default context => ({
  auth: {
    authenticate: authenticate.bind(context),
    reset: reset.bind(context),
    getToken: getToken.bind(context)
  },
  groups: {
    getAll: getAll.bind(context)
  }
})
