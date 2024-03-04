import yeat from "../../../../assets/images/art/yeat.jpg";
import { Fade, Slide } from "react-awesome-reveal";
function Roadmap() {
    return (
        <div className="min-h-screen  relative w-full" id="roadmap">
            <Slide direction="up">
                {" "}
                <h1 className="text-center">The Road Ahead</h1>{" "}
            </Slide>
            <h4 className="text-center mb-24">Where dreams come true</h4>{" "}
            {/* Phase1--------------------------------------------------------------------------------------------------------------------------------------- */}
            <section className="section first-section left-border min-h-[280px]">
                {" "}
                <div className="relative py-[100px] md:py-[200px] w-[80%] md:w-[80%] lg:w-[60%] pl-[100px] md:pl-[200px]  mx-auto   border-b-4 min-h-[280px]  border-l-4 ">
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute left-[-25px] md:left-[-50px]"
                    />
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute left-[-25px] md:left-[-50px] md:top-[400px] top-[200px]"
                    />
                    <div className=" ">
                        <Slide direction="up">
                            <h3>Phase 01 - Completed</h3>{" "}
                        </Slide>
                        <Fade>
                            <h1>The Idea</h1>
                        </Fade>
                        {/* <p className="md:w-1/2">
                            Ideate. Design. Community-Building. The project
                            sparked from a single moment of inspiration. With
                            some imagination and work, it started to take shape.
                            With 8888 unique NFTs, their walks mark the first
                            step of IOs penetrating the scene.
                        </p> */}
                    </div>
                </div>
            </section>
            {/* Phase2--------------------------------------------------------------------------------------------------------------------------------------- */}
            <section className=" min-h-[280px]">
                {" "}
                <div className=" py-[100px] md:py-[200px] w-[80%] md:w-[80%] lg:w-[60%] px-[20px] md:px-[100px] mx-auto   border-b-4 min-h-[280px]  border-r-4 relative">
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute right-[-25px] md:right-[-50px]"
                    />
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute right-[-25px] md:right-[-50px] md:top-[400px] top-[200px]"
                    />
                    <div className=" ">
                        <Slide direction="up">
                            <h3>Phase 01 - Completed</h3>{" "}
                        </Slide>
                        <Fade>
                            <h1>The Idea</h1>
                        </Fade>
                        {/* <p className="md:w-1/2">
                            Ideate. Design. Community-Building. The project
                            sparked from a single moment of inspiration. With
                            some imagination and work, it started to take shape.
                            With 8888 unique NFTs, their walks mark the first
                            step of IOs penetrating the scene.
                        </p> */}
                    </div>
                </div>
            </section>
            {/* Phase3--------------------------------------------------------------------------------------------------------------------------------------- */}
            <section className=" min-h-[280px]">
                {" "}
                <div className="relative py-[100px] md:py-[200px] w-[80%] md:w-[80%] lg:w-[60%] pl-[100px] md:pl-[200px]  mx-auto   border-b-4 min-h-[280px]  border-l-4 ">
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute left-[-25px] md:left-[-50px]"
                    />
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute left-[-25px] md:left-[-50px] md:top-[400px] top-[200px]"
                    />
                    <div className=" ">
                        <Slide direction="up">
                            <h3>Phase 01 - Completed</h3>{" "}
                        </Slide>
                        <Fade>
                            <h1>The Idea</h1>
                        </Fade>
                        {/* <p className="md:w-1/2">
                            Ideate. Design. Community-Building. The project
                            sparked from a single moment of inspiration. With
                            some imagination and work, it started to take shape.
                            With 8888 unique NFTs, their walks mark the first
                            step of IOs penetrating the scene.
                        </p> */}
                    </div>
                </div>
            </section>
            {/* Phase4--------------------------------------------------------------------------------------------------------------------------------------- */}
            <section className=" min-h-[280px]">
                {" "}
                <div className=" py-[100px] md:py-[200px] w-[80%] md:w-[80%] lg:w-[60%] px-[20px] md:px-[100px] mx-auto   min-h-[280px]  border-r-4 relative">
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute right-[-25px] md:right-[-50px]"
                    />
                    <img
                        src={yeat}
                        alt="assets"
                        className="w-[40px] md:w-[100px] object-cover rounded-full absolute right-[-25px] md:right-[-50px] md:top-[400px] top-[200px]"
                    />
                    <div className=" ">
                        <Slide direction="up">
                            <h3>Phase 01 - Completed</h3>{" "}
                        </Slide>
                        <Fade>
                            <h1>The Idea</h1>
                        </Fade>
                        {/* <p className="md:w-1/2">
                            Ideate. Design. Community-Building. The project
                            sparked from a single moment of inspiration. With
                            some imagination and work, it started to take shape.
                            With 8888 unique NFTs, their walks mark the first
                            step of IOs penetrating the scene.
                        </p> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Roadmap;
