import React, { useState, useEffect } from "react";
import axios from "../utils/axiosCustomize.js";

const ImageGallery = ({ maSach }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(`/getImagesBook/${maSach}`);
                return setImages(response.data);
            } catch (error) {
                console.error("Error fetching images:", error);
            }
        };
        fetchImages();
    }, [maSach]);

    console.log(images);
    return (
        <div>
            <img
                src="http://localhost:8080/images/1716289342438.png"
                alt=""
                width={"500px"}
            />
            {images.length > 0 ? (
                images.map((image, index) => (
                    <img
                        key={index}
                        src="\images\bookstore.png"
                        alt={` ${index}`}
                        style={{
                            width: "200px",
                            height: "auto",
                            margin: "10px",
                        }}
                    />
                ))
            ) : (
                <p>No images found for this book.</p>
            )}
        </div>
    );
};

export default ImageGallery;
