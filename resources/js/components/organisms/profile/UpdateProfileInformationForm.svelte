<script lang="ts">
  const route = global.route
  import { useForm, Link } from '@inertiajs/svelte'
  import { page } from '~/inertia'

  import TextInput from '~/components/atoms/TextInput.svelte'
  import InputError from '~/components/atoms/InputError.svelte'
  import InputLabel from '~/components/atoms/InputLabel.svelte'
  import PrimaryButton from '~/components/atoms/PrimaryButton.svelte'

  export let mustVerifyEmail = false
  export let status = ''
  export let classes = ''

  const user = $page.props.auth.user

  const form = useForm({
    name: user.name,
    email: user.email,
  })
</script>

<section class={classes}>
  <header>
    <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">Profile Information</h2>

    <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
      Update your account's profile information and email address.
    </p>
  </header>

  <form
    on:submit|preventDefault={() => {
      $form.patch(route('profile.update'))
      return true
    }}
    class="mt-6 space-y-6">
    <div>
      <InputLabel for="name" value="Name" />

      <TextInput
        id="name"
        type="text"
        classes="mt-1 block w-full"
        bind:value={$form.name}
        required
        autofocus
        autocomplete="name" />

      <InputError message={$form.errors.name} />
    </div>

    <div>
      <InputLabel for="email" value="Email" />

      <TextInput
        id="email"
        type="email"
        classes="mt-1 block w-full"
        bind:value={$form.email}
        required
        autocomplete="username" />

      <InputError message={$form.errors.email} />
    </div>

    {#if mustVerifyEmail && user.email_verified_at === null}
      <div>
        <p class="text-sm mt-2 text-gray-800 dark:text-gray-200">
          Your email address is unverified.
          <Link
            href={route('verification.send')}
            method="post"
            as="button"
            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Click here to re-send the verification email.
          </Link>
        </p>

        {#if status === 'verification-link-sent'}
          <div class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
            A new verification link has been sent to your email address.
          </div>
        {/if}
      </div>
    {/if}

    <div class="flex items-center gap-4">
      <PrimaryButton disabled={$form.processing}>Save</PrimaryButton>

      {#if $form.recentlySuccessful}
        <p class="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
      {/if}
    </div>
  </form>
</section>
