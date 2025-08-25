import { useState } from "react";

export default function GeneralInfo() {
  const [person, setPerson] = useState({
    name: "",
    textarea: "",
    portfolio: "",
    email: "",
    phone: "",
  });

  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      {isEditing ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-8">
          <input
            className="w-fit"
            type="text"
            name="name"
            placeholder="Your Name"
            value={person.name}
            onChange={handleChange}
          />
          <div>
            <textarea
              name="textarea"
              placeholder="I am a [Current Position]..."
              rows={5}
              cols={80}
              value={person.textarea}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-row gap-12">
            <input
              type="url"
              name="portfolio"
              placeholder="www.yourportfolio.com"
              value={person.portfolio}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="doomsday@gmail.com"
              value={person.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="080-9090-2340"
              value={person.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col gap-4 m-8">
          <div className="flex flex-col gap-4">
            <h1>
              <strong>{person.name}</strong>
            </h1>
            <p className="max-w-3xl">{person.textarea}</p>
            <div className="flex flex-row flex-wrap gap-8 ">
              <p>
                <strong>Portfolio:</strong> {person.portfolio}
              </p>
              <p>
                <strong>Email:</strong> {person.email}
              </p>
              <p>
                <strong>Phone:</strong> {person.phone}
              </p>
            </div>
          </div>
          <div>
            <button onClick={handleEdit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}
