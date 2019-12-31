<script>
	import { getContext } from 'svelte';
	
	export let path = '';
	
	const addRoute = getContext('addRoute');
	
	addRoute({ path });
</script>