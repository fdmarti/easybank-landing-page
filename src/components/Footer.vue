<template>
	<div class="bg-[#2d314d]">
		<div
			class="flex justify-between mx-auto py-16 px-20 max-w-screen-2xl flex-col items-center gap-10 lg:flex-row lg:items-stretch lg:gap-0"
		>
			<LogoExternalLinksBlock />
			<Links />
			<section class="flex flex-col justify-between items-center gap-5 lg:items-end lg:gap-0">
				<RequestInviteBtn />
				<span class="text-gray-400">© Easybank. All Rights Reserved</span>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { RequestInviteBtn } from './common/Button';
	import { LogoExternalLinksBlock, Links } from './common/Footer';
</script>
