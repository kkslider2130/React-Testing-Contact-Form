import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const [person, setPerson] = useState([
    {
      firstName: "123",
      lastName: "12",
      email: "",
      notes: "",
      id: 365
    }
  ]);
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
    const newPerson = {
      ...person,
      id: Date.now()
    };
    setPerson([...person, newPerson]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Title">Title*</label>
        <div>
          <select id="Title" name="Title" ref={register({ required: true })}>
            <option value="Mr">QA Monkey</option>
            <option value="Mrs">Code monkey</option>
            <option value="Miss">Sr Code Monkey</option>
            <option value="Dr">Regular Monkey</option>
          </select>
          <label htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email*
          </label>
          <input id="email" name="email" ref={register({ required: true })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            ref={register({ required: false })}
          />
          <label htmlFor="agreed">I agree</label>

          <input
            id="agreed"
            name="agreed"
            type="radio"
            value="Yes"
            ref={register({ required: true })}
          />
        </div>
        {data && (
          <pre style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input type="submit" data-testid="submit" />
      </form>
      {/* {person.map(p => (
        <p>{p.name}</p>
      ))} */}
    </div>
  );
};

export default ContactForm;
