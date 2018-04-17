<template>
	<div class="columns is-mobile is-multiline bio-details">

		<strong class="column is-4-mobile is-3-tablet is-2-desktop has-text-right-mobile has-text-left">
			<slot name="title"></slot>
		</strong>

		<div class="column is-8-mobile is-9-tablet is-10-desktop has-text-left">
			<slot></slot>
		</div>

	</div>
</template>

<script>

	export default {};
</script>
