import { SidebarActionTypes } from './sidebar.types';

export type SidebarReducerType = {
  isSidebarOpen: boolean;
}

const initialState: SidebarReducerType = {
  isSidebarOpen: true,
};

export const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SidebarActionTypes.OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.payload.isSidebarOpen,
      };
    case SidebarActionTypes.CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: action.payload.isSidebarOpen,
      };
    default:
      return state;
  }
};
