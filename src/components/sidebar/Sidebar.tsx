import * as React from 'react';
import Nav from '../nav/Nav';

class Sidebar extends React.Component<any, any> {
  state = {
    isOpen: false,
  };

  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="sidebar">
          <Nav />
        </div>
      </div>
    );
  }
}

export default Sidebar;
