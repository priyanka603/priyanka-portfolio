import React from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { IconButton, Stack, useMediaQuery } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

// Animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Styled Components
const SocialContainer = styled(Stack)(({ theme, ismobile }) => ({
  position: 'fixed',
  left: ismobile === 'true' ? '50%' : '2rem',
  bottom: ismobile === 'true' ? '2rem' : '50%',
  transform: ismobile === 'true' 
    ? 'translateX(-50%)' 
    : 'translateY(50%)',
  zIndex: 100,
  background: 'rgba(17, 24, 39, 0.7)',
  backdropFilter: 'blur(10px)',
  padding: '0.75rem',
  borderRadius: ismobile === 'true' ? '2rem' : '3rem',
  border: '1px solid rgba(147, 51, 234, 0.2)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  animation: `${fadeIn} 0.5s ease-out`,
  flexDirection: ismobile === 'true' ? 'row' : 'column',
  gap: '0.5rem',
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: '#9333EA',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#A855F7',
    animation: `${pulse} 0.5s ease-in-out`,
    background: 'rgba(147, 51, 234, 0.1)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    border: '2px solid transparent',
    background: 'linear-gradient(45deg, #9333EA, #A855F7) border-box',
    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'destination-out',
    maskComposite: 'exclude',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

function SocialBar() {
  const isMobile = useMediaQuery('(max-width:768px)');

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/in/priyanka-mehta21/',
      label: 'LinkedIn'
    },
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/priyanka603',
      label: 'GitHub'
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/priyanka7049',
      label: 'Instagram'
    }
  ];

  return (
    <SocialContainer ismobile={isMobile.toString()}>
      {socialLinks.map((social, index) => (
        <StyledIconButton
          key={index}
          aria-label={social.label}
          component="a"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </StyledIconButton>
      ))}
    </SocialContainer>
  );
}

export default SocialBar; 