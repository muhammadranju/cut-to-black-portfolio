// Get elements
const uploadArea = document.getElementById("uploadArea");
const fileInput = document.getElementById("pdfFile");
const filePreview = document.getElementById("filePreview");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const removeFile = document.getElementById("removeFile");
const uploadForm = document.getElementById("uploadForm");
const submitButton = document.getElementById("submitButton");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

let selectedFile = null;

// Click to upload
uploadArea.addEventListener("click", () => {
  fileInput.click();
});

// Prevent default drag behaviors
["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  uploadArea.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Highlight drop area
["dragenter", "dragover"].forEach((eventName) => {
  uploadArea.addEventListener(eventName, () => {
    uploadArea.classList.add("dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  uploadArea.addEventListener(eventName, () => {
    uploadArea.classList.remove("dragover");
  });
});

// Handle dropped files
uploadArea.addEventListener("drop", (e) => {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFile(files[0]);
});

// Handle selected files
fileInput.addEventListener("change", (e) => {
  handleFile(e.target.files[0]);
});

// Handle file
function handleFile(file) {
  if (!file) return;

  // Check if file is PDF
  if (file.type !== "application/pdf") {
    showError("Please upload only PDF files.");
    return;
  }

  // Check file size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    showError("File size must be less than 10MB.");
    return;
  }

  selectedFile = file;

  // Display file info
  fileName.textContent = file.name;
  fileSize.textContent = formatFileSize(file.size);
  filePreview.classList.add("show");

  hideMessages();
}

// Remove file
removeFile.addEventListener("click", () => {
  selectedFile = null;
  fileInput.value = "";
  filePreview.classList.remove("show");
});

// Format file size
function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

// Form submission
uploadForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  hideMessages();

  // Get form data
  const formData = new FormData(uploadForm);
  const fullName = formData.get("fullName");
  const phoneNumber = formData.get("phoneNumber");
  const email = formData.get("email");

  // Validate
  if (!fullName || !phoneNumber || !email || !selectedFile) {
    showError("Please fill in all fields and upload a PDF file.");
    return;
  }

  // Disable button and show loading
  submitButton.disabled = true;
  submitButton.innerHTML = 'Uploading<span class="spinner"></span>';

  // Simulate upload (replace with actual upload logic)
  setTimeout(() => {
    // Log form data (for development)
    console.log("Form Data:", {
      fullName,
      phoneNumber,
      email,
      file: {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
      },
    });

    // Show success
    showSuccess();

    // Reset form
    setTimeout(() => {
      uploadForm.reset();
      filePreview.classList.remove("show");
      selectedFile = null;
      submitButton.disabled = false;
      submitButton.textContent = "Upload";
      hideMessages();
    }, 3000);
  }, 2000);
});

// Show success message
function showSuccess() {
  successMessage.classList.add("show");
  errorMessage.classList.remove("show");
}

// Show error message
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.add("show");
  successMessage.classList.remove("show");
}

// Hide messages
function hideMessages() {
  successMessage.classList.remove("show");
  errorMessage.classList.remove("show");
}

// Phone number formatting (optional)
const phoneInput = document.getElementById("phoneNumber");
phoneInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D/g, "");
  if (value.length > 10) value = value.slice(0, 10);
  e.target.value = value;
});
