# React + TypeScript + Vite + Tailwind

In this project I want to practice react from basic concepts until advanced.

Below is the list of what is going to be found here:

## 1. The Essentials (Building the UI)

_Goal: Create static pages and reusable pieces for your articles._

- [ ] JSX & Rendering: Understanding how React describes UI (combining HTML with JavaScript logic).
- [ ] Components: Breaking your platform into pieces (e.g., Header, ArticleCard, Footer).
- [ ] Props: Passing data down to components (e.g., passing a title and author to an ArticleCard).
- [ ] Conditional Rendering: Showing different things based on conditions (e.g., showing a "Loading..." spinner while content loads).
- [ ] Lists & Keys: Mapping over an array of data to render a list of articles.

## 2. Interactivity & Data (Making it Dynamic)

_Goal: Allow users to interact with the platform and fetch real content._

- [ ] State (useState): Managing changing data, like a "Dark Mode" toggle or a search bar input.
- [ ] Effects (useEffect): Handling side effects, primarily fetching data from an API or JSON file when the component loads.
- [ ] Event Handling: Capturing user actions like clicks, form submissions, or hover states.
- [x] React Router: Creating a multi-page experience (e.g., /home, /article/react-basics, /about) without reloading the browser.

## 3. Advanced Concepts (Architecture & Scale)

_Goal: Manage global data and optimize for a smooth reading experience._

- [ ] Context API: Managing global state without "prop drilling" (e.g., keeping the current User or Theme accessible everywhere).
- [ ] Custom Hooks: Extracting reusable logic (e.g., a useFetchArticle hook to clean up your components).
- [ ] Refs (useRef): Accessing DOM elements directly (useful for focusing inputs or managing scroll position).
- [ ] Forms & Validation: Handling complex inputs like a "Contact Author" form or "Submit Article" page.

## 4. Expert & Professional Polish (Performance & SEO)

_Goal: Make the platform fast, discoverable, and maintainable._

- [ ] Performance Optimization: Using useMemo and useCallback to prevent unnecessary re-renders when filtering large lists of topics.

- [ ] Code Splitting (Lazy Loading): Loading parts of the app only when needed to speed up the initial load.

- [ ] Server-Side Rendering (SSR) / Next.js: Crucial for knowledge platforms. Standard React renders on the client (browser), which Google sometimes misses. Frameworks like Next.js render on the server, ensuring your knowledge is indexed by search engines (SEO).

- [ ] Testing: Writing unit tests (Jest/React Testing Library) to ensure your components don't break when you update code.

_Nothing will be created BY AI (other than the list above) but definitely AI will be consulted_
