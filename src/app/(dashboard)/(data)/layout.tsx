import { Header } from "./Header";

export default function DataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />  
      {children}
    </>
  );
}
