### What is Empowerly?
Empowerly is a unified, comprehensive, and AI-powered Employee Management System engineered to eliminate enterprise data silos and modernize human resource operations. 

By acting as a single integrated platform, Empowerly consolidates all fragmented HR functions—from attendance tracking and unified payroll algorithms to built-in WebRTC video conferencing—providing a seamless experience for administrators, HR, and employees alike. 

---

### Problem Statement
Modern organizations face immense friction managing their workforce effectively, largely due to:
- **Fragmented Systems** using multiple disconnected tools for leave, payroll, and performance.
- **Manual Automation Deficits** causing high error rates in attendance tracking and slow HR approvals.
- **Poor Employee Engagement** due to lack of personalized skill development or collaborative communication tools.
- **Security & Compliance Threats** resulting from poor access controls and inadequate internal auditing.

---

### Our Solution
Empowerly systematically addresses all HR operational challenges through a powerful centralized architecture:
- **Unified Intranet** — Consolidates attendance, payroll, leave management, and meetings, dropping operational costs.
- **AI Automation (Google Gemini)** — Leverages LLMs to provide intelligent skill recommendations, automatically analyze performance data, and resolve HR queries instantly.
- **Instant Collaboration** — Features built-in WebSockets for real-time internal group chats and WebRTC for high-quality peer-to-peer video meetings.
- **Enterprise Security** — Rigid JWT token-based authentication, RBAC, session monitoring, and real-time activity tracking.

---

### Current Features
- **🔐 Secure Authentication & RBAC**: JWT token-based auth with OTP email verification, stateless sessions, and distinct Admin, HR, and Employee roles.
- **👥 Comprehensive User Management**: Detailed employee profiles, cross-department tracking, and integrated HR CRUD operations.
- **⏰ Smart Digital Attendance**: One-click check-in/out, automated midnight checkout, and exhaustive monthly Excel analytics reports.
- **🏖️ Automated Leave System**: Supports multiple leave types (Sick, Casual, Earned) with HR review workflows and real-time balance tracking.
- **💰 Enterprise Payroll Generator**: Automates massive payroll cycle generation, tax deduction logic, and creates downloadable high-quality PDF payslips.
- **📊 Performance Review Portal**: Enables employee self-assessments, quantitative HR evaluations, and tracks multimetric competencies.
- **💬 Real-Time WebSockets Connect**: Private 1-on-1 enterprise messaging network with persistence and unread indicators.
- **🎥 WebRTC Video Conclaves**: Custom-built peer-to-peer video meeting infrastructure seamlessly integrated into the application surface.
- **🤖 Gemini HR Chatbot**: An always-on LLM assistant capable of instantly resolving company policy, attendance, and general HR queries.
- **📈 Skill Development AI**: Analyzes employee roles to suggest relevant technical skills, curates learning resources, and charts career trajectories.
- **✨ Motivational Content AI**: Synthesizes and broadcasts dynamic daily quotes, wellness tips, and personalized encouragement into the ecosystem.
- **🧠 Performance Insights Engine**: Parses quarterly performance data to surface strengths, critical weaknesses, and actionable recommendations automatically.
- **🎯 Interactive Motivation Wall**: A dedicated social feed where employees can post achievements, stories, and interact via likes/comments.
- **📄 Document Generation**: Auto-generates heavily customized offer letters and new-hire appointment logistics as exported PDFs.
- **🛡️ Live Security Monitoring**: Constantly logs login sessions, IP addresses, flags unusual activity, and provides real-time security alert dashboards.

---

### Future Scope
The Empowerly ecosystem is mapped out to transition into a robust B2B multitenant software suite:
- **Cloud HR Multitenancy**: Restructure architecture to support onboarding completely isolated corporate organizations (SaaS mode).
- **Advanced Predictive AI**: Machine learning pipelines to predict employee churn rates based on engagement data. 
- **Global Compliance Modules**: Custom adaptation modules for international corporate compliance regulations.
- **Native Mobile Application**: Building a dedicated iOS and Android application with React Native.

---

### Tech Stacks Used

**Frontend Ecosystem**
- React 19 & Vite
- Framer Motion (Animations)
- WebRTC (Peer-to-Peer Video)
- Socket.IO Client (Real-time interactions)

**Backend Core**
- Java 17 & Spring Boot 3.2.0 (REST JSON API)
- Spring Security (JWT / Auth / RBAC)
- Spring WebSocket (Socket Hub)
- iText7 (Automated PDF Document Generation)

**Databases & AI**
- MongoDB Atlas (Cloud NoSQL Operations)
- Google Gemini 2.0 Flash (AI Inference and NLP Engine)
