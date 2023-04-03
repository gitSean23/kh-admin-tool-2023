import { generateRandomEvents } from "@/types";
import { EventsTable } from "./EventsTable";

export default function Events() {
  let data = generateRandomEvents(10);

  let events = data.map((event) => ({
    ...event,
    start_date: new Date(event.start_date).toLocaleTimeString(),
    end_date: new Date(event.end_date).toLocaleTimeString(),
  }));

  return (
    <div className="px-10">
      <div className="mb-4 mt-7 text-2xl font-semibold text-[#a4a4a4]">
        Events
      </div>
      <EventsTable data={events} />
    </div>
  );
}
