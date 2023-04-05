import { generateRandomAttendees } from "@/types";
import { AttendeesTable } from "./AttendeesTable";

export default function Hackers() {
  const data = generateRandomAttendees(10);

  return (
    <div className="px-10">
      <div className="mb-4 mt-7 text-2xl font-semibold text-[#a4a4a4]">
        Attendees
      </div>
      <AttendeesTable data={data} />
    </div>
  );
}
