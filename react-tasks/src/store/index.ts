import { configureStore } from '@reduxjs/toolkit';

import MainReducer from './MainState/reducer';
import SearchReducer from './SearchState/reducer';
import FormReducer from './FormState/reducer';
import CharacterReducer from './CharacterState/reducer';

export const store = configureStore({
  reducer: {
    MainState: MainReducer,
    SearchState: SearchReducer,
    FormState: FormReducer,
    CharacterState: CharacterReducer,
  },
});
