import React, { useEffect, useState } from "react";
import platformData from "./platform_data.json"; // Import JSON

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
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("platform");
      const navbar = document.getElementById("platform-navbar");

      if (section && navbar) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const currentScroll = window.scrollY;

        if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="platform" className="relative flex min-h-screen flex-col md:flex-row">
      {/* Navbar */}
      <div
        id="platform-navbar"
        className={`relative top-14 transition-all duration-300 h-[80vh] ${
          isFixed ? "sticky" : "relative"
        } w-64 bg-gray-100 shadow-md overflow-y-auto`}
      >
        <ul className="p-4">
          {platformData.map((category) => (
            <li key={category.category} className="mb-4">
              <h3 className="mb-2 text-sm font-bold uppercase">{category.category}</h3>
              {category.sections.map((section) => (
                <ul key={section.id} className="ml-4">
                  <li className="mb-2">
                    <a
                      href={`#${section.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {section.header}
                    </a>
                  </li>
                  {section.subSections.map((subSection) => (
                    <li key={subSection.id} className="ml-4">
                      <a
                        href={`#${subSection.id}`}
                        className="text-gray-700 text-sm hover:underline"
                      >
                        {subSection.header}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        {platformData.map((category) => (
          <div key={category.category}>
            {category.sections.map((section) => (
              <div key={section.id} id={section.id} className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">{section.header}</h2>
                {section.subSections.map((subSection) => (
                  <div key={subSection.id} id={subSection.id} className="mb-6">
                    <h3 className="mb-2 text-xl font-semibold">
                      {subSection.header}
                    </h3>
                    {subSection.content.map((content, index) => {
                      if (content.type === "paragraph") {
                        return (
                          <p key={index} className="mb-4">
                            {content.text}
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
        ))}
      </div>
    </div>
  );
};

export default Platform;
