/* eslint-disable @typescript-eslint/indent */
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import { Player } from 'video-react';
import ReactPlayer from 'react-player';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
import ShareIcon from '@mui/icons-material/Share';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import PopUpShare from 'modules/_partials/popupShare';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
};

type Props = {
  openVideo: boolean;
  handleClose: () => void;
};

const TransitionsModal = ({ openVideo, handleClose }: Props) => {
  const theme = useTheme();
  const [shareDialog, setShareDialog] = React.useState(false);
  const [fullScreen, setFullScreen] = React.useState(false);
  const closeShareDialog = () => {
    setShareDialog(false);
  };
  // const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const clickFull = () => {
    setFullScreen(!fullScreen);
  };
  return (
    <Box>
      <Dialog
        open={openVideo}
        onClose={() => {
          handleClose();
          setFullScreen(false);
        }}
        sx={{
          maxWidth: '100%',
          maxHeight: '100%',
        }}
        {...(fullScreen && { fullScreen: true })}
      >
        {/* <Box sx={{ maxWidth: '100%', height: 'auto' }}> */}
        <DialogTitle
          sx={
            fullScreen
              ? {
                  position: 'absolute',
                  left: {
                    mobile: '310px',
                    tablet: '450px',
                    laptop: '750px',
                    desktop: '1200px',
                  },
                  // display: 'none',
                }
              : {
                  position: 'absolute',
                  left: {
                    mobile: '150px',
                    tablet: '300px',
                    desktop: '350px',
                  },
                }
          }
        >
          <IconButton
            onClick={() => {
              handleClose();
              setFullScreen(false);
            }}
          >
            <CloseIcon
              sx={{
                color: '#193059',
                fontSize: '50px',
              }}
            />
          </IconButton>
        </DialogTitle>
        <DialogContent
          sx={
            fullScreen
              ? {
                  width: 'inherit',
                }
              : {
                  width: {
                    mobile: '300px',
                    tablet: '400px',
                    desktop: '500px',
                  },
                }
          }
        >
          <iframe
            src="https://community.augmented-future.com/coucouMarkerless/viewAR.php?id=1"
            title="elephant"
            style={
              fullScreen
                ? { width: '100%', height: '100%' }
                : { width: 'inherit', height: '300px' }
            }
          />
        </DialogContent>
        <DialogActions
          sx={{
            mx: 'auto',
          }}
        >
          <IconButton onClick={() => setShareDialog(true)}>
            <ShareIcon sx={{ color: '#193059', fontSize: '40px' }} />
          </IconButton>
          <IconButton onClick={clickFull}>
            {fullScreen ? (
              <FullscreenExitIcon
                sx={{ color: '#193059', fontSize: '60px' }}
              />
            ) : (
              <FullscreenIcon
                sx={{ color: '#193059', fontSize: '60px' }}
              />
            )}
          </IconButton>
        </DialogActions>
        {/* </Box> */}
      </Dialog>
      <PopUpShare
        shareDialog={shareDialog}
        closeShareDialog={closeShareDialog}
      />
    </Box>
  );
};

export default TransitionsModal;
