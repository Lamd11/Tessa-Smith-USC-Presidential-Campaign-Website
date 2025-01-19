import React, { useEffect, useState } from "react";
import platformData from "./platform_data.json"; // Import JSON

export interface SubSection {
  id: string;
  header: string;
  content: string;
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
        } w-64 bg-gray-100 shadow-md overflow-hidden`}
      >
        <div className="h-full overflow-y-auto p-4">
          {platformData.map((category: PlatformCategory) => (
            <div key={category.category} className="mb-6">
              <h3 className="mb-2 text-lg font-bold">{category.category}</h3>
              {category.sections.map((section) => (
                <div key={section.id} className="mb-4">
                  <a
                    href={`#${section.id}`}
                    className="text-blue-500 mb-1 block hover:underline"
                  >
                    {section.header}
                  </a>
                  {section.subSections.map((subSection) => (
                    <a
                      key={subSection.id}
                      href={`#${subSection.id}`}
                      className="text-gray-500 block pl-4 hover:underline"
                    >
                      {subSection.header}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mt-14 flex-1 p-8">
        {platformData.map((category: PlatformCategory) =>
          category.sections.map((section) => (
            <div key={section.id} id={section.id} className="mb-16">
              <h2 className="mb-4 text-2xl font-bold">{section.header}</h2>
              {section.subSections.map((subSection) => (
                <div key={subSection.id} id={subSection.id} className="mb-8">
                  <h3 className="mb-2 text-xl font-semibold">
                    {subSection.header}
                  </h3>
                  <p className="text-gray-700">
                    {/* Add content for each subsection here */}
                    {subSection.content}
                  </p>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Platform;
