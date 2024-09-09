"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface LoadingContextType {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const LoadingProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ loading: isLoading, setLoading: setIsLoading }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading must be used within a LoadingProvider");
  return context;
};

// === START (create tag cover element that want to use Provider) ===
// <LoadingProvider>...</LoadingProvider>

// === GET LOADING STATE (component must have "use client") ===
// const { loading } = useLoading();

// === UPDATE LOADING STATE (component must have "use client") ===
// const { setLoading } = useLoading();
// const handleAction = async () => {
//   setLoading(true);
//   try {
//     // simulate an API call
//     await new Promise((resolve) => setTimeout(resolve, 2000));
//   } finally {
//     setLoading(false);
//   }
// };
