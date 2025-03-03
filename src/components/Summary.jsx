import React from 'react';
import styled from 'styled-components';
import { FiCheckCircle, FiClock, FiBarChart2 } from 'react-icons/fi';
import GlowingCard from './ui/GlowingCard';

const Summary = ({ totalTasks, completedTasks, progressPercentage }) => {
  const circumference = 2 * Math.PI * 30;
  const progressOffset = circumference - (progressPercentage / 100) * circumference;
  
  return (
    <>
      <StyledSummaryCard title="Total Tasks" width="100%">
        <CardContent>
          <IconContainer bg="rgba(125, 95, 255, 0.2)" color="#9068ff">
            <FiBarChart2 size={24} />
          </IconContainer>
          <div>
            <ValueText>{totalTasks}</ValueText>
          </div>
        </CardContent>
      </StyledSummaryCard>
      
      <StyledSummaryCard title="Completed" width="100%">
        <CardContent>
          <IconContainer bg="rgba(52, 211, 153, 0.2)" color="#34d399">
            <FiCheckCircle size={24} />
          </IconContainer>
          <div>
            <ValueText>{completedTasks}</ValueText>
          </div>
        </CardContent>
      </StyledSummaryCard>
      
      <StyledSummaryCard title="Overall Progress" width="100%">
        <ProgressContainer>
          <ProgressRing>
            <svg width="80" height="80">
              <ProgressCircle
                className="background"
                strokeWidth="6"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
              />
              <ProgressCircle
                className="progress"
                strokeWidth="8"
                fill="transparent"
                r="30"
                cx="40"
                cy="40"
                strokeDasharray={circumference}
                strokeDashoffset={progressOffset}
                percentage={progressPercentage}
              />
            </svg>
            <ProgressText>
              {progressPercentage}%
            </ProgressText>
          </ProgressRing>
        </ProgressContainer>
      </StyledSummaryCard>
    </>
  );
};

const StyledSummaryCard = styled(GlowingCard)`
  min-height: 7rem;
  height: 100%;
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-top: 0.5rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background: ${props => props.bg};
  color: ${props => props.color};
  border-radius: 0.75rem;
  margin-right: 1rem;
`;

const ValueText = styled.p`
  font-size: 2rem;
  font-weight: 700;
`;

const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.5rem;
  height: 100%;
`;

const ProgressRing = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressCircle = styled.circle`
  transition: stroke-dashoffset 0.5s ease;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-linecap: round;
  
  &.background {
    stroke: rgba(255, 255, 255, 0.1);
  }
  
  &.progress {
    stroke: ${props => {
      const percentage = props.percentage || 0;
      if (percentage < 30) return '#ff4d4d';
      if (percentage < 70) return '#ffa72b';
      return '#34d399';
    }};
    filter: drop-shadow(0 0 4px ${props => {
      const percentage = props.percentage || 0;
      if (percentage < 30) return 'rgba(255, 77, 77, 0.5)';
      if (percentage < 70) return 'rgba(255, 167, 43, 0.5)';
      return 'rgba(52, 211, 153, 0.5)';
    }});
  }
`;

const ProgressText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color);
`;

export default Summary;