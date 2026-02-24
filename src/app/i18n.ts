import 'server-only'

const dictionaries = {
    en: () => import('@/locales/en/translation.json').then((module) => module.default),
    fr: () => import('@/locales/fr/translation.json').then((module) => module.default),
    de: () => import('@/locales/de/translation.json').then((module) => module.default),
};

export const getDictionary = async (locale: 'en' | 'fr' | 'de') => {
    return dictionaries[locale]();
};
