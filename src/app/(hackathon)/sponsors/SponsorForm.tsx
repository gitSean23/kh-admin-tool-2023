import { Sponsor, tiers } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

export function SponsorForm({ sponsor }: { sponsor?: Sponsor | null }) {
  const { register, handleSubmit } = useForm<Sponsor>();
  const onSubmit: SubmitHandler<Sponsor> = (data) => {
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
          value={sponsor?.name}
          {...register("name", { value: sponsor?.name })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          className="rounded border px-3 py-2"
          id="description"
          {...register("description", { value: sponsor?.description })}
        ></textarea>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="startDate">
          Start Date
        </label>
        <input
          className="rounded border px-3 py-2"
          type="date"
          id="startDate"
          {...register("since", { value: sponsor?.since, valueAsDate: true })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1" htmlFor="tier">
          School
        </label>
        <select
          className="rounded border px-3 py-2"
          id="tier"
          {...register("tier", { value: sponsor?.tier })}
        >
          {tiers.map((tier) => (
            <option key={tier} value={tier}>
              {tier}
            </option>
          ))}
        </select>
      </div>
      <button className="mt-4 flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border bg-[#fbfbfb] px-5 font-bold text-[#4b4b4b]">
        Confirm Changes
      </button>
    </form>
  );
}
