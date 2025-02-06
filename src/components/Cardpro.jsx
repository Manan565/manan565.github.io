import styled from "styled-components";

const Cardpro = ({ title, date, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="blob" />
        <div className="content">
          <h2>{title}</h2>

          <p className="desc">{description}</p>
          <p className="date">{date}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 250px;
    height: 300px;
    border-radius: 14px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    padding: 20px; /* Added padding to prevent content from getting hidden */
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 240px;
    height: 290px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: #ff0000;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  .content {
    position: relative;
    z-index: 3; /* Ensures text stays ABOVE background and blob */
    text-align: center;
    padding: 10px;
    width: 90%;
  }

  h2 {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .tech,
  .desc,
  .date {
    font-size: 0.9em;
    margin-bottom: 5px;
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
