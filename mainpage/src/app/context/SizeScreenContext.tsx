"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const ScreenSizeContext = createContext<boolean>(false);

export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={isMobile}>
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useIsMobile = (): boolean => {
  const context = useContext(ScreenSizeContext);
  if (context === undefined) {
    throw new Error("useIsMobile must be used within a ScreenSizeProvider");
  }
  return context;
};

// interface ScreenSizeContextType {
//   isMobile: boolean;
//   setMobile: (isMobile: boolean) => void;
// }

// const ScreenSizeContext = createContext<ScreenSizeContextType | undefined>(
//   undefined
// );

// export const ScreenSizeProvider = ({ children }: { children: ReactNode }) => {
//   const [isMobile, setMobile] = useState(false);

//   return (
//     <ScreenSizeContext.Provider value={{ isMobile, setMobile }}>
//       {children}
//     </ScreenSizeContext.Provider>
//   );
// };

// export const useScreenSize = (): ScreenSizeContextType => {
//   const context = useContext(ScreenSizeContext);
//   if (!context) {
//     throw new Error("useScreenSize must be used within a ScreenSizeProvider");
//   }
//   return context;
// };
