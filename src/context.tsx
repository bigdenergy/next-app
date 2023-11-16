"use client";

import { createContext, useContext, useMemo, useState } from "react";

const Context = createContext<any>({});

export default function CreateContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({name: "guillaume"})
  const [title, setTitle] = useState("Mon super title");

  const GlobalContext = useMemo(
    () => ({
      title,
      setTitle,
      user,
      setUser 
    }),
    [title, setTitle]
  );

  return (
  <Context.Provider value={GlobalContext}>
    {!user && <div>Access denied. You are not connected.</div> }
    {user && <div>{children}</div>}
  </Context.Provider>
  )
}

export const useGlobalContext = () => {
  const globalContext = useContext(Context);
  return globalContext;
};
