import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UNPLASH_CLIENT_ID } from '../../config';

const Gallery = ({ onSelect, selectedImage,SetGalleryIsOpen }) => {
  const [images, setImages] = useState([]);
  const [searchImage, setSearchImages] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
const [searching,setSeaching]=useState(false)
  const fetchImages = async () => {
    try {

      const response = await axios.get(
        `https://api.unsplash.com/photos/?client_id=${UNPLASH_CLIENT_ID}`

      );

      setImages(response.data);
      onSelect(images[0].urls.small);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const fetchSearchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos/?query=${debouncedSearch}&client_id=${UNPLASH_CLIENT_ID}`
      );
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching search images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      setSeaching(false)

      setDebouncedSearch(searchImage);
    }, 500); // Ajusta el tiempo de espera según tus necesidades
    return () => {
      setSeaching(true)
      clearTimeout(delaySearch);
    };
  }, [searchImage]);

  useEffect(() => {
    if (debouncedSearch) {
      fetchSearchImages();
    } else {
      fetchImages();
    }
  }, [debouncedSearch]);

  const handleImageClick = (imageUrl) => {
    onSelect(imageUrl);
  
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchImages(value);
  };

  return (
    <div className='w-[500px]  bg-white py-5 px-3 rounded-[8px] flex flex-col justify-around '>
      <input
        type="text"
        value={searchImage}
        onChange={(event) => handleChange(event)}
        placeholder='search for an image ...'
        className="mx-auto border focus:outline-none rounded-[8px] shadow-lg w-[259px] h-[34px] text-sm border-[1px solid #E0E0E0] px-1 py-2 mb-2"
      />
      <div className="gallery-container h-[329px] max-h-[330px] grid grid-cols-3 py-3 px-2 overflow-y-auto">
        {images.length && !searching ?  images.map((image, indexImage) => (
          <img
            key={image.id}
            src={image.urls.thumb }
            alt={image.alt_description}
            onClick={() => handleImageClick(image.urls.thumb )}
            className={`${selectedImage === image.urls.thumb  ? "border-4  border-blue-500" : ""} object-contain h-[150px]`}
            onDoubleClick={()=>{onSelect(image.urls.thumb);SetGalleryIsOpen(false)}}
          />
        )): <div className='h-[329px] w-[427px] relative'>
          <div className='mx-auto absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center '>
            <span className='animate-spin rounded-full border-t-4 border-blue-500 border-solid h-6 w-6'></span>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Gallery;
