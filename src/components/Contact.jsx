import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="contact">
      <div>
        <h1 className="text-4xl font-bold">Let's Connect</h1>
        <p>
          I'm always open to new opportunities and collaborations. Whether you
          have an exciting project in mind, want to discuss potential job
          opportunities, or simply connect, I'd love to hear from you.
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://github.com/Manan565"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-purple-600 text-3xl hover:opacity-80" />
          </a>
          <a
            href="https://www.linkedin.com/in/manan-mehta-073630322/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-blue-600 text-3xl hover:opacity-80" />
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-mdd">
        <h2 className="text-2xl font-bold mb-4">Contact Me!</h2>
        {submitted ? (
          <p className="text-green-600">Thank you for your message!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-2 rounded-full text-lg font-bold shadow-lg hover:opacity-90 cursor-pointer"
              onClick={handleSubmit}
            >
              Confirm Transaction
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
