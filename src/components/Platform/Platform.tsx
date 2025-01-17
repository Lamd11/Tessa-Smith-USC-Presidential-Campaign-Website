import React from "react";

const Platform = () => {
  const pillars = [
    {
      title: "Communication",
      brief:
        "Making the USC more accessible and known by the student body. Publicizing councillor activities and engaging with students through coffee chats and social media.",
    },
    {
      title: "Engagement",
      brief:
        "Supporting non-USC affiliated clubs and giving a voice to smaller departments. Promoting networking opportunities and collaboration across the Social Science faculty.",
    },
    {
      title: "Serving Students",
      brief:
        "Raising awareness about USC services like food banks and exam shuttles. Improving campus eateries and ensuring USC services meet student needs.",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white-custom">
      <h1 className="mx-auto my-auto text-3xl font-bold text-black-custom sm:text-4xl md:text-5xl lg:text-7xl">
        Platform
      </h1>
      <div className="my-auto flex flex-wrap justify-center gap-6 p-6">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="border-gray-200 bg-white group relative flex flex-col justify-between rounded-lg border p-6 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:w-[300px] md:w-[350px]"
          >
            <h2 className="group-hover:text-red-500 mb-4 text-2xl font-bold text-peach-custom">
              {pillar.title}
            </h2>
            <p className="text-gray-700">{pillar.brief}</p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Platform;
