import { useEffect, useState } from "react";

const GalleryImg = ({index}) => {
  const [galleryPhotos, setGalleryPhotos] = useState([]);

  useEffect(() => {
    fetch("gallereyimg.json")
      .then((res) => res.json())
      .then((data) => setGalleryPhotos(data));
  }, [galleryPhotos]);

  return (
   
    
      <img
        className="w-full object-cover rounded-xl overflow-hidden hover:scale-110 duration-1000"
        src={galleryPhotos[index]?.imageURL}
        alt=""
      />
   
  );
};

export default GalleryImg;
