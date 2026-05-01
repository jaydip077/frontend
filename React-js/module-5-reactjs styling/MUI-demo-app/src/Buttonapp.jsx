import React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import CircularColor from './ProgressApp'
import ColorBadge from './Badgeapp'

export default function Buttonapp() {
  return (
    <>
    
    <Stack spacing={2} direction="row">
        <Button variant="text">Click Me</Button>
         <Button variant="contained">Click Me</Button>
          <Button variant="outlined">Click Me</Button>
   <CircularColor />
    <ColorBadge />
    </Stack>
    </>
 
  )
}
