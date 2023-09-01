import {createContext, useState} from 'react';

const UserContext = createContext();

const UserProvider = ({children}) => {
  const [userdata, setUserdata] = useState([]);
  const [token, setToken] = useState('');

  return (
    <UserContext.Provider value={{userdata, setUserdata, token, setToken}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};
