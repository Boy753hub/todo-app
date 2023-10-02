import { useContext, useMemo, createContext, useCallback, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

const HeaderContexts = createContext(null);

const HeaderContextProvider = ({ children }) => {
  const [isOpen = true, toggle] = useLocalStorage("tab", true);
  const [changeLan, setLan] = useLocalStorage('lang', 'eng');
  const data = {
    eng: {
      create: 'Create',
      Add: 'Add',
      edit: 'Edit',
      finish: 'Finish',
      delete: 'Delete',
      title: 'To do',
      theme: 'Theme',
      name: 'name',
      lastname: 'lastname',
      task: 'task',
    },
    geo: {
      create: 'შექმენი',
      Add: 'დამატება',
      edit: 'შეცვლა',
      finish: 'დასრულება',
      delete: 'წაშლა',
      title: 'გასაკეთებელი საქმე',
      theme: 'ფონი',
      name: 'სახელი',
      lastname: 'გვარი',
      task: 'საქმე',
    },
  };

  const contextValue = useMemo(() => ({
    isOpen,
    toggle,
    data,
    changeLan,
    setLan
  }), [isOpen, toggle, changeLan, setLan]);

  return (
    <HeaderContexts.Provider value={contextValue}>
      {children}
    </HeaderContexts.Provider>
  );
};

export const useHeaderContext = () => {
  const contextValue = useContext(HeaderContexts);
  if (!contextValue) throw new Error('Your component is not inside of HeaderContextProvider');

  return contextValue;
};

export default HeaderContextProvider;
