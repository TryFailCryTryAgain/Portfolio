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
            contact: "Contact",
            tech: "Skills & Technologies",
            myWork: "View My Work",
            contactme: "Contact Me",
            backHome: "Home",
            about_me_text: "I am an ambitious Fullstack Developer student with a strong passion for web development. I am currently studying Fullstack Open Source at Chas Academy and am a founder of the organization StaticLain.",
            about_me_text2: "I have broad expertise in both frontend and backend, including React, TypeScript, JavaScript, PHP, Laravel, RESTful APIs, and database management (SQL/NoSQL). With experience in UI/UX design, wireframing, and responsive development, I collaborate within my organization to build various projects from the ground up.",
            about_me_text3: "I have sharp problem-solving skills and thrive under pressure. I am a quick learner, a strong team player, and highly motivated to grow in the tech industry.",
            homepage_info: "I love solving problems by turning them into clean, efficient solutions. I enjoy working on both frontend and backend, making sure the user experience is smooth and the system runs reliably",
            workpage_info: "A collection of my recent projects and case studies.",
            contactpage_info: "Have a project in mind or want to discuss potential opportunities? I'd love to hear from you. Fill out the form or use my contact details.",
            contact_title: "Contact Information",
            form_name: "Your Name",
            form_email: "Email Address",
            form_subject: "Subject",
            form_message: "Your Message",
            form_send_message: "Send Message",
            workpage_title: "My Projects",
            my_resume: "Resume"
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
            tech: "Kompetenser & Tekniker",
            myWork: "Mina Projekt",
            contactme: "Kontakta Mig",
            backHome: "Hem",
            about_me_text: "Jag är en ambitiös Fullstack Developer-student med en stark passion för webbutveckling. Jag studerar för närvarande Fullstack Open Source på Chas Academy och är en grundare av organisationen StaticLain.",
            about_me_text2: "Sitter med en bred kompetens inom både frontend och backend, inklusive React, Typescript, JavaScript, PHP, Laravel, RESTful API:er och databashantering (SQL/NoSQL). Med erfarenhet av UI/UX-design, wireframing och responiv utveckling, jobbar jag tillsammans inom min orginsanation för att skapa ett flertal olika projekt från grunden.",
            about_me_text3: "Jag har en skarp problemlösningsförmåga och har en stark förmåga att arbeta under press. Är en snabblärd lagspelare med en stark vilja att utvecklas inom tech.",
            homepage_info: "Jag älskar att lösa problem genom att omvandla dem till rena och effektiva lösningar. Jag gillar att arbeta med både frontend och backend och ser till att användarupplevelsen är smidig och att systemet fungerar pålitligt",
            workpage_info: "En samling av mina senaste projekt och fallstudier.",
            contactpage_info: "Har du ett projekt i åtanke eller vill diskutera potentiella möjligheter? Jag skulle gärna höra från dig. Fyll i formuläret eller använd mina kontaktuppgifter.",
            contact_title: "Kontakt Information",
            form_name: "Ditt Namn",
            form_email: "Email Adress",
            form_subject: "Ämnesrad",
            form_message: "Ditt meddelande",
            form_send_message: "Skicka Meddelandet",
            workpage_title: "Mina Projekt",
            my_resume: "CV"
          }
      }
    }
  });

export default i18n;