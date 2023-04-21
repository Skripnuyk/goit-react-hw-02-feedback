import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;

  margin: 0 0 20px 20px;
`;

export const FeedbackItem = styled.li`
  width: 100px;
`;

export const FeedbackButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 10px;
  color: black;
  background-color: #a0c5aa;
  :hover,
  :focus {
    color: #fff;
    background-color: #4c3a48;
  }
`;