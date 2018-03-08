import React from 'react';
import { Menu } from 'semantic-ui-react';

const white = {
  color: '#FFFFFF',
};

export default class MainMenu extends React.Component {
  render() {
    return (
        <Menu fluid widths={9} borderless className='mainmenu'>
          <Menu.Item style={white}>BEST SELLERS</Menu.Item>
          <Menu.Item style={white}>CHARACTERS</Menu.Item>
          <Menu.Item style={white}>DVDs</Menu.Item>
          <Menu.Item style={white}>MUSIC</Menu.Item>
          <Menu.Item style={white}>GAMES & TOYS</Menu.Item>
          <Menu.Item style={white}>BOOKS</Menu.Item>
          <Menu.Item style={white}>DECOR</Menu.Item>
          <Menu.Item style={white}>CLOTHING</Menu.Item>
        </Menu>
    );
  }
}
