import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setInterests((prev) => [...prev, value]);
    } else {
      setInterests((prev) => prev.filter((interest) => interest !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Top-Level Heading */}
      <h1>Hi, I'm [Your Name]</h1>

      {/* Image of Yourself */}
      <img src="https://via.placeholder.com/350" alt="My profile pic" />

      {/* About Me Section */}
      <h2>About Me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      {/* Links */}
      <nav>
        <a href="https://github.com">GitHub</a> |
        <a href="https://www.linkedin.com">LinkedIn</a>
      </nav>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-label="name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="email"
          />
        </label>
        <fieldset>
          <legend>Interests:</legend>
          <label>
            <input
              type="checkbox"
              value="coding"
              onChange={handleInterestChange}
              aria-label="coding"
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              value="music"
              onChange={handleInterestChange}
              aria-label="music"
            />
            Music
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>

      {/* Personalized Message */}
      {submitted && (
        <div>
          <h2>Thank you, {name}!</h2>
          <p>Your interests: {interests.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;
