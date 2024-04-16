import Image from "next/image";
import React from "react";

const AboutInfo = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[80%] flex flex-col justify-center pt-32">
        <div className="flex text-2xl font-semibold items-center text-primary">
          Our story <hr className="w-24 h-1 bg-primary" />
        </div>
        <div className="text-3xl font-semibold py-2">
          The Story About Pizzon
        </div>
        <div className="w-full flex items-center py-12 gap-x-10">
          <div className="w-full h-[500px]">
            <div className="text-3xl font-semibold py-2">Aiden Pizza</div>
            <p>
              Velit duis laborum elit commodo cillum reprehenderit esse ipsum
              magna. Excepteur officia reprehenderit proident proident sit et
              fugiat fugiat pariatur cupidatat tempor laborum reprehenderit ut.
              Occaecat labore officia fugiat cupidatat minim in ad labore.
              Aliqua sint proident in laborum sunt Lorem dolore. Fugiat
              consectetur irure labore fugiat nulla velit nisi. Officia
              reprehenderit ea deserunt excepteur veniam excepteur eiusmod
              veniam laborum. Minim nisi sunt et ipsum ullamco mollit aute
              exercitation aute eu nulla.
            </p>
            <div className="w-full pt-2">
              <Image
                src={"/abt-img-1.jpg"}
                alt="header"
                height={300}
                width={300}
                style={{ objectFit: "cover" }}
                className="h-[300px] w-full rounded-3xl"
              />
            </div>
          </div>
          <div className="w-full">
            <Image
              src={"/abt-img-2.jpg"}
              alt="header"
              height={300}
              width={300}
              style={{ objectFit: "cover" }}
              className="h-[500px] w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInfo;
