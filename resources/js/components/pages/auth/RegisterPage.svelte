<script lang="ts">
  const route = global.route
  import GuestLayout from '~/components/layouts/GuestLayout.svelte'

  import { Link, useForm } from '@inertiajs/svelte'
  import InputLabel from '~/components/atoms/InputLabel.svelte'
  import TextInput from '~/components/atoms/TextInput.svelte'
  import InputError from '~/components/atoms/InputError.svelte'
  import PrimaryButton from '~/components/atoms/PrimaryButton.svelte'

  const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
  })

  const submit = () => {
    $form.post(route('register'), {
      onFinish: () => $form.reset('password', 'password_confirmation'),
    })
  }
</script>

<svelte:head>
  <title>Register</title>
</svelte:head>

<GuestLayout>
  <form on:submit|preventDefault={submit}>
    <div>
      <InputLabel for="name" value="Name" />

      <TextInput id="name" type="text" bind:value={$form.name} required autofocus autocomplete="name" />

      <InputError classes="mt-2" message={$form.errors.name} />
    </div>

    <div class="mt-4">
      <InputLabel for="email" value="Email" />

      <TextInput id="email" type="email" bind:value={$form.email} required autocomplete="email" />

      <InputError classes="mt-2" message={$form.errors.email} />
    </div>

    <div class="mt-4">
      <InputLabel for="password" value="Password" />

      <TextInput id="password" type="password" bind:value={$form.password} required autocomplete="new-password" />

      <InputError classes="mt-2" message={$form.errors.password} />
    </div>

    <div class="mt-4">
      <InputLabel for="password_confirmation" value="Confirm Password" />

      <TextInput
        id="password_confirmation"
        type="password"
        bind:value={$form.password_confirmation}
        required
        autocomplete="new-password" />

      <InputError classes="mt-2" message={$form.errors.password_confirmation} />
    </div>

    <div class="flex items-center justify-end mt-4">
      <Link
        href={route('login')}
        class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
        Already registered?
      </Link>

      <PrimaryButton disabled={$form.processing} classes="ml-4">Register</PrimaryButton>
    </div>
  </form>
</GuestLayout>
