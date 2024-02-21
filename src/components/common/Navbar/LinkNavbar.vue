<template>
	<li>
		<a 
			href="#" 
			class="text-gray-400 font-semibold hover:cursor-pointer hover:text-gray-900"
		>{{ text }}</a>
	</li>
</template>
<script setup lang="ts">
	interface Props {
		text: string;
	}

	const { text } = withDefaults(defineProps<Props>(), {
		text: 'Default text',
	});
</script>
