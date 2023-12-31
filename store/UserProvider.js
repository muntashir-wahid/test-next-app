import { createContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const user = {
    name: "Muntashir Wahid",
    email: "waid.muntasir420@gmail.com",
  };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
