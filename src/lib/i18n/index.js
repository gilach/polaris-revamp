import * as Localization from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { format as formatDate } from 'date-fns'

import * as translations from './translations'
import languageDetector from './languageDetector'

i18n
  .use(initReactI18next)
  .use(languageDetector(Localization.locale))
  .init({
    resources: translations,
    fallbackLng: Localization.locale,
    interpolation: {
      escapeValue: false,
      format: (value, format) => {
        if (value instanceof Date) {
          return formatDate(value, format || '')
        }
        return value
      }
    }
  })
