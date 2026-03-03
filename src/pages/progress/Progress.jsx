import Chart from "../../assets/progress/Chart.png";
import Freepi from "../../assets/progress/freepi.png";
import Freepik from "../../assets/progress/freepik.png";
import Image from "../../assets/progress/Image.png";
import Place from "../../assets/progress/Place.png";
import "./Progress.css";

const Progress = () => {
  return (
    <div className="progress-page">
      <h1 className="title">Progress</h1>

      <div className="progress-container">
        <div className="body-section">
          <img src={Freepi} alt="body front" className="body-img" />

          <img src={Freepik} alt="body back" className="body-img second-body" />

          <div className="label chest">Chest 93.0 cm</div>
          <div className="label arm">Arm 28.5 cm</div>
          <div className="label waist">Waist 77.5 cm</div>
          <div className="label hips">Hips 98.0 cm</div>
          <div className="label thigh">Thigh 58.5 cm</div>
        </div>

        <div className="right-section">
          <div className="card">
            <h3>Weight Tracking</h3>
            <div className="weight-info">
              <p>
                Start Weight <span>85 Kg</span>
              </p>
              <p>
                Current Weight <span>78 Kg</span>
              </p>
              <p>
                Weight Goal <span>65 Kg</span>
              </p>
            </div>

            <div className="chart-placeholder">
              <img src={Chart} alt="chart" className="chart-img" />
            </div>
          </div>
          <div className="card">
            <h3>Progress Photos</h3>
            <div className="photos">
              <div className="photo-box">
                <img src={Image} alt="before" />
                <p>July 2028 - 82 Kg</p>
              </div>
              <div className="photo-box">
                <img src={Place} alt="after" />
                <p>Sept 2028 - 78 Kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Chest</th>
              <th>Arm</th>
              <th>Waist</th>
              <th>Hips</th>
              <th>Thigh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Week 1</td>
              <td>95.0</td>
              <td>30.0</td>
              <td>80.0</td>
              <td>100.0</td>
              <td>60.0</td>
            </tr>
            <tr>
              <td>Week 2</td>
              <td>94.0</td>
              <td>29.5</td>
              <td>79.0</td>
              <td>99.0</td>
              <td>59.5</td>
            </tr>
            <tr>
              <td>Week 3</td>
              <td>93.5</td>
              <td>29.0</td>
              <td>78.0</td>
              <td>98.5</td>
              <td>59.0</td>
            </tr>
            <tr>
              <td>Week 4</td>
              <td>93.0</td>
              <td>28.5</td>
              <td>77.5</td>
              <td>98.0</td>
              <td>58.5</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Progress;
