import { useState } from "react";

export default function GeneralInfo() {
  const [person, setPerson] = useState({
    name: "",
    textarea: "",
    portfolio: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <>
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
          type="text"
          placeholder="I am a [Current Position], currently working at [Current Company]. I help companies build products from zero to one. This is a brief description about you. Write some details about yourself, and make it meaningful. Maximum 3 lines of text."
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
    </>
  );
}
