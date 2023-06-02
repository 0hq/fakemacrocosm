import RhodosSignature from "../../public/signatures/RhodosSignature.svg";
import WillSignature from "../../public/signatures/WillSignature.svg";
import JamesSignature from "../../public/signatures/Signature.svg";
import MaxSignature from "../../public/signatures/MaxSignature.png";
import OwenSignature from "../../public/signatures/OwenSignature.png";
import JuanDavidSignature from "../../public/signatures/JuanDavidSignature.png";

import JamesPicture from "../../public/profile-pictures/James.jpg";
import RhodosPicture from "../../public/profile-pictures/RhodosPFP.png";
import AnantPicture from "../../public/profile-pictures/anant.jpeg";
import AviPicture from "../../public/profile-pictures/Avi.jpg";
import JuanDavidPicture from "../../public/profile-pictures/JuanDavid.jpg";
import WillPicture from "../../public/profile-pictures/Will.png";
import KevalinPicture from "../../public/profile-pictures/Kevalin.jpg";
import ByeongjunPicture from "../../public/profile-pictures/Byeongjun.jpeg";
import LucasPicture from "../../public/profile-pictures/Lucas.jpg";
import KirillPicture from "../../public/profile-pictures/Kirill.jpg";
import SagePicture from "../../public/profile-pictures/Sage.jpg";
import MaxPicture from "../../public/profile-pictures/Max.jpg";
import ParkerPicture from "../../public/profile-pictures/parker.jpg";
import SuryaPicture from "../../public/profile-pictures/Surya.jpg";
import AriPicture from "../../public/profile-pictures/Ari.jpg";
import AryanPicture from "../../public/profile-pictures/Aryan.jpeg";
import VirajPicture from "../../public/profile-pictures/Viraj.jpeg";
import StevenPicture from "../../public/profile-pictures/Steven.jpg";
import RahulPicture from "../../public/profile-pictures/Rahul.jpg";
import BenPicture from "../../public/profile-pictures/Ben.jpeg";
import AmirPicture from "../../public/profile-pictures/Amir.jpg";
import OwenPicture from "../../public/profile-pictures/Owen.jpg";
import EricPicture from "../../public/profile-pictures/Eric.jpg";
import BereketPicture from "../../public/profile-pictures/Bereket.jpg";
import HongPicture from "../../public/profile-pictures/Hong.jpg";
import SamayPicture from "../../public/profile-pictures/Samay.jpg";
import OmoPicture from "../../public/profile-pictures/Omo.jpg";
import AnPicture from "../../public/profile-pictures/An.jpg";
import EmmaPicture from "../../public/profile-pictures/Emma.jpg";
import NathanPicture from "../../public/profile-pictures/Nathan.jpg";
import NatashaPicture from "../../public/profile-pictures/Natasha.jpg";
import DonahuePicture from "../../public/profile-pictures/Donahue.jpg";
import TrumanPicture from "../../public/profile-pictures/Truman.jpeg";
import JackPicture from "../../public/profile-pictures/Jack.jpg";
import AlexaPicture from "../../public/profile-pictures/Alexa.jpg";
import JustinaPicture from "../../public/profile-pictures/Justina.jpg";
import KaitoPicture from "../../public/profile-pictures/Kaito.jpg";
import RahulCPicture from "../../public/profile-pictures/RahulC.jpg";
import AmiPicture from "../../public/profile-pictures/Ami.jpg";
import SauravPicture from "../../public/profile-pictures/Saurav.jpg";

import { StaticImageData } from "next/image";

export type Signatures = {
  image: StaticImageData;
  name: string;
  subject: string;
  age: string;
  location: string;
  signature?: any;
  gold: boolean;
};

export const signatures: Array<Signatures> = [
  {
    image: WillPicture,
    name: "Will DePue",
    subject: "gpt wizard",
    age: "20",
    location: "Los Angeles 🇺🇸",
    signature: WillSignature,
    gold: false,
  },
  {
    image: JamesPicture,
    name: "James Lin",
    subject: "embeddings wrangler",
    age: "20",
    location: "Toronto 🇨🇦",
    signature: JamesSignature,
    gold: false,
  },

  {
    image: SuryaPicture,
    name: "Surya Dantuluri",
    subject: "adversarial employee",
    age: "20",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
  {
    image: AnantPicture,
    name: "Anant Sinha",
    subject: "master of convolution",
    age: "21",
    location: "Boston 🇺🇸",
    gold: false,
  },
  {
    image: SauravPicture,
    name: "Saurav Kumar",
    subject: "matmul alchemist",
    age: "20",
    location: "San Francisco 🇺🇸",
    gold: false,
  },
];

// test
