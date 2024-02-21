<template>
	<section class="min-w-96">
		<ul class="grid md:grid-cols-2 gap-3 text-center grid-cols-1 lg:text-left">
			<li
				v-for="link in links"
				class="font-semibold text-white hover:cursor-pointer hover:text-green-500"
			>
				{{ link.text }}
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
	import { links } from '../../data/ExternalLinks';
</script>
