import { useState } from "react";

export default function Experience() {
  const [experience, setExperience] = useState([
    {
      company: "",
      position: "",
      startYear: "",
      finishYear: "",
      textarea: "",
    },
  ]);

  function handleExperienceChange(index, e) {
    const { name, value } = e.target;
    const updated = [...Experience];
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
        finsihYear: "",
        textarea: "",
      },
    ]);
  }

  return (
    <>
      <h1>Experience</h1>
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
              placeholder="position"
              value={exp.position}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <div>
            <input
              type="date"
              name="startYear"
              placeholder="Start date"
              value={exp.startYear}
              onChange={(e) => handleExperienceChange(index, e)}
            />
            <input
              type="date"
              name="finishYear"
              placeholder="Finish Year"
              value={exp.finishYear}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <textarea
            type="text"
            name="textarea"
            placeholder="Some stuff about the work that you have done here. It would be good if you can include responsibilities and achievements, as well as the extra miles that you have done. Do not make it too long, keep it short but meaningful."
            rows={5}
            cols={50}
            value={exp.textarea}
            onChange={(e) => handleExperienceChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addExperience}>Add</button>
    </>
  );
}
