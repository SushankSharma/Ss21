import React, { useEffect, useState } from "react";

type WelcomeProps = {
  onLoad: () => void; // Define the type of onLoad callback
};

const Welcome: React.FC<WelcomeProps> = ({ onLoad }) => {
  const welcomeTexts = [
    "Hello",
    "स्वागत हे",
    "Bonjour",
    "Ciao",
    "Olá",
    "おい",
    "Hallå",
    "Guten tag",
    "Hallo",
  ];
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowWelcome(false);
      onLoad(); // Callback to notify that the welcome screen is hidden
    }, 5000); // Change the duration to 5 seconds

    const textChangeInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % welcomeTexts.length);
    }, 500); // Change the interval(adjust as needed)

    return () => {
      clearTimeout(delay); // Cleanup the timeout on unmount
      clearInterval(textChangeInterval); // Cleanup the interval on unmount
    };
  }, [welcomeTexts.length, onLoad]);

  const welcomeStyles = {
    background: `
      linear-gradient(315deg, rgba(49, 49, 49,0.07) 0%, rgba(49, 49, 49,0.07) 12.5%,rgba(76, 76, 76,0.07) 12.5%, rgba(76, 76, 76,0.07) 25%,rgba(102, 102, 102,0.07) 25%, rgba(102, 102, 102,0.07) 37.5%,rgba(129, 129, 129,0.07) 37.5%, rgba(129, 129, 129,0.07) 50%,rgba(155, 155, 155,0.07) 50%, rgba(155, 155, 155,0.07) 62.5%,rgba(182, 182, 182,0.07) 62.5%, rgba(182, 182, 182,0.07) 75%,rgba(208, 208, 208,0.07) 75%, rgba(208, 208, 208,0.07) 87.5%,rgba(235, 235, 235,0.07) 87.5%, rgba(235, 235, 235,0.07) 100%),linear-gradient(225deg, rgba(5, 5, 5,0.07) 0%, rgba(5, 5, 5,0.07) 12.5%,rgba(39, 39, 39,0.07) 12.5%, rgba(39, 39, 39,0.07) 25%,rgba(73, 73, 73,0.07) 25%, rgba(73, 73, 73,0.07) 37.5%,rgba(107, 107, 107,0.07) 37.5%, rgba(107, 107, 107,0.07) 50%,rgba(141, 141, 141,0.07) 50%, rgba(141, 141, 141,0.07) 62.5%,rgba(175, 175, 175,0.07) 62.5%, rgba(175, 175, 175,0.07) 75%,rgba(209, 209, 209,0.07) 75%, rgba(209, 209, 209,0.07) 87.5%,rgba(243, 243, 243,0.07) 87.5%, rgba(243, 243, 243,0.07) 100%),linear-gradient(270deg, #ffffff,#ffffff)
    `,
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        showWelcome ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={welcomeStyles}
    >
      <div className="text-4xl font-bold text-center">
        <div
          className={`home-active ${
            currentTextIndex === 0 ? "home-active-first" : ""
          }`}
        >
          <h2>{welcomeTexts[currentTextIndex]}</h2>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
