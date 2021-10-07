<template>
	<div id="vilbur-skills" class="content-container">

		<div v-sticky="{ stickyTop: 64, zIndex:9 }" class="tabs is-centered">
	
			<ul class="category-nav">
				<li><a :class="{'is-active': filtered==''}" @click.prevent="filtered=''">All</a></li>
				<li v-for="category in categories" class="category-filter">
					<a :class="{'is-active': filtered==category.slug}" @click.prevent="filtered=category.slug">{{ category.title }}</a>
				</li>
			</ul>
			 
		</div>
		

		<div class="content">
			
			<!--<transition-group tag="ul" name="show">-->
			<ul>
				
				
				<li v-for="skill in filteredSkills" class="hero">
					
					<skills-header>
							<span slot="logo">
								<img v-bind:src="skill.image">
							</span>
							<span class="item-title" >{{ skill.title }}</span>
					</skills-header>
					
					
					<div class="columns">
						<div class="details column">
							
							<div v-for="skill_detail in skill.skill_details">
								<skills-detail>
									<span slot="title">{{skill_detail.title ? skill_detail.title+':' : ''}}</span>
									{{skill_detail.summary }}
								</skills-detail>
							</div>
							
						</div>
					</div>
						
				</li>
				
				
			</ul>
		</div>

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
	import skillsHeader	from '../components/skills-header';
	import skillsDetail	from '../components/skills-detail';
	import VueSticky	from 'vue-sticky' // Es6 module

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
