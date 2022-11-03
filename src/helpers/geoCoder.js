let nodeGeocoder = require('node-geocoder')

const options = {
  provider: "openstreetmap",
};

const geoCoder = nodeGeocoder(options);

export default geoCoder;