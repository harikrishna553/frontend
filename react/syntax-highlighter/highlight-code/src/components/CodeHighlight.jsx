import { useState, useRef, useEffect } from "react";
import "./styles.css";
import { TextField, Typography, MenuItem, Checkbox } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import * as prismStyles from "react-syntax-highlighter/dist/esm/styles/prism";
import { marked } from "marked"; // Correct import

const supportedLanguages = SyntaxHighlighter.supportedLanguages;

export default function CodeHighlight() {
  const [sourceCode, setSourceCode] = useState(""); // Start with an empty string
  const [htmlCode, setHtmlCode] = useState("");
  const [language, setLanguage] = useState("java");
  const [style, setStyle] = useState("dark");
  const ref = useRef(null);
  const [lineNumbers, setLineNumbers] = useState(0);

  // Update HTML code when sourceCode, language, or style changes
  useEffect(() => {
    if (sourceCode !== "" && ref.current) {
      setHtmlCode(ref.current.innerHTML);
    } else {
      setHtmlCode("");
    }
  }, [sourceCode, language, style]);

  // Convert Markdown to HTML
  const renderMarkdownPreview = (markdown) => {
    return marked(markdown); // Parse the Markdown to HTML
  };

  return (
    <div className="codeContainer">
      <Typography variant="h3" gutterBottom className="title">
        Code Highlighter
      </Typography>

      <div className="firstRow">
        <div className="sourceCode">
          <TextField
            label="Enter Source Code"
            multiline
            rows={20}
            sx={{
              width: "30vw",
            }}
            onChange={(event) => setSourceCode(event.target.value)}
          />
        </div>

        <div className="htmlCode">
          <TextField
            label="HTML Code"
            multiline
            rows={20}
            sx={{
              width: "30vw",
            }}
            value={htmlCode}
            InputProps={{
              readOnly: true, // Make it read-only
            }}
          />
        </div>
      </div>

      <div className="secondRow">
        <Typography variant="h5">Language: </Typography>
        <TextField
          select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          sx={{
            width: 200,
          }}
        >
          {supportedLanguages.map((lang) => (
            <MenuItem value={lang} key={lang}>
              {lang}
            </MenuItem>
          ))}
        </TextField>

        <Typography variant="h5">Style: </Typography>
        <TextField
          select
          value={style}
          onChange={(event) => setStyle(event.target.value)}
          sx={{
            width: 200,
          }}
        >
          {Object.keys(prismStyles).map((styleKey) => (
            <MenuItem value={styleKey} key={styleKey}>
              {styleKey}
            </MenuItem>
          ))}
        </TextField>

        <Typography>Line Numbers</Typography>

        <Checkbox
          checked={lineNumbers ? true : false}
          onChange={(event, checked) => {
            //console.log(`state: ${checked}`);
            setLineNumbers(checked);
          }}
        />
      </div>

      <div>
        <Typography>Preview</Typography>
        <div className="preview" ref={ref}>
          {language === "markdown" ? (
            // Render the parsed HTML for Markdown
            <div
              dangerouslySetInnerHTML={{
                __html: renderMarkdownPreview(sourceCode),
              }}
            />
          ) : (
            <SyntaxHighlighter
              language={language}
              style={prismStyles[style]}
              showLineNumbers={lineNumbers}
            >
              {sourceCode}
            </SyntaxHighlighter>
          )}
        </div>
      </div>
    </div>
  );
}
