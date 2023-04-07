import { Hackathon } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export function AttendeeForm({ hackathon }: { hackathon?: Hackathon | null }) {
  const { register, handleSubmit } = useForm<Hackathon>();
  const onSubmit: SubmitHandler<Hackathon> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border bg-[#fbfbfb] px-5 font-bold text-[#4b4b4b]">
        Confirm Changes
      </button>
    </form>
  );
}
