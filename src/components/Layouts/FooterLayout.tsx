// import Contact from "../Fragments/Footer/Contact";
// import FootNavButton from "../Fragments/Footer/FootNavButton";
// import SocialMedia from "../Fragments/Footer/SocialMedia";
import Footer from "../Fragments/Footer";

export default function FooterLayout() {
  return (
    <footer className="p-5 mt-5 mb-10 max-w-72 lg:max-w-[100%] lg:mx-28">
      <div className="lg:flex">
        <div className="lg:w-4/12">
          <ul className="">
            <Footer.Contact text="Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000" />
            <Footer.Contact text="binarcarrental@gmail.com" />
            <Footer.Contact text="081-233-334-808" />
            {/* <li className="py-1">
            </li> */}
            {/* <li className="py-1">binarcarrental@gmail.com</li>
            <li className="py-1">081-233-334-808</li> */}
          </ul>
        </div>
        <div className="lg:w-2/12">
          <ul className="bg-primary">
            <Footer.NavButton text="Our Service" />
            <Footer.NavButton text="Why Us" />
            <Footer.NavButton text="Testimonial" />
            <Footer.NavButton text="FAQ" />
            {/* <li className="py-2 font-semibold">
              <a
                href="#our-section"
                className="text-decoration-none text-black"
              >
                Our Services
              </a>
            </li>
            <li className="py-2 font-semibold">
              <a href="#why-us" className="text-decoration-none text-black">
                Why Us
              </a>
            </li>
            <li className="py-2 font-semibold">
              <a
                href="#testimonial"
                className="text-decoration-none text-black"
              >
                Testimonial
              </a>
            </li>
            <li className="py-2 font-semibold">
              <a href="#faq" className="text-decoration-none text-black">
                FAQ
              </a>
            </li> */}
          </ul>
        </div>
        <div className="lg:w-4/12">
          <p className="font-semibold">Connect with us</p>
          <div className="flex gap-4 py-4">
            <Footer.SocialMedia text="facebook" />
            <Footer.SocialMedia text="instagram" />
            <Footer.SocialMedia text="twitter" />
            <Footer.SocialMedia text="mail" />
            <Footer.SocialMedia text="twitch" />
            {/* <a href="">
              <img src="img/icons/icon-facebook.png" width="30" alt="" />
            </a>
            <a href="">
              <img src="img/icons/icon-instagram.png" width="30" alt="" />
            </a>
            <a href="">
              <img src="img/icons/icon-twitter.png" width="30" alt="" />
            </a>
            <a href="">
              <img src="img/icons/icon-mail.png" width="30" alt="" />
            </a>
            <a href="">
              <img src="img/icons/icon-twitch.png" width="30" alt="" />
            </a> */}
          </div>
        </div>
        <div className="lg:w-3/12">
          <p className="font-semibold">Copyright Binar 2024</p>
          <a href="" className="w-28 h-8 my-4 bg-blue inline-block"></a>
        </div>
      </div>
    </footer>
  );
}
