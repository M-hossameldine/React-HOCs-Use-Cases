/*
 # Provide Components With Specific Styling #

 based on whatever UI state you get from the HOC, you can render specific styles for specific UI states. For example, if the need arises in multiple places for styles like backgroundColor, fontSize and so on, they can be provided via a HOC by wrapping the component with one that just injects props with the specific className.
*/

const HelloComponent = ({ name, ...otherProps }) => {
  return <p {...otherProps}> Hello {name} </p>;
};

// withStyle HOC adds some styling to the "hello" text.
const withStyle = (BaseComponent) => (props) => {
  return (
    <BaseComponent {...props} style={{ fontWeight: '700', color: 'green' }} />
  );
};

const EnhancedHello = withStyle(HelloComponent);

const ShowCustomizedHello = () => {
  return <EnhancedHello name='Ali' />;
};

export default ShowCustomizedHello;
