### What is ArriBot?
ArriBot is a next-generation, AI-powered learning companion that merges a stunning holographic spatial UI with a robust dual AI engine (Groq & Google Gemini). Designed for students, developers, and lifelong learners, it transforms passive studying into a highly engaging and interactive experience.

The platform provides a complete intelligent study ecosystem—delivering adaptive chatting, smart flashcards, AI-generated quizzes, reading summarizations, resume analyses, and structured multi-week learning path curricula from a single unified dashboard.

---

### Problem Statement
Modern students face a deeply fragmented landscape of study tools that causes high drop-off rates and inefficiency:
- **Scattered Tools**: Relying on separate apps like Anki for flashcards, ChatGPT for ad-hoc questions, and Roadmap.sh for curriculum planning creates catastrophic context switching.
- **Manual Overhead**: Generating quality flashcards and quizzes by hand is an immense time bottleneck.
- **Bland interfaces**: Traditional learning dashboards fail to inspire, leading to low retention and limited study frequency.
- **Lack of Structure**: Generic LLM chatbots provide powerful answers but offer zero structured curriculum or daily progress tracking.

---

### Our Solution
ArriBot completely eliminates the content-creation bottleneck by constructing a fully integrated ecosystem wrapped in an immersive, gamified UI:
- **Dual AI Engine Architecture** — Routes primary ultra-fast generation through Groq's LLaMA 3.3 70B, with Gemini 2.0 Flash serving as a robust fallback.
- **Unified Modular Dashboard** — Integrates Neural Chat, Flash Recall, Cognitive Quizzes, and a Learning Path Generator into a single authenticated session space.
- **Smart Usage Governance** — Imposes per-user, per-day usage token limits visually exposed on the HUD to enforce healthy study quotas and prevent API abuse.
- **Holographic Space-Age UI** — Features a "void-style" deep-space aesthetic with cyan neons, glassmorphism, parallax effects, and animated particle fields.

---

### Current Features
- **🎨 Holographic Spatial UI**: A "void-style" deep-space aesthetic featuring glassmorphism cards, 3D tilt effects, parallax scrolling, glowing neon accents, and interactive animated particle fields.
- **🧠 Neural Chat**: Session-aware conversational AI companion responding iteratively via Groq LLaMA 3.3 70B for blazing-fast inference on any topic.
- **🃏 Flash Recall API**: Procedurally generates N number of rigorous Q&A flashcards instantly on any arbitrary subject via strict JSON LLM prompting.
- **🎯 Cognitive Quiz Engine**: Evaluates knowledge by dynamically constructing structured Multiple Choice Question (MCQ) assessments complete with post-answer AI explanations.
- **📝 Automated Summarizer**: Implements data compression heuristics to rapidly distill dense textbook chapters or massive copy-pastes into digestible key insights.
- **📄 Native PDF Resume Analyzer**: Allows direct PDF uploads utilizing Apache PDFBox to perform career gap detection, role suitability scoring, and explicit skill extraction algorithms.
- **🗺️ Learning Path Generator**: Constructs complete, personalized multi-week day-by-day JSON curricula featuring structured milestones and completion tracking.
- **🛡️ Secure Token Authorization**: Governs all module access utilizing OTP-verified email handshakes, stateless JWT session tokens, and BCrypt password encryption.
- **📊 Usage Intelligence Tracker**: Defends infrastructure by enforcing strict per-minute rate limit checks and providing live interactive UI token-consumption dashboard gauges.

---

### Future Scope
ArriBot aims to scale from an individual study aid into a dynamic, collaborative learning engine:
- **Streaming Audio/Visuals**: Web Speech API integration to allow voice-to-text chatting alongside token-by-token text streaming via Spring WebFlux SSE.
- **Collaborative Study Rooms**: WebSockets & STOMP integration for live, shared multiplayer study sessions.
- **Spaced Repetition Integration**: Embedding the SM-2 spaced repetition algorithm for algorithmic flashcard scheduling.
- **Export Pipeline**: Auto-exporting AI flashcards directly to an Anki-compatible `.apkg` format for offline consumption.

---

### Tech Stacks Used

**Frontend Ecosystem**
- React 18 & Vite
- Framer Motion (Transitions & Layout animations)
- Tailwind CSS (Utility styling & glassmorphism)

**Backend Core**
- Java 17 & Spring Boot 3.2 (REST APIs & Security)
- Spring Security (BCrypt & JWT Session tokens)
- OkHttp (High-performance API handling)
- Apache PDFBox (Native PDF text extraction)

**Databases & Infrastructure**
- MongoDB Atlas (Flexible NoSQL storage) 
- Brevo / Sendinblue (Transactional OTP Emails)
- Groq Cloud LLaMA 3.3 70B (Primary Inference)
- Google Gemini 2.0 Flash (Secondary Inference)
