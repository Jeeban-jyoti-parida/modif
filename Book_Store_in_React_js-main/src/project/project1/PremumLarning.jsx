import pimg from "../../assets/images/OBJECTS.png"
import heart from "../../assets/images/hearts 1.png"
import jijula from "../../assets/images/jigsaw 1.png"
const PremumLarning = () => {
  return (
    <section className="w-[78%]">
       <div className=" flex flex-col lg:flex-row  ">
        <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-start  relative ">
            <img src={pimg} alt="" className="h-80 lg:absolute lg:-bottom-[35%] lg:ml-20"/>
        </div>
        <div  className="w-full lg:w-[60%] md:px-16 lg:px-0 px-5">
            <div className="p-2 mt-4 ">
                <h2 className="text-4xl font-bold ">Premium <span className="text-pink-500">Learning</span> <br /> Experince</h2>
            </div>
            <div className="p-2 flex flex-col gap-y-4">

               <div className="w-fit p-1 flex gap-x-3 mt-5 ">
               <div className="p-2 bg-pink-200 rounded-lg"><img src={heart} alt="" className="h-8" /></div>
                    <div>
                        <h3 className="font-bold text-lg">Easily Accexxible</h3>
                        <p className="text-[14px] text-pink-500">Learning will ipsum dolor sit amet.</p>
                    </div>
               </div>
               <div className="w-fit p-1 flex gap-x-3">
                    <div className="p-2 bg-pink-200 rounded-lg"><img src={jijula} alt="" className="h-8" /></div>
                    <div>
                        <h3 className="font-bold text-lg">Fun Learning Expe</h3>
                        <p className="text-[14px] text-pink-500">Learning will ipsum dolor sit amet.</p>
                    </div>
               </div>

            </div>
        </div>
       </div>
    </section>
  )
}

export default PremumLarning
