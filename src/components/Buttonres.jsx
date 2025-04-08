import styled from "styled-components";

const Buttonres = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        {/* Resume Button */}
        <a
          href="/EA_Manan_res.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Resume
        </a>
      </div>
      <div className="wrapper">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/manan-mehta-073630322/"
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
  justify-content: center; /* Center below the card */
  gap: 40px; /* Space between buttons */
  margin-top: 10px; /* Adjusts the gap below the card */

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
    padding: 14px;
    transition: all 0.3s ease-in-out;
  }

  .button {
    cursor: pointer;
    padding: 0.4rem 2rem;
    border-radius: inherit;
    font-weight: 700;
    border: none;
    background: transparent;
    color: #fff;
    transition: all 0.3s ease-in-out;
    width: 14rem;
    font-size: 1.5rem;
    display: inline-block;
    text-decoration: none;
    text-align: center;
  }

  /* Hover Effect */
  .wrapper:hover {
    transform: scale(1.08);
    filter: brightness(1.2);
  }
`;

export default Buttonres;
