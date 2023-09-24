import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/productReducer";
import apiData from "../api.json"


// const API = apiData;

const AppContext = createContext();
const initialState = {
  isLoading: false,
  isError: false,
  products: apiData,
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <AppContext.Provider value={{ ...state}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
