import React from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';
import { Provider } from 'react-redux'

import output from './store'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/Loading';

const { persistor, store } = output
function App() {
  return (

    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <div className="App">
          <div className="container">
            <Postform />
            <hr/>
            <Posts />
          </div>
        </div>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
