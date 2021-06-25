import React from 'react'

import { PreferencesProvider } from './context/preferences'
import App from './components/App'

import './lib/i18n'

export default function Main() {
  return (
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  )
}
