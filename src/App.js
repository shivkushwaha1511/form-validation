import Form from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");
  const [show, setShow] = useState(true);
  const [data, setData] = useState({});

  const [errors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name,
        age,
        phone,
        grade,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setShow(false);
        setData(json);
      })
      .catch((err) => console.log(err));
  };

  const handleName = (e) => {
    setName(e.target.value);

    errors.name = "";
    if (!isNaN(name && name[0])) {
      errors.name = "Name starts with an alphabet";
    } else if (name && name.length > 0 && name.length < 2) {
      errors.name = "Invalid name";
    }
  };

  const handleAge = (e) => {
    setAge(e.target.value);

    errors.age = "";
    if (isNaN(age)) {
      errors.age = "Age must be an integer";
    } else if (age && age < 0) {
      errors.age = "Invalid age";
    }
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);

    errors.phone = "";
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (phone && !pattern.test(phone)) {
      errors.phone = "Please enter number only";
    } else if (phone && phone.length !== 9) {
      errors.phone = "Please enter valid phone number";
    }
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);

    errors.grade = "";
    var pattern = new RegExp(/^[0-9\b]+$/);

    if (grade && !pattern.test(grade)) {
      errors.grade = "Please enter number only";
    }
  };

  return (
    <div className="container-fluid">
      <div className="row py-4">
        <div
          className="col-md-4 my-4 offset-md-4 bg-white shadow-lg"
          style={{ padding: "0", borderRadius: "10px 10px 10px 10px" }}
        >
          <div
            className="bg-warning"
            style={{ borderRadius: "10px 10px 0 0", height: "10px" }}
          ></div>
          <div className="text-center display-4 fw-bold pt-1">Student</div>
          <div style={{ display: `${show ? "block" : "none"}` }}>
            <Form
              handleSubmit={handleSubmit}
              name={name}
              age={age}
              phone={phone}
              grade={grade}
              handleName={handleName}
              errors={errors}
              handleAge={handleAge}
              handlePhone={handlePhone}
              handleGrade={handleGrade}
            />
          </div>
          <div
            className="text-center py-4"
            style={{ display: `${!show ? "block" : "none"}` }}
          >
            <h2>Name - {data.name}</h2>
            <h2>Age - {data.age}</h2>
            <h2>Phone - {data.phone}</h2>
            <h2>Grade - {data.grade}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
