import React, { useState } from 'react';
import { 
  Fab, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  useMediaQuery,
  styled,
  keyframes
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

// Animations
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
  50% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5); }
  100% { box-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
`;

// Styled Components
const StyledFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 32,
  right: 32,
  background: 'linear-gradient(45deg, #9333EA 30%, #A855F7 90%)',
  color: 'white',
  animation: `${bounce} 2s infinite, ${glow} 3s infinite`,
  '&:hover': {
    background: 'linear-gradient(45deg, #7E22CE 30%, #9333EA 90%)',
    transform: 'scale(1.1)',
  },
  transition: 'all 0.3s ease-in-out',
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(147, 51, 234, 0.2)',
    borderRadius: '16px',
    color: 'white',
  },
}));

const GradientText = styled('span')({
  background: 'linear-gradient(45deg, #9333EA 30%, #A855F7 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 'bold',
});

function FloatingContactButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [formData, setFormData] = useState({ name: '', message: '' });
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const visitTime = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    try {
      await emailjs.send(
        'service_i7x49gi',
        'template_35najfo',
        {
          from_name: formData.name,
          message: formData.message,
          to_email: 'mehtapriyanka2127@gmail.com',
          visit_time: visitTime,
          // The template will automatically format the message with:
          // - "👋 You Have a New Visitor!"
          // - "Name: {{from_name}}"
          // - "Message: {{message}}"
          // - "Visit Time: {{visit_time}}"
          // - "Best wishes, EmailJS team"
        },
        'dC-gRbpGFzomp7fh0'
      );

      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success'
      });
      setOpen(false);
      setFormData({ name: '', message: '' });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledFab
        onClick={() => setOpen(true)}
        size={isMobile ? 'medium' : 'large'}
        aria-label="contact"
      >
        <EmailIcon />
      </StyledFab>

      <StyledDialog
        open={open}
        onClose={() => !loading && setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <div className="flex justify-between items-center">
            <GradientText>Send a Message</GradientText>
            {!loading && (
              <CloseIcon
                onClick={() => setOpen(false)}
                className="cursor-pointer text-gray-400 hover:text-white transition-colors"
              />
            )}
          </div>
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Your Name"
              fullWidth
              variant="outlined"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={loading}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(147, 51, 234, 0.5)' },
                  '&:hover fieldset': { borderColor: '#9333EA' },
                  '&.Mui-focused fieldset': { borderColor: '#9333EA' },
                },
                '& .MuiInputLabel-root': { color: 'gray' },
              }}
            />
            <TextField
              margin="dense"
              label="Your Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={loading}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': { borderColor: 'rgba(147, 51, 234, 0.5)' },
                  '&:hover fieldset': { borderColor: '#9333EA' },
                  '&.Mui-focused fieldset': { borderColor: '#9333EA' },
                },
                '& .MuiInputLabel-root': { color: 'gray' },
              }}
            />
          </DialogContent>

          <DialogActions sx={{ padding: 2 }}>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background: 'linear-gradient(45deg, #9333EA 30%, #A855F7 90%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(45deg, #7E22CE 30%, #9333EA 90%)',
                },
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Send'}
            </Button>
          </DialogActions>
        </form>
      </StyledDialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default FloatingContactButton; 