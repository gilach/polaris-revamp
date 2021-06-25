import React from 'react'
import T from 'prop-types'
import { render } from '@testing-library/react-native'

import { PreferencesProvider } from '../context/preferences'

const AllTheProviders = ({ children }) => {
  return <PreferencesProvider>{children}</PreferencesProvider>
}

AllTheProviders.propTypes = {
  children: T.node.isRequired
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }
