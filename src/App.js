import React, { useState } from 'react';
import {
  Button,
  TextInput,
  TextArea,
  RadioButtonGroup,
  RadioButton,
} from 'carbon-components-react';
import './App.css';

function App() {
  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email data:', emailData);
  };

  return (
    <div className="App">
      <header>
        <h1>Email Form With Carbon Design systems</h1>
      </header>
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <TextInput
            labelText="Name"
            id="name"
            name="name"
            value={emailData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <TextInput
            labelText="Email"
            id="email"
            name="email"
            type="email"
            value={emailData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <TextInput
            labelText="Subject"
            id="subject"
            name="subject"
            value={emailData.subject}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <TextArea
            labelText="Message"
            id="message"
            name="message"
            value={emailData.message}
            onChange={handleChange}
            rows={5}
          />
        </div>
        <div className="form-field">
          <RadioButtonGroup
            legendText="Urgency"
            name="urgency"
            valueSelected={emailData.urgency}
            onChange={handleChange}
          >
            <RadioButton labelText="Low" id="low" value="low" />
            <RadioButton labelText="Normal" id="normal" value="normal" />
            <RadioButton labelText="High" id="high" value="high" />
          </RadioButtonGroup>
        </div>
        <div className="form-field">
          <Button type="submit" className="send-button">Send</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
