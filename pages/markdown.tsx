import * as React from "react";
import Hello from "../md/hello.mdx";
import MarkdownComponents from "../components/markdown";

export default class MarkdownExample extends React.PureComponent {
  render() {
    return <Hello components={MarkdownComponents} />;
  }
}
