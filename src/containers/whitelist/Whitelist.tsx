import * as React from 'react';
// import Header from '../../components/header/Header';
// import Nav from '../../components/nav/Nav';

const Whitelist = props => {
  // const items = [{ id: 1, name: props.lang.home, anchor: '/' }];
  console.warn(props);
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        background: '#78006f',
      }}
    >
      {/*<Header lang={props.lang} langSelect={props.langSelect} user={props.user}>
        <Nav items={items} />
      </Header>*/}
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameBorder="0"
        src="https://flavioweidmann.typeform.com/to/dFOBBf"
        style={{ minHeight: '100vh' }}
      />
      <script
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      />
    </div>
  );
};

export default Whitelist;
