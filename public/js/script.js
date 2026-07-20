import { toggleForm } from './form_interactions/form_manipulations.js'
import { userTable } from './tables/user_table.js';
import { individualForm, companyForm } from './apis/login_apis.js';
import { registerForm } from './apis/register_apis.js';
import { forgotpass_af } from './form_interactions/forgotpass.js';

window.toggleForm = toggleForm;


document.addEventListener('DOMContentLoaded', () => {
  console.log("✅ DOM fully loaded and script.js is running");
  
  forgotpass_af();
});

