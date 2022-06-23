import './App.css';

import ShowListWithLoadingExample from './use-cases/ShowLoaderWhileWaitingDataExample';
import MyProtectedComponent from './use-cases/ConditionallyRenderComponentExample';
import ProvideSpecificStylingExample from './use-cases/ProvideSpecificStylingExample';
import ProvideComponentsWithReusabelPropsExample from './use-cases/ProvideComponentsWithReusabelPropsExample';
import ClassComponentHocExample from './use-cases/ClassComponentHockExample';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* Use Case 1 - Show a loader while a component waits for data */}
        {/* <ShowListWithLoadingExample /> */}
        {/* Use Case 2 - Conditionally Render Components (Protected Components) */}
        <MyProtectedComponent isAuthenticated={false} />
        {/*
         *Use Case 3 - Provide Components with Specific Styling
         *based on whatever UI state you get from the HOC, you can render specific styles for specific UI states
         */}
        {/* <ProvideSpecificStylingExample /> */}
        {/* Use Case 4 - Provide A Component With Any Rusable Props You Want */}
        {/* <ProvideComponentsWithReusabelPropsExample /> "Hello New World" */}
        {/* <ProvideComponentsWithReusabelPropsExample name='Team Leader' /> "Hello Team Leader" */}
        {/* <ClassComponentHocExample /> */}
      </header>
    </div>
  );
}

export default App;
