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
          </ul>
        </div>
        <div className="lg:w-2/12">
          <ul className="bg-primary">
            <Footer.NavButton text="Our Service" />
            <Footer.NavButton text="Why Us" />
            <Footer.NavButton text="Testimonial" />
            <Footer.NavButton text="FAQ" />
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
