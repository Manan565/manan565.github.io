import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Cardpro = ({ title, description, image }) => {
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
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 320px; /* Reduced width */
    height: 450px; /* Reduced height */
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

  /* Hover Effect */
  .card:hover {
    transform: scale(1.05);
    box-shadow: 12px 12px 30px rgba(0, 0, 0, 0.15);
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 310px;
    height: 440px;
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
    width: 160px;
    height: 160px;
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
    padding: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* Ensures all content is centered */
  }

  /* Keep Image Size the Same */
  .project-img {
    width: 200px; /* Same image size */
    height: auto;
    margin: 0 auto 12px auto; /* Centers the image */
    border-radius: 8px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    display: block;
    align-self: center;
  }

  h2 {
    font-size: 1.3em; /* Adjusted font size */
    font-weight: bold;
    margin-bottom: 8px;
  }

  .desc {
    font-size: 0.95em;
    margin-top: 8px;
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
