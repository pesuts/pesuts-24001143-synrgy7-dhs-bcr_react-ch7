type Props = {
  person: string;
  picture: string;
  testimony: string;
};

export default function Testimony({ person, picture, testimony }: Props) {
  return (
    <div className="item mx-3">
      <div className="bg-light-blue rounded-xl px-14 py-12 lg:py-20 lg:flex lg:gap-12 lg:items-center lg:justify-center">
        <div className=" lg:align-items-center lg:justify-content-center lg:w-2/12">
          <img
            src={`img/png/${picture}.png`}
            className="mx-auto rounded-full object-cover h-20 w-20 lg:w-40"
            alt="User 1"
          />
        </div>
        <div className="lg:w-10/12">
          <div className="lg:-ms-[73%]">
            <img
              src="img/png/5_stars.png"
              className="lg:pb-2 mx-auto py-6"
              width="100"
              alt=""
            />
          </div>
          <p className="text-left text-base">
            {testimony}
          </p>
          <p className="font-bold py-3">{person}</p>
        </div>
      </div>
    </div>
  );
}
