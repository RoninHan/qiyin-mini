import { atom, useAtom } from "jotai";

const settingsAtom = atom(false);

function useSettings() {
  return useAtom(settingsAtom);
}

export { settingsAtom, useSettings };
