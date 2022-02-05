import { createContext, useState } from 'react';
import { SHOWING_MODES_FILTER } from '../constants/dropdown-options';

const ShowingModeContext = createContext();

const ShowingModeContextProvider = (props) => {
  const { children } = props;

  const [showingMode, setShowingMode] = useState(SHOWING_MODES_FILTER[0]);

  const updateShowingMode = (optionName) => {
    setShowingMode(optionName);
  };

  const contextValue = {
    showingMode,
    updateShowingMode,
  };

  return (
    <ShowingModeContext.Provider value={contextValue}>
      {children}
    </ShowingModeContext.Provider>
  );
};

export { ShowingModeContext };
export default ShowingModeContextProvider;
