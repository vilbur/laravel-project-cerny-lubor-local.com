<template>
	<div id="vilbur-biography" class="content">
		<div class="container">
			
			
			<div v-for="(model, index) in models" class="hero">
				
				<biography-header>
						<span slot="logo">
							<!--logo link-->
							<a class="bio-logo-link " :href="model.link " target="_blank" v-if="model.link" ><img :src="model.image"></a>
							<!--only logo-->
							<span v-else><img :src="model.image"></span>
						</span>
	
						<!-- Use <span> if link is undefined -->
						<a    class="item-title" v-if="model.link" :href="model.link" target="_blank">{{ model.client }}</a>
						<span class="item-title" v-else>{{ model.client }}</span>
				</biography-header>
	
	
				<div class="details columns is-mobile is-multiline">
					
					<div class="column bio-detail has-text-centered
								is-3-mobile
								is-3-tablet
								is-2-desktop">
						<span class="">{{ model.since_until }}</span>
					</div>
					<div class="column detail">
						<!--<biography-detail>-->
							
							{{ model.job_title }}
						<!--</biography-detail>-->
						<!--<biography-detail v-if="model.project!==''">-->
							<!--<span slot="title">Project:</span>-->
							<!--<span v-html="model.project"></span>-->
						<!--</biography-detail>-->
					</div>
					
				</div>
				
			</div>
			
			
		</div>
	</div>
</template>



<script>

	import biographyHeader from '../components/biography-header.vue';
	import biographyDetail from '../components/biography-detail.vue';

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
