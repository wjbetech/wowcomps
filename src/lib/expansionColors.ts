import type { Expansion } from "../types/expansions";

const expansionColors: Record<
  Expansion,
  {
    text: string;
    activeBg: string;
    glow: string;
  }
> = {
  classic: {
    text: "text-[#D8B35F]",
    activeBg: "bg-[#D8B35F]/15",
    glow: "216 179 95",
  },
  tbc: {
    text: "text-[#00994c]",
    activeBg: "bg-[#62C96B]/15",
    glow: "98 201 107",
  },
  wotlk: {
    text: "text-[#A7D8F0]",
    activeBg: "bg-[#A7D8F0]/15",
    glow: "167 216 240",
  },
  sod: {
    text: "text-[#D48A6A]",
    activeBg: "bg-[#D48A6A]/15",
    glow: "212 138 106",
  },
  classicPlus: {
    text: "text-[#D8B35F]",
    activeBg: "bg-[#D8B35F]/15",
    glow: "216 179 95",
  },
};

export default expansionColors;
