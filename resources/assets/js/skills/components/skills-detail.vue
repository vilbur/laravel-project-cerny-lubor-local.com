<template>
	<div class="detail columns is-mobile is-multiline">


		<strong class="column has-text-right
			is-4-mobile
			is-3-tablet
			is-2-desktop 		
			is-offset-1-desktop">
			<slot name="title"></slot>
		</strong>

		<div class="column has-text-left">
			<slot></slot>
		</div>


	</div>
</template>

<script>

	export default {};
</script>
