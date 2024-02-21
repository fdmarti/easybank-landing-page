<template>
	<div class="bg-gray-100 py-24 relative">
		<div class="flex flex-col mx-auto px-20 max-w-screen-2xl">
			<h2 class="text-4xl text-gray-700 mb-7 text-center md:text-left">
				Why choose Easybank?
			</h2>
			<p class="text-lg text-gray-400 mb-7 max-w-2xl text-center md:text-left">
				We leverage Open Banking to turn your bank account into your financial
				hub. Control your finances like never before.
			</p>

			<section class="grid gap-5 mt-10 lg:grid-cols-4 md:grid-cols-2">
				<Options v-for="option in options" :option="option" />
			</section>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { Options } from './common/WhyChose';
	import { options } from './data/WhyChoseOptions';
</script>
