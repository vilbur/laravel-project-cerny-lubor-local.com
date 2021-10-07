<template>
	<transition name="fade">
		<footer v-if="shown" :class="{'footer-homepage': this.$route.name==='home'}" >

			<div class="container">
				<!--<div class="content">-->

					<div class="columns level has-text-centered">

						<div class="column is-4">
							<!--<div class="container has-text-centered has-text-left-tablet">-->

								<span class="title is-4 has-text-centered">
									{{ company.name }}
								</span><br>
								<span class="title is-4 has-text-centered">
									3D Artist
								</span>

							<!--</div>-->
						</div>

						<div class="column is-4">
							<div class="container has-text-centered has-text-left-tablet">
								<a :href="'mailto:'+company.email_1" target="_blank">
									<span class="icon is-large"><i class="fa fa-envelope fa-2x"></i></span>
										{{ company.email }}
								</a><br>
								<span class="icon is-large"><i class="fa fa-phone fa-2x"></i></span><a :href="'tel:+420'+company.tel">+420 {{ company.tel }}</a>
							</div>
						</div>

						<div class="column is-4">
							<div class="container has-text-centered has-text-left-tablet">
								<a href="https://github.com/vilbur" target="_blank">
									<span class="icon is-large"><i class="fa fa-github fa-2x"></i></span>
										GitHub
								</a><br>
								<a href="https://www.youtube.com/channel/UCmA5Pwgkt56C9gc3DWs-3og" target="_blank">
									<span class="icon is-large"><i class="fa fa-youtube fa-2x"></i></span>
										YouTube
								</a>
							</div>
						</div>

					</div>

				<!--</div>-->
			</div>

		</footer>
	</transition>

</template>
<style>

	.fade-enter-active
	/*,.fade-leave-active*/
	{
	  transition: opacity .5s ease-out 1s ;
	}
</style>


<script>
  export default {
    name: 'footer-component',
    data () {
		return{
			company: {},
			shown: true,
		}
    },
	created(){
		axios.get('/database/Company/1').then( response => this.company = response.data );
	},
    methods: {

    },
	watch: {
		'$route' (to, from) {
			console.log( 'from '+from.name+'\nto '+to.name );
			if(from.name!==to.name){
				this.shown = false;
				setTimeout(() => this.shown = true, 10);
			}
		}
	},

  }
</script>
