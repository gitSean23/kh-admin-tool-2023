import { Attendee } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export function AttendeeForm({ attendee }: { attendee?: Attendee | null }) {
  const { register, handleSubmit } = useForm<Attendee>();
  const onSubmit: SubmitHandler<Attendee> = (data) => {
    console.log(data);
  };

  // TODO: Add functions to handle admit, check in and confirm

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="firstName">
          First Name
        </label>
        <input
          className="rounded border px-3 py-2"
          id="firstName"
          value={attendee?.firstName}
          {...register("firstName", { value: attendee?.firstName })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="rounded border px-3 py-2"
          id="lastName"
          {...register("lastName", { value: attendee?.lastName })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="rounded border px-3 py-2"
          id="email"
          {...register("email", { value: attendee?.email })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="discord">
          Discord
        </label>
        <input
          className="rounded border px-3 py-2"
          id="discord"
          {...register("discord", { value: attendee?.discord })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="school">
          School
        </label>
        <input
          className="rounded border px-3 py-2"
          id="school"
          {...register("school", { value: attendee?.school })}
        />
      </div>
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          className="rounded border border-[#444444] bg-[#444444] px-3 py-1.5 font-bold text-white"
        >
          Admit
        </button>
        <button
          type="button"
          className="rounded border border-[#444444] bg-[#444444] px-3 py-1.5 font-bold text-white"
        >
          Check In
        </button>
        <button
          type="button"
          className="rounded border border-red-500 bg-red-500 px-3 py-1.5 font-bold text-white"
        >
          Delete
        </button>
      </div>
      <button
        type="submit"
        className="flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded border bg-[#fbfbfb] px-5 font-bold text-[#4b4b4b]"
      >
        Confirm Changes
      </button>
    </form>
  );
}
