### What is AI Dungeon Master?
AI Dungeon Master is an immersive, AI-driven text role-playing game (RPG) where the player becomes the hero of their own evolving story. By harnessing Google Gemini AI as its core creative engine, the platform acts as an automated Dungeon Master (DM) that dynamically generates narrative arcs on the fly without relying on pre-written scripts. 

It seamlessly adapts to completely open-ended user choices, bringing tabletop RPG fundamentals into a fast-paced, interactive web interface.

---

### Problem Statement
Standard digital RPGs run on highly rigid logic frameworks. They enforce predetermined branching paths and predefined dialogue options. On the other hand, playing unrestricted tabletop RPGs requires extensive time planning, scheduling a human Dungeon Master, and heavy world-building preparation. 

Gamers need a platform that provides the infinite creative freedom of a tabletop campaign—where you can legitimately attempt *anything*—while maintaining automated stat tracking, instant responsiveness, and accessible gameplay dynamics natively within a web browser.

---

### Our Solution
AI Dungeon Master simulates a full role-playing environment by shifting narrative control to an advanced Large Language Model:
- **Infinite Action Potential** — Escapes the limitations of multiple-choice clicking by allowing players to type or speak absolutely any action. The AI calculates the outcome mathematically based on class structure and stats.
- **Automated Mechanics** — The backend manages core RPG mechanics dynamically behind the scenes, recalculating Hit Points (HP), Experience Points (XP), and Level scaling on every turn.
- **Native Voice & Audio Hooks** — Employs native Web Speech APIs for hands-free storytelling, utilizing Speech-to-Text for player actions and Text-to-Speech to vocalize the AI's dramatic narration.
- **Magical Immersion** — Wraps the experience in a completely customized dark glassmorphic UI loaded with floating particles and glowing HUD elements.

---

### Current Features
- **🌟 Dynamic Generative Storytelling**: Operates entirely without pre-written scripts; the AI adapts universally to player actions to curate unique narrative arcs on the fly.
- **🗡️ Infinite Action Freedom**: Escapes limiting multiple-choice structures, unlocking the capability for players to type or speak absolutely any creative action imaginable.
- **💡 Smart Context Suggestions**: Provides dynamic, context-aware action suggestions during difficult scenarios to prevent players from stagnating.
- **🧙‍♂️ Custom Character Framework**: Features an extensive builder to select customized Names, functional Classes (Mage/Rogue/Warrior), and immersive contextual Themes (Fantasy/Cyberpunk/Sci-Fi).
- **🛡️ RPG Backend Mechanics**: Algorithmically calculates combat damage and persists real-time stat manipulation tracking hit points (HP), progression levels (XP), and dynamic inventory grids.
- **🎙️ Speech-to-Text Voice Input**: Integrates native Web Speech APIs to allow gamers to physically narrate and cast their desired actions into the microphone securely.
- **🔊 Text-to-Speech AI Narrator**: The game engine vocalizes the Dungeon Master's dramatic world-building directly through built-in browser speech synthesis.
- **🌌 Magical User Interface**: Constructed utilizing a bespoke CSS setup encompassing dark glassmorphism styling, floating background particles, and intensely glowing focus elements.
- **🕹️ Live Game State HUD**: Projects a continuous side-panel visualization of the player's core vitals, character level, and scavenged items updated iteratively each turn.
- **📜 Legend Summary Generation**: Aggregates the entirety of the unstructured play session post-campaign into a highly readable, formatted storybook timeline log.

---

### Future Scope
The primary focus is rapidly expanding the core RPG simulation depth:
- **Multiplayer Campaigns**: Utilizing websockets to enable synchronized co-op campaigns with multiple players in the same AI narrative instance.
- **Image Generation Integration**: Prompting generative image models (like DALL-E) dynamically on each major plot point to paint visual backdrops of the text.
- **Persistent Save States**: Allowing players to pause and drop back into their sprawling campaigns across separate days and computing devices.

---

### Tech Stacks Used

**Frontend Ecosystem**
- React & Vite
- Web Speech API (Native browser Text-to-Speech engine)
- Custom CSS3 "Magic" Aesthetics

**Backend Core**
- Java Spring Boot (REST API coordination)
- Jackson JSON Processor

**Databases & AI**
- MongoDB (Story session persistence and User states)
- Google Gemini API (Core AI Dungeon Master Engine)
