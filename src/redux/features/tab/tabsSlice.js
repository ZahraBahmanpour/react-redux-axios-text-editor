import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [],
  activeKey: 1,
};
export const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    openTab: (state, action) => {
      const exist = state.tabs.find((tab) => tab.id === action.payload.id);
      return {
        ...state,
        tabs: exist ? state.tabs : [...state.tabs, action.payload],
        activeKey: action.payload.id,
      };
    },
    closeTab: (state, action) => {
      const { id } = action.payload;
      const isActive = state.activeKey === id;
      return {
        ...state,
        tabs: state.tabs.filter((tab) => tab.id !== id),
        activeKey: isActive ? state.tabs[0].id : state.activeKey,
      };
    },
    activeTab: (state, action) => {
      const { id } = action.payload;
      return { ...state, activeKey: id };
    },
    updateTab: (state, action) => {
      const { id, tempBody, body } = action.payload;
      return {
        ...state,
        tabs: state.tabs.map((tab) =>
          tab.id === id
            ? { ...tab, tempBody, unSaved: tempBody !== body ? true : false }
            : tab
        ),
      };
    },
    saveTab: (state, action) => {
      const { id } = action.payload;
      return {
        ...state,
        tabs: state.tabs.map((tab) =>
          tab.id === id ? { ...tab, unSaved: false } : tab
        ),
      };
    },
  },
});

export const { openTab, closeTab, updateTab, activeTab, saveTab } =
  tabsSlice.actions;

export default tabsSlice.reducer;
