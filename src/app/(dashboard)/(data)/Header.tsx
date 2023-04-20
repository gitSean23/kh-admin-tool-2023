import Link from "next/link";

export function Header() {
  return (
    <div className="flex flex-col justify-between whitespace-nowrap border-b bg-[#fbfbfb] py-4 px-10 lg:flex-row lg:items-center">
      <div className="mb-4 lg:mb-0">
        <div className="text-3xl font-bold text-[#4b4b4b]">Fall 2022</div>
        <div className="text-xl font-semibold text-[#8d8d8d]">March 25-26</div>
      </div>
      <div className="flex gap-4">
        <Link
          href="/attendees"
          className="flex h-24 w-52 flex-col justify-center rounded-lg border bg-white px-5 py-6  text-left"
        >
          <div className="text-4xl font-bold text-[#4b4b4b]">0</div>
          <div className="text-2xl font-semibold text-[#8d8d8d]">Attendees</div>
        </Link>
        <Link
          href="/sponsors"
          className="flex h-24 w-52 flex-col justify-center rounded-lg border bg-white px-5 py-6  text-left"
        >
          <div className="text-4xl font-bold text-[#4b4b4b]">0</div>
          <div className="text-2xl font-semibold text-[#8d8d8d]">Sponsors</div>
        </Link>
        <Link
          href="/events"
          className="flex h-24 w-52 flex-col justify-center rounded-lg border bg-white px-5 py-6  text-left"
        >
          <div className="text-4xl font-bold text-[#4b4b4b]">0</div>
          <div className="text-2xl font-semibold text-[#8d8d8d]">Events</div>
        </Link>
      </div>
    </div>
  );
}
