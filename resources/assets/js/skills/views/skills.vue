<template>
	<div id="vilbur-skills">

		<div v-sticky="{ stickyTop: 52, zIndex:9 }" class="tabs is-centered">
	
			<ul class="category-nav">
				<li><a :class="{'is-active': filtered==''}" @click.prevent="filtered=''">All</a></li>
				<li v-for="category in categories" class="category-filter">
					<a :class="{'is-active': filtered==category.slug}" @click.prevent="filtered=category.slug">{{ category.slug }}</a>
				</li>
			</ul>
			 
		</div>

		<transition-group tag="ul" name="show">
			<li v-for="skill in filteredSkills" class="hero" :key="skill.id" >
	
				<skills-header>
						<span slot="logo">
							<img class="img-center-vcerticaly" v-bind:src="skill.image">
						</span>
						<span class="item-title" >{{ skill.title }}</span>
				</skills-header>
	
				<div class="columns">
					<div class="column has-text-centered
								is-11-mobile is-offset-1-mobile has-text-left-mobile
								is-3-tablet
								is-2-desktop is-offset-1-desktop
								is-offset-2-widescreen"
					> 
					</div>
	
					<div class="skill-details column border-OFF-b">
						<div v-for="skill_detail in skill.skill_details">
							<skills-detail>
								<span slot="title">{{skill_detail.title?skill_detail.title+':' : ''}}</span>
								{{skill_detail.summary }}
							</skills-detail>
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
	.show-enter-to { max-height: 512px; opacity: 1  }

	.show-enter-active,
	.show-leave-active { transition: .5s ease-out}

</style>


<script>
	import skillsHeader from '../components/skills-header';
	import skillsDetail from '../components/skills-detail';
	import VueSticky from 'vue-sticky' // Es6 module

	export default {
		props: ['category'],
		data(){
			return {
				categories:	[],
				skills:	[],
				filtered:	'',			
			};
		},
		created(){
			axios.get('/db/category-skills').then( response => this.categories = response.data );
			axios.get('/db/skills').then( response => this.skills = response.data );
		},
		methods:{

		},
		computed: {
			filteredSkills() {
				var self = this;
				return self.skills.filter(function (skill) {
					return skill.category == self.filtered || ! self.filtered;
				});
			}
		},
		watch: {
			filtered(){}
		},
		
		components:{
			'skills-header':skillsHeader,
			'skills-detail':skillsDetail,

		},
		directives: {
		  'sticky': VueSticky,
		},

		
	};
</script>
