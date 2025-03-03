import { css } from 'styled-components';

export const glowingTheme = {
  colors: {
    background: '#2c2c2e',
    cardBackground: '#2c2c1e',
    primary: '#007AFF',
    secondary: '#96869xsb',
    gradient: 'linear-gradient(to bottom, #007AFF, #b4ff00)',
    neonGreen: '#b4ff00',
    textLight: '#ffffff',
    textDark: '#000000',
    systemBackground: '#ffffff',
    inputBackground: '#f2f2f7',
    incomingBg: 'rgba(180, 255, 0, 0.1)',
    outgoingBg: '#007AFF',
    error: '#ff3b30',
  },
  borderRadius: {
    card: '1rem',
    inner: '0.9375rem',
    indicator: '0.125rem',
    default: '16px',
  },
  transitions: {
    default: '300ms ease',
  },
  glow: {
    opacity: 0.1,
  },
  sizes: {
    sidebarWidth: '320px',
    headerHeight: '70px',
  },
  shadows: {
    card: '0 2px 8px rgba(0, 0, 0, 0.1)',
    elevated: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
};

export const glowingCard = css`
  display: flex;
  flex-direction: column;
  isolation: isolate;
  position: relative;
  background: ${props => props.theme.colors.cardBackground || '#29292c'};
  border-radius: ${props => props.theme.borderRadius.card || '1rem'};
  overflow: hidden;
  --gradient: ${props => props.theme.colors.gradient || 'linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff)'};
  --color: ${props => props.theme.colors.primary || '#32a6ff'};
  
  &:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: ${props => props.theme.borderRadius.inner || '0.9375rem'};
    background: ${props => props.theme.colors.background || '#18181b'};
    z-index: 2;
  }

  &:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: ${props => props.theme.borderRadius.indicator || '0.125rem'};
    background: var(--gradient);
    transition: transform ${props => props.theme.transitions.default || '300ms ease'};
    z-index: 4;
  }

  &:hover:after {
    transform: translateX(0.15rem);
  }
  
  .notititle, .card-title {
    color: var(--color);
    padding: 0.65rem 0.25rem 0.4rem 1.25rem;
    font-weight: 500;
    font-size: 1.1rem;
    transition: transform ${props => props.theme.transitions.default || '300ms ease'};
    z-index: 5;
  }

  &:hover .notititle, &:hover .card-title {
    transform: translateX(0.15rem);
  }

  .notibody, .card-body {
    color: ${props => props.theme.colors.secondary || '#99999d'};
    padding: 0 1.25rem;
    transition: transform ${props => props.theme.transitions.default || '300ms ease'};
    z-index: 5;
  }

  &:hover .notibody, &:hover .card-body {
    transform: translateX(0.25rem);
  }

  .notiglow, .card-glow,
  .notiborderglow, .card-border-glow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle closest-side at center, white, transparent);
    opacity: 0;
    transition: opacity ${props => props.theme.transitions.default || '300ms ease'};
  }

  .notiglow, .card-glow {
    z-index: 3;
  }

  .notiborderglow, .card-border-glow {
    z-index: 1;
  }

  &:hover .notiglow, &:hover .card-glow {
    opacity: ${props => props.theme.glow.opacity || 0.1};
  }

  &:hover .notiborderglow, &:hover .card-border-glow {
    opacity: ${props => props.theme.glow.opacity || 0.1};
  }
`;

export default glowingTheme; 