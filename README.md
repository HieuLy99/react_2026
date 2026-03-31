# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react)
  uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in
  [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev
& build performances. To add it, see
[this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install
[eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x)
and
[eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom)
for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# E-Commerce Application

A modern, full-featured e-commerce platform built with React, TypeScript, and
Vite.

## Features

- 🏠 **Home Page**: Hero section with trending products showcase
- 📦 **Product Catalog**: Advanced search, category filtering, sorting, and
  pagination
- 🔍 **Product Details**: Comprehensive product information with ratings and
  reviews
- 🛒 **Shopping Cart**: Full cart management with persistence
- 👤 **User Authentication**: Secure login and user profile management
- 📋 **Order History**: View and track user orders (protected)
- 🔐 **Protected Routes**: Account and order pages require authentication
- 📱 **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **UI Framework**: Tailwind CSS + shadcn/ui
- **HTTP Client**: Axios with interceptors
- **Routing**: React Router
- **Authentication**: FakeStore API integration
- **Data Persistence**: localStorage for cart and authentication tokens

## Project Structure

```
src/
├── app/               # Redux store configuration and custom hooks
├── api/               # HTTP client wrapper and API endpoints
├── features/          # Feature-based modules
│   ├── auth/          # Authentication logic and components
│   ├── products/      # Product listing and details
│   └── cart/          # Shopping cart functionality
├── components/        # Reusable UI components
├── pages/             # Page components for routes
├── routes/            # Route configuration
├── utils/             # Helper functions and utilities
└── styles/            # Global styles
```

## Architecture

### Routing

| Route           | Component     | Description                                 |
| --------------- | ------------- | ------------------------------------------- |
| `/`             | Home          | Hero banner with top 8 trending products    |
| `/products`     | ProductList   | Product catalog with filters and pagination |
| `/products/:id` | ProductDetail | Detailed product view with ratings          |
| `/cart`         | Cart          | Shopping cart with quantity adjustment      |
| `/login`        | Login         | User authentication (FakeStore API)         |
| `/profile`      | Profile       | User information and logout (protected)     |
| `/orders`       | Orders        | Order history from localStorage (protected) |
| `*`             | NotFound      | 404 error page                              |

### State Management

Redux Toolkit with the following slices:

- **authSlice**: User token and profile information
- **productsSlice**: Product list, categories, filters, sorting, and loading
  status
- **cartSlice**: Cart items and calculated totals
- **uiSlice**: Theme preferences and toast notifications

**Persistence**:

- Authentication tokens → localStorage
- Shopping cart → localStorage

### API Layer

**Axios wrapper with features**:

- Centralized instance with interceptors
- Automatic token attachment to requests
- Request/response error handling

**Endpoints**:

```
GET    /products
GET    /products/categories
GET    /products/category/:category
GET    /products/:id
POST   /auth/login
```

**Performance optimizations**:

- Lightweight caching mechanism (RTK Query or custom memoization)
- Search input debouncing (300ms)

### Core Components

**Layout Components**:

- Header (navigation, search bar, cart badge, user menu)
- Footer

**Product Components**:

- ProductCard: Individual product display
- ProductGrid: Product list container
- CategoryChips: Category filter selector
- SortSelect: Sort options dropdown
- Pagination: Page navigation

**Cart Components**:

- QuantityStepper: Adjust item quantities
- PriceSummary: Cart subtotal and checkout CTA

**Common Components**:

- SkeletonCard: Loading placeholder
- Toast: Notification messages

**UI Library**: Tailwind CSS + shadcn/ui for consistent, accessible design

## Development Plan (MVP)

Follow this order for efficient implementation:

1. **Phase 1**: Setup
   - Configure Vite with Tailwind CSS and React Router

2. **Phase 2**: Core Features
   - Product list and detail pages
   - Shopping cart with CRUD operations and persistence

3. **Phase 3**: Filtering & Search
   - Search functionality with debouncing
   - Category filters and sorting
   - Loading skeletons

4. **Phase 4**: Authentication
   - Login system with FakeStore API
   - Protected routes for profile and orders

5. **Phase 5**: Polish & Deploy
   - UI refinements and accessibility
   - Deployment to Vercel
### prettierrc setup 
```
npm install --save-dev prettier
```

my-vite-app/
├── src/
├── index.html
├── package.json
├── vite.config.js
├── .prettierrc   👈 file bạn tạo

```
{
  "printWidth": 80,
  "proseWrap": "always"
}
```
