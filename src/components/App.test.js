import React from 'react'
import { render } from 'lib/test-utils'

import App from './App'

describe('App', () => {
  it('renders content without crashing', async () => {
    const { findAllByText } = render(<App />)
    const text = await findAllByText('Welcome')
    expect(text.length).toBeGreaterThan(0)
  })
})
