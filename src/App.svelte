<script>
	export let name;
	import { Router, Route } from "svelte-routing";
	import Header from './components/Header.svelte';
	import BlogList from './components/BlogList.svelte';
	import BlogContent from './components/BlogContent.svelte';

	export let url = "";

	console.log('url ==== ',url);
</script>
<Router url="{url}">
	<main>
		<Header />
		<h1>Hello {name}!</h1>
		<Route path="/" component={BlogList}></Route>
		<Route path="/blog" component={BlogList} />
		<Route path="post/:id" let:params >
			<BlogContent id="{params.id}" />
		</Route>
	</main>
</Router>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>