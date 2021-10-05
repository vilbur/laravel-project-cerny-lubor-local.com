<template>
	<div id="vilbur-portfolio">
		
		<!--TEMPORARY DISABLED-->
		<ul class="tabs is-centered is-fixed-top" v-show="false" >
			<router-link to="/portfolio/all" tag="li" @click.native="showAllToggle()" v-html="visible.length !== portfolios.length ? 'Expand all' : 'Collapse all'" ></router-link>
			<li><a @click.prevent="filtered=''">All</a></li>
			<li v-for="category in categories">
				<a @click.prevent="filtered=category.slug">{{ category.slug }}</a>
			</li>
		</ul>
		
		<!--PORTFIOLO ITEMS MAIN LIST-->
		<transition-group tag="ul" name="show">
			<li v-for="portfolio in filteredPortfolios" class="portfolio hero" :id="'hero-'+portfolio.slug"  :portfolio="portfolio" :key="portfolio.id" >
				<div class="hero-body">
					<div class="container">
						
						<!-- ITEM HEADER LINK-->
						<router-link
							:to="{ path: '/portfolio/' + portfolio.slug }"
							:class="{ visible: isVisible(portfolio.slug) }"
							@click.native="toggle(portfolio.slug)"
						>
							<!--IMAGE-->
							<div class="portfolio-background" :style="{ backgroundImage: 'url(' +  portfolio.image_url + ')' } ">
								<div class="backdrop-filter-mask">
									<h3 class="title is-2">{{ portfolio.title }}</h3>
								</div>
							</div> 
						</router-link>
						
						<!-- OPENED ITEM -->
						<div class="hero-foot">
							<div class="container">
								
								<transition name="show">
									<keep-alive>
										<portfolio-item
											:portfolio_slug="portfolio.slug"											
											:portfolio_description="portfolio.description"
											v-if="isVisible(portfolio.slug)"
											v-show="isVisible(portfolio.slug)"
										></portfolio-item> 
									</keep-alive>
								</transition>
	 
							</div>
						</div> 
	
					</div> 
				</div>
			</li>
		</transition-group>

	</div>

</template>


<style>

	.show-enter,
	.show-leave-to { max-height: 1px; opacity: 0  }

	.show-leave,
	.show-enter-to { max-height: 4096px; opacity: 1  }

	.show-enter-active,
	.show-leave-active { transition: .5s ease-out}

</style>


<script>
	import portfolioItem from '../components/portfolio-item';
	import VueScrollTo from 'vue-scrollto';

	export default {

		data(){
			return {
				categories:	[],
				portfolios:	[],
				visible:	[],
				filtered:	'',
				test:	'',							
			}; 
		},
		created()
		{
			axios.get('/db/category-portfolio').then( response => this.categories = response.data );
			axios.get('/db/portfolio').then( response => {
				this.portfolios = response.data;
				this.showInit( this.$route.params.portfolio_slug, response.data );
			});			
		},
		methods:
		{
			showInit(portfolio_slug, portfolios)
			{
				if( portfolio_slug === 'all')
					 this.showAll(portfolios);
				else if( portfolio_slug )
					this.show(portfolio_slug);
			},			
			show(portfolio_slug)
			{
				if( ! this.isVisible(portfolio_slug) )
					this.visible.push(portfolio_slug);
			},
			hide(portfolio_slug)
			{
				this.visible.splice(this.visible.indexOf(portfolio_slug), 1);
			},
			showAllToggle()
			{
				if( this.visible.length !== this.portfolios.length )
					this.showAll(this.portfolios);
				else
					this.visible = [];
			},
			showAll(portfolios)
			{
				for(var p=0; p<portfolios.length;p++)
					this.show(portfolios[p].slug);
			},
			toggle(portfolio_slug)
			{
				if( ! this.isVisible(portfolio_slug))
				{
					this.show(portfolio_slug);
					this.scrollToItem(portfolio_slug);
				}else
					this.hide(portfolio_slug);			
			},
			isVisible(portfolio_slug)
			{
				return this.visible.indexOf(portfolio_slug) != -1;					
			},
			scrollToItem(portfolio_slug){
				setTimeout( function(){
					VueScrollTo.scrollTo( "#hero-"+portfolio_slug, 500, { easing: 'ease-in', offset: -80 });
				}, 500);
			}
		},
		computed:
		{
			filteredPortfolios() {
				var self = this;
				return self.portfolios.filter(function (portfolio) {
					return portfolio.category == self.filtered || ! self.filtered;
				});
			}
		},
		watch:
		{
		  filtered(){}
		},
		components:
		{
			'portfolio-item':	portfolioItem,
		}
	};
</script>
