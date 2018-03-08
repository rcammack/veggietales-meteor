import React from 'react';
import { Grid, Segment, Image, Label } from 'semantic-ui-react';

export default class Body extends React.Component {
  render() {
    return (
        <div>
          <Grid fluid columns={2}>
            <Grid.Column>
              <Label style={{ marginTop: '10px', marginLeft: '13px' }} color='orange' ribbon>DVDs</Label>
            </Grid.Column>
            <Grid.Column style={{ marginLeft: '-200px' }}>
              <Segment.Group horizontal>
                <Segment>
                  {/* eslint-disable-next-line */}
                  <Image src="http://www.veggietales.com/media/catalog/product/cache/1/small_image/129x179/17f82f742ffe127f42dca9de82fb58b1/s/p/space_resize.jpg"/></Segment>
                <Segment>
                  {/* eslint-disable-next-line */}
                  <Image src="http://www.veggietales.com/media/catalog/product/cache/1/small_image/129x179/17f82f742ffe127f42dca9de82fb58b1/m/e/merrylarrystoreimage.jpg"/></Segment>
                <Segment>
                  {/* eslint-disable-next-line */}
                  <Image src="http://www.veggietales.com/media/catalog/product/cache/1/small_image/129x179/17f82f742ffe127f42dca9de82fb58b1/d/u/duke_storeimage.jpg"/></Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
