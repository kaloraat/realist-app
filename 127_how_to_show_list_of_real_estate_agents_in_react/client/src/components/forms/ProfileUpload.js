import Resizer from "react-image-file-resizer";
import axios from "axios";
import { Avatar } from "antd";
import { useAuth } from "../../context/auth";

export default function ProfileUpload({
  photo,
  setPhoto,
  uploading,
  setUploading,
}) {
  // context
  const [auth, setAuth] = useAuth();

  const handleUpload = async (e) => {
    try {
      let file = e.target.files[0];

      if (file) {
        // console.log(files);
        setUploading(true);

        new Promise(() => {
          Resizer.imageFileResizer(
            file,
            1080,
            720,
            "JPEG",
            100,
            0,
            async (uri) => {
              try {
                // console.log("UPLOAD URI => ", uri);
                const { data } = await axios.post("/upload-image", {
                  image: uri,
                });
                setPhoto(data);
                setUploading(false);
              } catch (err) {
                console.log(err);
                setUploading(false);
              }
            },
            "base64"
          );
        });
      }
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  const handleDelete = async (file) => {
    const answer = window.confirm("Delete image?");
    if (!answer) return;
    setUploading(true);
    try {
      const { data } = await axios.post("/remove-image", photo);
      if (data?.ok) {
        setPhoto(null);
        setUploading(false);
      }
    } catch (err) {
      console.log(err);
      setUploading(false);
    }
  };

  return (
    <>
      <label className="btn btn-secondary mb-4 mt-4">
        {uploading ? "Processing..." : "Upload photos"}
        <input
          onChange={handleUpload}
          type="file"
          accecp="image/*"
          // multiple
          hidden
        />
      </label>
      {photo?.Location ? (
        <Avatar
          src={photo.Location}
          shape="square"
          size="46"
          className="ml-2 mb-4 mt-4"
          onClick={() => handleDelete()}
        />
      ) : (
        ""
      )}
    </>
  );
}
