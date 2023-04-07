import { Navbar } from "@/app/Navbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Check if user is logged in
  const hasToken = cookies().has("token") || true;

  if (!hasToken) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
