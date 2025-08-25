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
      <div className="flex flex-wrap gap-12 m-8">
        <h1>Skills</h1>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <textarea
                value={skills}
                onChange={handleChange}
                placeholder="List your skills here, seperated by commas or line breaks"
                rows={2}
                cols={80}
              />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </form>
        ) : (
          <div className="flex flex-col flex-wrap gap-6">
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
