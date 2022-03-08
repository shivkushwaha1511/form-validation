import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import Student from "../data/Student";
import Name from "../data/Name";
Chart.register(...registerables);

const Question2 = () => {
  const state = {
    datasets: Student,
    labels: Name,
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-1 text-center">
          <h1>Student Performance</h1>
          <div>
            <Bar data={state} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question2;
