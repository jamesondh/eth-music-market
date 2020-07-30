import React from "react";
import { useMachine } from "@xstate/react";
import { Machine, assign } from "xstate";
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();
const globalMachine = Machine(
  {
    id: "global",
    initial: "loggedOut",
    states: {
      loggedOut: {
        on: { TOGGLE: 'loggedIn' }
      },
      loggedIn: {
        on: { TOGGLE: 'loggedOut' }
      }
    }
  }
);
export const GlobalContextProvider = ({ children }) => {
  const [current, send] = useMachine(globalMachine);
  return (
    <GlobalStateContext.Provider value={current}>
      <GlobalDispatchContext.Provider value={send}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
