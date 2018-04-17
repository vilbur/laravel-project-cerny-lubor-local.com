<template>
	<transition name="fade">
		<footer v-if="shown" :class="{'footer-homepage': this.$route.name==='home'}" >

			<div class="container">
				<div class="content">

					<div class="columns level has-text-centered">

						<div class="column is-4 border-OFF">
							<!--<div class="container has-text-centered has-text-left-tablet border-OFF">-->

								<span class="title is-4 has-text-centered border-OFF">
									{{ company.name }}
								</span><br>
								<span class="title is-4 has-text-centered border-OFF">
									3D Artist
								</span>

							<!--</div>-->
						</div>

						<div class="column is-4 border-OFF">
							<div class="container has-text-centered has-text-left-tablet border-OFF">
								<a :href="'mailto:'+company.email_1" target="_blank">
									<span class="icon is-large"><i class="fa fa-envelope fa-2x"></i></span>
										{{ company.email }}
								</a><br>
								<span class="icon is-large"><i class="fa fa-phone fa-2x"></i></span>+420 {{ company.tel }}
							</div>
						</div>

						<div class="column is-4 border-OFF ">
							<div class="container has-text-centered has-text-left-tablet border-OFF">
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

				</div>
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
