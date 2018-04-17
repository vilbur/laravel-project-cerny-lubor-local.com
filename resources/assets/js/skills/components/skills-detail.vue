<template>
	<div class="columns is-mobile is-multiline bio-details">

		<strong class="column is-4-mobile is-4-tablet is-3-desktop has-text-right-mobile has-text-left border-OFF-g">
			<slot name="title"></slot>
		</strong>

		<div class="column is-8-mobile is-8-tablet is-9-desktop has-text-left border-OFF">
			<slot></slot>
		</div>

	</div>
</template>

<script>

	export default {};
</script>
