import LocalizedStrings from 'react-localization';
import { LangStrings } from '../components/l18n';

const langEn = require('../assets/l18n/en.json');
const langAr = require('../assets/l18n/ar.json');
const langBg = require('../assets/l18n/bg.json');
const langCs = require('../assets/l18n/cs.json');
const langDa = require('../assets/l18n/da.json');
const langDe = require('../assets/l18n/de.json');
const langEl = require('../assets/l18n/el.json');
const langEs = require('../assets/l18n/es.json');
const langEt = require('../assets/l18n/et.json');
const langFi = require('../assets/l18n/fi.json');
const langFr = require('../assets/l18n/fr.json');
const langHi = require('../assets/l18n/hi.json');
const langHr = require('../assets/l18n/hr.json');
const langHu = require('../assets/l18n/hu.json');
const langIt = require('../assets/l18n/it.json');
const langJa = require('../assets/l18n/ja.json');
const langKo = require('../assets/l18n/ko.json');
const langLt = require('../assets/l18n/lt.json');
const langMs = require('../assets/l18n/ms.json');
const langNl = require('../assets/l18n/nl.json');
const langNo = require('../assets/l18n/no.json');
const langPl = require('../assets/l18n/pl.json');
const langPt = require('../assets/l18n/pt.json');
const langRo = require('../assets/l18n/ro.json');
const langRu = require('../assets/l18n/ru.json');
const langSk = require('../assets/l18n/sk.json');
const langSl = require('../assets/l18n/sl.json');
const langSr = require('../assets/l18n/sr.json');
const langSv = require('../assets/l18n/sv.json');
const langTa = require('../assets/l18n/ta.json');
const langTh = require('../assets/l18n/th.json');
const langTr = require('../assets/l18n/tr.json');
const langUk = require('../assets/l18n/uk.json');
const langVi = require('../assets/l18n/vi.json');
const langZh = require('../assets/l18n/zh.json');

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
