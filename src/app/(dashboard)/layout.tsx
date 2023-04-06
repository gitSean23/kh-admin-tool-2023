import { Navbar } from "@/lib/Navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Check if user is logged in

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
