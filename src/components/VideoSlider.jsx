import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ModalVideo } from './ModalVideo';
import image from '../icon-city.jpg';
import { SquareArrow } from './SquareArrow';
import './Slider.css';

export const VideoSlider = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef();
 

  const videoUrls = [
    {id: 0, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 1, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 2, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 3, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 4, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 5, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 6, image, url: "https://player.vimeo.com/video/824804225" },
    {id: 7, image, url: "https://player.vimeo.com/video/824804225" },
  ];

  const openModal = (videoUrl, videoId) => {
    setSelectedVideoUrl(videoUrl);
    setSelectedVideoId(videoId)
    setIsModalOpen(true);
    setIsPlaying(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsPlaying(true);
    sliderRef.current.slickPlay();
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: isPlaying,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SquareArrow direction="next" />,
    prevArrow: <SquareArrow direction="prev" />,
  };

  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {videoUrls.map((videoUrl) => (
          <div key={videoUrl.id} onClick={() => openModal(videoUrl.url, videoUrl.id )}>
            <img className='image' src={videoUrl.image} alt={`Slide ${videoUrl.id}`} />
          </div>
        ))}
      </Slider>
      {isModalOpen && (
        <ModalVideo
          videoUrl={selectedVideoUrl}
          closeModal={closeModal}
          dots={videoUrls.length}
          selectedVideoId={selectedVideoId}
        />
      )}
    </div>
  );
};




