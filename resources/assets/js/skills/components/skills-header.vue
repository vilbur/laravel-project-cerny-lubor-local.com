<template>
	<div class="header-columns columns is-mobile is-multiline">

		<div class="column logo has-text-centered
					is-3-mobile  is-offset-1-mobile
					is-1-tablet  is-offset-2-tablet
					
					"
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