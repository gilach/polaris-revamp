// inspired from https://github.com/0xClpz/i18next-react-native-async-storage
// changed because that package supports multiple storage types and that doesn't seem to work

import AsyncStorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = 'i18next/user-language'

function callFallbackIfFunc(fallback, cb) {
  if (typeof fallback === 'function') {
    return fallback(cb)
  }

  return cb(fallback)
}

export default function languageDetector(fallback) {
  return {
    type: 'languageDetector',
    async: true,
    init: () => {},
    detect: async cb => {
      const language = await AsyncStorage.getItem(STORAGE_KEY)

      if (language) {
        return cb(language)
      }

      return callFallbackIfFunc(fallback, cb)
    },
    // cacheUserLanguage: () => {}
    // TODO: is this actually needed / wanted?
    cacheUserLanguage: async language => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, language)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
