import { KHLogo } from "@/lib/KHLogo";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-[#fbfbfb] pt-20">
      <div className="mb-12 flex items-center gap-4 text-5xl font-extrabold text-[#DBBF4A]">
        <KHLogo className="h-12 w-12" />
        Admin Tool
      </div>
      <div className="flex w-screen max-w-screen-sm flex-col gap-4 rounded-xl border bg-white px-20 py-14">
        <div className="mb-8 text-center text-4xl font-bold text-[#444444]">
          Sign In
        </div>
        <button className="rounded-lg border border-[#444444] bg-[#444444] px-4 py-3 font-semibold text-white">
          Continue with GitHub
        </button>
        <button className="rounded-lg border-blue-500 bg-blue-500 px-4 py-3 font-semibold text-white">
          Continue with Google
        </button>
      </div>
    </div>
  );
}
