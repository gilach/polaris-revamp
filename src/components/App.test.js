import React from 'react'
import { render } from 'test-utils'

import App from './App'

describe('Main App', () => {
  it('renders content without crashing', () => {
    const { queryAllByText } = render(<App />)
    const text = queryAllByText('Open up App.js to start working on your app!')
    expect(text.length).toBeGreaterThan(0)
  })
})
