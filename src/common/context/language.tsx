import { Dispatch, SetStateAction, createContext, useState } from "react";

type LanguageContextType = {
  lang: string;
  setLang: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div>{children}</div>
    </LanguageContext.Provider>
  );
};
