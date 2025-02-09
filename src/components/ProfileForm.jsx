import { useState } from "react";
import style from "../styles/ProfileForm.module.css";


const ProfileForm = () => {

  const [data, setData] = useState({
    name: "",
    title: "",
    email: "",
    bio: "",
    image: null,
  });
  const [errors, setErrors] = useState({ image: "", general: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    let newErrors = { ...errors };

    if (file) {
      // Validate file and size
      if (file.size > 2000000) {
        newErrors.image = "Image must be less than 2MB.";
      } else {
        newErrors.image = ""; // No errors
        setData({
          ...data,
          image: file,
        });
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = Object.values(errors).some((err) => err !== "");
    if (hasErrors) return; // Prevent submission if there are errors

    setSubmitting(true);
    const formData = new FormData();
    formData.append("name", data.name.trim());
    formData.append("email", data.email.trim());
    formData.append("title", data.title.trim());
    formData.append("bio", data.bio.trim());
    if (data.image) formData.append("image", data.image);

    try {
      const response = await fetch(
        "https://web.ics.purdue.edu/~zeng274/profile-app/send-data.php",
        {
          method: "POST",
          body: formData,
          mode: "no-cors"
        }
      );

      const result = await response.json();
      if (result.success) {
        setData({ name: "", email: "", title: "", bio: "", image: null }); // Clear form
        setErrors({image: "", general: "" }); // Clear errors
        setTimeout(()=> setSuccessMessage(), 1000);
      } else {
        setErrors({ ...errors, general: result.message });
      }
    } catch (error) {
      setErrors({
        ...errors,
        general: "An error occurred. Please try again later.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style["profile-form"]}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={data.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={data.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="title"
        placeholder="Title"
        required
        value={data.title}
        onChange={handleChange}
      />

      <textarea
        name="bio"
        placeholder="Some description"
        required
        maxLength={200}
        value={data.bio}
        onChange={handleChange}
      ></textarea>
    <p className="char-count">{200 - data.bio.length} characters remaining</p>

      <label htmlFor="image">Upload a profile image:</label>
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        required
        onChange={handleFileChange}
      />
    {errors.image && <p className="error">{errors.image}</p>}
      <button
        type="submit"
        disabled={submitting || Object.values(errors).some((err) => err !== ""|| data.name.trim() === "" || data.email.trim() === "" || data.title.trim() === "" || data.bio.trim() === "" || data.image === null)}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
      {errors.general && <p className="error">{errors.general}</p>}
      {successMessage && <p className="success">{successMessage}</p>}
    </form>
  );
};

export default ProfileForm;