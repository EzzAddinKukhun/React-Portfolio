import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './HeaderStyle.css'; 

export default function HeaderButtons() {
  return (
    <Stack id="stack-btns-container" spacing={2} direction="row">
      <Button id="got-project-btn" className='w-35'  variant="contained">Got a project?</Button>
      <Button id="lets-talk-btn" className='w-35' variant="outlined">Let's Talk</Button>
    </Stack>
  );
}
