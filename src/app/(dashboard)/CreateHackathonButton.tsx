"use client";

export function CreateHackathonIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.91567 12.148H9.19067V9.20838H12.148V7.93338H9.19067V4.85213H7.91567V7.93338H4.85212V9.20838H7.91567V12.148ZM8.50004 16.0261C7.46115 16.0261 6.48424 15.8313 5.56931 15.4417C4.65438 15.0521 3.85455 14.515 3.16983 13.8303C2.48511 13.1455 1.94796 12.3487 1.55837 11.4396C1.16879 10.5306 0.973999 9.55074 0.973999 8.50005C0.973999 7.44935 1.16879 6.46654 1.55837 5.55161C1.94796 4.63668 2.48511 3.83981 3.16983 3.16099C3.85455 2.48217 4.65143 1.94501 5.56046 1.54953C6.46949 1.15404 7.44935 0.956299 8.50004 0.956299C9.55074 0.956299 10.5335 1.15404 11.4485 1.54953C12.3634 1.94501 13.1603 2.48217 13.8391 3.16099C14.5179 3.83981 15.0551 4.63668 15.4506 5.55161C15.846 6.46654 16.0438 7.44935 16.0438 8.50005C16.0438 9.55074 15.846 10.5306 15.4506 11.4396C15.0551 12.3487 14.5179 13.1426 13.8391 13.8214C13.1603 14.5002 12.3634 15.0374 11.4485 15.4329C10.5335 15.8283 9.55074 16.0261 8.50004 16.0261Z"
        fill="#4B4B4B"
      />
    </svg>
  );
}

export function CreateHackathonButton() {
  return (
    <button className="flex h-11 items-center gap-2 self-start whitespace-nowrap rounded-lg border bg-[#fbfbfb] px-5 font-bold text-[#4b4b4b]">
      <CreateHackathonIcon />
      Create Hackathon
    </button>
  );
}
