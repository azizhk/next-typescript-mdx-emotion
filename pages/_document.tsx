import * as React from "react";
import Document, {
  // Head,
  Main,
  NextScript,
  NextDocumentContext,
  DocumentProps as _DocumentProps
} from "next/document";
import { extractCritical } from "emotion-server";
import { EmotionCritical } from "create-emotion-server";
import { readFile as _readFile } from "fs";
import { promisify } from "util";
import { join } from "path";

const readFile = promisify(_readFile);

import NextScriptProd from "../components/NextScript";

interface DocumentProps extends _DocumentProps, EmotionCritical {
  clientBuildManifest: {
    clientPages: {
      [path: string]: string;
    };
  };
}

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: NextDocumentContext) {
    // const page = Document.getInitialProps(ctx)
    const { renderPage } = ctx;
    const page = renderPage();
    let styles;
    if (page.html) {
      styles = extractCritical(page.html);
    }
    let clientBuildManifest;
    if (process.env.NODE_ENV === "production") {
      clientBuildManifest = JSON.parse(
        (await readFile(
          join(__dirname, "../../../../client-manifest.json")
        )).toString()
      );
      // console.log(clientBuildManifest);
    }

    return { ...page, ...styles, clientBuildManifest };
  }

  constructor(props: DocumentProps) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    const { clientBuildManifest } = this.props;
    return (
      <html>
        <body>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <Main />
          {process.env.NODE_ENV === "production" ? (
            <NextScriptProd clientBuildManifest={clientBuildManifest} />
          ) : (
            <NextScript />
          )}
        </body>
      </html>
    );
  }
}
