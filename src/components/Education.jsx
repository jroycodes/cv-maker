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
    <div className="flex flex-wrap gap-12 m-8">
      <h1>Education</h1>
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 ">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
            </div>
          ))}
          <div>
            <button type="button" onClick={addEducation} className="mb-4">
              Add
            </button>
            <div>
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-6 ">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex gap-4">
                <p>
                  <strong>{edu.school}</strong>
                </p>
                <p className="text-gray-500">
                  <strong>{edu.course}</strong>
                </p>
              </div>
              <div className="flex gap-4">
                <p className="text-gray-500">{edu.startYear}</p>
                <p className="text-gray-500">{edu.finishYear}</p>
              </div>
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
