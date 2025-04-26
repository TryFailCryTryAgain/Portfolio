import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false // React already protects against XSS
    },
    debug: true,
    resources: {
      en: {
        translation: {
            lang: "English",
            hello: "Hello, How are you today?",
            home: "Home",
            work: "Work",
            about: "About Me",
            contact: "Contact"
        }
      },
      se: {
        translation: {
            lang: "Svenska",
            hello: "Hej, allt bra med dig?",
            home: "Hem",
            work: "Projekt",
            about: "Om Mig",
            contact: "Kontakt"

        }
      }
    }
  });

export default i18n;