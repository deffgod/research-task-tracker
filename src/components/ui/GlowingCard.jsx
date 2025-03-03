import React from 'react';
import styled from 'styled-components';
import { glowingCard } from '../../theme/GlowingTheme';

export const GlowingCard = ({ 
  title, 
  children, 
  className, 
  width = '18rem', 
  height = 'auto', 
  ...props 
}) => {
  return (
    <StyledCard className={className} width={width} height={height} {...props}>
      <div className="card-glow" />
      <div className="card-border-glow" />
      {title && <div className="card-title">{title}</div>}
      <div className="card-body">{children}</div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  ${glowingCard}
  width: ${props => props.width || '18rem'};
  height: ${props => props.height || 'auto'};
  min-height: 8rem;
  margin-bottom: 1rem;
`;

export default GlowingCard; 