"use client";
import React, { useState } from "react";
import MethodSelector from "../components/MethodSelector";
import VisualizationArena from "../components/VisualizationArena";
import MethodDetails from "../components/MethodDetails";
import ScoringSystem from "../components/ScoringSystem";

const centeringMethods = {
  flexCenter: {
    name: "Flex Domination 💪",
    description: "The Superhero of Layouts",
    techComplexity: 4,
    uiImpact: 3,
    funFactor: 2,
    comedyQuote: "Flexbox: Where divs go to get their workout!",
    challengers: [
      "Internet Explorer's Ghost",
      "Responsive Design Ninja",
      "Mobile Layout Warrior",
    ],
    code: `
// Flex Fu Technique
.center-master {
  display: flex;           // Summon the Flex Powers
  justify-content: center; // Horizontal Alignment Spell
  align-items: center;     // Vertical Alignment Charm
}`,
    renderDemo: () => (
      <div className="flex-center-arena">
        <div className="centered-hero animate-pulse">Flex Champion 🏆</div>
      </div>
    ),
  },
  gridCenter: {
    name: "Grid Mastermind 🧩",
    description: "Pixel-Perfect Precision",
    techComplexity: 5,
    uiImpact: 4,
    funFactor: 3,
    comedyQuote: "CSS Grid: The OCD layout designer's dream!",
    challengers: [
      "Legacy Browser Demon",
      "Responsive Grid Guardian",
      "Layout Alignment Sorcerer",
    ],
    code: `
// Grid Wizardry
.layout-sorcerer {
  display: grid;        // Invoke Grid Realm
  place-items: center;  // Universal Centering Spell
}`,
    renderDemo: () => (
      <div className="grid-center-arena">
        <div className="centered-hero rotate-on-hover">Grid Sorcerer 🔮</div>
      </div>
    ),
  },
  absoluteCenter: {
    name: "Position Wizard 🚀",
    description: "Quantum Layout Positioning",
    techComplexity: 3,
    uiImpact: 5,
    funFactor: 4,
    comedyQuote: "Absolute Positioning: Teleporting divs since CSS2!",
    challengers: [
      "Responsive Chaos Monster",
      "Performance Gremlin",
      "Browser Compatibility Troll",
    ],
    code: `
// Positioning Black Magic
.quantum-div {
  position: absolute;    // Summon Positioning Realm
  top: 50%;              // Vertical Teleport
  left: 50%;             // Horizontal Teleport
  transform: translate(   // Reality Warping Spell
    -50%, -50%
  );
}`,
    renderDemo: () => (
      <div className="absolute-center-arena">
        <div className="centered-hero wobble-animation">Position Ninja 🥷</div>
      </div>
    ),
  },
};

const Home = () => {
  const [activeMethod, setActiveMethod] = useState("flexCenter");
  const [laughMeter, setLaughMeter] = useState(0);
  const [techScore, setTechScore] = useState(0);
  const [uiScore, setUiScore] = useState(0);
  const [comboMultiplier, setComboMultiplier] = useState(1);
  const [copiedMethod, setCopiedMethod] = useState(null);

  const makeLaugh = () => {
    const laughTiers = [
      "Divs are just rectangles with an identity crisis!",
      "CSS: Where layouts go to find themselves... or get lost!",
      "My div is more centered than my life's direction!",
      "Flexbox is basically a therapist for misaligned elements!",
      "Browser compatibility? More like Browser INCOMPATIBILITY! 🤪",
    ];

    const newLaughLevel = Math.min(laughMeter + 1, 5);
    setLaughMeter(newLaughLevel);

    // Combo Multiplier Logic
    setComboMultiplier((prev) => Math.min(prev * 1.5, 5));

    // Easter Egg: Score Boost
    setTechScore((prev) => prev + 10 * comboMultiplier);
    setUiScore((prev) => prev + 5 * comboMultiplier);

    alert(laughTiers[newLaughLevel - 1]);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedMethod(activeMethod);

    // Tech Score Boost for Copying
    setTechScore((prev) => prev + 15);

    setTimeout(() => setCopiedMethod(null), 2000);
  };

  const currentMethod = centeringMethods[activeMethod];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-300 p-6 md:p-10 flex flex-col items-center">
      <ScoringSystem
        laughMeter={laughMeter}
        techScore={techScore}
        uiScore={uiScore}
      />
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden">
        <MethodSelector
          methods={centeringMethods}
          activeMethod={activeMethod}
          onSelect={setActiveMethod}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10">
          <VisualizationArena renderDemo={currentMethod.renderDemo} />
          <MethodDetails
            currentMethod={currentMethod}
            makeLaugh={makeLaugh}
            copyToClipboard={copyToClipboard}
            copiedMethod={copiedMethod}
            activeMethod={activeMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
