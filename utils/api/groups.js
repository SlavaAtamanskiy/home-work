const URL = 'homework/groups'

export const getAll = async function() {
  const { status, data } = await this.$axios({
    url: URL,
    method: 'get',
    params: {
      user_id: 421
    }
  })
  const result = {
    status,
    data: []
  }

  if (status === 200) {
    data.items.forEach(({ id, name, limit }) => {
      result.data.push({
        id,
        name: name || '',
        limit: limit || 0
      })
    })
  }

  return result
}

export const remove = async function(id) {
  const { status } = await this.$axios({
    url: `${URL}${id}`,
    method: 'delete'
  })

  return status === 200
}

export const update = async function(item) {
  const { status, data } = await this.$axios({
    url: `${URL}${item.id}`,
    method: 'put',
    data: item
  })

  const result = {
    status,
    data: {}
  }

  if (status === 200) {
    result.data = Object.assign({}, data)
    result.data.service = data.service ? 'yes' : 'no'
  }

  return result
}

export const create = async function(item) {
  const { status, data } = await this.$axios({
    url: URL,
    method: 'post',
    data: item
  })

  const result = {
    status,
    data: {}
  }

  if (status === 200) {
    result.data = Object.assign({}, data)
    result.data.service = data.service ? 'yes' : 'no'
  }

  return result
}
