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
    <div className="flex flex-wrap gap-12 m-8">
      <h1>Experience</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {experience.map((exp, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
                cols={80}
                value={exp.textarea}
                onChange={(e) => handleExperienceChange(index, e)}
              />
            </div>
          ))}
          <div>
            <button type="button" onClick={addExperience}>
              Add
            </button>
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-6">
          {experience.map((exp, index) => (
            <div key={index}>
              <div className="flex gap-4">
                <p>
                  <strong>{exp.company}</strong>
                </p>
                <p className="text-gray-500">
                  <strong>{exp.position}</strong>
                </p>
              </div>
              <div className="flex gap-4">
                <p>
                  <strong>{exp.startYear}</strong>
                </p>
                <p className="text-gray-500">
                  <strong> {exp.finishYear}</strong>
                </p>
              </div>
              <p className="mt-2 max-w-3xl">{exp.textarea}</p>
            </div>
          ))}
          <div>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}
