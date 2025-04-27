import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import about_me from '../components/about_me';

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
            contact: "Contact",
            about_me_text: "This is a short text about me..."
        }
      },
      se: {
        translation: {
            lang: "Svenska",
            hello: "Hej, allt bra med dig?",
            home: "Hem",
            work: "Projekt",
            about: "Om Mig",
            contact: "Kontakt",
            about_me_text: "Det här är en kort text om mig..."

        }
      }
    }
  });

export default i18n;