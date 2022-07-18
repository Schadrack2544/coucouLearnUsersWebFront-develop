/* eslint-disable react/no-unescaped-entities */
import {
  Dialog,
  DialogTitle,
  IconButton,
  Box,
  DialogContent,
  DialogContentText,
  Typography,
} from '@mui/material';
import React from 'react';
import Twitter from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Jet from 'assets/images/svg/jet.svg';
import Keza from '../../../assets/images/svg/keza5.svg';

type Props = {
  shareDialog: boolean;
  closeShareDialog: () => void;
};

const ShareDialog = ({ shareDialog, closeShareDialog }: Props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('mobile'));
  return (
    <Dialog open={shareDialog} onClose={closeShareDialog}>
      <DialogTitle
        sx={{
          position: 'absolute',
          left: {
            mobile: '180px',
            tablet: '450px',
            laptop: '500px',
          },
        }}
      >
        <IconButton onClick={closeShareDialog}>
          <CloseIcon
            sx={{
              color: 'white',
              fontSize: '40px',
            }}
          />
        </IconButton>
      </DialogTitle>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#10B981',
        }}
      >
        <Box
          sx={{
            height: '400px',
          }}
        >
          <img
            src={Keza}
            alt="Keza"
            style={{
              height: 'inherit',
            }}
          />
        </Box>
        <DialogContent>
          <Box
            sx={{
              position: 'absolute',
              left: { mobile: '150px', tablet: '330px' },
              width: {
                mobile: '100px',
                tablet: '120px',
                laptop: '170px',
              },
            }}
          >
            <img
              src={Jet}
              alt="jet"
              style={{
                width: 'inherit',
              }}
            />
          </Box>
          <DialogContentText
            sx={{
              color: 'white',
              fontSize: {
                mobile: '15px',
                tablet: '18px',
                desktop: '20px',
              },
              maxWidth: '350px',
            }}
          >
            Coucou! congratulations you have interacted the real world
            using technology. Let your friends know how excellent you
            are. Use parent's social
          </DialogContentText>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2,
              py: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                '& :hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <Twitter
                sx={{
                  color: '#1DA1F2',
                  fontSize: { mobile: '25px', tablet: '40px' },
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                  display: {
                    mobile: 'none',
                    tablet: 'flex',
                  },
                }}
              >
                Twitter
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                '& :hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <FacebookOutlinedIcon
                sx={{
                  color: '#4267B2',
                  fontSize: {
                    mobile: '25px',
                    tablet: '40px',
                    display: {
                      mobile: 'none',
                      tablet: 'flex',
                    },
                  },
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                  display: {
                    mobile: 'none',
                    tablet: 'flex',
                  },
                }}
              >
                Facebook
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                '& :hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <YouTubeIcon
                sx={{
                  color: '#FF0000',
                  fontSize: { mobile: '25px', tablet: '40px' },
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                  display: {
                    mobile: 'none',
                    tablet: 'flex',
                  },
                }}
              >
                Youtube
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                '& :hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <InstagramIcon
                sx={{
                  color: '#FCAF45',
                  fontSize: { mobile: '25px', tablet: '40px' },
                }}
              />
              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                  display: {
                    mobile: 'none',
                    tablet: 'flex',
                  },
                }}
              >
                Instagram
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ShareDialog;
