import App from "next/app";
import { hydrate } from "emotion";
export default App;
// @ts-ignore
import pathPageLoader from "../utils/patchPageLoader";

// tslint:disable-next-line
declare global {
  interface Window {
    __NEXT_DATA__: {
      ids: string[];
    };
  }
}

if (
  typeof window !== "undefined" &&
  typeof window.__NEXT_DATA__ !== "undefined" &&
  typeof window.__NEXT_DATA__.ids !== "undefined" &&
  typeof document !== "undefined"
) {
  hydrate(window.__NEXT_DATA__.ids);
  if (process.env.NODE_ENV === "production") {
    pathPageLoader();
  }
}
