<template>
	<div class="flex flex-col gap-3 bg-slate-50">
		<img
			:src="`/images/${image}`"
			:alt="`Image of ${title} with ${author} as an author`"
			class="lg:h-56"
		/>
		<section class="flex flex-col gap-3 p-5">
			<span class="text-sm text-gray-400">By {{ author }}</span>
			<h5 class="text-xl text-gray-700 tracking-wide font-semibold hover:text-green-500 cursor-pointer">
				{{ title }}
			</h5>
			<p class="text-gray-400 text-md">{{ text }}</p>
		</section>
	</div>
</template>

<script setup lang="ts">
	import { Article } from '../../data/LatestArticles';

	const { article } = defineProps<{ article: Article }>();
	const { author, title, text, image } = article;
</script>
