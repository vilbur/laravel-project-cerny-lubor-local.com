<template>
	
	<transition name="router-fade" mode="out-in" appear>
		<router-view></router-view>
	</transition>

</template>


<style>

	.router-fade-leave-active, .router-fade-enter-active {
	  transition: opacity .5s ease-out;
	}

	.router-fade-enter, .router-fade-leave-active {
		opacity: 0
	}

</style>

<script>
  export default {
    name: 'router-component',
  }
</script>
