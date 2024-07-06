import { ReactNode } from "react";

type Props = {
  style?: string;
  children?: ReactNode;
}

const Hero = ({style, children}: Props) => {
  return (
    <div className="lg:flex items-end">
      <div className="py-2 lg:py-0 w-11/12 lg:flex lg:w-1/2 lg:justify-end">
        <div className={`lg:ps-32 lg:pt-16 ${style || ''}`.trim()} >
          <HeroTitle />
          {children}
        </div>
      </div>
      <HeroPicture />
    </div>
  );
}

const HeroPicture = () => {
  return (
    <div className="pe-0 lg:w-1/2 lg:ms-20">
      <img src="img/png/img_car.png" className="car" alt="Car Image" />
    </div>
  );
}

const HeroTitle = () => {
  return (
    <>
      <h1 className="font-extrabold text-4xl lg:text-[1.5em] pe-3 leading-normal">
        Sewa & Rental Mobil Terbaik di kawasan Yogyakarta
      </h1>
      <p className="py-5 lg:py-2 lg:w-[95%] lg:text-[.90em]">
        Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
        terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk
        sewa mobil selama 24 jam.
      </p>
    </>
  );
}

Hero.Picture = HeroPicture;
Hero.HeroTitle = HeroTitle;

export default Hero;