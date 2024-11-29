import Image from "next/image";
import IMG from "./logo.png";
import PFP from "./img.jpg";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center ">
      <Image
        className="dark:invert brightness-200 contrast-200"
        src={IMG}
        alt="Logo"
        width={40}
        height={40}
      />
    </div>
  );
};

export const Img = () => {
  return <Image className="invert saturate-200 contrast-200" src={PFP} alt="pfp" width={120} height={120} />;
};
