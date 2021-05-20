import { SidebarActionTypes } from './sidebar.types';

export const openSidebar = () => ({
  type: SidebarActionTypes.OPEN_SIDEBAR,
  payload: {
    isSidebarOpen: true,
  },
});

export const closeSidebar = () => ({
  type: SidebarActionTypes.CLOSE_SIDEBAR,
  payload: {
    isSidebarOpen: false,
  },
});