import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AppContext } from 'context';
import { initSearchState } from 'context/SearchState';
import { initMainState } from 'context/MainState';
import { initFormState } from 'context/FormState';
import { initCharacterState } from 'context/CharacterState';
import { SearchReducer } from 'context/SearchState/reducer';
import { MainReducer } from 'context/MainState/reducer';
import { FormReducer } from 'context/FormState/reducer';
import { CharacterReducer } from 'context/CharacterState/reducer';
import App from 'App';

import './index.css';

export const AppWrapper = () => {
  const [SearchState, SearchDispatch] = useReducer(SearchReducer, initSearchState);
  const [MainState, MainDispatch] = useReducer(MainReducer, initMainState);
  const [FormState, FormDispatch] = useReducer(FormReducer, initFormState);
  const [CharacterState, CharacterDispatch] = useReducer(CharacterReducer, initCharacterState);

  const contextValue = {
    SearchState,
    MainState,
    FormState,
    CharacterState,
    SearchDispatch,
    MainDispatch,
    FormDispatch,
    CharacterDispatch,
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
