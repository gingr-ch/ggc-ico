import * as React from 'react';
import SelectSearch from 'react-select-search';

import 'flag-icon-css/css/flag-icon.min.css';
import './LanguageChanger.css';

// const gingr = require('../../assets/img/gingr_necklace.png');

interface LanguageChangerProps {
  image?: string;
  title?: string;
  content?: string;
}

const options = [
  { value: 'en', iso: 'gb', name: 'English' },
  { value: 'ar', iso: 'ae', name: 'Arabic' },
  { value: 'bg', iso: 'bg', name: 'Bulgarian' },
  { value: 'cs', iso: 'cz', name: 'Czech' },
  { value: 'da', iso: 'dk', name: 'Danish' },
  { value: 'de', iso: 'de', name: 'German' },
  { value: 'el', iso: 'gr', name: 'Greek' },
  { value: 'es', iso: 'es', name: 'Spanish' },
  { value: 'et', iso: 'et', name: 'Estonian' },
  { value: 'fi', iso: 'fi', name: 'Finnish' },
  { value: 'fr', iso: 'fr', name: 'French' },
  { value: 'hi', iso: 'in', name: 'Hindi' },
  { value: 'hr', iso: 'hr', name: 'Croatian' },
  { value: 'hu', iso: 'hu', name: 'Hungarian' },
  { value: 'it', iso: 'it', name: 'Italian' },
  { value: 'ja', iso: 'jp', name: 'Japanese' },
  { value: 'ko', iso: 'kr', name: 'Korean' },
  { value: 'lt', iso: 'lt', name: 'Lithuanian' },
  { value: 'ms', iso: 'ms', name: 'Malay' },
  { value: 'nl', iso: 'nl', name: 'Dutch' },
  { value: 'no', iso: 'no', name: 'Norwegian' },
  { value: 'pl', iso: 'pl', name: 'Polish' },
  { value: 'pt', iso: 'pt', name: 'Portuguese' },
  { value: 'ro', iso: 'ro', name: 'Romanian' },
  { value: 'ru', iso: 'ru', name: 'Russian' },
  { value: 'sk', iso: 'sk', name: 'Slovak' },
  { value: 'sl', iso: 'sl', name: 'Slovenian' },
  { value: 'sr', iso: 'sr', name: 'Serbian' },
  { value: 'sv', iso: 'sv', name: 'Swedish' },
  { value: 'ta', iso: 'lk', name: 'Tamil' },
  { value: 'th', iso: 'th', name: 'Thai' },
  { value: 'tr', iso: 'tr', name: 'Turkish' },
  { value: 'uk', iso: 'ua', name: 'Ukranian' },
  { value: 'vi', iso: 'vi', name: 'Vietnamese' },
  { value: 'zh', iso: 'cn', name: 'Chinese' },
];

function renderCountry(option: any) {
  const imgStyle = {
    borderRadius: '50%',
    verticalAlign: 'middle',
    marginRight: 10,
    width: '25px',
    height: '25px',
  };

  return (
    <span>
      <span
        style={imgStyle}
        className={'flag-icon flag-icon-squared flag-icon-' + option.iso}
      />
      <span>{option.name}</span>
    </span>
  );
}

class LanguageChanger extends React.Component<any, LanguageChangerProps> {
  flagInput: any;

  constructor(props: object) {
    super(props);
    this.flagInput = React.createRef();
  }

  setFlag = (option: any) => {
    const flag = this.flagInput.current.componentNode;
    // const select = flag.childNodes[1];
    if (flag.childNodes[0].nodeName === 'I') {
      flag.childNodes[0].remove();
    }
    let el = document.createElement('i');
    el.classList.add(
      'flag-icon',
      'flag-icon-squared',
      'flag-icon-' + option.iso
    );
    flag.insertAdjacentElement('afterbegin', el);
    // select.innerHTML =
    //   '<i class="flag-icon flag-icon-squared flag-icon-' +
    //   option.iso +
    //   '"></i>';
  };

  selectFlag = (option: any, state: object, props: any) => {
    this.setFlag(option);
    this.props.langSelect(option);
  };

  render() {
    // function lang(langCode: any) {
    //   if (langCode) {
    //     strings.setLanguage(langCode);
    //   }
    //
    //   return strings.getLanguage();
    // }
    console.warn(this.flagInput);
    return (
      <div>
        <SelectSearch
          name="countries"
          multiple={false}
          search={false}
          height={172}
          options={options}
          renderOption={renderCountry}
          // renderValue={this.setFlag}
          value={this.props.lang._language}
          onChange={this.selectFlag}
          ref={this.flagInput}
        />
      </div>
    );
  }
}

export default LanguageChanger;
