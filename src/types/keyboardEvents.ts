import type { KeyboardEvent } from "react";

export type KeyboardEvents = {
  event: KeyboardEvent<HTMLInputElement>;
  commitName: () => void;
  cancelEditRef: { current: boolean };
  setIsEditing: (value: boolean) => void;
  setDraftName: (value: string) => void;
  savedPlayerName: string;
};
