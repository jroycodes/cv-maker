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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Jonathan Roy"
            value={person.name}
            onChange={handleChange}
          />
          <div>
            <textarea
              name="textarea"
              placeholder="I am a [Current Position]..."
              rows={5}
              cols={50}
              value={person.textarea}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
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
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p><strong>Name:</strong> {person.name}</p>
          <p><strong>About:</strong> {person.textarea}</p>
          <p><strong>Portfolio:</strong> {person.portfolio}</p>
          <p><strong>Email:</strong> {person.email}</p>
          <p><strong>Phone:</strong> {person.phone}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}
