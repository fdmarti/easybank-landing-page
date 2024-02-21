<template>
	<div class="flex flex-col items-center gap-5 md:items-start md:gap-10">
		<img :src="`/images/${image}`" :alt="`${title} image icon`" />
		<h4 class="text-2xl text-gray-700">{{ title }}</h4>
		<p class="text-lg text-gray-400">{{ text }}</p>
	</div>
</template>

<script setup lang="ts">
	import { Option } from '../../data/WhyChoseOptions';

	const { option } = defineProps<{ option: Option }>();
	const { text, title, image } = option;
</script>
