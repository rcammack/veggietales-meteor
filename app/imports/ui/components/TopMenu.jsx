import React from 'react';
import { Container, Menu, Input, Grid, Image, Header } from 'semantic-ui-react';

const white = {
  color: '#FFFFFF',
};

const giant = {
  height: '30px',
  width: '220px',
};

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>

            <Menu.Item><Image
                src="http://www.veggietales.com/skin/frontend/veggie/default/images/logo.png"/></Menu.Item>

            <Menu.Item>
              <Input icon="search" placeholder="Search..."/>
            </Menu.Item>

            <Menu.Item>
              <Grid style={{ width: '320px' }} columns={2}>
                <Grid.Row centered>
                  <Image style={giant}
                         src="http://www.veggietales.com/skin/frontend/veggie/default/images/freeShipping.png"/>
                </Grid.Row>

                <Grid.Row centered>
                  <Grid.Column>
                    <Header style={white} as="u">My Account</Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header style={white} as="u">Track An Order</Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Menu.Item>

            <Menu.Item position='right'>
              { /* eslint-disable-next-line */ }
              <Header as='a' style={white}><Image size='large' src="http://www.veggietales.com/skin/frontend/veggie/default/images/bag_ico_header.png"/>My
                Bag (0)
              </Header>
            </Menu.Item>


          </Container>
        </Menu>
    );
  }
}
