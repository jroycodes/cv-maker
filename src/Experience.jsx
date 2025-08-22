import { useState } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([
    { company: "", position: "", startYear: "", finishYear: "", textarea: "" },
  ]);

  const [isEditing, setIsEditing] = useState(true);

  function handleExperienceChange(index, e) {
    const { name, value } = e.target;
    const updated = [...experience];
    updated[index][name] = value;
    setExperience(updated);
  }

  function addExperience() {
    setExperience((prev) => [
      ...prev,
      {
        company: "",
        position: "",
        startYear: "",
        finishYear: "",
        textarea: "",
      },
    ]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <div>
      <h1>Experience</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {experience.map((exp, index) => (
            <div key={index}>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <div>
                <input
                  type="date"
                  name="startYear"
                  value={exp.startYear}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
                <input
                  type="date"
                  name="finishYear"
                  value={exp.finishYear}
                  onChange={(e) => handleExperienceChange(index, e)}
                />
              </div>
              <textarea
                name="textarea"
                placeholder="Describe your responsibilities and achievements..."
                rows={5}
                cols={50}
                value={exp.textarea}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>
          ))}
          <button type="button" onClick={addExperience}>
            Add
          </button>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          {experience.map((exp, index) => (
            <div key={index}>
              <p>
                <strong>Company:</strong> {exp.company}
              </p>
              <p>
                <strong>Position:</strong> {exp.position}
              </p>
              <p>
                <strong>Start Year:</strong> {exp.startYear}
              </p>
              <p>
                <strong>Finish Year:</strong> {exp.finishYear}
              </p>
              <p>{exp.textarea}</p>
            </div>
          ))}
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
