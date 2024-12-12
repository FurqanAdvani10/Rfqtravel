import React from "react";
import "./gallery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Gallery = () => {
    const images = [
        { id: 1, src: "gallery/2eb4d144-be56-4a68-a7be-e97300f49ddf.JPG", title: "Beautiful Landscape" },
        { id: 2, src: "gallery/7b7923ff-2c0f-404b-b1a4-f268e637f2e7.JPG", title: "Sunset View" },
        { id: 3, src: "gallery/9ac6532a-e038-4c54-8f51-d65f334424a1 2.JPG", title: "Mountain Peaks" },
        { id: 4, src: "gallery/9ac6532a-e038-4c54-8f51-d65f334424a1.JPG", title: "Ocean Waves" },
        { id: 5, src: "gallery/9d6ed7d4-e530-45cd-8a4b-b67f65b9f020.JPG", title: "Serene Forest" },
        { id: 6, src: "gallery/29e4314f-a0df-4b73-b6d6-0bb870557985.JPG", title: "City Skyline" },
        { id: 7, src: "gallery/60e22bfd-1691-4210-ace9-f855fd32f672.JPG", title: "City Skyline" },
        { id: 8, src: "gallery/283e2198-28e1-46fb-a43b-1a96b22a15c8 2.JPG", title: "City Skyline" },
        { id: 9, src: "gallery/316af17a-6545-4820-9765-716e6e1fa358 2.JPG", title: "City Skyline" },
        { id: 10, src: "gallery/6348b48e-79a7-4056-b88f-a211d3410614.JPG", title: "City Skyline" },
        { id: 11, src: "gallery/c4b38bad-5905-4353-ba02-b80e17e98d9e.JPG", title: "City Skyline" },
        { id: 12, src: "gallery/fe7577bc-42b8-4e8e-a346-85a66bee6db1.JPG", title: "City Skyline" },
        { id: 13, src: "gallery/a3a5420a-4f41-468a-a10c-cf2ea062eba6.JPG", title: "City Skyline" },
        { id: 14, src: "gallery/a3dcf3d9-b15a-4e33-ac64-230d606f4465.JPG", title: "City Skyline" },
        { id: 15, src: "gallery/421ceec9-b355-49ea-8569-68c01a3d1753.JPG", title: "City Skyline" },
        { id: 16, src: "gallery/ace7a162-72bc-40c5-aa0c-e1addade1fe3.JPG", title: "City Skyline" },
        { id: 17, src: "gallery/ccb3323a-cd77-4216-a86f-fee8f89738d2.JPG", title: "City Skyline" },
        { id: 18, src: "gallery/2489b385-9a03-4454-a450-5be116d7a979 2.JPG", title: "City Skyline" },
        { id: 19, src: "gallery/316af17a-6545-4820-9765-716e6e1fa358 2.JPG", title: "City Skyline" },
        { id: 20, src: "gallery/IMG_2262.JPG", title: "City Skyline" },
        { id: 21, src: "gallery/IMG_2263.JPG", title: "City Skyline" },
        { id: 22, src: "gallery/IMG_2264.JPG", title: "City Skyline" },
        { id: 23, src: "gallery/IMG_2265.JPG", title: "City Skyline" },
        { id: 24, src: "gallery/IMG_2266.JPG", title: "City Skyline" },
        { id: 25, src: "gallery/IMG_2267.JPG", title: "City Skyline" },
        { id: 26, src: "gallery/IMG_2268.JPG", title: "City Skyline" },
        { id: 27, src: "gallery/IMG_2269.JPG", title: "City Skyline" },
        { id: 28, src: "gallery/IMG_2270.JPG", title: "City Skyline" },
        { id: 29, src: "gallery/IMG_2271.JPG", title: "City Skyline" },
        { id: 30, src: "gallery/IMG_2272.JPG", title: "City Skyline" },
        { id: 31, src: "gallery/IMG_2273.JPG", title: "City Skyline" },
        { id: 32, src: "gallery/IMG_2274.JPG", title: "City Skyline" },
        { id: 33, src: "gallery/IMG_2275.JPG", title: "City Skyline" },
        { id: 34, src: "gallery/IMG_2276.JPG", title: "City Skyline" },
        { id: 35, src: "gallery/IMG_2277.JPG", title: "City Skyline" },
    ];

    return (
        <div className="gallery-slider-container">
            <h2 className="gallery-title">Journey Through Images</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image.id}>
                        <div className="gallery-item">
                            <img
                                src={require(`../../Assets/${image.src}`)}
                                alt={image.title}
                                className="gallery-image"
                            />
                            {/* <div className="gallery-overlay"> */}
                                {/* <h3>{image.title}</h3> */}
                            {/* </div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Gallery;
