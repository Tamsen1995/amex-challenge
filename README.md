# Lighthouse Scores

Consistently over 95 across all pages.

## Pagination

Since the Random User API does not support pagination, I implemented a simulated version of it. The application fetches 100 users at once and stores them in local state. Then, it uses this state to manage the pagination.

The application displays 10 users per page. When the "Next" or "Previous" buttons are clicked, the application updates the current page number and recalculates the users to display.

This approach allows us to simulate the behavior of pagination without the need for the API to support it directly. It's a useful technique when working with APIs that return a large amount of data but don't provide built-in pagination support.

## Server Side Rendering

In our `[id].tsx` page, we also use the dynamic route parameter to pass data through the URL. This data is accessible within `getServerSideProps` via the `context` parameter. We can use this to get specific data related to the user even upon refresh. This data is then passed as props to our page component, allowing the page to be fully rendered on the server before it is sent to the client. This ensures that the page can load independently and display its content immediately upon refresh, adhering to SSR principles.

## Setup

```bash
npm install
```

```bash
npm run build
```

```bash
npm start
```

Open http://localhost:3000 with your browser to see the result.

## Developer Setup

To get started, install the dependencies:

```bash
npm install
```

Then, you can start the development server:

```bash
npm run dev
```

Open http://localhost:3000 with your browser to see the result.

Note: Running the project this way with JS disabled in the browser will cause tailwind to not render correctly. For that please run the following commands instead:

```bash
npm run build
npm start
```

## Testing

To run the tests, use the following command:

```bash
npm test
```

This will also automatically generate a coverage report in the terminal
