import React from 'react';
import { Container } from 'semantic-ui-react';
import MainMenu from '../components/MainMenu';
import FullWidthImage from '../components/FullWidthImage';
import Body from '../components/Body';

export default class Veggietales extends React.Component {

  render() {
    return (
        <div className="body">
          <Container>
            <MainMenu/>
            <FullWidthImage/>
            <Body/>
          </Container>
        </div>
    );
  }
}
