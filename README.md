# Next.js Project

This is a Next.js project. The entire application is designed to be server-side rendered (SSR). This means that all necessary data for rendering the page is fetched from the server before the page is sent to the client. This approach ensures that all the content is available to the client immediately upon page load, improving performance and SEO.

## Server Side Rendering

In our `[id].tsx` page, we also use the dynamic route parameter to pass data through the URL. This data is accessible within `getServerSideProps` via the `context` parameter. We can use this to get specific data related to the user even upon refresh. This data is then passed as props to our page component, allowing the page to be fully rendered on the server before it is sent to the client. This ensures that the page can load independently and display its content immediately upon refresh, adhering to SSR principles.

## Setup

To get started, install the dependencies:

```bash
npm install
```

Then, you can start the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

## Testing

To run the tests, use the following command:

```bash
npm test
```

This will also automatically generate a coverage report in the terminal
