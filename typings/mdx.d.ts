// From https://mdxjs.com/getting-started/typescript

// types/mdx.d.ts
declare module '*.mdx' {
  interface Props {
    components: object
  }
  let MDXComponent: (props: Props) => JSX.Element;
  export default MDXComponent;
}