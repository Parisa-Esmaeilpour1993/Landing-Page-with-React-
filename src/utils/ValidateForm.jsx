export default function ValidateForm(formData) {
  const newErrors = {};
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  if (!formData.fullName || !formData.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  } else if (formData.fullName.trim().length < 3) {
    newErrors.fullName = "Full Name must be at least 3 characters";
  }

  if (!formData.email || !formData.email.trim()) {
    newErrors.email = "Email Address is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!formData.password || !formData.password.trim()) {
    newErrors.password = "Password is required";
  } else if (!passwordPattern.test(formData.password)) {
    newErrors.password =
      "Password must be at least 6 characters and include at least one uppercase and one lowercase letter.";
  }

  return newErrors;
}
