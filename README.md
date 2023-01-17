This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Figma: <a href='https://www.figma.com/file/SwS8oFguiIYFsEFUfim60Q/landing-(Copy)?node-id=5%3A102&t=NIVc8SpTmqRAGDhX-0'>https://www.figma.com/file/SwS8oFguiIYFsEFUfim60Q/landing-(Copy)?node-id=5%3A102&t=NIVc8SpTmqRAGDhX-0</a>

Deploy: <a href='https://webtronics-test-task.vercel.app/'>link</a>

## Getting Started Server

First, run the server:

```

yarn server

```

The server for interacting with the API will be running on http:localhost:3004

To get contacts, use a GET request to http:localhost:3004/feedback

To create contact, use a POST request to http:localhost:3004/feedback
```
  {
    "name": string,
    "email": stirng,
    "phone": stirng
  }
```

## Getting Started Fontend

First, run the development server:

```

yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
