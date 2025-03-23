import React from 'react';

import { Content } from './Content';
import { Banner } from './Banner';
import { Container } from '@mui/material';

export const CibusFoodApp = () => {
  return (
    <Container className='cibus-food-app' maxWidth={false}>
      <Banner />
      <Content />
    </Container>
  );
};
