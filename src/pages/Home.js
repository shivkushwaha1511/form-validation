import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <button
            className="btn btn-warning text-white fw-bold me-3"
            style={{ marginTop: "25%" }}
            onClick={() => navigate("/question-1")}
          >
            Question-1
          </button>
          <button
            className="btn btn-warning text-white fw-bold  me-3"
            style={{ marginTop: "25%" }}
            onClick={() => navigate("/question-2")}
          >
            Question-2
          </button>
          <button
            className="btn btn-warning text-white fw-bold "
            style={{ marginTop: "25%" }}
            onClick={() => navigate("/question-3")}
          >
            Question-3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
