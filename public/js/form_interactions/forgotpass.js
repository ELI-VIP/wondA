export const forgotpass_af = () => {
    // 1. Grab UI elements safely
    const recoveryTitle = document.getElementById("recoverytitle");
    const tabCompany = document.getElementById("tab_company");
    const tabIndividual = document.getElementById("tab_individual");
    const company_name_co = document.getElementById("company_name_cont");
    
    // Safety check: If these elements don't exist on the current page, stop immediately
    if (!recoveryTitle || !tabCompany || !tabIndividual || !company_name_co) return;

    // 2. Read the URL string
    const urlParams = new URLSearchParams(window.location.search);
    const userType = urlParams.get("type"); 

    // 3. Condition the UI based on the type variable
    if (userType === "individual") {
        recoveryTitle.textContent = "Password Recovery - Personal Account"
        company_name_co.style.display = "none"; // Hide company name input for individual users
        
    } else {
        recoveryTitle.textContent = "Password Recovery - Company Account"
    }
}