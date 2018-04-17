import VueRouter from 'vue-router';


import Home	from './views/home'; // Dynamic import breaks carousel
//const About	= () => import('./views/about.vue');
//const Contact	= () => import('./views/contact.vue');

const Portfolio	= () => import('./portfolio/views/portfolio.vue');
const Skills	= () => import('./skills/views/skills.vue');  
const Biography	= () => import('./biography/views/biography.vue');  


const routes = [
	{
		path:	'/',
		name:	'home',
		component:	Home
	},
	{
		path:	'/portfolio/:portfolio_slug?',
		name:	'portfolio',
		component:	Portfolio
	},
	{  
		path:	'/skills',  
		name:	'skills',  
		component:	Skills  
	}, 
	{  
		path:	'/biography',  
		name:	'biography',  
		component:	Biography  
	}, 
];
 

const router = new VueRouter({
    routes,
	linkActiveClass: 'is-active',
});


/* === HOOKS === */

/* set loading true when route start loading
 */
router.beforeEach((to, from, next) => {
	router.app.loading = true;
	next();
});
/* set loading false when route finish loading
 */
router.afterEach((to, from, next) => {
	router.app.loading = false;
});

export default router;