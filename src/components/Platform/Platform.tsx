import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faNetworkWired, faHandshake } from '@fortawesome/free-solid-svg-icons';
import InfoSlide from "./InfoSlide";


const Platform = () => {
  const pillars = [
    {
      title: "Communication",
      brief:
        "Making the USC more accessible and known by the student body. Publicizing councillor activities and engaging with students through coffee chats and social media.",
      bgColor: "bg-green-custom",
      textColor: "text-green-custom",
      icon: faVolumeHigh,
      content: `I will work towards this by publicising my activities as a councillor on social media...`,
    },
    {
      title: "Engagement",
      brief:
        "Supporting non-USC affiliated clubs and giving a voice to smaller departments. Promoting networking opportunities and collaboration across the Social Science faculty.",
      bgColor: "bg-blue-custom",
      textColor: "text-blue-custom",
      icon: faNetworkWired,
      content: `Faculty clubs and unofficial clubs add a lot of value to student life but often find it difficult to promote themselves...`,
    },
    {
      title: "Serving Students",
      brief:
        "Raising awareness about USC services like food banks and exam shuttles. Improving campus eateries and ensuring USC services meet student needs.",
      bgColor: "bg-pink-custom",
      textColor: "text-pink-custom",
      icon: faHandshake,
      content: `Many students probably are confused about or haven’t even heard of some services, like: The schedule of the exam season shuttle...`,
    },
  ];

  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setSelectedPillar(selectedPillar === index ? null : index); // Toggle slide
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-white-custom">
      <h1 className="mx-auto my-auto text-3xl font-bold text-black-custom sm:text-4xl md:text-5xl lg:text-7xl">
        Platform
      </h1>
      <div className="my-auto flex flex-wrap justify-center gap-6 p-6">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="group relative flex cursor-pointer flex-col justify-between rounded-lg bg-white-custom shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:w-[300px] md:w-[350px]"
            onClick={() => handleCardClick(index)}
          >
            <div className={`h-8 w-full rounded-t-lg ${pillar.bgColor} sm:h-12`}></div>
            <div className="relative mb-auto flex flex-col p-6">
              <FontAwesomeIcon
                icon={pillar.icon}
                className={`absolute -top-4 text-2xl p-2 bg-white-custom ${pillar.textColor} rounded-lg`}
              />
              <h2 className="group-hover:text-red-500 mb-4 text-2xl font-bold text-black-custom">
                {pillar.title}
              </h2>
              <p className="text-gray-700">{pillar.brief}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedPillar !== null && (
        <InfoSlide
          title={pillars[selectedPillar].title}
          content={pillars[selectedPillar].content}
          isVisible={selectedPillar !== null}
          onClose={() => setSelectedPillar(null)}
        />
      )}
    </div>
  );
};

export default Platform;
