
/* 
let BACKEND_URL = '';

// detect local dev environments: localhost, 127.0.0.1, Codespace live preview
const localHosts = ['localhost', '127.0.0.1', 'app.github.dev'];

if (localHosts.some(host => window.location.hostname.includes(host))) {
  BACKEND_URL = ''; // relative path → no CORS
} else {
  BACKEND_URL = 'https://api.wonda.name.ng'; // production
}

console.log('🔹 BACKEND_URL is set to:', BACKEND_URL);

export default BACKEND_URL;

*/

const hostname = window.location.hostname;

let BACKEND_URL = '';

const isLocal = ['localhost', '127.0.0.1', 'app.github.dev'].some((host) =>
  hostname.includes(host)
);

const isBackendHost =
  hostname === 'api.wonda.name.ng' || hostname === 'wonda.onrender.com';

if (isLocal || isBackendHost) {
  // Same-origin request: no cross-origin CORS needed
  BACKEND_URL = '';
} else {
  // Frontend hosts (wonda.name.ng, Netlify, etc.) point to the API subdomain
  BACKEND_URL = 'https://api.wonda.name.ng';
}

console.log('🔹 BACKEND_URL is set to:', BACKEND_URL || '(same-origin)');

export default BACKEND_URL;
