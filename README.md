# macOS Portfolio - React + TailwindCSS + Framer Motion

A modern, interactive macOS-inspired portfolio website built with React, TailwindCSS, and Framer Motion. This project showcases a complete desktop experience with draggable windows, smooth animations, and interactive applications.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TailwindCSS, and Framer Motion
- **macOS UI**: Authentic macOS design with traffic lights, dock, and window management
- **Smooth Animations**: Framer Motion powered animations for all interactions
- **Responsive Design**: Works on desktop and mobile devices
- **Interactive Apps**: Calendar, Dino Game, Settings, and more
- **Theme Support**: Light and dark mode with customizable wallpapers
- **Draggable Windows**: Full window management with drag, resize, and z-index handling

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Production-ready motion library for React
- **HTML5 Canvas** - For interactive game elements
- **CSS3** - Advanced styling with backdrop filters and animations

## 📦 Installation

### Prerequisites

Make sure you have Node.js installed on your system. If not, download it from [nodejs.org](https://nodejs.org/).

### Setup

1. **Clone or download the project**
   ```bash
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio.

## 🎮 Available Applications

### Desktop Icons
- **About** - Personal information and education details
- **Skills** - Programming languages and tools showcase
- **Projects** - Featured projects and portfolio items
- **Contact** - Contact information and social links
- **Resume** - PDF resume viewer with download option

### Dock Applications
- **Calendar** - Interactive calendar with month navigation
- **Dino Game** - Chrome Dino-inspired jumping game
- **Settings** - Theme and wallpaper customization
- **GitHub** - Link to source code repository

## 🎨 Customization

### Adding New Windows
1. Create a new component in `src/components/windows/`
2. Add the window data to the appropriate arrays in `App.js`
3. Update the `WindowManager.js` to handle the new window type

### Styling
- All styles use TailwindCSS classes
- Custom styles are defined in `src/index.css`
- Theme colors are configured in `tailwind.config.js`

### Animations
- Framer Motion animations are used throughout
- Animation variants can be customized in individual components
- Global animation settings are in `App.js`

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── icons/           # Application icons
│   ├── Moh_s_Resume.pdf # Resume PDF
│   └── index.html       # HTML template
├── src/
│   ├── components/
│   │   ├── windows/     # Individual window components
│   │   ├── App.js       # Main application component
│   │   ├── Desktop.js   # Desktop background and icons
│   │   ├── Dock.js      # Bottom dock with applications
│   │   ├── Window.js    # Draggable window wrapper
│   │   └── WindowManager.js # Window state management
│   ├── index.css        # Global styles and TailwindCSS
│   └── index.js         # React entry point
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # TailwindCSS configuration
└── README.md           # This file
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
3. Run: `npm run deploy`

### Deploy to Netlify/Vercel
1. Build the project: `npm run build`
2. Upload the `build` folder to your hosting service
3. Configure redirects for React Router if needed

## 🎯 Performance Features

- **Lazy Loading**: Components load only when needed
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Efficient State Management**: Minimal re-renders with React hooks
- **Responsive Images**: Optimized icon loading
- **Memory Management**: Proper cleanup of event listeners and animations

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- ES6+ JavaScript features
- Functional components with hooks
- Consistent naming conventions
- Modular component architecture
- Comprehensive comments and documentation

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Muhammad Shaikh**
- Email: mbshaikh@cougarnet.uh.edu
- LinkedIn: [linkedin.com/in/muhammad-shaikh](https://linkedin.com/in/muhammad-shaikh)
- GitHub: [github.com/Moh109](https://github.com/Moh109)

---

⭐ **Star this repository if you found it helpful!**
