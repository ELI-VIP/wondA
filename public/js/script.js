import { toggleForm } from './form_interactions/form_manipulations.js';

// Just import — their code will auto-run when relevant elements exist
import './tables/user_table.js';
import './apis/login_apis.js';
import './apis/register_apis.js';

window.toggleForm = toggleForm;

document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ Frontend loaded and running...");
});


