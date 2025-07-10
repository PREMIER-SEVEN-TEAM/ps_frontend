import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import type { FC } from "react";

ChartJS.register(PointElement, LinearScale, Tooltip, Legend, Title);

type PredictionData = {
  match: string;
  prediction: "Home" | "Draw" | "Away";
  probability: number;
};

interface Props {
  predictions: PredictionData[];
}

const labelMap = {
  Home: 0,
  Draw: 1,
  Away: 2,
};

const colorMap = {
  Home: "rgba(54, 162, 235, 0.6)",
  Draw: "rgba(255, 206, 86, 0.6)",
  Away: "rgba(255, 99, 132, 0.6)",
};

const PredictionBubbleChart: FC<Props> = ({ predictions }) => {
  const data = {
    datasets: predictions.map((p, i) => ({
      label: p.match,
      data: [
        {
          x: i + 1,
          y: labelMap[p.prediction],
          r: p.probability / 10,
        },
      ],
      backgroundColor: colorMap[p.prediction],
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: -0.5,
        max: 2.5,
        title: {
          display: true,
          text: "예측 결과",
        },
        ticks: {
          stepSize: 1,
          callback: (value: any) => {
            const map = ["승 (Home)", "무 (Draw)", "패 (Away)"];
            return map[value] ?? value;
          },
        },
      },
      x: {
        title: {
          display: true,
          text: "경기 순서",
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "경기 예측 분포 (버블 크기 = 확률)",
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || "";
            const r = context.raw.r * 10;
            const result = ["승", "무", "패"][context.raw.y];
            return `${label}: ${r.toFixed(0)}% 확률 (${result})`;
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Bubble data={data} options={options} />
    </div>
  );
};

export default PredictionBubbleChart;
