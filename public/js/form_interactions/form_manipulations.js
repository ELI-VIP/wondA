export function toggleForm(formType) {
  const companyForm = document.getElementById('companyForm');
  const individualForm = document.getElementById('individualForm');
  const company_name_c = document.getElementById('company_name_c');
  const individual_name_c = document.getElementById('individual_name_c');

  if (formType === 'companyForm') {
    companyForm.style.display = 'block';
    individualForm.style.display = 'none';
  } 
  if( formType === 'company_name_c') {
    company_name_c.style.display = 'block';
    individual_name_c.style.display = 'none';
  }
  if( formType === 'individual_name_c') {
    individual_name_c.style.display = 'block';
    company_name_c.style.display = 'none';
  } 
  else if (formType === 'individualForm') {
    individualForm.style.display = 'block';
    companyForm.style.display = 'none';
  }
}

