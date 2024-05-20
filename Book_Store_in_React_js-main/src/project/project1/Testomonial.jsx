/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination,Scrollbar } from 'swiper/modules';

import 'swiper/css';
import { useState } from 'react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testomonial = () => {
    const user=[
        {
            pic:"image/photo/IMG-20240404-WA0027.jpg",
            name:"Jeeban Jyoti Parida",
            department:"Web Devloper",
            des:"repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendisrepellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"image/photo/deyjayshankar-20240506-0001.jpg",
            name:"Jayshankar Dey",
            department:"Web Devloper",
            des:"repellendus repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"image/photo/IMG_20240506_194354.jpg",
            name:"Ajay Kumar Shial ",
            department:"Web Devloper",
            des:"repellendus placeat exercitationem repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"https://tse3.mm.bing.net/th?id=OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA&pid=Api&P=0&h=220",
            name:"Debasish Nayak",
            department:"Web Devloper",
            des:"repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendisrepellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        },
        {
            pic:"image/photo/IMG_20240506_194120.jpg",
            name:"Susmita kar",
            department:"Web Devloper",
            des:"repellendus repellendus placeat exercitationem odit dolores corrupti perspiciatis reiciendis placeat exercitationem odit dolores corrupti perspiciatis reiciendis"
        }
    ]
    const [index,setIndex]=useState(0)
   
  return (
    <section id='Course'>
        <div className='text-center p-3'>
            <h1 className='text-xl font-semibold md:text-2xl '>What Student's Say</h1>
            <p className='text-black text-[14px] mt-2'>sit amet, consectetur adipisicing elit. Ut ipsa sequi illo delectus?</p>
        </div>
      <Swiper
      modules={[Navigation, Pagination,Scrollbar,Autoplay]}
      spaceBetween={7}
      slidesPerView={'auto'}
      pagination={{ clickable: true }}
      loop={true}
      centeredSlides={true}
      speed={800}
      autoplay={{
        delay:3000
      }}
      onSlideChange={(swiper) => setIndex(swiper.realIndex)}
      className='md:w-[80%] md:mx-[10%] h-fit  p-3 flex gap-x-1 '
    >
        {
            user.map((user,i)=>(
                <SwiperSlide key={i} className='bg-white w-full md:w-1/3 h-60  '>
                  <div className={`w-full h-fit bg-white border shadow-md rounded-sm `}>
                    <div className='p-3 text-gray-400 text-[14px]'>
                        <p>{user.des}</p>
                    </div>
                    <div className='flex gap-x-4 p-3'>
                        <div className='h-14 w-14 overflow-hidden rounded-full bg-black'>
                            <img src={user.pic} alt="" className='object-cover object-center' />
                        </div>
                        <div>
                         <h3 className='text-[16px] font-semibold'>{user.name}</h3>
                         <p className='text-[13px] text-gray-500  font-mono'>{user.department}</p>
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
            ))
        }
      
      
     
      
    </Swiper>
    </section>
  )
}

export default Testomonial
