import styled from "styled-components";

const Buttonres = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        {/* Resume Button (Opens PDF in New Tab) */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Resume
        </a>
      </div>
      <div className="wrapper">
        {/* LinkedIn Button (Redirects to LinkedIn Profile) */}
        <a
          href="https://www.linkedin.com/in/your-linkedin-username/"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          LinkedIn
        </a>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row; /* Arrange buttons side by side */
  justify-content: flex-start; /* Align buttons to the left */
  gap: 120px; /* Space between buttons */
  margin-top: 40px; /* Adds space above both buttons */

  .wrapper {
    display: inline-block;
    border-radius: 28px;
    box-shadow: inset 12px 0 12px rgba(255, 255, 255, 0.25),
      inset -2px -4px 8px rgba(255, 255, 255, 0.25);
    background: linear-gradient(
      336deg,
      rgba(255, 196, 32, 1) 0%,
      rgba(254, 75, 8, 1) 39%,
      rgba(254, 75, 8, 1) 57%,
      rgba(255, 196, 32, 1) 100%
    );
    padding: 14px; /* Slightly increased padding */
    transition: all 0.3s ease-in-out;
  }

  .button {
    cursor: pointer;
    padding: 0.4rem 2rem; /* Increased padding for better click area */
    border-radius: inherit;
    font-weight: 700;
    position: relative;
    border: none;
    background: transparent;
    color: #fff;
    transition: all 0.3s ease-in-out;
    width: 12rem; /* Wider buttons */
    font-size: 1.5rem; /* Bigger text */
    display: inline-block;
    text-decoration: none;
    text-align: center;
  }

  /* Hover Effect */
  .wrapper:hover {
    transform: scale(1.08);
    filter: brightness(1.2);
  }

  .button::before {
    content: "";
    position: absolute;
    inset: 0;
    inset-block-end: -2px;
    border-radius: inherit;
    background: linear-gradient(to top, #ffc42088, transparent);
    z-index: -1;
    filter: blur(5px);
    transition: all 0.2s;
  }

  .button:hover::before {
    filter: blur(0);
    opacity: 0;
  }

  .button:active {
    transform: scale(0.95);
  }

  .button:focus {
    outline-color: #fff;
  }
`;

export default Buttonres;
