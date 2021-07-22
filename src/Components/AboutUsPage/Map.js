import GoogleMapReact from 'google-map-react';
import React, { Component } from 'react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 51.53491,
      lng: -0.12214
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{key: ""} }
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={51.53491}
            lng={-0.12214}
            text="Here"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;