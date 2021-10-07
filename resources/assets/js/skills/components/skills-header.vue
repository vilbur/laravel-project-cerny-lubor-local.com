<template>
	<div class="header-columns columns is-mobile is-multiline">

		<div class="column logo has-text-centered
					is-3-mobile
					is-3-tablet
					is-2-desktop"
		>
			<slot name="logo" ></slot>
		</div>

		<div class="column item-title-wrapper">
			<slot></slot>
		</div>

	</div>
</template>

<script>
	export default {};
</script>