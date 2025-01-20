import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUsers, faGlobe } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from "react-markdown";
import platformData from "./platform_data.json"; // Import JSON data

export interface SubSection {
  id: string;
  header: string;
  content: { type: string; text?: string; items?: string[] }[];
}

export interface Section {
  id: string;
  header: string;
  subSections: SubSection[];
}

export interface PlatformCategory {
  category: string;
  sections: Section[];
}

const Platform = () => {
  const pillars = [
    {
      title: "Supports",
      brief: "Enhancing student well-being by improving access to resources, helping students thrive on campus, off campus, and after graduation",
      bgColor: "bg-dark-pink-custom",
      textColor: "text-dark-pink-custom",
      icon: faBook,
      category: "Supports", // Corresponds to category in JSON
    },
    {
      title: "Community",
      brief: "Keeping in mind that the USC exists to serve students and improve campus unity, fostering stronger student connections through strategic engagement and school spirit initiatives",
      bgColor: "bg-pink-custom",
      textColor: "text-pink-custom",
      icon: faUsers,
      category: "Community", // Corresponds to category in JSON
    },
    {
      title: "Culture",
      brief: "Celebrate diversity by supporting multicultural events, Indigenous initiatives, and international student needs while ensuring inclusivity for affiliates and smaller faculties",
      bgColor: "bg-light-pink-custom",
      textColor: "text-light-pink-custom",
      icon: faGlobe,
      category: "Culture", // Corresponds to category in JSON
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<PlatformCategory | null>(null);

  const handleCardClick = (categoryName: string) => {
    const foundCategory = platformData.find((cat) => cat.category === categoryName);
    setSelectedCategory(selectedCategory?.category === categoryName ? null : foundCategory || null);
  };

  return (
    <div className="flex h-full flex-col bg-white-custom">
      <div className="flex w-full flex-col items-center">
        {/* Header */}
      <h1 className="mx-auto mt-8 text-3xl font-bold text-black-custom sm:mt-20 sm:text-4xl md:text-5xl lg:text-7xl">
        Platform
      </h1>

      {/* Pillars */}
      <div className="mt-8 flex flex-wrap justify-center gap-6 p-6 sm:mt-20">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className="group relative flex cursor-pointer flex-col justify-between rounded-lg bg-white-custom shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg sm:w-[300px] md:w-[350px]"
            onClick={() => handleCardClick(pillar.category)}
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
          {/* Selected Category Content */}
      {selectedCategory && (
        <div className="mt-8 w-full px-4 sm:w-10/12">
          <h2 className="mb-4 text-3xl font-bold">{selectedCategory.category}</h2>
          {selectedCategory.sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-8">
              <h3 className="mb-2 text-2xl font-semibold">{section.header}</h3>
              {section.subSections.map((subSection) => (
                <div key={subSection.id} id={subSection.id} className="mb-6">
                  <h4 className="mb-2 text-xl font-semibold">{subSection.header}</h4>
                  {subSection.content.map((content, index) => {
                    if (content.type === "paragraph") {
                      return (
                        <p key={index} className="mb-4">
                          <ReactMarkdown>{content.text}</ReactMarkdown>
                        </p>
                      );
                    } else if (content.type === "list" && content.items) {
                      return (
                        <ul key={index} className="mb-4 ml-8 list-disc">
                          {content.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Platform;
