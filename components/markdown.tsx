// You can add custom classes for Markdown Components here.

import * as React from "react";

type MDXComponent = (props: object) => JSX.Element;

const H1: MDXComponent = props => <h1 style={{ color: "tomato" }} {...props} />;
const InlineCode: MDXComponent = props => (
  <code id="codes" style={{ color: "purple" }} {...props} />
);
const Code: MDXComponent = props => (
  <code id="codes" style={{ fontWeight: 600 }} {...props} />
);
const Pre: MDXComponent = props => (
  <pre id="codes" style={{ color: "red" }} {...props} />
);

export default {
  h1: H1,
  pre: Pre,
  code: Code,
  inlineCode: InlineCode
};
