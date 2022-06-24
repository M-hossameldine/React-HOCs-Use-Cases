import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

import ShowListWithLoadingExample from './use-cases/ShowLoaderWhileWaitingDataExample';
import MyProtectedComponent from './use-cases/ConditionallyRenderComponentExample';
import ProvideSpecificStylingExample from './use-cases/ProvideSpecificStylingExample';
import ProvideComponentsWithReusabelPropsExample from './use-cases/ProvideComponentsWithReusabelPropsExample';
import ClassComponentHocExample from './use-cases/ClassComponentHockExample';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavLink
          activeClassName='active'
          className='App-link'
          to='/loader-example'
        >
          Use Case 1 - Show a loader while a component waits for data
        </NavLink>
        <NavLink
          activeClassName='active'
          className='App-link'
          to='/protected-componemt-example'
        >
          Use Case 2 - Conditionally Render Components (Protected Components)
        </NavLink>
        <NavLink
          activeClassName='active'
          className='App-link'
          to='/specific-styling-example'
        >
          Use Case 3 - Provide Components with Specific Styling
        </NavLink>
        <NavLink
          activeClassName='active'
          className='App-link'
          to='/reusable-props-example'
        >
          Use Case 4 - Provide A Component With Any Rusable Props You Want
        </NavLink>
        <NavLink
          activeClassName='active'
          className='App-link'
          to='/class-component-example'
        >
          Example 5 - Using class component example
        </NavLink>
      </header>

      <div className='App-body'>
        <Routes>
          {/* Use Case 1 - Show a loader while a component waits for data */}
          <Route
            path='/loader-example'
            element={<ShowListWithLoadingExample />}
          />
          {/* Use Case 2 - Conditionally Render Components (Protected Components) */}
          <Route
            path='/protected-componemt-example'
            element={<MyProtectedComponent isAuthenticated={false} />}
          />
          {/* Use Case 3 - Provide Components with Specific Styling */}
          <Route
            path='/specific-styling-example'
            element={<ProvideSpecificStylingExample />}
          />
          {/* Use Case 4 - Provide A Component With Any Rusable Props You Want */}
          <Route
            path='reusable-props-example'
            element={
              <>
                <ProvideComponentsWithReusabelPropsExample />
                <ProvideComponentsWithReusabelPropsExample name='Team Leader' />
              </>
            }
          />
          {/* Example 5 - Class component example */}
          <Route
            path='/class-component-example'
            element={<ClassComponentHocExample />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
