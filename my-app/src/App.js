import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ComponentLoading from './Common/Components/ComponentLoading';

const Library = React.lazy(() => import('./Library/Components'));

function App() {
  return (
    <>
      <Router>
        <React.Suspense fallback={<ComponentLoading />}>
          <Switch>
            <Route exact path="/" component={Library} />
          </Switch>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
