import { AttendeesTable } from "./AttendeesTable";

export default function Hackers() {
  return (
    <div className="px-10">
      <div className="mb-4 mt-7 text-2xl font-semibold text-[#a4a4a4]">
        Attendees
      </div>
      <AttendeesTable />
    </div>
  );
}