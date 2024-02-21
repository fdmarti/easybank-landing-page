<template>
	<nav class="flex justify-around items-center p-5 bg-white z-20">
		<Logo />
		<LinkListNavbar />
		<RequestInviteBtn />
	</nav>
</template>
<script setup lang="ts">
	import { LinkListNavbar, Logo } from './common/Navbar';
	import { RequestInviteBtn } from './common/Button';
</script>
