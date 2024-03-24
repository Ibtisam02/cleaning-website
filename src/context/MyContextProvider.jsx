import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const [orange,setOrange]=useState("#dd672a")
  const [black,setBlack]=useState("#120d0c")
  const [white,setWhite]=useState("#ffffff")

  return (
    <MyContext.Provider value={{ black,orange,white,state,setState }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;