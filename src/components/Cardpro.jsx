import styled from "styled-components";
import logo from "../assets/images/proshop.png"; // Ensure correct path

// eslint-disable-next-line react/prop-types
const Cardpro = ({ title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="blob" />

        <div className="content">
          {/* Enlarged Image at the Top */}
          <img src={logo} alt="Project" className="project-img" />

          <h2>{title}</h2>
          <p className="desc">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 360px; /* Slightly wider */
    height: 500px; /* Increased height to fit large image */
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    padding: 25px;
    background: white;
  }

  /* Hover Effect */
  .card:hover {
    transform: scale(1.05);
    box-shadow: 15px 15px 35px rgba(0, 0, 0, 0.15);
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 350px;
    height: 490px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 12px;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 0.8;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  .content {
    position: relative;
    z-index: 3;
    text-align: center;
    padding: 15px;
    width: 95%;
  }

  /* Bigger Image for Better Visibility */
  .project-img {
    width: 200px; /* Increased size */
    height: auto;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .desc {
    font-size: 1em;
    margin-top: 10px;
    color: #444;
    line-height: 1.4;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }
    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }
    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }
    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default Cardpro;
