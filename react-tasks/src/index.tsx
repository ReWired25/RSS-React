import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppContext } from 'context';
import { initSearchState } from 'context/SearchState';
import { initMainState } from 'context/MainState';
import { initFormState } from 'context/FormState';
import { SearchReducer } from 'context/SearchState/reducer';
import { MainReducer } from 'context/MainState/reducer';
import { FormReducer } from 'context/FormState/reducer';
import App from 'App';

import './index.css';

const AppWrapper = () => {
  const [SearchState, SearchDispatch] = useReducer(SearchReducer, initSearchState);
  const [MainState, MainDispatch] = useReducer(MainReducer, initMainState);
  const [FormState, FormDispatch] = useReducer(FormReducer, initFormState);

  const contextValue = {
    SearchState,
    MainState,
    FormState,
    SearchDispatch,
    MainDispatch,
    FormDispatch,
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppContext.Provider value={contextValue}>
          <App />
        </AppContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<AppWrapper />);
