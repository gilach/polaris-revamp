import { render } from '@testing-library/react-native'

const AllTheProviders = ({ children }) => {
  return children
}

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options })

// re-export everything
export * from '@testing-library/react-native'

// override render method
export { customRender as render }