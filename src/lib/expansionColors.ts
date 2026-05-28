import type { Expansion } from "../data/expansionData";

const expansionColors: Record<
  Expansion,
  {
    text: string;
    activeBg: string;
    hoverBg: string;
    glow: string;
  }
> = {
  classic: {
    text: "text-[#D8B35F]",
    activeBg: "bg-[#D8B35F]/15",
    hoverBg: "hover:bg-[#D8B35F]/5",
    glow: "216 179 95",
  },
  tbc: {
    text: "text-[#00994c]",
    activeBg: "bg-[#62C96B]/15",
    hoverBg: "hover:bg-[#62C96B]/5",
    glow: "98 201 107",
  },
  wotlk: {
    text: "text-[#A7D8F0]",
    activeBg: "bg-[#A7D8F0]/15",
    hoverBg: "hover:bg-[#A7D8F0]/5",
    glow: "167 216 240",
  },
  sod: {
    text: "text-[#D48A6A]",
    activeBg: "bg-[#D48A6A]/15",
    hoverBg: "hover:bg-[#D48A6A]/5",
    glow: "212 138 106",
  },
  classicPlus: {
    text: "text-[#D8B35F]",
    activeBg: "bg-[#D8B35F]/15",
    hoverBg: "hover:bg-[#D8B35F]/5",
    glow: "216 179 95",
  },
};

export default expansionColors;
