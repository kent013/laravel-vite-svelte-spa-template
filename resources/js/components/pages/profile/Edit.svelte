<script lang="ts">
  import AuthenticatedLayout from '~/components/layouts/AuthenticatedLayout.svelte'

  import DeleteUserForm from '~/components/organisms/profile/DeleteUserForm.svelte'
  import UpdatePasswordForm from '~/components/organisms/profile/UpdatePasswordForm.svelte'
  import UpdateProfileInformationForm from '~/components/organisms/profile/UpdateProfileInformationForm.svelte'

  export let mustVerifyEmail: boolean = false
  export let status: string = ''
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<AuthenticatedLayout>
  <svelte:fragment slot="header">
    <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Profile</h2>
  </svelte:fragment>

  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <UpdateProfileInformationForm {mustVerifyEmail} {status} classes="max-w-xl" />
      </div>

      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <UpdatePasswordForm classes="max-w-xl" />
      </div>

      <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        <DeleteUserForm classes="max-w-xl" />
      </div>
    </div>
  </div>
</AuthenticatedLayout>
