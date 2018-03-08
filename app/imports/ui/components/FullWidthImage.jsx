import React from 'react';
import { Image } from 'semantic-ui-react';

export default class FullWidthImage extends React.Component {
  render() {
    return (
        <div>
          <Image style={{ marginTop: '-15px' }} fluid
                 src="http://www.veggietales.com/media/wysiwyg/1080by480_PlushFlashSale.png"/>
        </div>
    );
  }
}
