<script lang="ts">
  const route = global.route
  import GuestLayout from '~/components/layouts/GuestLayout.svelte'

  import { Link, useForm } from '@inertiajs/svelte'
  import InputLabel from '~/components/atoms/InputLabel.svelte'
  import TextInput from '~/components/atoms/TextInput.svelte'
  import InputError from '~/components/atoms/InputError.svelte'
  import PrimaryButton from '~/components/atoms/PrimaryButton.svelte'
  import Checkbox from '~/components/atoms/Checkbox.svelte'

  export let canResetPassword: boolean = false
  export let status: string | undefined

  const form = useForm({
    email: '',
    password: '',
    remember: false,
  })

  const submit = () => {
    $form.post(route('login'), {
      onFinish: () => $form.reset('password'),
    })
  }
</script>

<svelte:head>
  <title>Log in</title>
</svelte:head>

<GuestLayout>
  {#if status}
    <div class="mb-4 font-medium text-sm text-green-600">
      {status}
    </div>
  {/if}

  <form on:submit|preventDefault={submit}>
    <div>
      <InputLabel for="email" value="Email" />

      <TextInput id="email" type="email" bind:value={$form.email} required autofocus autocomplete="username" />

      <InputError message={$form.errors.email} />
    </div>

    <div class="mt-4">
      <InputLabel for="password" value="Password" />

      <TextInput id="password" type="password" bind:value={$form.password} required autocomplete="current-password" />

      <InputError message={$form.errors.password} />
    </div>

    <div class="block mt-4">
      <label class="flex items-center" for="remember">
        <Checkbox name="remember" bind:checked={$form.remember} />
        <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
      </label>
    </div>

    <div class="flex items-center justify-end mt-4">
      {#if canResetPassword}
        <Link
          href={route('password.request')}
          class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
          Forgot your password?
        </Link>
      {/if}

      <PrimaryButton disabled={$form.processing} classes="ml-4">Log in</PrimaryButton>
    </div>
  </form>
</GuestLayout>
