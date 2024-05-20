import rating from "../../assets/images/Group 345.png"
const About = () => {

  const card=[
    {
      img:"https://static.vecteezy.com/system/resources/previews/002/099/443/large_2x/programming-code-coding-or-hacker-background-programming-code-icon-made-with-binary-code-digital-binary-data-and-streaming-digital-code-vector.jpg",
      title:"Web Devloper",
      price:80,
      job:"UI/UX Desiner"
    },
    {
      img:"https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg",
      title:"FullStack Devloper for Beginner",
      price:100,
      job:"Web Devloper"
    },
    {
      img:"https://tse4.mm.bing.net/th?id=OIP.3uJswFjpWEy1O8HM70_44AHaE6&pid=Api&P=0&h=220",
      title:"Data Science for Beginner",
      price:70,
      job:"Data Scienctist"
    },
  ]
  return (
    <section id="About" className="">
      <div className="text-center w-full p-2">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold ">
          Our Tracks
        </h2>
        <p className="text-gray-400 text-[14px] font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quia?
        </p>
      </div>  
           <div className="flex flex-col md:flex-row  items-center justify-evenly py-7">
                {
                  card.map((card,i)=>(
                    <div key={i} className=" relative h-fit w-96 p-3 bg-white border   rounded-lg shadow-md md:mt-3 mt-6 mx-1  ">
                      <div className=" mx-auto">
                        <img src={card.img} alt="" className="h-52 w-full object-center object-cover  hover:scale-105 duration-300 cursor-pointer " />
                      </div>
                      <div className=" mt-3">
                        <div className="flex justify-between">
                        <p className="text-gray-400 text-[13px] font-semibold">{card.job}</p>
                        <img src={rating} alt="" className="h-3 md:h-4 mr-3" />
                        </div>
                        <h3 className=" font-semibold text-[17px] mt-1">{card.title}</h3>
                        <h4 className="text-pink-500 cursor-pointer font-semibold mt-1">${card.price}</h4>
                      </div>
                      <hr />
                      <div className=" mt-1 mb-5 *:text-[12px] *:text-gray-400 flex gap-x-3 *:flex *:items-center *:gap-x-2  ">
                        <span><ion-icon name="time-outline"></ion-icon> 22hr 30min</span>
                        <span><ion-icon name="videocam-outline"></ion-icon>34 Courses</span>
                        <span><ion-icon name="arrow-down-outline"></ion-icon>250 Sales</span>
                      </div>
                      <button className="text-white bg-pink-500 py-2 px-3 rounded-full absolute z-10 left-[35%] lg:left-[35%] md:left-[28%] -bottom-[5%] border font-semibold">Join Course</button>
                    </div>
                  ))
                }
           </div>
      <div>

      </div>
    </section>
  );
};

export default About;
