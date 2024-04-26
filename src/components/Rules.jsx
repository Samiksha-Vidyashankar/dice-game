import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play the game</h2>
      <div className="text">
        <ul>
          <li>Select any number</li>
          <li>Click on the image of the die</li>
          <li>After clicking on the dice, if selected number is equal to the dice number you
          will get same point as shown on dice{" "}</li>
          <li>If you get a wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;