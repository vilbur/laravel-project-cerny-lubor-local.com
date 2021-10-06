<template>
	<div>
		<nav class="navbar is-centered" :class="[navIsActive ? 'is-active': '', this.$route.name!=='home' ? 'is-fixed-top' : 'navbar-hero-carousel']">
			
			<div v-if="this.$route.name!=='home'" class="navbar-brand is-hidden-tablet">
				<div  class="navbar-item"  v-if="navIsActive !=true " :href="'/#/'+this.$route.name">
					{{ this.$route.name }}
				</div>

			
				<div  class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<div class="navbar-menu has-text-centered" :class="{'is-active': navIsActive}">
				<div class="navbar-start">
					<router-link to="/portfolio"	class="navbar-item">Portfolio</router-link>
					<router-link to="/skills"	class="navbar-item">Skills</router-link>
					<router-link to="/biography"	class="navbar-item">Biography</router-link>															
					<router-link to="/"	class="navbar-item" v-show="this.$route.name!=='home'" exact >Contact</router-link>
				</div>
			</div>
		</nav>

		<div id="push-content-after-fixed-nav" v-if="this.$route.name!=='home'"  v-bind:style="{'margin-top':	navHeight}" ></div>
	</div>
</template>

<script>
	export default {
		name: 'navbar',
		data () {
			return {
				navIsActive: false,
				navHeight:	'52px',
				test_text: this.$route.name,
			};
		},
		mounted(){
			this.setNavHeight();
			this.ifHomePage();
		},
		methods: {
			toggleMenu()
			{
				this.navIsActive = !this.navIsActive;
				this.setNavHeight();
			},
			setNavHeight()
			{
				let _self = this;
				setTimeout( function(){
					_self.navHeight = document.getElementsByClassName('navbar')[0].clientHeight + 'px';
				}, 100);
			},
			ifHomePage()
			{
				this.navIsActive = this.$route.name === 'home';
			},
		},
		watch: {
			'$route' (to, from) {
				this.setNavHeight();
				this.ifHomePage();
			}
		},

	};
</script>
