import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Stack,
  Typography,
  Switch,
  SwitchProps,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';

import './Settings.scss';
import { TSettingsUpdate } from '@actions/settingsActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@store/mainStore';
import { getSelf, TUser, updateUser } from '@actions/userActions';
import { loginUser } from '@store/actions/userActions';

const Settings = () => {
  const { user } = useSelector<RootState, { user: TUser }>((state) => state.user);
  const dispatch = useDispatch();

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '1s',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color:
                    theme.palette.mode === 'light'
                      ? theme.palette.grey[100]
                      : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));

  const botOnOff = async ({ botOn, sendSelf }: TSettingsUpdate) => {
    try {
      await updateUser({
        userId: user.userId,
        settings: {
          botOn,
          sendSelf,
          triggers: user.settings.triggers,
        },
      });
      const newUser = await getSelf();
      dispatch(loginUser(newUser));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Enable Bot</Typography>
        <IOSSwitch
          sx={{ m: 1 }}
          checked={user.settings.botOn || false}
          onChange={(e) => {
            botOnOff({ botOn: e.target.checked, sendSelf: user.settings.sendSelf });
          }}
        />
      </Stack>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Send From Myself</Typography>
        <IOSSwitch
          sx={{ m: 1 }}
          checked={user.settings.sendSelf || false}
          disabled={user.role === 'user'}
          onChange={(e) => {
            botOnOff({ sendSelf: e.target.checked, botOn: user.settings.botOn });
          }}
        />
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>test</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                test
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Settings;
