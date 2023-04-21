import React from "react";
import { FeedbackList, FeedbackItem, FeedbackButton } from './Feedback.styled';

const Feedback = ({ feedbackState, onAddFeedback }) => (
  <FeedbackList>
    {feedbackState.map(el => (
      <FeedbackItem key={el}>
        <FeedbackButton onClick={() => onAddFeedback(el)}>{el}</FeedbackButton>
      </FeedbackItem>
    ))}
  </FeedbackList>
);
    
export default Feedback