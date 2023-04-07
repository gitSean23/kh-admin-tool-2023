import Link from "next/link";
import { CreateHackathonButton } from "./CreateHackathonButton";
import { HackathonTable } from "./HackathonsTable";

export const metadata = {
  title: "Home",
};

function HackathonAnalyticsIcon() {
  return (
    <svg
      width="25"
      height="20"
      viewBox="0 0 25 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.15108 19.3802C2.49136 19.3802 1.92712 19.1458 1.45837 18.6771C0.989624 18.2083 0.755249 17.6441 0.755249 16.9844C0.755249 16.3073 0.989624 15.73 1.45837 15.2526C1.92712 14.7752 2.49136 14.5365 3.15108 14.5365C3.27261 14.5365 3.3898 14.5495 3.50264 14.5755C3.61549 14.6016 3.77608 14.6319 3.98442 14.6667L8.099 10.526C8.06428 10.3351 8.03823 10.1832 8.02087 10.0703C8.00351 9.95747 7.99483 9.84028 7.99483 9.71875C7.99483 9.04167 8.23355 8.46875 8.71098 8C9.18841 7.53125 9.76566 7.29688 10.4427 7.29688C11.1025 7.29688 11.6667 7.53559 12.1355 8.01302C12.6042 8.49045 12.8386 9.05903 12.8386 9.71875C12.8386 9.85764 12.8039 10.1094 12.7344 10.474L14.8698 12.6094C15.0434 12.5747 15.1867 12.5486 15.2995 12.5312C15.4124 12.5139 15.5209 12.5052 15.625 12.5052C15.7292 12.5052 15.8421 12.5139 15.9636 12.5312C16.0851 12.5486 16.2327 12.5747 16.4063 12.6094L19.5313 9.51042C19.4966 9.33681 19.4705 9.18924 19.4532 9.06771C19.4358 8.94618 19.4271 8.82465 19.4271 8.70312C19.4271 8.02604 19.6658 7.45747 20.1433 6.9974C20.6207 6.53733 21.1893 6.30729 21.849 6.30729C22.5261 6.30729 23.0947 6.54167 23.5547 7.01042C24.0148 7.47917 24.2448 8.0434 24.2448 8.70312C24.2448 9.38021 24.0105 9.95312 23.5417 10.4219C23.073 10.8906 22.5087 11.125 21.849 11.125C21.7275 11.125 21.6059 11.1163 21.4844 11.099C21.3629 11.0816 21.2153 11.0556 21.0417 11.0208L17.9427 14.1458C17.9775 14.3194 18.0035 14.467 18.0209 14.5885C18.0382 14.7101 18.0469 14.8316 18.0469 14.9531C18.0469 15.5955 17.8125 16.1554 17.3438 16.6328C16.875 17.1102 16.3021 17.349 15.625 17.349C14.9653 17.349 14.3967 17.1102 13.9193 16.6328C13.4419 16.1554 13.2032 15.5955 13.2032 14.9531C13.2032 14.8142 13.2118 14.6884 13.2292 14.5755C13.2466 14.4627 13.2726 14.3108 13.3073 14.1198L11.224 12.0365C11.033 12.0712 10.8811 12.0972 10.7683 12.1146C10.6554 12.1319 10.5382 12.1406 10.4167 12.1406C10.2778 12.1406 10.0261 12.1059 9.6615 12.0365L5.46879 16.2292C5.50351 16.4028 5.5339 16.5417 5.55994 16.6458C5.58598 16.75 5.599 16.8629 5.599 16.9844C5.599 17.6441 5.36028 18.2083 4.88285 18.6771C4.40542 19.1458 3.82817 19.3802 3.15108 19.3802ZM4.16671 8.05208L3.48962 6.59375L2.03129 5.91667L3.48962 5.23958L4.16671 3.78125L4.84379 5.23958L6.30212 5.91667L4.84379 6.59375L4.16671 8.05208ZM15.625 6.95833L14.6094 4.74479L12.3959 3.72917L14.6094 2.6875L15.625 0.5L16.6667 2.6875L18.8542 3.72917L16.6667 4.74479L15.625 6.95833Z"
        fill="#505050"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.938 17.02a1.887 1.887 0 0 1-1.386-.572 1.887 1.887 0 0 1-.573-1.386V2.937c0-.541.191-1.007.573-1.395A1.87 1.87 0 0 1 2.937.958h5.626v1.98H2.936v12.124h12.126V9.437h1.979v5.625a1.87 1.87 0 0 1-.584 1.386 1.922 1.922 0 0 1-1.395.573H2.937Zm4.5-5.083-1.355-1.375 7.625-7.625H9.812V.958h7.23v7.23h-1.98V4.311l-7.624 7.625Z"
        fill="#505050"
      />
    </svg>
  );
}

export default function Home() {
  let username = "John Doe";

  const links = [
    { route: "/hackathon", buttonText: "Hackathon" },
    { route: "/attendees", buttonText: "Attendees" },
    { route: "/sponsors", buttonText: "Sponsors" },
    { route: "/events", buttonText: "Schedule" },
  ];

  return (
    <div className="mx-10 mt-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Profile goes here */}
          <div />
          <div className="text-4xl font-bold">Welcome, {username}.</div>
        </div>

        <Link
          href="/hackathon"
          className="flex h-11 items-center gap-2 whitespace-nowrap rounded-lg border bg-[#fbfbfb] px-5 font-bold text-[#4b4b4b]"
        >
          <HackathonAnalyticsIcon />
          <div>Hackathon Analytics</div>
        </Link>
      </div>

      <div className="mt-7 text-2xl font-semibold text-[#a4a4a4]">
        Upcoming Hackathon
      </div>

      <div className="mt-5 rounded-lg border bg-[#fbfbfb] p-5">
        <div className="text-2xl font-bold text-[#4b4b4b]">Fall 2022</div>
        <div className="mt-3 flex flex-wrap gap-4">
          {links.map(({ route, buttonText }) => (
            <Link
              key={route}
              href={route}
              className="flex h-11 items-center gap-2 rounded-lg border px-5 font-bold text-[#4b4b4b]"
            >
              <Arrow />
              {buttonText}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-between">
        <div className="text-2xl font-semibold text-[#a4a4a4]">
          Recent Hackathons
        </div>
        <CreateHackathonButton />
      </div>

      {/* Table Component */}
      <HackathonTable />
    </div>
  );
}
