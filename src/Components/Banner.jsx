import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';



const Banner = () => {
   const sliderData = [
  {
    id: 1,
    image: "https://i.ibb.co/CrPQSkm/pexels-fotios-photos-1301856.jpg",
    title: "Grow Together, Bloom Forever",
    subtitle: "Connect with passionate gardeners and nurture your love for green life."
  },
  {
    id: 2,
    image: "https://i.ibb.co/5WnvRJDg/pexels-daniel-1055408-1.jpg",
    title: "Urban Gardening Made Easy",
    subtitle: "Transform your balcony or rooftop into a thriving garden — no space too small!"
  },
  {
    id: 3,
    image: "https://i.ibb.co/DP2hkCqT/pexels-corin-1105019-1.jpg",
    title: "Start Your Green Journey Today",
    subtitle: "Discover expert tips, upcoming events, and a community that grows with you."
  }
];

    return (
        <div>
           <Swiper
   pagination={{
          dynamicBullets: true,
          
        }}
        autoplay={{ delay: 3000 }}
        loop
        modules={[Pagination,Autoplay]}
        className="mySwiper w-full md:h-[90vh] h-[70vh]"
>
  {
    sliderData.map(slider=> <SwiperSlide key={slider.id}> <div
              className="w-full h-full bg-cover bg-center  flex items-center"
              style={{ backgroundImage: `url(${slider.image})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
              <div className=" p-6 md:p-12 max-w-3xl z-10 text-white ml-6 rounded-xl">
                
                <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                  {slider.title}
                </h2>
                <p className="mt-3 text-sm md:text-base ">
                  {slider.subtitle}

                </p>
                

               <a href="#upcomming"> <button  className="mt-6 flex items-center gap-1 rounded text-white btn btn-primary font-medium">
                  Browse tips <FaArrowRight />
                </button></a>
              </div>
            </div></SwiperSlide>)
  }
       
</Swiper>
        </div>
    );
};

export default Banner;