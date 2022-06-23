/*
We can study our coee base and note what reusable prop is needed across components. Then, we can have a wrapper HOC to provide those components with the reusable props
*/

// simple component
const HelloComponent = ({ name, otherProps }) => {
  return <p {...otherProps}>Hello {name}</p>;
};

// create a HOC named withNameChange that sets a name prop on a base component to "New World"
// name prop will have a default value "New World" unless a new value is provided in the props
const withNameChange = (BaseComponent) => (props) => {
  return <BaseComponent name='New World' {...props} />;
};

// create a pure component named EnhancedHello2, and warp the HOC around the HelloComponent
const EnhancedHello2 = withNameChange(HelloComponent);

export default EnhancedHello2;
