import { useState,useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion"
import { img, style } from "framer-motion/client";
const images = [
    "https://img.icons8.com/?size=100&id=38389&format=png&color=000000",
    "https://img.icons8.com/?size=100&id=122637&format=png&color=FFFFFF",
    "https://img.icons8.com/?size=100&id=62856&format=png&color=FFFFFF",
    "https://img.icons8.com/?size=100&id=9nmz9TYzN8iO&format=png&color=FFFFFF",
    "https://img.icons8.com/?size=100&id=38273&format=png&color=FFFFFF",
];

const AutoSlideInterval = 3000;

const ImageCaroucel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const toNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const toPrevious = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length -1 : prevIndex -1
     );
    };
useEffect(() => {
    const slideInterval = setInterval(toNext, AutoSlideInterval);
    return () => clearInterval(slideInterval);
}, [currentIndex]);

    return ( 
        <div 
         className="h-[300px] m-auto overflow-hidden"
        >
            <div className="m-auto">
                <motion.div
                 className="flex w-[100px] h-[100px]"
                 animate={{x: `-${currentIndex *100}%`}}
                 transition={{ease: "easeInOut", duration: 1.0}}
                >
                    {images.map((imageSrc, index) => (
                        <img 
                         key={index}
                         src={imageSrc}
                         alt={`Slide ${index + 1}`}
                         className="w-[100px] h-[100px] object-cover flex-shrink-0"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
     );
}
 
export default ImageCaroucel;