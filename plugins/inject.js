import generateApi from '../utils/api'

export default (context, inject) => {
  inject('api', generateApi(context))
}
