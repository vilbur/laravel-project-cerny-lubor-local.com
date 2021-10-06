<template>
	<div class="columnsX is-centeredX is-multiline" >
		
		<!--DESCRIPTION TEMPORARY DIASBLED-->
		<!--<div  v-html="portfolio_description"></div>-->

		<vue-gallery :id      ="'blueimp-gallery-' + portfolio_slug"
					 :images	="galleryImages"
					 :index	="index"
					 @close	="index = null"
					 :options	="this.gallery_options">
		</vue-gallery>

		<div v-for="item in portfolioItems" class="portfolio-item columns reverse-columns is-12" >
			<!--<div class="portfolio-item columns">-->
				


				<div class="column portfolio-item-thumbs">
					<portfolio-file
						v-on:imagesPrepared	="addGalleryImages"
						v-on:imageClicked	="openGallery"
						:portfolio_item_id	="item.id">
					</portfolio-file>
				</div>

				<div class="portfolio-item-about column is-4" v-if="hasText(item)" >
					<h3 v-if	="item.title"	class	="title is-3">{{ item.title }}</h3>
					<h4 v-if	="item.summary"	class	="subtitle is-4">{{ item.summary }}</h4>
					<div v-if	="item.description"	v-html	="item.description"></div>
				</div>
				
			<!--</div>-->
		</div>

	</div>  
</template>

<script>
	import portfolioFile from './portfolio-file';
	import VueGallery from 'vue-gallery';
	import disableScroll from 'disable-scroll';
	
	export default {
	
		props: ['portfolio_slug', 'portfolio_description'],
		data(){
			return {
				portfolioItems:	[],
				galleryImages:	[],
				index:	null,
				gallery_options: { // reference: https://github.com/blueimp/Gallery#youtube-options
					closeOnSlideClick:	true,
					onopen:	this.disableScroll,
					onclose:	this.enableScroll,									
	
					youTubeVideoIdProperty: 	'video',	
					youTubeClickToPlay:	false,
					youTubePlayerVars:	{rel:0, modestbranding:1, mute:1}, // parameters passed to video link, reference: https://developers.google.com/youtube/player_parameters#Parameters
				}
			};
		},
		methods:{
			hasText(item){
				return !item.title && !item.summary && !item.description ? false : true;
			},
			addGalleryImages(images){
				this.galleryImages	= [].concat.apply( this.galleryImages, images);
			},
			openGallery(index){
				this.index = index;
			},
			/* Blueimps option disableScroll: true does not work, workaround use 'disable-scroll' npm package: https://www.npmjs.com/package/disable-scroll
			 * Options reference: https://github.com/blueimp/Gallery#default-options
			 */
			disableScroll(){
				disableScroll.on();
			}, 
			enableScroll(){
				disableScroll.off();
			}, 
			
			
		},
		created(){
			axios.get('/db/portfolio-items/' + this.portfolio_slug).then( response => {
				this.portfolioItems = response.data;
			});
		},
		mounted(){
			this.selected = this.$route.params.portfolio_slug == this.portfolio_slug;
		},
		components:{
			'portfolio-file':portfolioFile,
			'vue-gallery':	VueGallery,
			
		}
	};
</script>
