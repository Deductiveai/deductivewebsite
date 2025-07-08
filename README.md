# Deductive Website

A modern, fast Hugo website for Deductive built with the Hugo Saasify theme and TailwindCSS.

## About This Project

This website is built using:
- **Hugo**: Static site generator for fast, secure websites
- **Hugo Saasify Theme**: Modern SaaS-focused theme with TailwindCSS
- **TailwindCSS**: Utility-first CSS framework for custom styling
- **PostCSS**: CSS processing for optimization and compatibility

### Theme Features
- Lightning-fast performance with Hugo's static generation
- Responsive design that works on all devices
- Modern UI components and layouts
- Built-in blog functionality
- Contact forms and call-to-action sections
- Client logo carousel
- Testimonials section
- SEO-optimized structure

### Customizations
- Custom Deductive branding and colors (#4534DA, #08D5F9, #FFFFFF)
- Dutch language content
- Custom header with logo-only navigation
- Klantportaal and Contact buttons
- Hero section styled header
- Software logos carousel section

## Prerequisites

### macOS
- **Homebrew**: Package manager for macOS
- **Git**: Version control (usually pre-installed)
- **Node.js**: JavaScript runtime for TailwindCSS

### Windows
- **Git**: Version control
- **Node.js**: JavaScript runtime for TailwindCSS
- **Hugo**: Static site generator

## Installation Guide

### macOS Setup

1. **Install Homebrew** (if not already installed):
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

2. **Install Hugo Extended**:
   ```bash
   brew install hugo
   ```

3. **Install Node.js and npm**:
   ```bash
   brew install node
   ```

4. **Clone the repository**:
   ```bash
   git clone https://github.com/Deductiveai/deductivewebsite.git
   cd deductivewebsite
   ```

5. **Initialize git submodules** (for the theme):
   ```bash
   git submodule update --init --recursive
   ```

6. **Install dependencies**:
   ```bash
   npm install
   ```

7. **Run the development server**:
   ```bash
   hugo server -D
   ```

8. **Open your browser** and navigate to `http://localhost:1313`

### Windows Setup

1. **Install Git**:
   - Download from [git-scm.com](https://git-scm.com/download/win)
   - Follow the installation wizard

2. **Install Node.js**:
   - Download from [nodejs.org](https://nodejs.org/en/download/)
   - Choose the LTS version and follow the installer

3. **Install Hugo Extended**:
   - Download the latest Hugo Extended release from [GitHub releases](https://github.com/gohugoio/hugo/releases)
   - Extract the `hugo.exe` file
   - Add Hugo to your PATH environment variable

4. **Clone the repository**:
   ```cmd
   git clone https://github.com/Deductiveai/deductivewebsite.git
   cd deductivewebsite
   ```

5. **Initialize git submodules** (for the theme):
   ```cmd
   git submodule update --init --recursive
   ```

6. **Install dependencies**:
   ```cmd
   npm install
   ```

7. **Run the development server**:
   ```cmd
   hugo server -D
   ```

8. **Open your browser** and navigate to `http://localhost:1313`

## Project Structure

```
deductivewebsite/
├── assets/                 # Images and other assets
├── content/               # Markdown content files
│   ├── _index.md         # Homepage content
│   ├── contact.md        # Contact page
│   ├── blog/             # Blog posts
│   └── ...
├── layouts/              # Custom layout overrides
│   └── partials/
│       └── header.html   # Custom header layout
├── static/               # Static files (images, logos, etc.)
│   ├── logo.png         # Main logo
│   └── images/
│       └── logos/       # Client/software logos
├── themes/              # Hugo themes
│   └── hugo-saasify-theme/
├── hugo.toml           # Hugo configuration
├── package.json        # Node.js dependencies
├── tailwind.config.js  # TailwindCSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md           # This file
```

## Configuration

### Hugo Configuration (`hugo.toml`)

Key configuration options:
- **Site title**: "Deductive"
- **Language**: en-us (with Dutch content)
- **Theme**: hugo-saasify-theme
- **Base URL**: Update for production deployment
- **Brand colors**: Configured in params section

### TailwindCSS Configuration (`tailwind.config.js`)

Custom brand colors defined:
- **Primary**: #4534DA (purple/blue)
- **Secondary**: #08D5F9 (light blue/cyan)
- **Background**: #FFFFFF (white)

## Development Workflow

### Making Changes

1. **Content changes**: Edit markdown files in `content/` directory
2. **Styling changes**: Modify `tailwind.config.js` or CSS files
3. **Layout changes**: Edit templates in `layouts/` directory
4. **Configuration**: Update `hugo.toml` for site settings

### Building for Production

```bash
# Build static files
hugo --minify

# The built site will be in the `public/` directory
```

### Adding New Content

1. **New page**:
   ```bash
   hugo new content/page-name.md
   ```

2. **New blog post**:
   ```bash
   hugo new content/blog/post-title.md
   ```

## Deployment

The site generates static files that can be deployed to any web server or CDN:

- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Import GitHub repository and deploy
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional hosting**: Upload contents of `public/` directory

## TODO Items

- [ ] Add software logos to carousel (see [Issue #1](https://github.com/Deductiveai/deductivewebsite/issues/1))
- [ ] Update contact information with real details
- [ ] Add more Dutch translations
- [ ] Create additional content pages

## Troubleshooting

### Common Issues

1. **Hugo command not found**:
   - Ensure Hugo is installed and in your PATH
   - On macOS, try `brew install hugo`

2. **CSS not loading**:
   - Run `npm install` to install TailwindCSS dependencies
   - Restart the Hugo server after changes

3. **Submodule theme not found**:
   - Run `git submodule update --init --recursive`

4. **Build errors**:
   - Check Hugo version (requires Extended version)
   - Ensure all dependencies are installed

### Getting Help

- Check the [Hugo documentation](https://gohugo.io/documentation/)
- Review the [Hugo Saasify theme documentation](https://github.com/chaoming/hugo-saasify-theme)
- Create an issue in the repository for project-specific problems

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `hugo server -D`
5. Submit a pull request

## License

This project uses the Hugo Saasify theme, which is licensed under the MIT license. See the theme's repository for details.
