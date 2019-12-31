<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	
	const routes = writable([]);
	
	$: console.log('Routes reactive statement', $routes);
	
	setContext('addRoute', (route) => {
		console.log('Route added');
		routes.update(rs => {
			rs.push(route);
			return rs;
		});
	});
</script>

<slot />