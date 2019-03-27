import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_ACCESS_KEYS,
  secret: process.env.REACT_APP_SECRET_KEY
});

export default unsplash
