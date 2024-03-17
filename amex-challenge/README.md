# Next.js Project

This is a Next.js project. The entire application is designed to be server-side rendered (SSR). This means that all necessary data for rendering the page is fetched from the server before the page is sent to the client. This approach ensures that all the content is available to the client immediately upon page load, improving performance and SEO.

## Server Side Rendering

In Next.js, any page in the `pages` directory becomes a route that gets automatically processed and rendered on the server. For example, `[id].tsx` is a dynamic route that will match any route like `/1`, `/abc`, etc.

In our `[id].tsx` page, we use Next.js's `getServerSideProps` function to fetch the necessary data for the page. This function runs on the server-side every time a request is made for the page. It passes the fetched data as props to our page component, allowing the page to be fully rendered on the server before it is sent to the client. This ensures that the page can load independently and display its content immediately upon refresh, adhering to SSR principles.

## Setup

To get started, install the dependencies:

```bash
npm install

Then, you can start the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.
```
