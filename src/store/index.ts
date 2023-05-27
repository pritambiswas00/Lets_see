import { createContext, Dispatch } from 'react';

type State = {
  count: number;
  current_drive: string;
};

type Action = {
  type: 'INCREMENT' | 'DECREMENT' | 'SET_DRIVE';
  payload: any;
};

export const initialState: State = {
  count: 0,
  current_drive: '',
};

export const MainStoreReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    case 'SET_DRIVE':
      return {
        ...state,
        current_drive: action.payload,
      };
    default:
      return state;
  }
};

export type IStore = {
  state: State;
  dispatch: Dispatch<Action>;
};

export const MainStoreContext = createContext<IStore>({
    state: initialState,
    dispatch: ()=>{}
});