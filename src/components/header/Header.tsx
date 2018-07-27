import * as React from 'react';
// import Select from 'react-select';
// import SelectSearch from 'react-select-search';
import LanguageChanger from '../languageChanger/LanguageChanger';
import Button from '../button/Button';
import './Header.css';
// import 'flag-icon-css/css/flag-icon.min.css';

const gingrLogo = require('../../assets/img/logo.png');
// const logo = require('../../logo.svg');

const adminIco = 'https://admin.ggcico.io/auth/login';
const whitePaper =
  'https://docs.wixstatic.com/ugd/2eea42_b23b9045b42246c2ac4f7c6cbf5ee65c.pdf';

// const options = [
//   { value: 'en', iso: 'gb', name: 'English' },
//   { value: 'ar', iso: 'ar', name: 'Arabic' },
//   { value: 'bg', iso: 'bg', name: 'Bulgarian' },
//   { value: 'cs', iso: 'cz', name: 'Czech' },
//   { value: 'da', iso: 'dk', name: 'Danish' },
//   { value: 'de', iso: 'de', name: 'German' },
//   { value: 'el', iso: 'gr', name: 'Greek' },
//   { value: 'es', iso: 'es', name: 'Spanish' },
//   { value: 'et', iso: 'et', name: 'Estonian' },
//   { value: 'fi', iso: 'fi', name: 'Finnish' },
//   { value: 'fr', iso: 'fr', name: 'French' },
//   { value: 'hi', iso: 'in', name: 'Hindi' },
//   { value: 'hr', iso: 'hr', name: 'Croatian' },
//   { value: 'hu', iso: 'hu', name: 'Hungarian' },
//   { value: 'it', iso: 'it', name: 'Italian' },
//   { value: 'ja', iso: 'jp', name: 'Japanese' },
//   { value: 'ko', iso: 'kr', name: 'Korean' },
//   { value: 'lt', iso: 'lt', name: 'Lithuanian' },
//   { value: 'ms', iso: 'ms', name: 'Malay' },
//   { value: 'nl', iso: 'nl', name: 'Duth' },
//   { value: 'no', iso: 'no', name: 'Norwegian' },
//   { value: 'pl', iso: 'pl', name: 'Polish' },
//   { value: 'pt', iso: 'pt', name: 'Portuguese' },
//   { value: 'ro', iso: 'ro', name: 'Romanian' },
//   { value: 'ru', iso: 'ru', name: 'Russian' },
//   { value: 'sk', iso: 'sk', name: 'Slovak' },
//   { value: 'sl', iso: 'sl', name: 'Slovenian' },
//   { value: 'sr', iso: 'sr', name: 'Serbian' },
//   { value: 'sv', iso: 'sv', name: 'Swedish' },
//   { value: 'ta', iso: 'lk', name: 'Tamil' },
//   { value: 'th', iso: 'th', name: 'Thai' },
//   { value: 'tr', iso: 'tr', name: 'Turkish' },
//   { value: 'uk', iso: 'ua', name: 'Ukranian' },
//   { value: 'vi', iso: 'vi', name: 'Vietnamese' },
//   { value: 'zh', iso: 'cn', name: 'Chinese' },
// ];

// const LanguageSelector = () => {
//   const langs = options.map((language, i) => {
//     return (
//       <option key={i} value={language.value}>
//         {language.name}
//       </option>
//     );
//   });
//
//   return (
//     <select
//       onChange={e => {
//         console.warn(e.target.value);
//       }}
//     >
//       {langs}
//     </select>
//   );
// };

// function renderCountry(option: any) {
//   const imgStyle = {
//     borderRadius: '50%',
//     verticalAlign: 'middle',
//     marginRight: 10,
//     width: '25px',
//     height: '25px',
//   };
//
//   return (
//     <span>
//       <span
//         style={imgStyle}
//         className={'flag-icon flag-icon-squared flag-icon-' + option.iso}
//       />
//       <span>{option.name}</span>
//     </span>
//   );
// }

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    // this.state = { strings: this.props.lang };
  }

  click(url: string) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <header className="gg-header">
        <div className="gg-header-container">
          <img src={gingrLogo} className="App-logo" alt="logo" />
          {this.props.children}
          <div className="gg-header-container__buttons">
            <Button click={() => this.click(whitePaper)} borderColor="white">
              WHITEPAPER
            </Button>
            <Button click={() => this.click(adminIco)} borderColor="#df9eff">
              LOGIN
            </Button>
          </div>

          <LanguageChanger
            lang={this.props.lang}
            langSelect={this.props.langSelect}
          />

          <div className="nav-mobile">
            <div className="nm-bar nm-bar--1" />
            <div className="nm-bar nm-bar--2" />
            <div className="nm-bar nm-bar--3" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
