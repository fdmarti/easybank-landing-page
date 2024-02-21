<template>
	<header>
		<Navbar />
	</header>
	<main class="main-content">
		<Hero />
		<WhyChose />
		<LatestArticles />
		<Footer />
	</main>
</template>
<script setup lang="ts">
	import { Navbar, Hero, WhyChose, LatestArticles, Footer } from './components';
</script>
