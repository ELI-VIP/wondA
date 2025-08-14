// config.js

const isLocalhost = window.location.hostname === 'localhost';

export const BACKEND_URL = isLocalhost
  ? 'http://localhost:3000'
  : 'https://api.wonda.name.ng';

export default BACKEND_URL;
