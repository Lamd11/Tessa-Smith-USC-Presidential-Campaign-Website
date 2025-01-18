import React from "react";

interface InfoSlideProps {
  title: string;
  content: string;
  isVisible: boolean;
  onClose: () => void;
}

const InfoSlide: React.FC<InfoSlideProps> = ({ title, content, isVisible, onClose }) => {
  return (
    <div
      className={`w-full bg-white-custom  transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="p-6">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-red-500 absolute right-4 top-4 text-xl font-bold"
        >
          ×
        </button>
        <h2 className="mb-4 text-3xl font-bold text-black-custom">{title}</h2>
        <p className="text-gray-700 whitespace-pre-line">{content}</p>
      </div>
    </div>
  );
};

export default InfoSlide;
