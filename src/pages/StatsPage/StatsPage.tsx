import React from "react";
import WinDrawLossChart from "./WinDrawLossChart";

type PredictionData = {
  match: string;
  prediction: "Home" | "Draw" | "Away";
  probability: number;
};

const StatsPage: React.FC = () => {
  const predictions: PredictionData[] = [
    { match: "Arsenal vs Chelsea", prediction: "Home", probability: 91 },
    { match: "Liverpool vs Man Utd", prediction: "Draw", probability: 37 },
    { match: "Man City vs Spurs", prediction: "Away", probability: 68 },
    { match: "Aston Villa vs Everton", prediction: "Home", probability: 83 },
    { match: "Newcastle vs Brighton", prediction: "Away", probability: 76 },
  ];

  return (
    <div>
      <WinDrawLossChart predictions={predictions} />
    </div>
  );
};

export default StatsPage;
