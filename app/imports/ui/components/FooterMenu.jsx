import React from 'react';
import { Menu, Grid, List, Header, Image, Icon } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <div className='gray-background'>
          <Menu fluid borderless style={{ boxShadow: 'none', border: 'none', backgroundColor: '#efefef' }}>
            <Menu.Item>
              <Image style={{ marginTop: '50px', marginLeft: '20px' }}
                     src='http://www.veggietales.com/skin/frontend/veggie/default/images/logo.png'/>
            </Menu.Item>

            <Menu.Item>
              <Grid fluid columns={3}>
                <Grid.Column>
                  <Header as='h2'>HELP</Header>
                  <List>
                    <List.Item>About Us</List.Item>
                    <List.Item>Track An Order</List.Item>
                    <List.Item>Returns</List.Item>
                    <List.Item>Shipping Information</List.Item>
                  </List>
                </Grid.Column>

                <Grid.Column>
                  <Header as='h2' style= { { marginLeft: '-20px' } } >CATEGORIES</Header>
                  <List>
                    <List.Item>DVDs</List.Item>
                    <List.Item>Books</List.Item>
                    <List.Item>Music</List.Item>
                    <List.Item>Products</List.Item>
                  </List>

                </Grid.Column>

                <Grid.Column>
                  <Header as='h2'>LEGAL</Header>
                  <List>
                    <List.Item>Privacy Policy</List.Item>
                    <List.Item>Terms of Use</List.Item>
                    <List.Item>FAQ</List.Item>
                  </List>
                </Grid.Column>
              </Grid>
            </Menu.Item>

            <Menu.Item>
              <List>
                <List.Item>
                  <Icon name="facebook f"/>
                  <Icon name="twitter"/>
                  <Icon name="instagram"/>
                  <Icon name="youtube"/>
                  <Icon name="pinterest"/>
                </List.Item>
                <List.Item>
                  © 2017 Big Idea Entertainment, LLC. All rights reserved.
                </List.Item>
              </List>
            </Menu.Item>
          </Menu>
        </div>
    );
  }
}
