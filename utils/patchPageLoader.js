export default async function patchPageLoader() {
  const PageLoader = require("next/dist/client/page-loader").default;
  const clientManifest = await fetch("/_next/client-manifest.json").then(res =>
    res.json()
  );

  PageLoader.prototype.loadScript = function(route) {
    route = this.normalizeRoute(route);

    const routePath = route === "/" ? "/index" : route;
    const scriptRoute = clientManifest.clientPageAsset[routePath];

    const script = document.createElement("script");
    const url = `${this.assetPrefix}/_next/${scriptRoute}`;
    script.crossOrigin = process.crossOrigin;
    script.src = url;
    script.onerror = () => {
      const error = new Error(`Error when loading route: ${route}`);
      error.code = "PAGE_LOAD_ERROR";
      this.pageRegisterEvents.emit(route, { error });
    };

    document.body.appendChild(script);
  };
}
