import React, { useState } from 'react';
import { 
  Button, 
  ClickAwayListener,
  Paper,
  MenuList,
  MenuItem,
  Popper,
  Grow,
  styled
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ArticleIcon from '@mui/icons-material/Article';

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #9333EA 30%, #A855F7 90%)',
  border: 0,
  color: 'white',
  padding: '10px 20px',
  boxShadow: '0 3px 15px rgba(147, 51, 234, 0.3)',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  fontSize: '1rem',
  '&:hover': {
    background: 'linear-gradient(45deg, #7E22CE 30%, #9333EA 90%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 20px rgba(147, 51, 234, 0.4)',
  }
}));

const StyledPaper = styled(Paper)({
  background: 'rgba(31, 41, 55, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(147, 51, 234, 0.2)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
});

const StyledMenuItem = styled(MenuItem)({
  color: 'white',
  '&:hover': {
    background: 'rgba(147, 51, 234, 0.2)',
  },
  gap: '8px',
});

function CVButton() {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleDownload = () => {
    // Replace with your CV file path
    const link = document.createElement('a');
    link.href = '/Priyanka_Mehta_CV.pdf';
    link.download = 'Priyanka_Mehta_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setOpen(false);
  };

  const handleView = () => {
    // Replace with your CV file path
    window.open('/Priyanka_Mehta_CV.pdf', '_blank');
    setOpen(false);
  };

  return (
    <>
      <StyledButton
        ref={anchorRef}
        onClick={handleToggle}
        startIcon={<ArticleIcon />}
      >
        RESUME
      </StyledButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        disablePortal
        style={{ zIndex: 1000 }}
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <StyledPaper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open}>
                  <StyledMenuItem onClick={handleDownload}>
                    <DownloadIcon fontSize="small" />
                    Download CV
                  </StyledMenuItem>
                  <StyledMenuItem onClick={handleView}>
                    <VisibilityIcon fontSize="small" />
                    View CV
                  </StyledMenuItem>
                </MenuList>
              </ClickAwayListener>
            </StyledPaper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default CVButton; 