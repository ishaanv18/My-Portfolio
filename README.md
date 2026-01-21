# Anti-Gravity Portfolio

The personal portfolio of **Ishaan Verma**, a Full Stack CS Engineering student. This project is a modern, immersive web experience built with React, Tailwind CSS, and Framer Motion, featuring a "System Initialization" theme and physics-based interactions.

![Anti-Gravity](../.gemini/antigravity/brain/a7baa1dc-97be-43cf-8c3a-79e6e0be9764/uploaded_image_1769023107814.png)

## 🌌 Core Features

### 1. Immersive UI/UX
- **System Preloader**: A custom 3-second initialization sequence with spinning reactor cores and glitch text effects.
- **Physics-Based Cards**: "About Me" and "Experience" cards react to mouse movement (tilt/parallax) and use spring physics for entrance animations.
- **Orbiting Tech Stack**: A 3D-simulated solar system of technologies that orbits a central core, which can be toggled to a full grid view.
- **3D Particles**: A lightweight, rotating starfield background powered by Three.js.

### 2. Modern Tech Stack
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Motion One
- **Animations**: Framer Motion
- **Icons**: Lucide React + Simple Icons

### 3. Key Components
- **HUD Contact Form**: A futuristic, Heads-Up Display style form integrated with **EmailJS** for real-time emails.
- **Custom Notifications**: Holographic toast notifications that replace standard browser alerts.
- **Interactive Navigation**: A glassmorphic navbar that floats and contracts on scroll.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/anti-gravity-portfolio.git
    cd anti-gravity-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## 🛠 Configuration

### EmailJS Integration
The contact form is pre-configured to work with EmailJS. To use your own account:
1.  Go to `src/components/Contact.tsx`.
2.  Update the `SERVICE_ID`, `public_key`, and Template IDs with your own credentials.

## 🎨 Theme
The project uses a custom "Anti-Gravity" color palette defined in `src/index.css`:
- **Obsidian**: `#0a0a0f` (Background)
- **Deep Space**: `#12121f` (Secondary)
- **Neon Cyan**: `#00f3ff` (Primary Accent)
- **Neon Purple**: `#bc13fe` (Secondary Accent)

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---
*Built with code & gravity by Ishaan Verma.*
