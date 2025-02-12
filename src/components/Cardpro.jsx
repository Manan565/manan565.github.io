import styled from "styled-components";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

// eslint-disable-next-line react/prop-types
const Cardpro = ({ title, description, image, githubLink }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="blob" />

        <div className="content">
          {/* Enlarged & Centered Image */}
          {image && <img src={image} alt={title} className="project-img" />}

          <h2>{title}</h2>
          <p className="desc">{description}</p>

          {/* GitHub Link Button */}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
            >
              <FaGithub className="github-icon" /> View on GitHub
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 320px;
    height: 450px;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 20px;
    background: white;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 12px 12px 30px rgba(0, 0, 0, 0.15);
  }

  .content {
    position: relative;
    z-index: 3;
    text-align: center;
    padding: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .project-img {
    width: 200px;
    height: auto;
    margin: 0 auto 12px auto;
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    display: block;
    align-self: center;
  }

  h2 {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .desc {
    font-size: 0.95em;
    margin-top: 8px;
    color: #444;
    line-height: 1.4;
  }

  /* GitHub Button Styling */
  .github-button {
    display: flex;
    align-items: center;
    background-color: #333;
    color: white;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 0.9em;
    margin-top: 12px;
    transition: background-color 0.3s ease;
  }

  .github-button:hover {
    background-color: #555;
  }

  .github-icon {
    margin-right: 8px;
    font-size: 1.2em;
  }
`;

export default Cardpro;
