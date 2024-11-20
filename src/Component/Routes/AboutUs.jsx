import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-blue-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        {/* About Yourself */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hello! I'm a passionate developer with expertise in modern web development. I specialize in creating responsive and interactive web applications using the latest technologies like React, Tailwind CSS, Firebase, and more. I love building projects that are both functional and visually appealing.
          </p>
        </section>

        {/* Skills */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            {/* React Skills */}
            <li>
              <strong>Frontend Development:</strong>
              <ul className="list-disc pl-6">
                <li>Proficient in building dynamic UIs using React.</li>
                <li>Experienced with React concepts like Hooks (<code>useState</code>, <code>useEffect</code>).</li>
                <li>Skilled in component-based architecture and reusable design.</li>
                <li>Familiar with React Router for navigation and dynamic routing.</li>
                <li>Experience in state management using Context API.</li>
              </ul>
            </li>

            {/* JavaScript Skills */}
            <li>
              <strong>JavaScript (ES6+):</strong>
              <ul className="list-disc pl-6">
                <li>Expertise in ES6+ features: <code>arrow functions</code>, <code>destructuring</code>, <code>spread/rest operators</code>.</li>
                <li>Proficient in array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> for data manipulation.</li>
                <li>Strong understanding of asynchronous programming: Promises and <code>async/await</code>.</li>
                <li>Comfortable with JavaScript modules (<code>import</code> and <code>export</code>).</li>
              </ul>
            </li>

            {/* Styling */}
            <li>
              <strong>Styling and UI Design:</strong>
              <ul className="list-disc pl-6">
                <li>Expertise in CSS and responsive design principles.</li>
                <li>Advanced styling using Tailwind CSS and its utility-first approach.</li>
                <li>Experience with CSS-in-JS libraries (e.g., Styled Components).</li>
              </ul>
            </li>

            {/* Firebase */}
            <li>
              <strong>Database Management:</strong>
              <ul className="list-disc pl-6">
                <li>Proficient in Firebase for authentication.</li>
                <li>Experience in integrating third-party APIs and managing data flow.</li>
              </ul>
            </li>

            {/* Additional Skills */}
            <li>
              <strong>API Development and Integration:</strong>
              <ul className="list-disc pl-6">
                <li>Skilled in consuming RESTful APIs using <code>fetch</code> and <code>axios</code>.</li>
                <li>Understanding of CRUD operations and data flow in frontend applications.</li>
                
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
