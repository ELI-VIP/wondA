import BACKEND_URL from '../utils/config.js';

export const individualForm = document.getElementById('individualForm');
if (individualForm) {
  individualForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const individualUserId = document.getElementById('individualUserId').value;
    const individualPassword = document.getElementById('individualPassword').value;

    const response = await fetch(`${BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        loginType: 'individual',
        individualUserId,
        individualPassword
      })
    });

    const result = await response.json();
    if (result.success) window.location.href = '/dashboard';
    else alert('Invalid credentials');
  });
}

export const companyForm = document.getElementById('companyForm');
if (companyForm) {
  companyForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const companyId = document.getElementById('companyId').value;
    const companyUserId = document.getElementById('companyUserId').value;
    const password = document.getElementById('upassword').value;

    const response = await fetch(`${BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        loginType: 'company',
        companyId,
        companyUserId,
        password
      })
    });

    const result = await response.json();
    if (result.success) window.location.href = '/dashboard';
    else alert('Invalid Credentials');
  });
}




export const company_pr = document.getElementById('company_pr');
if (company_pr) {
  company_pr.addEventListener('submit', async function (e) {
    e.preventDefault();
    const company_ID = document.getElementById('company_ID').value;
    const cuser_ID = document.getElementById('cuser_ID').value;
    const cemail = document.getElementById('cemail').value;

    try {
    const response = await fetch(`${BACKEND_URL}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        loginType: 'companypr',
        company_ID,
        cuser_ID,
        cemail
      })
    });

    const result = await response.json();
   if (result.success && result.resetToken) {
        // Redirect to password reset page with token in URL
        window.location.href = `/resetpassword.html?token=${result.resetToken}&type=company`;
      }
    else {
        alert(result.message || 'Invalid details entered');
      }
    } catch (error) {
      console.error('Password reset request error:', error);
      alert('An error occurred. Please try again.');
    }
  });
}


