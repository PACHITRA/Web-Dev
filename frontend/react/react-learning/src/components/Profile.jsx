import { useState } from "react"


const Profile = () => {
    const [profile, setprofile] = useState({
        name: "",
        age:""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;  
        setprofile((prev) => ({ ...prev, [name]: value }));
        };
  return (
    <div>
        <h2>User Profile</h2>
        <div>
            <label>Enter Name:</label>
            <input type="text" name="name" value={profile.name} onChange={handleChange}/>
        </div>
        <div>
            <label>Enter Age:</label>
            <input type="number" name="age" value={profile.age} onChange={handleChange}/>
        </div>
        <h3>Profile Info</h3>
        <p> Name: {profile.name}</p>
        <p> Age: {profile.age}</p>
    </div>
  )

}
export default Profile;
