import KHLogo from "@/assets/KHLogo.svg";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";
import { GitHub } from "./GitHub";
import { Google } from "./Google";

export default function Login() {
  const hasToken = cookies().has("token") || true;

  if (hasToken) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fbfbfb] pt-20">
      <div className="mb-12 flex items-center gap-4 text-5xl font-extrabold text-[#DBBF4A]">
        <Image src={KHLogo} alt="KnightHacks" width={35} height={34} />
        Admin Tool
      </div>
      <div className="flex w-screen max-w-screen-sm flex-col gap-4 rounded-xl border bg-white px-20 py-14">
        <div className="mb-6 text-center text-4xl font-bold text-[#444444]">
          Sign In
        </div>
        <GitHub />
        <Google />
      </div>
    </div>
  );
}
