import BACKEND_URL from '../utils/config.js';

export const registerForm = document.getElementById("register-form");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("✅ Form submission started");

      const formData = new FormData(registerForm);
      const data = Object.fromEntries(formData.entries());
      console.log("➡️ Sending POST with data:", data);

       fetch(`${BACKEND_URL}/api/registerr`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          console.log("✅ Success:", result);
          alert("Submitted successfully");
        })
        .catch((err) => {
          console.error("❌ Fetch error:", err);
        });
    });
  }
  else {
    console.warn("⚠️ register-form not found on this page.");
  }