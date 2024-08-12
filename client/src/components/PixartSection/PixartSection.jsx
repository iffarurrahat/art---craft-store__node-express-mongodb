import Container from "../ui/Container";
import image1 from "../../assets/pixart-img-1.png";
import image2 from "../../assets/pixart-img-2.png";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

const PixartSection = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row gap-10 my-10 sm:my-12 md:my-16 lg:my-20 font-roboto">
        <div className="md:flex-1 items-center mt-16 md:mt-0">
          <Slide direction="left" delay={100}>
            <div>
              <h4 className="text-primary text-xl mb-2">Pixart Exhibition</h4>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3">
                Magical World Of Art Denice Francisco
              </h1>
              <p className="leading-8">
                Curabitur vestibulum sit amet nibh sed blandit. Suspendisse in
                magna in elit hendrerit condimentum. Phasellus eu justo mi.
                Proin aliquet mauris a volutpat lobortis erat libero condimentum
                metus eutincidunt felis ligula in turpis. Cras sit amet
                tristique libero. Praesent neque ante pretium sollicitudin
                fermentum ut laoreet a diam imperdiet nec consequat. <br />
                Donec scelerisque enim non dictum aliquet. Sed ec nunc.
                Suspendisse volutpat elit nec nisi congue tristique eu at velit.
                Curabitur pharetra ex non ullamcorper condimentum. Morbi sit
                amet dui convallis, mattis augue id, ullamcorper massa volutpat
                elit nec nisi congue tristique.
              </p>
              <Link to="/all-art-&-craft">
                <button className="px-3 md:px-6 py-2 md:py-3 rounded mt-3 bg-primary text-white hover:bg-transparent hover:text-primary hover:border overflow-hidden duration-200  font-medium text-sm md:text-base">
                  See Details
                </button>
              </Link>
            </div>
          </Slide>
        </div>
        <div className="md:flex-1 items-center">
          <Slide direction="right" delay={100}>
            <div className="relative">
              <img
                src={image1}
                alt="Pixart Exhibition"
                className="w-[80%] sm:[90%] md:w-[90%] lg:w-[90%] xl:w-[502px] h-auto"
              />
              <div className="">
                <img
                  src={image2}
                  alt="Pixart Exhibition"
                  className="w-[60%] sm:w-[50%] md:w-[60%] lg:w-[70%] xl:w-[340px] absolute -bottom-20 sm:-bottom-24 md:-bottom-16 lg:-bottom-[20%] xl:-bottom-20 h-auto right-0 "
                />
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </Container>
  );
};

export default PixartSection;
