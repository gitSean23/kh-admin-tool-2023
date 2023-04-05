import { generateRandomSponsors } from "@/types";
import { SponsorsTable } from "./SponsorsTable";

export default function Sponsors() {
  const data = generateRandomSponsors(10);

  return (
    <div className="px-10">
      <div className="mb-4 mt-7 text-2xl font-semibold text-[#a4a4a4]">
        Sponsors
      </div>
      <SponsorsTable data={data} />
    </div>
  );
}
