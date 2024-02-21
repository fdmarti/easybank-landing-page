<template>
	<a :href="`${url}`" target="_blank" class="hover:opacity-80">
		<img :src="`/images/${image}`" :alt="`${name} icon`" class="w-7" />
	</a>
</template>

<script setup lang="ts">
	import { ExternalLink } from '../../data/ExternalLinks';

	const { link } = defineProps<{ link: ExternalLink }>();
	const { image, name, url } = link;
</script>
