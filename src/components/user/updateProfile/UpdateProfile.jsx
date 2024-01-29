import { useState } from "react";
import "./UpdateProfile.css";

const UpdateProfile = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // You can perform additional validations here if needed
    setProfileImage(file);
  };
  return (
    <div className="UpdateProfile">
      <h3>Update Profile</h3>
      <div className="UpdateProfile-wrapper">
        <p>Name</p>
        <input type="text" />
        <p>Email</p>
        <input type="text" />
        <p>Phone No</p>
        <input type="text" />
        <p>Upload Photo</p>
        <div>
          {profileImage && (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Profile Preview"
              style={{ maxWidth: "100px" }}
            />
          )}

          <div>
            <input
              className="Updateprofile-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div>
          <button>Update </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
