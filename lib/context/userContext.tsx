"use client"

import { createContext, useContext, useState, ReactNode } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const UserContext = createContext({});

export const UserContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user, error, isLoading, } = useUser();

  return (
    <UserContext.Provider value={{ user, error, isLoading, sessionExist: user?.email }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUserContext must be used within a UserProvider");
  return context;
};
