import App from "next/app";
import { hydrate } from "emotion";
export default App;

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
  typeof window.__NEXT_DATA__.ids !== "undefined"
) {
  hydrate(window.__NEXT_DATA__.ids);
}
