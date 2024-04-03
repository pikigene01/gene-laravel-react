import React from "react";

export const AppContext = React.createContext();
export default function AppProvider({ children }) {
  const values = {};
  return <AppContext.Provider value={values}>AppProvider</AppContext.Provider>;
}
