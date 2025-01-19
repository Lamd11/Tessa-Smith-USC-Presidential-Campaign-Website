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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`${
          isFixed ? "sticky top-0" : "relative"
        } md:sticky md:top-10 w-full md:w-64 bg-gray-100 shadow-md z-50`}
      >
        {/* Mobile Hamburger Menu */}
        <div className="text-white z-10 flex items-center justify-between bg-off-white p-4 md:hidden">
          <h1 className="text-lg font-bold">Platform</h1>
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block h-[80vh] overflow-hidden`}
        >
          <div className="h-full overflow-y-auto bg-off-white p-4">
            {platformData.map((category: PlatformCategory) => (
              <div key={category.category} className="mb-6">
                <h3 className="mb-2 text-lg font-bold">{category.category}</h3>
                {category.sections.map((section) => (
                  <div key={section.id} className="mb-4">
                    <a
                      href={`#${section.id}`}
                      className="text-blue-500 mb-1 block hover:underline"
                      onClick={() => setIsMobileMenuOpen(false)} // Close menu after click on mobile
                    >
                      {section.header}
                    </a>
                    {section.subSections.map((subSection) => (
                      <a
                        key={subSection.id}
                        href={`#${subSection.id}`}
                        className="text-gray-500 block pl-4 hover:underline"
                        onClick={() => setIsMobileMenuOpen(false)} // Close menu after click on mobile
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
