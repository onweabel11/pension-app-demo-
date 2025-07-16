// Validate NIN (dummy logic)
function validateNIN() {
    const nin = document.getElementById("ninInput").value;
    const result = document.getElementById("result");
    result.textContent = nin === "12345678901" ? "NIN is valid ✅" : "Invalid NIN ❌";
  }
  
  // Validate Pension Number (dummy logic)
  function validatePension() {
    const pension = document.getElementById("pensionInput").value;
    const result = document.getElementById("result");
    result.textContent = pension === "PEN123456" ? "Pension number is valid ✅" : "Invalid pension number ❌";
  }
  
  // Register
 function registerUser(e) {
  e.preventDefault();
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  localStorage.setItem("user", JSON.stringify({ username, password }));
  alert("Registration successful!");
  window.location.href = "login.html";
  }
  
  // Login
  
  function loginUser(e) {
    e.preventDefault();
  
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Define default credentials
    const defaultUser = {
      username: "admin",
      password: "admin123"
    };
  
    // Try to get stored user from localStorage
    let stored = JSON.parse(localStorage.getItem("user"));
  
    // If no user stored, use default
    if (!stored) {
      stored = defaultUser;
    }
  
    // Validate login
    if (stored.username === username && stored.password === password) {
      sessionStorage.setItem("loggedIn", "true");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  }
  
  
  // Upload
  function uploadFile() {
    const file = document.getElementById("fileUpload").files[0];
    if (file) {
      document.getElementById("uploadStatus").textContent = "Uploaded: " + file.name;
    } else {
      document.getElementById("uploadStatus").textContent = "Please select a file.";
    }
  }
  
  // Logout
  function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "login.html";
  }

   //appform
   function goToStep2() {
    const id = document.getElementById("idNumber").value.trim();
    if (id.length !== 11 || isNaN(id)) return ("Enter a valid 11-digit number.");
    localStorage.setItem("id", id);
    document.getElementById("step1").classList.add("hidden");
    document.getElementById("step2").classList.remove("hidden");
  }

  function goToStep3() {
    const pensionNumber = document.getElementById("pensionNumber").value.trim();
    const pfa = document.getElementById("pfa").value;
    if (!pensionNumber || !pfa) return alert("Enter all pension details.");
    localStorage.setItem("pensionNumber", pensionNumber);
    localStorage.setItem("pfa", pfa);
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");
  }

  function goToReview() {
    document.getElementById("reviewId").innerText = localStorage.getItem("id");
    document.getElementById("reviewPension").innerText = localStorage.getItem("pensionNumber");
    document.getElementById("reviewPFA").innerText = localStorage.getItem("pfa");

    document.getElementById("reviewBirthCert").innerText = document.getElementById("birthCert").files.length ? "Yes" : "No";
    document.getElementById("reviewEmpLetter").innerText = document.getElementById("employmentLetter").files.length ? "Yes" : "No";
    document.getElementById("reviewBank").innerText = document.getElementById("bankStatement").files.length ? "Yes" : "No";
    document.getElementById("reviewPassport").innerText = document.getElementById("passportPhoto").files.length ? "Yes" : "No";

    document.getElementById("step3").classList.add("hidden");
    document.getElementById("step4").classList.remove("hidden");
  }

 
  function submitApp() {
    alert("✅ Application submitted successfully!");
    localStorage.clear();
    location.reload(); // restart process
  }