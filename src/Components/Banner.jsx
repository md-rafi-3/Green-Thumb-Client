import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';



const Banner = () => {
  const sliderData = [
    {
      id: 1,
      image: "https://i.ibb.co/dwRpN9F7/pexels-timmossholder-3804878-1.jpg",
      staticText: "Enjoy homegrown",
      dynamicWords: [" Mangoes", " Bananas", " Papayas"],
      tagline: "Grow your own juicy fruits — fresh, organic, and full of flavor right from your backyard."
    },
    {
      id: 2,
      image: "https://i.ibb.co/5WnvRJDg/pexels-daniel-1055408-1.jpg",
      staticText: "Create your personal",
      dynamicWords: [" Green Escape", " Urban Jungle", " Peaceful Space"],
      tagline: "Turn any space into a garden retreat — perfect for relaxation, health, and happiness."
    },
    {
      id: 3,
      image: "https://i.ibb.co/dJz6gPxM/pexels-bob-jenkin-2007649943-30096540-1.jpg",
      staticText: "Fill your garden with",
      dynamicWords: [" Colorful Blooms", " Sweet Fragrance", " Delicate Petals"],
      tagline: "Let your flower garden bloom with beauty and charm, one petal at a time."
    }
  ];



  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,

        }}
        autoplay={{ delay: 4000 }}
        loop
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full md:h-[90vh] h-[70vh]"
      >
        {
          sliderData.map(slider => <SwiperSlide key={slider.id}> <div
            className="w-full h-full bg-cover bg-center  flex items-center"
            style={{ backgroundImage: `url(${slider.image})` }}
          >
            <div className="absolute inset-0 bg-black/42"></div>
            <div data-aos="fade-up"
          data-aos-duration="800"
        data-aos-once="false"
        data-aos-delay={200} className=" p-6 md:p-12 max-w-3xl z-10 text-white ml-6 rounded-xl">

              <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
                {slider.staticText}
                <span className="text-secondary ml-2">
                  <Typewriter
                    words={slider.dynamicWords}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={40}
                    delaySpeed={1200}
                  />
                </span>
              </h2>
              <p className="mt-3 text-sm md:text-base ">
                {slider.tagline}

              </p>


              <a href="#trandingTips"> <button className="mt-6 flex items-center gap-1 rounded text-white btn btn-primary font-medium">
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