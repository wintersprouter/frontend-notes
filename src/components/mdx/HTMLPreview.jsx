// src/components/mdx/HTMLPreview.jsx
import { useEffect, useState } from "react";

const HTMLPreview = ({ code, height = "300px", showCode = true, style }) => {
  const [key, setKey] = useState(0);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedStyle, setCopiedStyle] = useState(false);

  useEffect(() => {
    setKey((prev) => prev + 1);
  }, [code]);

  const copyToClipboard = async (content) => {
    try {
      await navigator.clipboard.writeText(content === "style" ? style : code);
      setCopiedCode(content === "code" ? true : copiedCode);
      setCopiedStyle(content === "style" ? true : copiedStyle);
      setTimeout(() => {
        setCopiedCode(false);
        setCopiedStyle(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="html-preview">
      {showCode && (
        <div className="code-section">
          <h3 className="code-section-title">程式碼</h3>
          <div className="code-blocks">
            <div>
              <div className="code-header">
                <h3 className="code-section-title">style</h3>
                <button onClick={() => copyToClipboard("style")}>
                  {copiedStyle ? "已複製！" : "複製程式碼"}
                </button>
              </div>
              <pre className="code-block">
                <code>{style}</code>
              </pre>
            </div>
            <div>
              <div className="code-header">
                <h3 className="code-section-title">html</h3>
                <button onClick={() => copyToClipboard("code")}>
                  {copiedCode ? "已複製！" : "複製程式碼"}
                </button>
              </div>
              <pre className="code-block">
                <code>{code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}

      <div className="preview-section">
        <h3>預覽</h3>
        <iframe
          key={key}
          srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                  ${style}
                </style>
              </head>
              <body>${code}</body>
            </html>
          `}
          style={{ height }}
          title="HTML Preview"
          sandbox="allow-scripts"
          className="preview-frame"
        />
      </div>

      <style jsx>{`
        .code-section-title {
          color: #333;
        }
        .html-preview {
          margin: 20px 0;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;
        }

        .code-section {
          background: #f6f8fa;
          padding: 16px;
          border-bottom: 1px solid #eaeaea;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .code-header h3 {
          color: #333;
        }

        .code-header button {
          padding: 6px 12px;
          background: #8b6bbf;
          border: 1px solid #d1d5db;
          border-radius: 4px;
          cursor: pointer;
        }

        .code-header button:hover {
          background: #6d28d9;
        }
        .code-blocks {
          display: flex-column;
          justify-content: space-between;
          align-items: center;
        }

        .code-block {
          margin: 16px 0;
          padding: 16px;
          background: #242526;
          border-radius: 4px;
          overflow-x: auto;
        }

        .preview-section {
          padding: 16px;
        }

        .preview-section h3 {
          margin-top: 0;
          margin-bottom: 12px;
        }

        .preview-frame {
          width: 100%;
          border: 1px solid #eaeaea;
          border-radius: 4px;
          background: white;
        }
      `}</style>
    </div>
  );
};

export default HTMLPreview;
