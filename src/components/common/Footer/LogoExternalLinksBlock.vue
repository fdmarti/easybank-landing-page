<template>
	<section class="flex flex-col justify-between items-center gap-5 lg:gap-0">
		<img src="/images/logo-white.svg" class="text-white" alt="easy bank logo" />
		<section class="flex gap-8">
			<ExternalLink v-for="link in externalLinks" :link="link" />
		</section>
	</section>
</template>
<script setup lang="ts">
	import { externalLinks } from '../../data/ExternalLinks';
	import ExternalLink from './ExternalLink.vue';
</script>
