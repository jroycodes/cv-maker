import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    setSkills(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  return (
    <>
      <div>
        <h1>Skills</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                value={skills}
                onChange={handleChange}
                placeholder="List your skills here, seperated by commas or line breaks"
                rows={5}
                cols={50}
              />
            </div>
            <button type="submit">Save</button>
          </form>
        ) : (
          <div>
            <div>
              <p>{skills}</p>
            </div>
            <div>
              <button onClick={handleEdit}>Edit</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
