const MyProtectedComponent = () => {
  return <div>This is only viewable by authenticated users.</div>;
};

const withAuth = (Component) => {
  return function ({ isAuthenticated, ...props }) {
    const loginErrorMessage = (
      <div>Please login in order to view this part of the application</div>
    );

    return (
      <div>
        {isAuthenticated == true ? <Component {...props} /> : loginErrorMessage}
      </div>
    );
  };
};

// Now wrap MyPrivateComponent with the requireAuthentication function
export default withAuth(MyProtectedComponent);
