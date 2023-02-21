import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import ImageCarousel from "../component/ImageCarousel";

export const Home = () => {

	  return (
		<><h1 class="inicio">
        Welcome to your MiniMarket WebApp!
      </h1><div>
          <ImageCarousel
            image1={'https://equipment21.com/wp-content/uploads/como-abrir-un-minimarket.jpg'}
            captionTitle1={'You can customize this!'} captionText1={'With images of your minimarket, offers, or whatever you want!'}
            image3={'https://kalsonjewellers.com/wp-content/uploads/2022/03/offers.jpg'}
            captionTitle2={'You can customize this!'} captionText2={'With images of your minimarket, offers, or whatever you want!'}
            image2={'https://www.salamancabusca.cl/wp-content/uploads/2016/12/2-1.jpg'}
            captionTitle3={'You can customize this!'} captionText3={'With images of your minimarket, offers, or whatever you want!'} />
        </div></>
	  );
	};
