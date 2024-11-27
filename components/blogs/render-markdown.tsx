import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { pojoaque } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { cn } from "@/lib/utils";
import { PPNUltraBold } from "@/lib/fonts";

const RenderMarkdown = ({ markdown }: { markdown?: string }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        code(props) {
          // @ts-ignore
          const { inline, children, className, node, ...rest } = props;
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            // @ts-ignore
            <SyntaxHighlighter {...rest} PreTag="div" style={pojoaque}>
              {String(children).replace(/\n$/, "")} language={match[1]}{" "}
            </SyntaxHighlighter>
          ) : (
            <code {...rest} className={cn(className, "bg-primary/30 text-white px-1 py-[1px] text-sm rounded-sm")}>
              {children}
            </code>
          );
        },
        h2({ children }) {
          return <h1 className="text-4xl mt-14">{children}</h1>;
        },
        h3({ children }) {
          return <h1 className="text-2xl mt-14">{children}</h1>;
        },
        p({ children }) {
          return <p className="text-sm font-normal my-4">{children}</p>;
        },
        hr() {
          return <div className="h-[1px] w-full bg-gradient-to-r from-primary/5 via-primary to-primary/5 mb-4 mt-2" />;
        },
        img({ src }) {
          return <img src={src} className="rounded-md my-4 first:w-full" />;
        },
        a({ href }) {
          return (
            <a className="text-primary hover:underline" href={href}>
              {href}
            </a>
          );
        },
        strong({ children }) {
          return <strong className={cn(PPNUltraBold.className)}>{children}</strong>;
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default RenderMarkdown;
