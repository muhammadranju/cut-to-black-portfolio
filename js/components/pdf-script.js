const url =
  "https://script.google.com/macros/s/AKfycbzUJXH_1vJg72GLbq7VWmVB9vFQDo3QBUqcctkPO6D2EnjWT3390En-M-yZGOv8jh6l_Q/exec";
const form = document.getElementById("uploadForm");
const fullNameInput = document.getElementById("fullName");
const phoneInput = document.getElementById("phoneNumber");
const emailInput = document.getElementById("email");
const fileInput = document.getElementById("pdfFile");
const submitBtn = document.getElementById("submitButton");
const successMsg = document.getElementById("successMessage");
const errorMsg = document.getElementById("errorMessage");
const filePreview = document.getElementById("filePreview");
const fileNameEl = document.getElementById("fileName");
const fileSizeEl = document.getElementById("fileSize");
const removeBtn = document.getElementById("removeFile");
const uploadArea = document.getElementById("uploadArea");

uploadArea.addEventListener("click", () => {
  fileInput.click();
});

fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (file) {
    filePreview.style.display = "flex";
    fileNameEl.textContent = file.name;
    fileSizeEl.textContent = (file.size / 1024).toFixed(2) + " KB";
  }
});

removeBtn.addEventListener("click", () => {
  fileInput.value = "";
  filePreview.style.display = "none";
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const fullName = fullNameInput.value.trim();
  const phone = phoneInput.value.trim();
  const email = emailInput.value.trim();
  const file = fileInput.files[0];
  if (!fullName || !phone || !email || !file) {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
    return;
  }
  errorMsg.style.display = "none";
  submitBtn.disabled = true;
  submitBtn.textContent = "Uploading...";
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = async () => {
    const base64 = reader.result.split(",")[1];
    const payload = {
      username: fullName,
      email: email,
      phone: phone,
      base64: base64,
      type: file.type,
      name: file.name,
    };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      const data = await res.text();
      console.log("Server response:", data);
      successMsg.textContent = data || "✓ Form submitted successfully!";
      successMsg.style.display = "block";
      alert(data);
      fullNameInput.value = "";
      phoneInput.value = "";
      emailInput.value = "";
      fileInput.value = "";
      filePreview.style.display = "none";
      submitBtn.disabled = false;
      submitBtn.textContent = "Upload";
    } catch (error) {
      errorMsg.textContent = "Upload failed: " + error.message;
      errorMsg.style.display = "block";
      submitBtn.disabled = false;
      submitBtn.textContent = "Upload";
    }
  };
});
