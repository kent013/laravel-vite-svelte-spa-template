<script lang="ts">
  const route = global.route
  import { Link, useForm } from '@inertiajs/svelte'
  import PrimaryButton from '~/components/atoms/PrimaryButton.svelte'

  export let status

  const form = useForm({})

  const submit = () => {
    $form.post(route('verification.send'))
  }

  const verificationLinkSent = status === 'verification-link-sent'
</script>

<svelte:head>
  <title>Email Verification</title>
</svelte:head>

<div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
  Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just
  emailed to you? If you didn't receive the email, we will gladly send you another.
</div>

{#if verificationLinkSent}
  <div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
    A new verification link has been sent to the email address you provided during registration.
  </div>
{/if}

<form on:submit|preventDefault={submit}>
  <div class="mt-4 flex items-center justify-between">
    <PrimaryButton classes={$form.processing ? 'opacity-25' : ''} disabled={$form.processing}>
      Resend Verification Email
    </PrimaryButton>

    <Link
      href={route('logout')}
      method="post"
      as="button"
      class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
      >Log Out</Link>
  </div>
</form>
