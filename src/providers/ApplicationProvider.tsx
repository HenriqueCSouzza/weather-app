import { GlobalContext } from "../context/globalContext";

export default function ApplicationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <GlobalContext>{children}</GlobalContext>;
}
