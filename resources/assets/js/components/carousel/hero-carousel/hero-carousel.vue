<template>
	<section class="hero is-fullheight has-carousel">
		<div class="hero-carousel carousel-animated carousel-animate-fade" data-autoplay="true" data-delay="3000">
			<div class='carousel-container'>

				<div class='carousel-item has-background' :class="{'is-active':index==0}" v-for="(image, index) in images">
				  <img class="is-background" :src="image" alt="" />
				</div>

			</div>
			<div class="carousel-navigation is-overlay">
				<div class="carousel-nav-left">
					<i class="fa fa-chevron-left" aria-hidden="true"></i>
				</div>
				<div class="carousel-nav-right">
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</div>
			</div>
		</div>
		<div class="hero-body">
<!--			<nav class="tabs is-boxedX is-fullwidth">
			  <div class="container has-text-centered">
				<ul>
				  <li v-for="(link, key) in links" ><a :href="link" class="has-text-white">{{key}}</a></li>
				</ul>
			  </div>
			</nav>-->
				  <!--<div class="container has-text-centered">-->
					<!--<navbar></navbar>-->
				<!--</div>-->
		</div>

<!--		<div class="hero-body has-text-centered">
			<div class="container">
				<div class="columns is-mobile is-centered">
					<a href="/#/portfolio" class="column">PORFOLIO</a>
					<a href="/#/bio" class="column">BIO</a>
					<a href="/#/skills" class="column">SKILLS</a>
					<a href="/#/contact" class="column">CONTACT</a>
				</div>
			</div> 
		</div>-->
 
	</section>


</template>

<style>

 
</style>
 
<script>
  export default {
		name: 'hero-carousel',
		data(){
			return {
				images:[
					'/storage/portfolio-files/rendering/alfa-romeo/alfa-romeo-c8-spider-1.jpg',
					'/storage/portfolio-files/games/take-on/space-needle-01.jpg',
					'/storage/portfolio-files/rendering/zemeklon/zemeklon.jpg',
				],
				links:{
					PORTFOLIO: '/#/portfolio',
					BIO:       '/#/bio',
					SKILLS:    '/#/skills',
					CONTACT:   '/#/contact',
				},

				//active: this.getActive()
				active: 2
			};
		},
		methods:{
			getActive(index){
				return index===0 || index==3;
			}
		},

  };
</script>
