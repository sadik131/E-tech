import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineTags } from 'react-icons/ai';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./BannerSlider.css";

// import required modules
import { Pagination, Navigation } from "swiper";
const BannerSlider = () => {
    const banners = [
        { id: 1, img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-38.png", heading: "Reco Wireless HeadPhon", price: "49.9" },
        { id: 2, img: "https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-39.png", heading: "Smart Digital Watch", price: "109.9" }
    ]
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                banners.map(banner => {
                    return <SwiperSlide>

                        <div key={banner.id} className="banner-discription">
                            <h1>{banner.heading}</h1>
                            <button>Shop Now</button>
                        </div>
                        <div className="banner-img">
                            <img src={banner.img} alt="" />
                            <div className="banner-price">
                                <h3>from</h3>
                                <p>${banner.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                })
            }
        </Swiper>
    );
}

export default BannerSlider;
