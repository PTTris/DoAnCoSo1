import React, { useState } from "react";
import axios from "../utils/axiosCustomize.js";
import { toast } from "react-toastify";

const UploadImages = () => {
    const [files, setFiles] = useState([]);
    const [id_sach, setid_sach] = useState("");

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleid_sachChange = (e) => {
        setid_sach(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("id_sach", id_sach);
        for (let i = 0; i < files.length; i++) {
            formData.append("images", files[i]);
        }

        const response = await axios.post("/postImagesBook", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (response.data && response.data.EC !== 0) {
            toast.error(response.data.EM);
        }
        if (response.data && response.data.EC === 0) {
            toast.success(response.data.EM);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter id_sach"
                value={id_sach}
                onChange={handleid_sachChange}
            />
            <input type="file" multiple onChange={handleFileChange} />
            <button type="submit">Upload Images</button>
        </form>
    );
};

export default UploadImages;
