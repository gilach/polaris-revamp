import React, { useContext } from 'react'
import T from 'prop-types'

const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false
})

export function PreferencesProvider({ children }) {
  const [isThemeDark, setIsThemeDark] = React.useState(false)

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark)
  }, [isThemeDark])

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark
    }),
    [toggleTheme, isThemeDark]
  )

  return (
    <PreferencesContext.Provider value={preferences}>
      {children}
    </PreferencesContext.Provider>
  )
}

PreferencesProvider.propTypes = {
  children: T.node.isRequired
}

export function usePreferences() {
  return useContext(PreferencesContext)
}
