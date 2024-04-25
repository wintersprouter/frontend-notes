import { MDXProvider } from "@mdx-js/react";
import { CodeSandbox } from "mdx-embed";

export default function MyCodeSandbox(props) {
  return (
    <MDXProvider>
      <CodeSandbox {...props} />
    </MDXProvider>
  );
}
