<template>
	<div class="bg-slate-100 py-24 relative">
		<section class="flex flex-col mx-auto px-20 max-w-screen-2xl">
			<h2 class="text-4xl text-gray-700 mb-7">Latest Articles</h2>

			<div class="flex flex-col justify-center gap-10 lg:flex-row">
				<Articles v-for="article in articlesList" :article="article" />
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
	import { Articles } from './common/LatestArticles';
	import { articlesList } from './data/LatestArticles';
</script>
