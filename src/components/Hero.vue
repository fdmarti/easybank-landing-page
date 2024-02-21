<template>
	<div
		class="flex justify-center items-center mx-auto py-10 md:py-0 px-10 max-w-screen-2xl flex-col-reverse md:flex-row md:justify-around"
	>
		<MainTitle />
		<ImagesHero />
	</div>
</template>
<script setup lang="ts">
	import { MainTitle, ImagesHero } from './common/Hero';
</script>
