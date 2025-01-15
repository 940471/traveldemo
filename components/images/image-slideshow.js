'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import AntroImg from '@/assets/Antropology Musem.jpg';
import ArcheoImg from '@/assets/Archeology zone.jpg';
import BellasImg from '@/assets/Bellas palace.jpg';
import CastleImg from '@/assets/Castle Chapultepec.jpg';
import FridaImg from '@/assets/Frida Museum.jpg';
import pryamidImg from '@/assets/pryamid.jpg';
import classes from './image-slideshow.module.css';

const images = [
  { image: AntroImg, alt: 'A National Antropology Musem' },
  { image: ArcheoImg, alt: 'A famous archeology zone' },
  { image: BellasImg, alt: 'Beautiful spain palace' },
  { image: CastleImg, alt: 'Castle built on oldage' },
  { image: FridaImg, alt: 'A national Antropology Musem' },
  { image: pryamidImg, alt: 'Solar and Lunar pryamid' }
 
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}