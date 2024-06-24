import { getCurrentUserQuery } from "@/lib/react-query/queriesAndMutation";
import { UserContextType, userType } from "@/types";
import { createContext, useEffect, useState } from "react";

const initialUser = {
  _id: "",
  isVerified: true,
  username: "",
  email: "",
  createdAt: "",
  updatedAt: "",
  __v: 0,
};

const initialContext = {
  user: initialUser,
  setUser: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
};

export const userContext = createContext<UserContextType>(initialContext);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userType>(initialUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { mutateAsync: getCurrentUser } = getCurrentUserQuery();

  const authenticateUser = async () => {
    if (localStorage.getItem("accessToken") != "") {
      // get current user
            const curr_user =await getCurrentUser();
            
       // set the user
       if(curr_user){
          setUser(curr_user);
          setIsAuthenticated(true);
       }
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <userContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </userContext.Provider>
  );
}

export default ContextProvider;
