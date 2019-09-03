/* eslint-disable global-require */

const images = {
  Clear: {
    backgroundImage: require('../assets/clear.png'),
    backgroundColor: '#62504C'
  },
  Hail: {
    backgroundImage: require('../assets/hail.png'),
    backgroundColor: '#C6C6C6'
  },
  'Heavy Cloud': {
    backgroundImage: require('../assets/heavy-cloud.png'),
    backgroundColor: '#32332B'
  },
  'Light Cloud': {
    backgroundImage: require('../assets/light-cloud.png'),
    backgroundColor: '#857554'
  },
  'Heavy Rain': {
    backgroundImage: require('../assets/heavy-rain.png'),
    backgroundColor: '#685951'
  },
  'Light Rain': {
    backgroundImage: require('../assets/light-rain.png'),
    backgroundColor: '#3D402B'
  },
  Showers: {
    backgroundImage: require('../assets/showers.png'),
    backgroundColor: '#999999'
  },
  Sleet: {
    backgroundImage: require('../assets/sleet.png'),
    backgroundColor: '#716B6B'
  },
  Snow: {
    backgroundImage: require('../assets/snow.png'),
    backgroundColor: '#B2998C'
  },
  Thunder: {
    backgroundImage: require('../assets/thunder.png'),
    backgroundColor: '#483643'
  },
};

export default weather => images[weather];
