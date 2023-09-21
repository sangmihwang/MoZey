// import { useEffect, useState } from "react";
// import {} from "./config/firebase";
import React from 'react';
import logo from '../assets/images/Mozey_questionmark2.png'; 
import { Button, Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const MainContentWrapper = styled('div')({
  backgroundColor: '#FFF4DA',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

const TopSection = styled('div')({
  backgroundColor: '#EBE09B',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
});

const LogoArea = styled('div')({
  height: '150px',
  marginTop: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#EBE09B',
  marginBottom: '20px',
});

const Footer = styled('div')({
  backgroundColor: '#ffffff',
  padding: '20px',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

function MainContent() {
  return (
    <MainContentWrapper>
      <TopSection>
        <LogoArea>
          <img src={logo} alt="Logo" style={{ width: '350px', height: 'auto' }} />
        </LogoArea>
        {/* <Container maxWidth="sm" style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '10px' }}>
          <Typography variant="h4" gutterBottom>
            Welcome to Mozey
          </Typography>
          <Typography variant="body1" paragraph>
            Discover exciting content tailored just for you.
          </Typography>
          <Button variant="contained" color="primary" fullWidth>
            Get Started
          </Button>
        </Container> */}
      </TopSection>
      
    </MainContentWrapper>
  );
}

export default MainContent;

