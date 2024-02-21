<template>
	<button class="bg-gradient-to-l from-cyan-400 to-green-500 px-6 py-3 rounded-full text-white font-extrabold tracking-wide hover:brightness-110">
		{{ text }}
	</button>
</template>
<script setup lang="ts">
	interface Props {
		text: string;
	}

	const { text } = withDefaults(defineProps<Props>(), {
		text: 'Request Invite',
	});
</script>
