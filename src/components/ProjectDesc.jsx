import React, { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; 
import rehypeRaw from "rehype-raw"; 
import rehypeSanitize from "rehype-sanitize";

import { skillIcons } from "./skillsicons";

function resolveImageUrl(src, repoPath, branch = "main") {
  if (!src) return "";
  if (/^https?:\/\//.test(src)) return src;
  return `https://raw.githubusercontent.com/${repoPath}/${branch}/${src.replace(
    /^\.\//,
    ""
  )}`;
}





const ProjectDesc = ({ project, onBack }) => {
  const [readme, setReadme] = useState("");
  const [languages, setLanguages] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repoPath, setRepoPath] = useState("");

  useEffect(() => {
    if (project.github) {
      setLoading(true);
      setError(null);

      const repoPath = project.github
      .replace("https://github.com/", "")
      .replace(".git", "");
      setRepoPath(repoPath);
      // Fetch README
      const fetchReadme = fetch(
        `https://raw.githubusercontent.com/${repoPath}/main/README.md`
      )
        .then((res) => {
          if (!res.ok) throw new Error("README not found");
          return res.text();
        })
        .catch(() =>
          fetch(
            `https://raw.githubusercontent.com/${repoPath}/master/README.md`
          ).then((res) => (res.ok ? res.text() : ""))
        );

      // Fetch languages
      const fetchLanguages = fetch(
        `https://api.github.com/repos/${repoPath}/languages`
      )
        .then((res) => {
          if (!res.ok) throw new Error("Languages not found");
          return res.json();
        })
        .then((data) => Object.keys(data))
        .catch(() => []);

      Promise.all([fetchReadme, fetchLanguages])
        .then(([readmeText, languageList]) => {
          setReadme(readmeText || "No README available for this project.");
          setLanguages(languageList);
        })
        .catch((err) => {
          console.error("Error fetching project data:", err);
          setError("Failed to load project details.");
        })
        .finally(() => setLoading(false));


    }
  }, [project]);


  // Remove duplicates and normalize language/tool names
  const normalizeSkillName = (name) => {
    const normalized = name.trim();
    const variations = {
      JavaScript: ["Javascript", "JS"],
      TypeScript: ["Typescript", "TS"],
      "C++": ["CPlusPlus", "Cpp"],
      "C#": ["CSharp", "C-Sharp"],
      "Node.js": ["NodeJS", "Nodejs"],
      React: ["ReactJS", "Reactjs"],
      Express: ["ExpressJS", "Expressjs"],
      PostgreSQL: ["Postgres"],
      "Next.js": ["NextJS", "Nextjs"],
      "Three.js": ["ThreeJS", "Threejs"],
      "Tailwind CSS": ["TailwindCSS", "Tailwind"],
    };

    for (const [standard, variants] of Object.entries(variations)) {
      if (variants.includes(normalized) || normalized === standard) {
        return standard;
      }
    }
    return normalized;
  };

  // Get all unique technologies (languages + tools) with normalized names
  const allTechnologies = React.useMemo(() => {
    const combined = [...languages, ...project.tools];
    const normalized = combined.map(normalizeSkillName);
    return [...new Set(normalized)];
  }, [languages, project.tools]);

  const MAX_LENGTH = 800;
  const isLongContent = readme.length > MAX_LENGTH;

  const customRenderers = {
    // Style code blocks
    code: ({ node, inline, className, children, ...props }) => {
      return inline ? (
        <code className="inline-code" {...props}>
          {children}
        </code>
      ) : (
        <pre className="code-block">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    // Style headings
    h1: ({ children }) => <h2 className="readme-h1">{children}</h2>,
    h2: ({ children }) => <h3 className="readme-h2">{children}</h3>,
    h3: ({ children }) => <h4 className="readme-h3">{children}</h4>,
    h4: ({ children }) => <h5 className="readme-h4">{children}</h5>,
    h5: ({ children }) => <h6 className="readme-h5">{children}</h6>,
    h6: ({ children }) => <h6 className="readme-h6">{children}</h6>,
    // Style links
    a: ({ href, children }) => (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="readme-link"
      >
        {children}
      </a>
    ),
    // Style lists
    ul: ({ children }) => <ul className="readme-list">{children}</ul>,
    ol: ({ children }) => (
      <ol className="readme-list readme-ordered-list">{children}</ol>
    ),
    // Style tables
    table: ({ children }) => (
      <div className="table-wrapper">
        <table className="readme-table">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="readme-thead">{children}</thead>,
    tbody: ({ children }) => <tbody className="readme-tbody">{children}</tbody>,
    tr: ({ children }) => <tr className="readme-tr">{children}</tr>,
    th: ({ children }) => <th className="readme-th">{children}</th>,
    td: ({ children }) => <td className="readme-td">{children}</td>,
    // Style blockquotes
    blockquote: ({ children }) => (
      <blockquote className="readme-blockquote">{children}</blockquote>
    ),
    // Style images
    img: ({ src, alt }) => (
      <img src={src} alt={alt} className="readme-img" loading="lazy" />
    ),
    // Style divs and other HTML elements
    div: ({ children, ...props }) => (
      <div className="readme-div" {...props}>
        {children}
      </div>
    ),
  };

  if (loading) {
    return (
      <div
        className="project-desc"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <BsArrowRightCircle
          size={35}
          className="back-button"
          onClick={onBack}
        />
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-desc">
      <BsArrowRightCircle size={35} className="back-button" onClick={onBack} />

      <div className="project-details">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
        <h3 className="project-title">{project.title}</h3>

        {error && <div className="error-message">{error}</div>}

        {/* README Section */}
        {readme && (
          <div className="readme-section">
            <div className="section-header">
              <h4 className="section-title">About This Project</h4>
              {isLongContent && (
                <button
                  className="expand-button"
                  onClick={() => setExpanded(!expanded)}
                  title={expanded ? "Collapse" : "Expand"}
                >
                  {expanded ? <FaChevronUp /> : <FaChevronDown />}
                  {expanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>

            <div className={`readme-content ${expanded ? "expanded" : ""}`}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                components={{
                  img: ({ node, ...props }) => {
                    const fixedSrc = resolveImageUrl(
                      props.src,
                      repoPath,
                      "main"
                    );

                    // Extract width/height if passed inline in README <img>
                    const width = props.width ? props.width : "auto";
                    const height = props.height ? props.height : "auto";

                    return (
                      <img
                        {...props}
                        src={fixedSrc}
                        loading="lazy"
                        style={{
                          maxWidth: width === "auto" ? "100%" : width + "px",
                          height: height === "auto" ? "auto" : height + "px",
                          display: "block",
                          margin: "15px auto",
                        }}
                      />
                    );
                  },
                  table: ({ node, ...props }) => (
                    <div className="md-table-wrapper">
                      <table {...props} />
                    </div>
                  ),
                  a: ({ node, ...props }) => (
                    <a {...props} target="_blank" rel="noopener noreferrer" />
                  ),
                }}
              >
                {expanded || readme.length <= MAX_LENGTH
                  ? readme
                  : readme.slice(0, MAX_LENGTH) + "..."}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* Technologies Section */}
        {allTechnologies.length > 0 && (
          <div className="technologies-section">
            <h4 className="section-title" style={{ textAlign: "center" }}>
              Technologies Used
            </h4>
            <div className="technologies-grid">
              {allTechnologies.map((tech) => (
                <div key={tech} className="technology-item">
                  <img
                    src={
                      skillIcons[tech] ||
                      "https://skillicons.dev/icons?i=github"
                    }
                    alt={tech}
                    title={tech}
                    className="technology-icon"
                    onError={(e) => {
                      e.target.src = "https://skillicons.dev/icons?i=github";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Links */}
        <div className="project-links-section">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link github-link"
            >
              <FaGithub />
              <span>View Source</span>
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link external-link"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDesc;
