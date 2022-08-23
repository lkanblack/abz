import { useState } from "react";
import "./uploadbtn.scss";

function UploadBtn() {
  const [upload, setUpload] = useState();
  const [bigger, setBigger] = useState(false);

  function uploadFile(e) {
    if (e.target.files[0].size < 500) {
      setUpload(e.target.files[0]);
    } else {
      setBigger(true);
    }
  }

  return (
    <>
      <div className="upload-btn">
        <input
          type="file"
          id="upload"
          accept=".jpg, .jpeg, .png"
          onChange={uploadFile}
        />
        <label htmlFor="upload">Upload</label>
        <span>
          {upload
            ? upload.name
            : "Upload your photo" && bigger
            ? "File is greater than 5MB"
            : "Upload your photo"}
        </span>
      </div>
    </>
  );
}

export default UploadBtn;
