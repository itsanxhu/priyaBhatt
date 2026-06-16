import { Dot } from "lucide-react";
const Experience = () => {
  const data = [
    {
      id: 1,
      name: "SAY Design Studio",
      role: "Product Designer",
      period: "Dec 2023 - Present",
      logo: "/ex1.png",
    },
    {
      id: 2,
      name: "Unsiloed",
      role: "Product Designer (Freelance)",
      period: "Sep 2025 - Present",
      logo: "/ex2.png",
    },
    {
      id: 3,
      name: "AccioJob",
      role: "Product Designer (xSAY Design)",
      period: "Jul 2024 - Apr 2025",
      logo: "/ex5.png",
    },
    {
      id: 4,
      name: "Hatica",
      role: "Product Designer (xSAY Design)",
      period: "Feb 2024 - May 2024",
      logo: "/ex33.png",
    },
    {
      id: 5,
      name: "Kniru",
      role: "UX Designer (xSAY Design)",
      period: "May 2023 - Nov 2023",
      logo: "/ex4.png",
    },
  ];
  return (
    <div className="h-80 px-10 flex flex-col">
      <p className="pb-5 text-neutral-500/70 tracking-wider leading-none">
        EXPERIENCE
      </p>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="flex cursor-pointer h-10 justify-between items-center px-3 py-7 border-b hover:scale-95 transition-transform duration-200 hover:bg-neutral-200/30 border-neutral-600/20"
          >
            <div className="flex items-center justify-center gap-3">
              <img className="w-7" src={item.logo} alt="" />
              <div className="flex gap-3">
                <h1 className="font-semibold text-neutral-500">{item.name}</h1>
                <Dot className="text-neutral-500/60" strokeWidth={3} />
                <p className="text-neutral-500/70 tracking-tight">
                  {item.role}
                </p>
              </div>
            </div>
            <p className="text-center col-span-5 text-neutral-500/70 italic tracking-tight text-sm">
              {item.period}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
