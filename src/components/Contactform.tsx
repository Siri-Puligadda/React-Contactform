import { useState } from "react";

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to validate inputs and display submitted data
    // HINT: You can use the setError function
    if (!name || !email || !message) {
      setError("All fields are required.");
    }

    // HINT: You can use the setSubmittedData function as below
    setSubmittedData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div>
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                data-testid="name-input"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                id="inputEmail4"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                data-testid="email-input"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              value={message}
              className="form-control"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              data-testid="message-input"
            />
          </div>

          <button
            type="submit"
            data-testid="submit-button"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>

        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}
        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Contactform;
