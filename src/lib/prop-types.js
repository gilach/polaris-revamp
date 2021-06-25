import T from 'prop-types'

export const TNavigation = T.shape({
  navigate: T.func.isRequired
})

export const TScene = T.shape({
  route: T.object.isRequired
})
