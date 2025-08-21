import { useState } from "react";

export default function Education() {
  const [education, setEducation] = useState({
    school: "",
    course: "",
    startYear: "",
    finishYear: "",
  });

  function handleEducationChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="school"
          placeholder="School"
          value={education.school}
          onChange={handleEducationChange}
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={education.course}
          onChange={handleEducationChange}
        />
      </div>
      <div>
        <input
          type="date"
          name="startYear"
          placeholder="Start date"
          value={education.startYear}
          onChange={handleEducationChange}
        />
        <input
          type="date"
          name="finishYear"
          placeholder="Finish Year"
          value={education.finishYear}
          onChange={handleEducationChange}
        />
      </div>
    </>
  );
}
