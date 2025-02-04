import { toast } from "react-toastify";
import ValidateForm from "./ValidateForm";

export default function HandleSubmit(
  formData,
  setErrors,
  setFormData,
  closeForm
) {
  const newErrors = ValidateForm(formData);

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  toast.success("Registration successful! ✅", {
    position: "top-right",
    autoClose: 3000,
  });

  setFormData({ fullName: "", email: "", password: "" });

  setTimeout(() => {
    closeForm();
  }, 1000);
}
