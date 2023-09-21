<script lang="ts">
  import GuestLayout from '~/components/layouts/GuestLayout.svelte'

  import { useForm } from '@inertiajs/svelte'
  import InputLabel from '~/components/atoms/InputLabel.svelte'
  import TextInput from '~/components/atoms/TextInput.svelte'
  import InputError from '~/components/atoms/InputError.svelte'
  import PrimaryButton from '~/components/atoms/PrimaryButton.svelte'

  export let status: string | undefined

  const form = useForm({
    email: '',
  })

  const submit = () => {
    $form.post(route('password.email'))
  }
</script>

<svelte:head>
  <title>Forgot Password</title>
</svelte:head>

<GuestLayout>
  <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
    Forgot your password? No problem. Just let us know your email address and we will email you a password reset link
    that will allow you to choose a new one.
  </div>

  {#if status}
    <div class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
      {status}
    </div>
  {/if}

  <form on:submit|preventDefault={submit}>
    <div>
      <InputLabel for="email" value="Email" />

      <TextInput
        id="email"
        type="email"
        classes="mt-1 block w-full"
        bind:value={$form.email}
        required
        autofocus
        autocomplete="username" />

      <InputError classes="mt-2" message={$form.errors.email} />
    </div>

    <div class="flex items-center justify-end mt-4">
      <PrimaryButton disabled={$form.processing}>Email Password Reset Link</PrimaryButton>
    </div>
  </form>
</GuestLayout>
