import React from 'react';

/* 
  we will build a HOC that takes a componet that has a name prop, and then we will make use of the name prop in our HOC
*/
const HelloComponet = ({ name }) => {
  return <h1> Hello {name}! </h1>;
};

// create withName HOC
function withName(WrappedComonent) {
  return class extends React.Component {
    render() {
      return <WrappedComonent name='Smashing Magazine' {...this.props} />;
    }
  };
}

const NewComponent = withName(HelloComponet);

export default NewComponent;
