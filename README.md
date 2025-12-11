# Modular React Navbar

A fully responsive, accessible, and modular navigation bar component for React.

## 📂 Project Structure

The component is split into small, single-purpose files for better maintainability.

```text
src/
└── components/
    └── Navbar/
        ├── Navbar.js       # Main parent component (Assembles the parts)
        ├── NavList.js      # Iterates and renders the menu links
        ├── Logo.js         # The site logo component
        ├── MenuToggle.js   # The mobile hamburger button
        ├── navData.js      # Configuration file (Edit links here)
        └── Navbar.css      # Styling for the navbar