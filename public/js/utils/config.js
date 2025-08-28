
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