import ScrollTrigger from "react-scroll-trigger";
import Container from "../ui/Container";
import { useState } from "react";
import CountUp from "react-countup";
import counterImg from "../../assets/counter-image.jpg";
import { FaQuoteLeft } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="my-12 md:my-16 lg:my-20 font-roboto">
          <Container>
            <div className="md:flex gap-10">
              <div className="md:flex-1 relative">
                <Fade direction="left" delay={500}>
                  <img
                    src={counterImg}
                    alt="counter-Img"
                    className="z-50 w-full h-full border-l-[1rem] border-t-[1rem] border-primary"
                  />
                </Fade>
              </div>

              <div className="md:w-1/2 mt-8 md:mt-0">
                <Fade direction="right" duration={500}>
                  <FaQuoteLeft className="text-6xl md:text-7xl lg:text-8xl" />
                  <div className="mb-5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold md:w-3/4 leading-10 mb-3">
                      Creative Minds Crafting Beautiful
                    </h1>
                    <h3 className="text-xl sm:text-2xl md:text-3xl italic font-serif mb-2 underline">
                      Artext Event
                    </h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3 md:gap-5">
                    <div className="text-center py-8 text-white bg-primary">
                      <p className="text-xl md:text-3xl font-bold">
                        {counterOn && (
                          <CountUp start={0} end={153} duration={4} delay={0} />
                        )}{" "}
                        +
                      </p>
                      <p className="font-medium mt-2">Exhibition</p>
                    </div>
                    <div className="text-center py-8 text-white bg-primary">
                      <p className="text-xl md:text-3xl font-bold">
                        {counterOn && (
                          <CountUp
                            start={0}
                            end={1565}
                            duration={4}
                            delay={0}
                          />
                        )}{" "}
                        +
                      </p>
                      <p className="font-medium mt-2">Visitors</p>
                    </div>
                    <div className="text-center py-8 text-white bg-primary">
                      <p className="text-xl md:text-3xl font-bold">
                        {counterOn && (
                          <CountUp start={0} end={102} duration={4} delay={0} />
                        )}{" "}
                        +
                      </p>
                      <p className="font-medium mt-2">Awards</p>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </Container>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Counter;
