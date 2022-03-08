const Form = ({
  handleSubmit,
  name,
  age,
  phone,
  grade,
  handleName,
  errors,
  handleAge,
  handlePhone,
  handleGrade,
}) => {
  return (
    <form className="px-4 py-3" onSubmit={handleSubmit}>
      <div className="form-group mt-1">
        <label className="fw-bold">Name</label>
        <input
          value={name}
          type="text"
          className="form-control"
          placeholder="Enter name"
          onChange={handleName}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>
      <div className="form-group mt-3 mb-2">
        <label className="fw-bold">Age</label>
        <input
          value={age}
          type="number"
          className="form-control"
          placeholder="Enter age"
          onChange={handleAge}
        />
        {errors.age && <small className="text-danger">{errors.age}</small>}
      </div>
      <div className="form-group mt-1">
        <label className="fw-bold">Phone number</label>
        <input
          value={phone}
          type="number"
          className="form-control"
          placeholder="Enter phone number"
          onChange={handlePhone}
        />
        {errors.phone && <small className="text-danger">{errors.phone}</small>}
      </div>
      <div className="form-group mt-3">
        <label className="fw-bold">Grade</label>
        <input
          value={grade}
          type="number"
          className="form-control"
          placeholder="Enter grade"
          step="0.01"
          onChange={handleGrade}
        />
        {errors.grade && <small className="text-danger">{errors.grade}</small>}
      </div>

      <div className="mt-4 d-grid">
        <button
          className="btn btn-warning text-white fw-bold fs-5"
          disabled={
            !name ||
            !age ||
            !phone ||
            !grade ||
            errors.name ||
            errors.age ||
            errors.phone ||
            errors.grade
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
