import React from 'react';

// import QRCode from 'react-native-qrcode';

import {Container, Code} from './styles';

export default function Menu() {
  return (
    <Container>
      <Code>
        {/* <QRCode
          value="https://pedroqueiroz.dev"
          size={80}
          bgColor="#fff"
          fgColor="#8B10AE"
        /> */}
      </Code>
    </Container>
  );
}
