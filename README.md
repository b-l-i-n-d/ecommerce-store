<h1 align="center">E-Commerce Admin</h1>

<p align="center">
  <img src="https://img.shields.io/github/languages/code-size/b-l-i-n-d/ecommerce-store" alt="GitHub code size in bytes" />
  <img src="https://img.shields.io/github/last-commit/b-l-i-n-d/ecommerce-store" alt="GitHub last commit" />
  <img src="https://img.shields.io/github/languages/count/b-l-i-n-d/ecommerce-store" />
  <img src="https://img.shields.io/github/languages/top/b-l-i-n-d/ecommerce-store" />
  <img src="https://img.shields.io/github/commit-activity/m/b-l-i-n-d/ecommerce-store" alt="GitHub commit activity month" />
  <img src="https://img.shields.io/github/license/b-l-i-n-d/ecommerce-store" alt="GitHub license" />
</p>

<p align="center">
  <a href="#-about">📝 About</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-technologies">💻 Technologies</a> •
  <a href="#-project-structure">📁 Project structure</a> •
  <a href="#%EF%B8%8F-environment-variables">⚙️ Environment variables</a> •
  <a href="#-how-to-run">🚀 How to run</a> •
  <a href="#-license">📄 License</a>
</p>

## 📝 About

E-Commerce store is the fornend part of this project. You can find it [here](https://github.com/b-l-i-n-d/ecommerce-admin).
I have created this project to learn more about next js app router. I have use nextjs as fullstack framework, tailwind css as css framework, zustand as state management, shadcn/ui as ui components, axios for mutations. I know that there are many things that I can improve in this project, I will try to improve it in the future. Feel free to contribute to this project. I will be very happy if you give this project a star ⭐.

## ✨ Features

-   [x] Persisted cart
-   [x] Product overview modal
-   [x] Search products with filters
-   [x] Add/remove products from cart
-   [x] Checkout with Stripe
-   [x] Responsive design
-   [x] Increment/decrement product quantity from cart

## 💻 Technologies

-   [Next.js](https://nextjs.org/) v13.4 with [TypeScript](https://www.typescriptlang.org/) and app router
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Zustand](https://zustand-demo.pmnd.rs/) for state management
-   [shadcn/ui](https://ui.shadcn.com/) for UI components
-   [Axios](https://axios-http.com/) for mutations
-   [Swiper](https://swiperjs.com/) for billboard slider

## 📁 Project structure

```bash
├── .eslintrc.json
├── .gitignore
├── README.md
├── actions
│   ├── get-billboard.ts
│   ├── get-billboards.ts
│   ├── get-categories.ts
│   ├── get-category.ts
│   ├── get-colors.ts
│   ├── get-product.ts
│   ├── get-products.ts
│   └── get-sizes.ts
├── app
│   ├── (routes)
│   │   ├── cart
│   │   │   ├── components
│   │   │   │   ├── cart-item.tsx
│   │   │   │   └── summary.tsx
│   │   │   ├── error.tsx
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   ├── category
│   │   │   ├── [categoryId]
│   │   │   │   ├── components
│   │   │   │   │   ├── filter.tsx
│   │   │   │   │   └── mobile-filter.tsx
│   │   │   │   ├── error.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── error.tsx
│   │   │   └── loading.tsx
│   │   ├── error.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── products
│   │       ├── [productId]
│   │       │   ├── error.tsx
│   │       │   ├── loading.tsx
│   │       │   └── page.tsx
│   │       ├── error.tsx
│   │       └── loading.tsx
│   ├── error.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── loading.tsx
├── components.json
├── components
│   ├── billboard-swiper.tsx
│   ├── footer.tsx
│   ├── gallery
│   │   ├── gallery-tab.tsx
│   │   └── index.tsx
│   ├── info.tsx
│   ├── main-nav.tsx
│   ├── navbar-actions.tsx
│   ├── navbar.tsx
│   ├── preview-modal.tsx
│   ├── product-list.tsx
│   └── ui
│       ├── billboard.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── container.tsx
│       ├── currency.tsx
│       ├── dialog.tsx
│       ├── heading.tsx
│       ├── label.tsx
│       ├── loader.tsx
│       ├── no-results.tsx
│       ├── product-card.tsx
│       ├── radio-group.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       └── tabs.tsx
├── hooks
│   ├── use-cart.ts
│   └── use-preview-modal.ts
├── lib
│   └── utils.ts
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── providers
│   ├── modal-providers.tsx
│   └── nprogress-provider.tsx
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
└── types.ts
```

### 📝 Project Summary

-   **actions**: Contains Redux action creators and related logic.
-   **app**: Main application directory.
-   **app/routes**: Contains route configurations for different pages.
-   **app/routes/cart**: Handles cart-related functionality.
-   **app/routes/category**: Manages category-related functionality.
-   **app/routes/category/categoryId**: Handles category-specific functionality.
-   **app/routes/products**: Handles products-related functionality.
-   **app/routes/products/productId**: Manages product-specific functionality.
-   **components**: Contains reusable UI components.
-   **lib**: Houses utility functions and helper classes.

## ⚙️ Environment variables

Create a `.env.local` file in the root directory and add the following variables:

```bash
NEXT_PUBLIC_API_URL=<COPY_STORE_API_URL_FROM_ADMIN_PANEL>
```

## 🚀 How to run

1. Clone this repository

```bash
git clone https://github.com/b-l-i-n-d/ecommerce-store.git
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

### Home page

![Home page](https://res.cloudinary.com/b-l-i-n-d/image/upload/v1698670773/ecommerce-store/homepage_kllu2i.png)

### Category page

![Category page](https://res.cloudinary.com/b-l-i-n-d/image/upload/v1698670766/ecommerce-store/category_page_aifswf.png)

### Product page

![Product page](https://res.cloudinary.com/b-l-i-n-d/image/upload/v1698670766/ecommerce-store/product_page_bv6hjo.png)

### Product overview modal

![Product overview modal](https://res.cloudinary.com/b-l-i-n-d/image/upload/v1698670766/ecommerce-store/product_preview_gzduco.png)

### Cart page

![Cart page](https://res.cloudinary.com/b-l-i-n-d/image/upload/v1698670760/ecommerce-store/cart_d7wtq0.png)

### Payment page

![Payment page](https://res.cloudinary.com/b-l-i-n-d/image/upload/v1698670760/ecommerce-store/payment_ojokbf.png)

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)
