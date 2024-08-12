import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaDribbble,
} from "react-icons/fa6";

import Container from "../ui/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 md:py-20 bg-[#4C4C4C]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-white">
              Art & Craft
            </h3>
            <p className="text-[#99998F]">
              Art and crafts, playful expression! Turn yarn, clay, or paint into
              a masterpiece, all by hand.s
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Discover</h3>
            <ul className="text-[#99998F] space-y-2">
              <li>Home</li>
              <li>All Art & Craft</li>
              <li>Add Craft Item</li>
              <li>My Art & Craft List</li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">About</h3>
            <ul className="text-[#99998F] space-y-2">
              <li>Client</li>
              <li>Team</li>
              <li>Career</li>
              <li>Testimonials</li>
              <li>Draw</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Help</h3>
            <ul className="text-[#99998F] space-y-2">
              <li>
                <Link to="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>Terms & Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
            <div className="flex gap-2 md:gap-5 text-[#99998F]">
              <FaInstagram />
              <FaXTwitter />
              <FaFacebookF />
              <FaPinterest />
              <FaDribbble />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] mt-8 mb-6 bg-[#595959]"></div>
        <p className="text-[#99998F] text-center">
          &copy; All Rights Reserved By Art & Craft
        </p>
      </Container>
    </div>
  );
};

export default Footer;
