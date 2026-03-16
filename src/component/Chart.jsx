import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ budget, spent }) {
  const remaining = budget - spent > 0 ? budget - spent : 0;
  const options = {
    plugins: {
      legend: {
        position: window.innerWidth < 600 ? "bottom" : "right",
        labels: {
          color: "white",
          gap: 20,
          font: {
            size: window.innerWidth < 600 ? 12 : 14
          }
        }
      }
    }
  };
  const data = {
    labels: ["Budget", "Spent", "Remaining"],
    datasets: [
      {
        label: "Budget Usage",
        data: [budget, spent, remaining],
        backgroundColor: ["#00ffff", "#000d5a", "#869200"],
        borderColor: ["#7afb76", "#aac5ff", "#f1fe8f"],
        borderWidth: 1,
      },
    ],
  };

  return <div className="chart-container"><Doughnut data={data} options={options} /></div>
}

export default Chart;