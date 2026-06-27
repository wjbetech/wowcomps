import { ArrowUpIcon } from "lucide-react";

export default function UpgradeAvailableBadge() {
  return (
    <span
      className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-[10px] font-black leading-none text-white shadow ring-2 ring-neutral-950"
      aria-label="Improved version available"
    >
      <ArrowUpIcon />
    </span>
  );
}
