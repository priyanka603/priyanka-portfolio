import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Box,
  Avatar,
  Button,
  styled,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import { keyframes } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';

// Animation for cards appearing
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled components
const StyledCard = styled(Card)(({ theme, delay }) => ({
  background: 'rgba(17, 24, 39, 0.6)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(147, 51, 234, 0.2)',
  transition: 'all 0.3s ease',
  animation: `${fadeInUp} 0.6s ease-out forwards`,
  animationDelay: `${delay}ms`,
  opacity: 0,
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(147, 51, 234, 0.2)',
    border: '1px solid rgba(147, 51, 234, 0.4)',
  },
}));

const ViewButton = styled(Button)(({ theme }) => ({
  color: '#A855F7',
  borderColor: '#A855F7',
  '&:hover': {
    borderColor: '#9333EA',
    background: 'rgba(147, 51, 234, 0.1)',
  },
  marginTop: '1rem',
}));

const certifications = [
  {
    title: 'AWS Academy Graduate- AWS Academy Cloud Foundations',
    company: 'AWS',
    year: '2021',
    logo: '/icons/aws.svg',
    certificate: '/certificates/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20210712-58-17aaiwa.pdf'
  },
  {
    title: 'AWS Fundamentals: Going Cloud-Native',
    company: 'Coursera',
    year: '2021',
    logo: '/icons/coursera.svg',
    certificate: '/certificates/cloud-native.pdf'
  },
  {
    title: 'Introduction to IoT',
    company: 'Cisco',
    year: '2021',
    logo: '/cisco.jpeg',
    certificate: '/certificates/Introduction to iot.pdf'
  },
  {
    title: 'Programming for Everybody (Getting Started with Python)',
    company: 'Coursera',
    year: '2020',
    logo: '/icons/coursera.svg',
    certificate: '/certificates/Programming for eveybody.pdf'
  },
  {
    title: 'Python Data Structures',
    company: 'Coursera',
    year: '2020',
    logo: '/icons/coursera.svg',
    certificate: '/certificates/python data structure .pdf'
  },
];

function Certifications() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleViewCertificate = (certificateUrl) => {
    if (certificateUrl) {
      window.open(certificateUrl, '_blank');
    }
  };

  return (
    <section className="py-20 px-6 relative" id="certifications">
      <div className="container mx-auto">
        <Typography 
          variant="h2" 
          className="text-center mb-12"
          sx={{
            background: 'linear-gradient(45deg, #9333EA 30%, #A855F7 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          Certifications
        </Typography>

        <Grid container spacing={4}>
          {certifications.map((cert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StyledCard delay={index * 100}>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Avatar
                      src={cert.logo}
                      alt={cert.company}
                      sx={{
                        width: 48,
                        height: 48,
                        marginRight: 2,
                        background: 'white',
                        padding: cert.company === 'Cisco' ? '0' : '8px',
                        objectFit: 'contain',
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ color: 'white', fontWeight: 'bold' }}
                    >
                      {cert.company}
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      mb: 2,
                      minHeight: isMobile ? 'auto' : '60px',
                    }}
                  >
                    {cert.title}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#A855F7',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {cert.year}
                  </Typography>

                  {cert.certificate && (
                    <ViewButton
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                      onClick={() => handleViewCertificate(cert.certificate)}
                      fullWidth
                    >
                      View Certificate
                    </ViewButton>
                  )}
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-500 rounded transform rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500 rounded-full opacity-10"></div>
      <div className="absolute bottom-40 right-40 w-20 h-20 bg-purple-500/20 rounded-lg transform -rotate-12"></div>
    </section>
  );
}

export default Certifications; 