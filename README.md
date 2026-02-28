# Car Scroll Animation

A scroll-driven interactive animation built with React, GSAP, and Tailwind CSS.
The car moves horizontally as the user scrolls, revealing animated typography and statistic cards synced to scroll progress.

🚀 Live Demo
https://kapilmogre1998.github.io/car-scroll-animation/

🛠 Tech Stack

React 19

Vite

GSAP (ScrollTrigger)

Tailwind CSS

ESLint

✨ Features

Scroll-synced horizontal car animation

GSAP ScrollTrigger with pinned section

Progressive letter reveal effect

Animated statistic cards

Responsive layout

Clean component architecture

Proper animation cleanup (no memory leaks)

📁 Project Structure
src/
 ├── components/
 │    └── CarScroll.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
⚙️ Installation

Clone the repository:

git clone https://github.com/YOUR-USERNAME/car-scroll-animation.git
cd car-scroll-animation

Install dependencies:

npm install

Run development server:

npm run dev
📦 Build for Production
npm run build
🚀 Deployment (GitHub Pages)
npm run deploy

Make sure vite.config.js includes:

base: "/car-scroll-animation/"
🧠 Implementation Notes

The animation is controlled via a single GSAP timeline.

ScrollTrigger pins the section and synchronizes all elements.

Cards are distributed proportionally across timeline progress.

Proper cleanup is handled using tl.kill() and scrollTrigger.kill().

📱 Responsive Design

Tested on:

Desktop

Tablet

Mobile

🧹 Code Quality

No unused variables

ESLint configured

Structured component layout

Clear naming conventions

Minimal inline styling

📄 License

This project is for educational / assignment submission purposes.