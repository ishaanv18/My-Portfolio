### What is ASTraMind?
ASTraMind (Abstract Syntax Tree & AI Mind) is a full-stack, AI-powered code intelligence platform designed to provide software engineering teams with deep, instant, and context-aware understanding of any GitHub codebase.

It is a developer-first co-pilot that goes beyond syntax highlighting. By combining parse-tree analysis, semantic vector embeddings, and large language models (LLMs), ASTraMind transforms a raw repository into an interactive, queryable knowledge base. This enables engineers of all roles—from new hires to senior architects—to navigate and understand large, complex codebases in *minutes*, not weeks.

Think of it as your permanent senior engineer on-call, available 24/7, who has read every single line of your repository and can answer any question about it instantly.

---

### Problem Statement
"How do I understand what this codebase actually does, who wrote what, why they made these decisions, and where the risks are — without spending weeks reading files?"

This is a critical bottleneck faced by:
- **New team members** who need to get up to speed quickly.
- **Engineering managers** who need a high-level architectural overview.
- **Security engineers** doing ad-hoc audits without full codebase context.
- **DevOps/SRE teams** debugging production incidents at 3am with unfamiliar code.

Existing tools fall short: IDEs lack natural language reasoning, GitHub Copilot generates code but doesn't explain macro-architecture, and static analyzers are entirely rigid. No single solution combines real-time repository indexing with semantic search and AI reasoning simultaneously.

---

### Our Solution
ASTraMind is a unified intelligence layer that sits natively on top of any GitHub repository, generating comprehensive insights in under 60 seconds. It provides:

- **Semantic Indexing Engine** — Parses the entire repository, chunks code intelligently by logical functions, generates vector embeddings, and stores them in ChromaDB.
- **Natural Language Interface** — Ask any question in plain English ("How does authentication work?") and get grounded, cited answers backed by actual repository chunks.
- **AI Agent Suite** — Deploys 15 specialized domain experts to handle code reviews, security audits, debug analysis, and architecture mapping.
- **Role-Aware Onboarding** — Generates customized codebase tours based on your exact engineering role (Frontend, Backend, DevOps).

---

### Current Features
- **🔍 Semantic Search**: Understand, don't just grep. ASTraMind's search engine uses vector embeddings to find semantically similar code by concept for ranked, contextualized results.
- **🤖 AI Synthesis (Ask Anything)**: Ask any natural-language question about your entire codebase and get a comprehensive, cited AI answer grounded in real retrieved code.
- **🗺️ Codebase Tour (Onboarding)**: Generate a personalized, structured walkthrough of the most relevant parts of the codebase based on your specific engineering role.
- **🔎 Code Block Explainer**: Paste any file path and line range to get a plain-English explanation of exactly what that code does, why it exists, and what edge cases it handles.
- **🛡️ Security Sentinel**: Automatically scans your codebase for OWASP vulnerabilities and anti-patterns, returning severity-ranked remediation advice.
- **📐 Architecture Guardian**: Generate a high-level architectural overview of the entire project to understand top-level modules and data flows.
- **🐛 Debug Agents**: Describe a bug or paste an error stack trace, and ASTraMind will search the code to identify the likely root cause and suggest specific fixes.
- **📦 Dependency Radar**: Comprehensive AI audit of all dependencies from package manifests, highlighting outdated versions, CVEs, and licensing risks.
- **🔄 Diff Analysis**: Analyze the semantic impact of code changes. Paste a git diff to get an explanation of what the change does and its potential side effects.
- **📜 Commit Intelligence**: Automatically scan recent git commits and generate human-readable summaries and release notes.
- **📊 Code Trends**: Analyze quality metrics to track complexity growth, TODO accumulation, and documentation coverage across your repository.
- **🧪 Test Generator**: Automatically generate comprehensive unit and integration tests supporting Python, JS/TS, Go, and Java.
- **🧠 Pair Programmer**: An interactive AI assistant that uses your codebase as context to write new features and refactor code using repository conventions.
- **🗄️ ADR Generator**: Automatically generate formal Architecture Decision Records (ADRs) to capture key design choices and contexts.
- **⏱️ Time Machine**: Query historical codebase states to uncover how specific modules evolved and why specific decisions were made.
- **🔗 Natural Language to SQL/Query**: Translate natural language questions about your data models directly into executable queries.

---

### Future Scope
ASTraMind Beta 1.0 is just the beginning. Our architectural roadmap focuses on scaling deeply into enterprise workflows:

- **Formal OAuth 2.0 Flow & Workspaces**: Implementing seamless GitHub OAuth for enterprise-grade team collaboration in unified workspaces.
- **Cloud Vector Store**: Migrating from local ChromaDB to highly-available cloud vector databases for concurrent multi-user state.
- **Real-Time Webhooks**: Listening to continuous integration pipelines to automatically re-index the knowledge graph upon git pushes.
- **IDE Extensions & ChatOps**: Moving ASTraMind directly into VS Code and introducing Slack/Teams bot `/astramind` slash commands.
- **Analytics Engine**: Dashboarding team query patterns to identify internal engineering friction and missing documentation.

---

### Tech Stacks Used

**Frontend Ecosystem**
- React 18 & Vite
- Zustand (Global State Management)
- Framer Motion (Animations)
- Tailwind CSS

**Backend Core**
- Python 3.11+ & FastAPI (REST Framework)
- Uvicorn (ASGI Server)
- PyGithub (API interaction)

**AI & Infrastructure**
- Groq Cloud LLaMA 3.3 70B (Primary LLM Engine)
- ChromaDB (Local Vector Store)
- `sentence-transformers/all-MiniLM-L6-v2` (Embedding Generation)
