import { useState } from "react";

export default function Education() {
  const [education, setEducation] = useState([
    {
      school: "",
      course: "",
      startYear: "",
      finishYear: "",
    },
  ]);

  const [isEditing, setIsEditing] = useState(true);

  function handleEducationChange(index, e) {
    const { name, value } = e.target;
    const updated = [...education];
    updated[index][name] = value;
    setEducation(updated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function addEducation() {
    setEducation((prev) => [
      ...prev,
      { school: "", course: "", startYear: "", finishYear: "" },
    ]);
  }

  return (
    <div>
      <h1>Education</h1>

      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {education.map((edu, index) => (
            <div key={index}>
              <div>
                <input
                  type="text"
                  name="school"
                  placeholder="School"
                  value={edu.school}
                  onChange={(e) => handleEducationChange(index, e)}
                />
                <input
                  type="text"
                  name="course"
                  placeholder="Course"
                  value={edu.course}
                  onChange={(e) => handleEducationChange(index, e)}
                />
              </div>
              <input
                type="date"
                name="startYear"
                placeholder="Start date"
                value={edu.startYear}
                onChange={(e) => handleEducationChange(index, e)}
              />
              <input
                type="date"
                name="finishYear"
                placeholder="Finish Year"
                value={edu.finishYear}
                onChange={(e) => handleEducationChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addEducation}>
            Add
          </button>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          {education.map((edu, index) => (
            <div key={index}>
              <div>
                <p>
                  <strong>School:</strong> {edu.school}
                </p>
                <p>
                  <strong>Course:</strong> {edu.course}
                </p>
              </div>
              <div>
                <p>
                  <strong>Start Year:</strong> {edu.startYear}
                </p>
                <p>
                  <strong>Finish Year:</strong> {edu.finishYear}
                </p>
              </div>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
