<template>
	<div id="vilbur-biography">
		<div v-for="(model, index) in models" class="hero"  >

			<biography-header>
					<span slot="logo">
						<!--logo link-->
						<a class="bio-logo-link" :href="model.link " target="_blank" v-if="model.link" ><img class="img-center-vcerticaly" :src="model.image"></a>
						<!--only logo-->
						<span v-else><img class="img-center-vcerticaly" :src="model.image"></span>
					</span>

					<a class="item-title" :href="model.link" target="_blank" v-if="model.link" >{{ model.client }}</a>
					<span class="item-title" v-else>{{ model.client }}</span>
			</biography-header>


			<!--<div class="hero-body bio-details">-->
				<!--<div class="container">-->
			<div class="columns">
				<div class="column has-text-centered
							is-11-mobile is-offset-1-mobile has-text-left-mobile
							is-3-tablet
							is-2-desktop is-offset-1-desktop
							is-offset-2-widescreen"
				>
					<span class="subtitle">{{ model.since_until }}</span>
				</div>

				<div class="column">
					<biography-detail>
						<span slot="title">Job title:</span>
						{{ model.job_title }}
					</biography-detail>
					<biography-detail v-if="model.project!==''">
						<span slot="title">Project:</span>
						<span v-html="model.project"></span>
					</biography-detail>
				</div>
			</div>

				<!--</div>-->
			<!--</div>-->

		</div>

	</div>
</template>



<script>

	import biographyHeader from '../components/biography-header.vue'
	import biographyDetail from '../components/biography-detail.vue'

	export default {

		data(){
			return {
				models:	[],
			};
		},
		created(){
			axios.get('/db/biography').then( response => this.models = response.data );
		},
		mounted(){

		},
		methods:{

		},
		components:{
			'biography-header': biographyHeader,
			'biography-detail': biographyDetail,
		}
	};
</script>
