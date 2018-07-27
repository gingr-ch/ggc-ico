import LocalizedStrings from 'react-localization';
import { LangStrings } from '../components/l18n';

export const langEn = require('./assets/l18n/en.json');
export const langAr = require('./assets/l18n/ar.json');
export const langBg = require('./assets/l18n/bg.json');
export const langCs = require('./assets/l18n/cs.json');
export const langDa = require('./assets/l18n/da.json');
export const langDe = require('./assets/l18n/de.json');
export const langEl = require('./assets/l18n/el.json');
export const langEs = require('./assets/l18n/es.json');
export const langEt = require('./assets/l18n/et.json');
export const langFi = require('./assets/l18n/fi.json');
export const langFr = require('./assets/l18n/fr.json');
export const langHi = require('./assets/l18n/hi.json');
export const langHr = require('./assets/l18n/hr.json');
export const langHu = require('./assets/l18n/hu.json');
export const langIt = require('./assets/l18n/it.json');
export const langJa = require('./assets/l18n/ja.json');
export const langKo = require('./assets/l18n/ko.json');
export const langLt = require('./assets/l18n/lt.json');
export const langMs = require('./assets/l18n/ms.json');
export const langNl = require('./assets/l18n/nl.json');
export const langNo = require('./assets/l18n/no.json');
export const langPl = require('./assets/l18n/pl.json');
export const langPt = require('./assets/l18n/pt.json');
export const langRo = require('./assets/l18n/ro.json');
export const langRu = require('./assets/l18n/ru.json');
export const langSk = require('./assets/l18n/sk.json');
export const langSl = require('./assets/l18n/sl.json');
export const langSr = require('./assets/l18n/sr.json');
export const langSv = require('./assets/l18n/sv.json');
export const langTa = require('./assets/l18n/ta.json');
export const langTh = require('./assets/l18n/th.json');
export const langTr = require('./assets/l18n/tr.json');
export const langUk = require('./assets/l18n/uk.json');
export const langVi = require('./assets/l18n/vi.json');
export const langZh = require('./assets/l18n/zh.json');

export const strings: LangStrings = new LocalizedStrings({
  en: langEn,
  ar: langAr,
  bg: langBg,
  cs: langCs,
  da: langDa,
  de: langDe,
  el: langEl,
  es: langEs,
  et: langEt,
  fi: langFi,
  fr: langFr,
  hi: langHi,
  hr: langHr,
  hu: langHu,
  it: langIt,
  ja: langJa,
  ko: langKo,
  lt: langLt,
  ms: langMs,
  nl: langNl,
  no: langNo,
  pl: langPl,
  pt: langPt,
  ro: langRo,
  ru: langRu,
  sk: langSk,
  sl: langSl,
  sr: langSr,
  sv: langSv,
  ta: langTa,
  th: langTh,
  tr: langTr,
  uk: langUk,
  vi: langVi,
  zh: langZh,
});

export const extractAvailableLanguages = function(locs: any) {
  return locs
    .getAvailableLanguages()
    .filter((x: any) => x !== locs.getLanguage());
};
