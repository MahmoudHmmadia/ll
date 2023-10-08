import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
interface CONTEXT {
  lan: "en" | "ar";
  setLan: Dispatch<SetStateAction<"en" | "ar">>;
}
const context = createContext<CONTEXT>({
  lan: "en",
  setLan: () => {},
});
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [lan, setLan] = useState<"en" | "ar">("en");
  return (
    <context.Provider value={{ lan, setLan }}>{children}</context.Provider>
  );
};
const GlobalContext = () => useContext(context);
export default GlobalContext;
