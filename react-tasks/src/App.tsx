import React, { useReducer } from 'react';

import RoutesPages from 'components/RoutesPages';

import { pagesForRoutes } from 'constants/RoutesPages';

interface Iaction {
  type: string;
}

interface IstateObject {
  value: string;
}

export interface Icontext {
  state: IstateObject;
  dispatch: React.Dispatch<Iaction>;
}

const reducer = (state: IstateObject, action: Iaction) => {
  switch (action.type) {
    case 'num':
      return { ...state, value: 'its num' };
    case 'str':
      return { ...state, value: 'its string' };
    case 'clear':
      return { ...state, value: 'its clear' };
    default:
      return state;
  }
};

const currentState = {
  value: 'standart',
};

export const TestContext = React.createContext<Icontext | null>(null);

const App = () => {
  const [state, dispatch] = useReducer(reducer, currentState);

  return (
    <TestContext.Provider value={{ state, dispatch }}>
      <RoutesPages pages={pagesForRoutes} />
    </TestContext.Provider>
  );
};

export default App;
