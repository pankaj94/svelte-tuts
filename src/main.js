import App from './App.svelte';
console.log('app called');
const app = new App({
	target: document.body,
	
	props: {
		name: 'user'
	}
});

export default app;