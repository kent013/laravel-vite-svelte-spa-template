#!/bin/bash
git submodule init lib/jakobbouchard/inertia
git submodule update lib/jakobbouchard/inertia
git submodule init lib/jakobbouchard/inertia

cd lib/jakobbouchard/inertia/
npm install
cd packages/svelte
pnpm install
pnpm run build

rm ./pnpm-lock.yaml