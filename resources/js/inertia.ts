import type { Page, PageProps } from '@inertiajs/core'
import { page as originalPage } from '@inertiajs/svelte'
import type { Readable } from 'svelte/motion'

export interface User {
  id: number
  name: string
  email: string
  email_verified_at: string
}

export interface SharedProps extends PageProps {
  auth: { user: User }
}

const page: Readable<Page<SharedProps>> = originalPage as unknown as Readable<Page<SharedProps>>

export { page }
