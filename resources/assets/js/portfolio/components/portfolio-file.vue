<template>
	<div class="portfolio-file columns is-mobile is-centered is-multiline" >

		<div v-for="(file, index) in files" class="column is-6-mobile is-4-desktop">
			<div class="image"
				:key="index_start + index"
				@click="$emit('imageClicked', index_start + index)"
				:style="{ backgroundImage: 'url(' + file.href + ')' }"
			></div>
		</div>

	</div>
</template>

<script>

	export default {

		props: ['portfolio_item_id'],
		data(){
			return {
				files:	[],
				index_start:	0,
			};
		},
		created(){
			axios.get('/db/portfolio-files/' + this.portfolio_item_id).then( response => {
				//this.portfolioFiles = response.data;
				this.files =  response.data.map(function(file){
					return {
						title:	file.title,
						description:	file.description,
						type:	'text/html',
						href:	file.image_url,
						video:	file.url,
					};
				});

				this.index_start	= this.$parent.galleryImages.length
				this.$emit('imagesPrepared', this.files)

			});
		},
		mounted(){
			this.selected = this.$route.params.portfolio_item_id == this.portfolio_item_id;
		},
		methods:{

		},

	};
</script>