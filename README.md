# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React 19, TypeScript, and Tailwind CSS. Featuring smooth animations, dark mode support, and optimized performance.

## Features

- **Modern Design**: Clean and professional UI with animated background effects
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Seamless dark/light theme switching
- **Performance Optimized**: Dynamic imports, lazy loading, and code splitting
- **Smooth Animations**: Motion/Framer Motion powered animations and transitions
- **Type Safe**: Built with TypeScript for robust code
- **Analytics**: Integrated Vercel Analytics for insights

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## Sections

- **Hero**: Eye-catching introduction with animated background
- **About**: Personal introduction and background
- **Skills**: Technical skills organized by category (Frontend, Backend, Tools & DevOps, Cloud & Design)
- **Education**: Academic background and certifications
- **Resume**: Downloadable resume section
- **Projects**: Showcase of work and projects
- **Footer**: Contact information and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Harsh-Upadhyay005/Portfolio-Website.git
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
my-app/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main page with all sections
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Hero.tsx          # Hero section with animated background
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Education.tsx     # Education details
│   ├── Resume.tsx        # Resume download section
│   ├── Projects.tsx      # Projects showcase
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer with links
│   ├── ThemeProvider.tsx # Dark mode provider
│   └── ui/               # UI components
│       └── background-boxes.tsx
├── lib/                  # Utility functions
│   └── utils.ts
└── public/              # Static assets
    └── certificates/    # Certificate files
```

## Performance Optimizations

- Dynamic imports for below-the-fold components
- Lazy loading with Suspense
- Optimized images and assets
- Code splitting for better load times
- Minimal JavaScript bundle size

## Customization

### Update Personal Information

Edit the component files in the `components/` directory:
- **Hero.tsx**: Update name and title
- **About.tsx**: Add your personal story
- **Skills.tsx**: Modify skills and expertise
- **Education.tsx**: Update educational background
- **Projects.tsx**: Add your projects

### Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-level styling using Tailwind utility classes

## Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

Build the project first:
```bash
npm run build
```

## License

This project is open source and available under the MIT License.

## Contact

Harsh Upadhyay - Full Stack Developer | Tech Enthusiast

For more information, visit the website or check the Footer section for social links.
