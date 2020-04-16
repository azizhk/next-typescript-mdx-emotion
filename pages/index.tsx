import * as React from "react";
import { css } from "emotion";
import NextLink from "next/link";

const headerStyle = css({
  color: "#777"
});

const contentStyle = css({
  color: "#999"
});

export default class Index extends React.PureComponent {
  render() {
    return (
      <div>
        <h1 className={headerStyle}>Hello World!!</h1>
        <p className={contentStyle}>This is the content</p>
        <p className={contentStyle}>This is some more content</p>
        <p>
          <NextLink href="/markdown">
            <a>Markdown Page</a>
          </NextLink>
        </p>
        <p>
          <NextLink href="/markdown" as="/markdown-custom">
            <a>This is custom link</a>
          </NextLink>
        </p>
      </div>
    );
  }
}
