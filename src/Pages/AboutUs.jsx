import HomeLayout from "../Layouts/HomeLayout";
import aboutMainImage from "../Assets/Images/aboutMainImage.png";
import { celebrities } from "../Constants/CelebrityData";
import CarouselSlide from "../Components/CarouselSlide";

function AboutUs(){
    return(
        <HomeLayout>
            <div className="pl-20 pt-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and quality education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide the affordable and quality education to the world.
                            We are providing the platform for the aspiring teachers and students to share
                            their skill creativity and knowledge to each other. to empower and contribute
                            in the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="w-1/2">
                    <img 
                        id="test1"
                        style={{
                            filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
                        }}
                    className="drop-shadow-2xl;"
                    src={aboutMainImage} alt="aboutMainImage" />
                    </div>
                </div>
                {/* part two carousal */}
                {/* <div className="carousel w-1/2 m-auto my-16">
                    <div id="slide1" className="carousel-item relative w-full">
                       <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-200">
                                {"“Education is the most powerful tool you can use to change the world.”"}
                                </p>
                                <h3 className=" text-2xl font-semibold">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide5" className="btn btn-circle">❮</a> 
                                 <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                       </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-200">
                                {"“Learning gives creativity, creativity leads to thinking, thinking provides knowledge, and knowledge makes you great.”"}
                                </p>
                                <h3 className=" text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide1" className="btn btn-circle">❮</a> 
                                 <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                       </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-200">
                                {"“The true sign of intelligence is not knowledge but imagination.”"}
                                </p>
                                <h3 className=" text-2xl font-semibold">Albert Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide2" className="btn btn-circle">❮</a> 
                                 <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                       </div>
                </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-200">
                                {"“Innovation distinguishes between a leader and a follower.”"}
                                </p>
                                <h3 className=" text-2xl font-semibold">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide3" className="btn btn-circle">❮</a> 
                                 <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                       </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                                <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                                <p className="text-xl text-gray-200">
                                {"“Success is a lousy teacher. It seduces smart people into thinking they can’t lose.”"}
                                </p>
                                <h3 className=" text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                 <a href="#slide4" className="btn btn-circle">❮</a> 
                                 <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                       </div>
                    </div>
                    </div> */}
                    {/* Instead of this code we use Array of celebrities and code whole process in a CelebrityData.js for reference please check once */}
                    <div className="carousel w-1/2 m-auto my-16">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                                    {...celebrity} 
                                                                    key={celebrity.slideNumber} 
                                                                    totalSlides={celebrities.length}

                                                                />))}

                                                                </div>
            </div>
       </HomeLayout>
    );   
}

export default AboutUs;