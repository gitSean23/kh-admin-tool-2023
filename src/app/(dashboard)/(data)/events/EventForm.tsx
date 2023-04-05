import { Event } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export function EventForm({ event }: { event?: Event | null }) {
  const { register, handleSubmit } = useForm<Event>();
  const onSubmit: SubmitHandler<Event> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="rounded border px-3 py-2"
          id="name"
          value={event?.name}
          {...register("name", { value: event?.name })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          className="rounded border px-3 py-2"
          id="description"
          value={event?.name}
          {...register("description", { value: event?.description })}
        ></textarea>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="location">
          Location
        </label>
        <input
          className="rounded border px-3 py-2"
          id="location"
          value={event?.location}
          {...register("name", { value: event?.location })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="startTime">
          Start Time
        </label>
        <input
          className="rounded border px-3 py-2"
          id="startTime"
          type="date"
          value={event?.name}
          {...register("name", { value: event?.name })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="endTime">
          End Time
        </label>
        <input
          className="rounded border px-3 py-2"
          id="endTime"
          type="date"
          value={event?.name}
          {...register("name", { value: event?.name })}
        />
      </div>
      <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border bg-[#fbfbfb] px-5 font-bold text-[#4b4b4b]">
        Confirm Changes
      </button>
    </form>
  );
}
