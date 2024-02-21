<template>
	<div>
		<ul class="flex gap-10">
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
