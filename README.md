# Laravel 10 + Vite + Svelte + Inertia + Tailwind CSS

This starter template includes:

-   Laravel 10
-   Vite
-   Svelte
-   Inertia
-   Tailwind CSS (w/ `@tailwindcss/forms`)
-   Axios
-   TypeScript
-   Docker
    -   Sail + SSL
-   PHPStan
-   PHPCSFixer
-   pnpm

## Information

-   The app is located in [`resources/js/`](/resources/js/).
-   You can use [`resources/css/`](/resources/css/) for styling.
-   inertia-svelte typescript support is not yet completed
    -   included in this repository as submodule 

## Installation

Make a copy of the `.env.example` file named `.env`:

```bash
cp .env.example .env
```

Open workspace in vscode, select "reopen in dev container"

in remote container, 
Install the composer dependencies:

```bash
composer install
```

Generate an app key:

```bash
php artisan key:generate
```

Install all `package.json` dependencies:

```bash
pnpm install
```

Run vite to serve your assets/bundle:

```bash
pnpm dev
```

then access to

https://localhost

Note: this template is using SSL, please permit self-signed ssl certification from your browser.

https://localhost:5173

## Deployment

Build the app:

```bash
pnpm build
```

Now all you have to do is serve the Laravel app in a production environment.
