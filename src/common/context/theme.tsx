import {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [theme, setTheme] = useState("light");
  const [isThemeLoaded, setIsThemeLoaded] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
    setIsThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (isThemeLoaded) {
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme, isThemeLoaded]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};
