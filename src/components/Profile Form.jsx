import {useState} from "react";
import style from "../styles/ProfileForm.module.css";

const ProfileForm = () => {
  const [data, setData] = useState({ name: "", title: "", email: "", bio: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try{
        const response = await fetch("https://web.ics.purdue.edu/~zeng274/profile-app/send-data.php", {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        console.log(result.message);
    }catch(error){
        console.log(error);
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
        value={data.bio}
        onChange={handleChange}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;