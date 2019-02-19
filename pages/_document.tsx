import * as React from "react";
import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext,
  DocumentProps as _DocumentProps
} from "next/document";
import { extractCritical } from "emotion-server";
import { EmotionCritical } from "create-emotion-server";

interface DocumentProps extends _DocumentProps, EmotionCritical {}

export default class MyDocument extends Document<DocumentProps> {
  static getInitialProps(ctx: NextDocumentContext) {
    // const page = Document.getInitialProps(ctx)
    const { renderPage } = ctx;
    const page = renderPage();
    let styles;
    if (page.html) {
      styles = extractCritical(page.html);
    }
    return { ...page, ...styles };
  }

  constructor(props: DocumentProps) {
    super(props);
    const { __NEXT_DATA__, ids } = props;
    if (ids) {
      __NEXT_DATA__.ids = ids;
    }
  }

  render() {
    return (
      <html>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
