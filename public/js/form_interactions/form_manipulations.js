export function toggleForm(formType) {
  const companyForm = document.getElementById('companyForm');
  const individualForm = document.getElementById('individualForm');

  if (formType === 'companyForm') {
    companyForm.style.display = 'block';
    individualForm.style.display = 'none';
  } else if (formType === 'individualForm') {
    individualForm.style.display = 'block';
    companyForm.style.display = 'none';
  }
}

