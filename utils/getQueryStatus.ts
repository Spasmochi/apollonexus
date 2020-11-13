const isEmpty = (obj: object) => !Object.keys(obj).length

export const getQueryStatus = props => {
  const { loading, error, data } = props
  if (loading) return 'loading'
  if (error) return 'error'
  if (isEmpty(data)) return 'empty'
  return 'success'
}
