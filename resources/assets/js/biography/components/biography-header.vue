<template>
	<div class="header-columns columns is-mobile is-multiline">


		<!-- LOGO slot -->
		<div class="column logo has-text-centered
					is-3-mobile
					is-3-tablet
					is-2-desktop">
			<slot name="logo" ></slot>
		</div>
		
		<div class="column item-title-wrapper
					is-9-mobile
					is-9-tablet
					is-9-desktop
					is-8-widescreen">
			<slot></slot>
		</div>


	</div>
</template>

<script>
	export default {};
</script>