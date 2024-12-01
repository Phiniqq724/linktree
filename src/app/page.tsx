import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Item from "../components/Item";
import Instagram from "@/../public/Instagram.png";
import Linkedin from "@/../public/Linkedin.png";
import Mail from "@/../public/Mail.png";

interface LinkTree {
  icon: StaticImport;
  link: string;
  name: string;
}

export default function Home() {
  const links: LinkTree[] = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/caesiium_/",
      name: "Instagram",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/fahrell-sandy-zhariif-2a81182a9/",
      name: "Linkedin",
    },
    {
      icon: Mail,
      link: "mailto:fahrell_sandy_32rpl@student.smktelkom-mlg.sch.id",
      name: "Contact Me",
    },
  ];
  return (
    <div className="w-full h-screen flex overflow-hidden relative">
      {Array.from({ length: 12 }).map((_, index) => (
        <p
          key={index}
          className={`absolute text-3xl font-bold text-white -z-20`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            whiteSpace: "nowrap",
          }}
        >
          ?
        </p>
      ))}
      <div className="mx-auto my-auto">
        <h1 className="font-bold text-center text-white text-2xl mb-4 bg-primary p-2 rounded-xl">
          Linktree Fahrell Sandy Zhariif
        </h1>
        <div className="flex items-center flex-col">
          {links.map((link, index) => (
            <Item
              key={index}
              icon={link.icon}
              link={link.link}
              className="mb-4"
            >
              {link.name}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
}
