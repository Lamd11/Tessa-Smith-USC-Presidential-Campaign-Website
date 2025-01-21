import React, { useState } from "react";

const roles = [
  {
    title: "UWO Debate Society President",
    img: "/images/roles/uwods.jpg",
    description:
      "As president of the debate society, I lead the executive team in running the society. This includes leading in the creation and management of budgets, financial records, training plans, events, travel to tournaments, and other projects. I also work to create a positive and welcoming environment for all members.",
  },
  {
    title: "VP Logistics of UWO Debate Society",
    img: "/images/roles/uwods.jpg",
    description:
      "I organized the logistics of travelling to competitive debate tournaments including many long-distance and international tournaments. In doing this, I communicated with tournament organizers from other organizations as well as with members of UWODS to coordinate tournament registration, travel details, accommodation, and to solve any issues that arose. I also oversaw the Logistics Director.",
  },
  {
    title: "USC Councillor for Social Science",
    img: "/images/roles/westernusc_logo.jfif",
    description:
      "I am one of seven students representing the faculty of Social Science on the University Students' Council. My responsibilities include communicating with and reaching out to constituents, sitting on council at meetings twice a month, and representing the interests of my constituents.",
  },
  {
    title: "Co-Founder and Co-President of Western Knit and Crochet Club",
    img: "/images/roles/wkcc_logo.jfif",
    description:
      "I was one of the Co-Presidents of the Western Knit and Crochet Club (WKCC), which I helped create. As Co-President, I led discussions within the executive team regarding the direction of the club and projects that we undertook, making sure that everyone's contributions were heard and considered fairly. I also helped lead general meetings of all members which included making any announcements that were necessary, helping members with their knitting and crocheting projects, and ending the meeting.",
  },
  {
    title: "Foot Patroller",
    img: "/images/roles/westernuniversity_logo.jfif",
    description:
      "As a volunteer for Western Foot Patrol, I spend one evening a week patrolling campus to ensure safety and reporting anything suspicious. I am also on call to walk with students who are nervous to walk home alone at night.",
  },
  {
    title: "Housing Operations Committee Representative for Saugeen-Maitland",
    img: "/images/roles/hocr_logo.jfif",
    description:
      "I attended committee meetings and worked with other residence leaders to discuss projects for Western residence halls and provide valuable student input into these decisions. I also managed the allocation of certain funds to purchase items for my residence hall, benefitting the experience of students.",
  },
];

const RoleGrid: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-white-custom px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-center text-6xl font-bold text-black-custom">
          What I've Done
        </h2>
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <div
              key={index}
              className="text-white rounded-lg bg-off-white p-6 shadow-lg"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={role.img}
                  alt={role.title}
                  className="h-20 w-20 rounded-full object-cover"
                />
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">
                {role.title}
              </h3>
              <p className="text-gray-300 text-md">
                {expanded[index]
                  ? role.description
                  : `${role.description.slice(0, 100)}...`}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-white hover:bg-pink-700 mt-8 rounded-full bg-white-custom px-6 py-2 shadow-md transition-all"
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoleGrid;
