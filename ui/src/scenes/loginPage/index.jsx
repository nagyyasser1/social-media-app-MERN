import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Form from './Form'

function LoginPage() {
  const theme = useTheme()
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)')
  return (
    <Box>
      <Box
        width={'100%'}
        p={'1rem 6%'}
        backgroundColor={theme.palette.background.alt}
        textAlign={'center'}
      >
        <Typography fontSize={'32px'} fontWeight={'bold'} color={'primary'}>
          Meta
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? '50%' : '93%'}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: '1.5rem' }}>
          Welcome to Meta, the Social Media for Sociopaths!
        </Typography>
        <Form />
      </Box>
    </Box>
  )
}

export default LoginPage
