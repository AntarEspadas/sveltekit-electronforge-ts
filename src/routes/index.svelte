<script lang="ts">
	const messagePromise = window.ipcRenderer?.invoke('getMessage');
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#await messagePromise then message}
	<p>{message}</p>
{/await}
