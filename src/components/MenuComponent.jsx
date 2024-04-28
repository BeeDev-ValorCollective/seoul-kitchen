import React, { useState, useEffect } from 'react'
import Dakkalbi from '../static/assets/Dakkalbi.png'
import Galbi from '../static/assets/Galbi.png'
import Kimbap from '../static/assets/Kimbap.jpg'
import OreoCroffle from '../static/assets/OreoCroffle.jpg'
import StrawbCroffle from '../static/assets/StrawbCroffle.jpg'

const MenuComponent = () => {
    const [imgURL, setImgURL] = useState('')

    const imgList = [
        Dakkalbi,
        Galbi,
        Kimbap,
        OreoCroffle,
        StrawbCroffle
        ]

    const getRandomImg = () => {
        const randIndex = Math.floor(Math.random() * imgList.length);
        return imgList[randIndex];
    };
        
    // Set random image URL on component mount or reload
    useEffect(() => {
        const randImg = getRandomImg();
        setImgURL(randImg);
    }, []);

    return (
        <>
            <div className="wrapper wrapper_border">
                <div className="split_box">
                    <div className="split_box_img">
                        {imgURL && <img src={imgURL} alt="Food Image" />}
                    </div>
                    <div className="split_box_button">
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuComponent;