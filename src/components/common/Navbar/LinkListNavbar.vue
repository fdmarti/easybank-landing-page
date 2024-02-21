<template>
	<div
		class="absolute md:relative top-32 md:top-0 text-center md:text-left flex justify-center w-full md:w-auto"
	>
		<ul
			class="flex gap-10 flex-col justify-center md:flex-row p-10 bg-white md:bg-transparent mx-auto w-3/4"
		>
			<LinkNavbar text="Home" />
			<LinkNavbar text="About" />
			<LinkNavbar text="Contact" />
			<LinkNavbar text="Blog" />
			<LinkNavbar text="Carrers" />
		</ul>
	</div>
</template>
<script setup lang="ts">
	import { LinkNavbar } from './';
</script>
