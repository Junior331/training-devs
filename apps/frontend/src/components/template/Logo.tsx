import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { images } from "../../../public/images";

const fonte = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export const Logo = () => {
  return (
    <Link href="/" className={`flex items-center gap-2 ${fonte.className}`}>
      <Image src={images.logo.src} width={50} height={50} alt="Logo" />
      <h1 className="flex flex-col items-center text-lg leading-5">
        <div>
          CONVIT<span className="text-blue-500">3</span>
        </div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
}
