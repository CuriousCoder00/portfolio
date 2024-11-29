import Image from "next/image";
import IMG from "./logo.png";
import PFP from "./img.jpg";

export const Logo = () => {
  return (
    <Image
      className="dark:invert invert-0"
      src={IMG}
      alt="Logo"
      width={40}
      height={40}
    />
  );
};

export const Img = () => {
  return <Image className="" src={PFP} alt="pfp" width={120} height={120} />;
};
