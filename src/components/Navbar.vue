<template>
	<nav
		class="flex relative justify-between md:justify-around items-center p-8 md:p-5 bg-white z-50"
	>
		<Logo />
		<LinkListNavbar :class="menu ? 'block' : 'hidden'" class="md:block" />
		<RequestInviteBtn class="hidden md:block" />
		<div class="block md:hidden">
			<img
				src="/images/icon-hamburger.svg"
				alt="hamburger button for menu"
				class="w-5 img-button"
				@click="toggleMenu"
			/>
		</div>
	</nav>
</template>
<script setup lang="ts">
	import { ref } from 'vue';
	import { LinkListNavbar, Logo } from './common/Navbar';
	import { RequestInviteBtn } from './common/Button';

	const menu = ref<Boolean>(false);

	const toggleMenu = () => {
		menu.value = !menu.value;
		updateIcon();
	};

	const updateIcon = () => {
		const iconMenu = document.querySelector('.img-button') as HTMLImageElement;
		const mainContent = document.querySelector('.main-content') as HTMLElement;

		if (menu.value) {
			iconMenu.src = '/images/icon-close.svg';
			mainContent.classList.add('opacity-20');
			document.documentElement.style.overflow = 'hidden';
		} else {
			iconMenu.src = '/images/icon-hamburger.svg';
			mainContent.classList.remove('opacity-20');
			document.documentElement.style.overflow = 'auto';
		}
	};
</script>
