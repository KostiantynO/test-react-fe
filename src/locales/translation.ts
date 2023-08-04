import { appConfig } from 'configs/app.config';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en.json';
// import ru from './lang/ru.json';
// import uk from './lang/uk.json';

const resources = {
  en: { translation: en },
  // uk: { translation: uk },
  // ru: { translation: ru },
};

// eslint-disable-next-line import/no-named-as-default-member
i18next
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: appConfig.locale,
    lng: appConfig.locale,
    interpolation: {
      escapeValue: false,
    },
  })
  .catch(console.error);

export const dateLocales = {
  en: () => import(/* webpackChunkName: "DayjsLocaleEn" */ 'dayjs/locale/en'),
  // uk: () => import(/* webpackChunkName: "DayjsLocaleUk" */ 'dayjs/locale/uk'),
  // ru: () => import(/* webpackChunkName: "DayjsLocaleRu" */ 'dayjs/locale/ru'),
};

export const languages = [
  { label: 'English', value: 'en', flag: 'us', short: 'ENG' },
  // { label: 'Українська', value: 'uk', flag: 'uk', short: 'УКР' },
  // { label: 'Русский', value: 'ru', flag: 'ru', short: 'РУС' },
];

export const i18n = i18next;
