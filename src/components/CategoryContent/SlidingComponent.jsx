import styled, { keyframes } from 'styled-components';

// Define the slide-in animation
const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);  /* Start from the left (off-screen) */
    opacity: 0;
  }
  to {
    transform: translateX(0);      /* End at the original position */
    opacity: 1;
  }
`;

// Styled component with animation
const SlidingComponent = styled.div`
  width: 200px;
  height: 100vh;
  background-color: #ffff;
  color: black;
  display: flex;
  overflow: hidden;
  justify-content: center;
  position:absolute;
  top:0;
  align-items: center;
  border-radius: 8px;
  animation: ${slideInFromLeft} 0.3s ease-in-out forwards;
`;

export default SlidingComponent;
