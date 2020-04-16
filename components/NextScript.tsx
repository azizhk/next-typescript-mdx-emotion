import * as React from "react";
import PropTypes from "prop-types";
import { NextScript as _NextScript } from "next/document";

// Lord forgive me for I have extended.
export default class NextScript extends _NextScript {
  static contextTypes = {
    _documentProps: PropTypes.any,
    _devOnlyInvalidateCacheQueryString: PropTypes.string
  };

  static propTypes = {
    nonce: PropTypes.string,
    crossOrigin: PropTypes.string
  };

  render() {
    const { clientBuildManifest } = this.props;
    const {
      staticMarkup,
      assetPrefix,
      devFiles,
      __NEXT_DATA__
    } = this.context._documentProps;
    const { _devOnlyInvalidateCacheQueryString } = this.context;

    const { page } = __NEXT_DATA__;

    // const path = getPagePathname(page);
    // console.log(path, clientBuildManifest.clientPageAsset[path]);

    return (
      <>
        {devFiles
          ? devFiles.map((file: string) => (
              <script
                key={file}
                src={`${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`}
                nonce={this.props.nonce}
                crossOrigin={
                  // @ts-ignore
                  this.props.crossOrigin || process.crossOrigin
                }
              />
            ))
          : null}
        {staticMarkup ? null : (
          <script
            id="__NEXT_DATA__"
            type="application/json"
            nonce={this.props.nonce}
            crossOrigin={
              // @ts-ignore
              this.props.crossOrigin || process.crossOrigin
            }
            dangerouslySetInnerHTML={{
              // @ts-ignore
              __html: _NextScript.getInlineScriptSource(
                this.context._documentProps
              )
            }}
          />
        )}
        {page !== "/_error" && (
          <script
            async
            id={`__NEXT_PAGE__${page}`}
            src={`${assetPrefix}/_next/${
              clientBuildManifest.clientPageAsset[getPagePathname(page)]
            }${_devOnlyInvalidateCacheQueryString}`}
            nonce={this.props.nonce}
            crossOrigin={
              // @ts-ignore
              this.props.crossOrigin || process.crossOrigin
            }
          />
        )}
        <script
          async
          id={`__NEXT_PAGE__/_app`}
          src={`${assetPrefix}/_next/${
            clientBuildManifest.clientPageAsset["/_app"]
          }${_devOnlyInvalidateCacheQueryString}`}
          nonce={this.props.nonce}
          crossOrigin={
            // @ts-ignore
            this.props.crossOrigin || process.crossOrigin
          }
        />
        {staticMarkup ? null : this.getDynamicChunks()}
        {staticMarkup ? null : this.getScripts()}
      </>
    );
  }
}

function getPagePathname(page: string) {
  if (page === "/") {
    return "/index";
  }

  return page;
}
