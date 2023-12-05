# 🎁PRESENTly

*Discover the perfect gift for anyone on your list with our intuitive website. Whether you're shopping for a trendsetter, a tech enthusiast, or someone who loves unique finds, our tailored recommendations make gift-giving a breeze. Simplify your search and delight your loved ones with thoughtful, personalized gifts.*

## ****Demo of Our Web Application****

https://github.com/WilliamNazarian/PRESENTly/assets/91857937/c4c63a17-d240-4224-9215-62e8700cf128


## ***Technical Information About the Website***

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
In order for the application to work on your device, you need to add your OpenAI API key in `.env.local`. Additionally, for the Google authentication to work, we need to add your email to the testers on our Google application. Please message us for the request. After that, you need to add the Google client ID and Google client secret in the `.env.local`, which needs to be at the same level as the app folder.

GOOGLE_CLIENT_ID= ....  
GOOGLE_CLIENT_SECRET=....  
NEXTAUTH_SECRET=(could be anything)  
NEXTAUTH_URL = http://localhost:3000  
OPENAI_API_KEY= .....

This is how `.env.local` should be formatted.

First clone the project from github

The run:
```bash
npm i
```
to install all the packages

then run 
```bash
npm run dev
```
to start the development server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


```
presently
├─ .eslintrc.json
├─ .gitignore
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ api
│  │  ├─ auth
│  │  │  └─ [...nextauth]
│  │  │     └─ route.ts
│  │  └─ sendMessage
│  │     └─ route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ home
│  │  ├─ layout.tsx
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ profile
│  │  └─ page.tsx
│  └─ reviews
│     └─ page.tsx
├─ assets
│  ├─ gifts.jpg
│  └─ presentlyLogo.png
├─ components
│  ├─ general-components
│  │  └─ navbar.tsx
│  ├─ home-components
│  │  ├─ GiftForm.tsx
│  │  └─ GiftSuggestions.tsx
│  ├─ login-components
│  │  ├─ GoogleSigninSignOut.tsx
│  │  └─ Providers.tsx
│  ├─ profile-components
│  └─ review-components
├─ lib
│  ├─ auth.ts
│  └─ openai.ts
├─ middleware.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ next.svg
│  └─ vercel.svg
├─ README.md
├─ tailwind.config.ts
└─ tsconfig.json

```

## Contributors 

William Nazarian
Etienne Paquet
Hicham Kitaz
Valeria Dolgaliova
Jack Spiratos


