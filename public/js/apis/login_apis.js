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
