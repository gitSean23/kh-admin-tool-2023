import Link from "next/link";

export function InfoHeader() {
  return (
    <div className="flex h-36 items-center justify-between border-b bg-[#fbfbfb] px-10 whitespace-nowrap">
      <div>
        <div className="text-3xl font-bold text-[#4b4b4b]">Fall 2022</div>
        <div className="text-xl font-medium text-[#8d8d8d]">March 25-26</div>
      </div>
      <div className="flex gap-4">
        <Link
          href="/attendees"
          className="flex h-24 w-52 flex-col justify-center rounded-lg border bg-white p-6 text-left"
        >
          <div className="text-4xl font-bold text-[#4b4b4b]">0</div>
          <div className="text-2xl font-medium text-[#8d8d8d]">Attendees</div>
        </Link>
        <Link
          href="/sponsors"
          className="flex h-24 w-52 flex-col justify-center rounded-lg border bg-white p-6 text-left"
        >
          <div className="text-4xl font-bold text-[#4b4b4b]">0</div>
          <div className="text-2xl font-medium text-[#8d8d8d]">Sponsors</div>
        </Link>
        <Link
          href="/events"
          className="flex h-24 w-52 flex-col justify-center rounded-lg border bg-white p-6 text-left"
        >
          <div className="text-4xl font-bold text-[#4b4b4b]">0</div>
          <div className="text-2xl font-medium text-[#8d8d8d]">Events</div>
        </Link>
      </div>
    </div>
  );
}
