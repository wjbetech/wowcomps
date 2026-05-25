import { expansionsData, type Expansion, type ExpansionConfig } from "../data/expansionData";

export const expansionMap = Object.fromEntries(
  expansionsData.map((exp) => [exp.id, exp]),
) as Record<Expansion, ExpansionConfig>;
