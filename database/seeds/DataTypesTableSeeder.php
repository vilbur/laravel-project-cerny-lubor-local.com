<?php

use Illuminate\Database\Seeder;

class DataTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('data_types')->delete();
        
        \DB::table('data_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'posts',
                'slug' => 'posts',
                'display_name_singular' => 'Post',
                'display_name_plural' => 'Posts',
                'icon' => 'voyager-news',
                'model_name' => 'TCG\\Voyager\\Models\\Post',
                'policy_name' => 'TCG\\Voyager\\Policies\\PostPolicy',
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:03',
                'updated_at' => '2018-02-14 20:29:03',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'pages',
                'slug' => 'pages',
                'display_name_singular' => 'Page',
                'display_name_plural' => 'Pages',
                'icon' => 'voyager-file-text',
                'model_name' => 'TCG\\Voyager\\Models\\Page',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:03',
                'updated_at' => '2018-02-14 20:29:03',
            ),
            2 => 
            array (
                'id' => 3,
                'name' => 'users',
                'slug' => 'users',
                'display_name_singular' => 'User',
                'display_name_plural' => 'Users',
                'icon' => 'voyager-person',
                'model_name' => 'TCG\\Voyager\\Models\\User',
                'policy_name' => 'TCG\\Voyager\\Policies\\UserPolicy',
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:03',
                'updated_at' => '2018-02-14 20:29:03',
            ),
            3 => 
            array (
                'id' => 4,
                'name' => 'categories',
                'slug' => 'categories',
                'display_name_singular' => 'Category',
                'display_name_plural' => 'Categories',
                'icon' => 'voyager-categories',
                'model_name' => 'TCG\\Voyager\\Models\\Category',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:03',
                'updated_at' => '2018-02-14 20:29:03',
            ),
            4 => 
            array (
                'id' => 5,
                'name' => 'menus',
                'slug' => 'menus',
                'display_name_singular' => 'Menu',
                'display_name_plural' => 'Menus',
                'icon' => 'voyager-list',
                'model_name' => 'TCG\\Voyager\\Models\\Menu',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:03',
                'updated_at' => '2018-02-14 20:29:03',
            ),
            5 => 
            array (
                'id' => 6,
                'name' => 'roles',
                'slug' => 'roles',
                'display_name_singular' => 'Role',
                'display_name_plural' => 'Roles',
                'icon' => 'voyager-lock',
                'model_name' => 'TCG\\Voyager\\Models\\Role',
                'policy_name' => NULL,
                'controller' => '',
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:03',
                'updated_at' => '2018-02-14 20:29:03',
            ),
            6 => 
            array (
                'id' => 7,
                'name' => 'category_portfolios',
                'slug' => 'category-portfolios',
                'display_name_singular' => 'Category Portfolio',
                'display_name_plural' => 'Category Portfolios',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Portfolio\\Models\\CategoryPortfolio',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:29:04',
            ),
            7 => 
            array (
                'id' => 8,
                'name' => 'portfolios',
                'slug' => 'portfolios',
                'display_name_singular' => 'Portfolio',
                'display_name_plural' => 'Portfolios',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Portfolio\\Models\\Portfolio',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-16 03:54:14',
            ),
            8 => 
            array (
                'id' => 9,
                'name' => 'portfolio_files',
                'slug' => 'portfolio-files',
                'display_name_singular' => 'Portfolio File',
                'display_name_plural' => 'Portfolio Files',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Portfolio\\Models\\PortfolioFile',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-25 07:14:56',
            ),
            9 => 
            array (
                'id' => 10,
                'name' => 'biography',
                'slug' => 'biography',
                'display_name_singular' => 'Biography',
                'display_name_plural' => 'Biography',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Biography\\Models\\Biography',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-16 12:28:48',
            ),
            10 => 
            array (
                'id' => 11,
                'name' => 'category_skills',
                'slug' => 'category-skills',
                'display_name_singular' => 'Category Skill',
                'display_name_plural' => 'Category Skills',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Skills\\Models\\CategorySkill',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-16 03:52:40',
            ),
            11 => 
            array (
                'id' => 12,
                'name' => 'skills',
                'slug' => 'skills',
                'display_name_singular' => 'Skill',
                'display_name_plural' => 'Skills',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Skills\\Models\\Skill',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-14 20:38:53',
            ),
            12 => 
            array (
                'id' => 13,
                'name' => 'skill_details',
                'slug' => 'skill-details',
                'display_name_singular' => 'Skill Detail',
                'display_name_plural' => 'Skill Details',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Skills\\Models\\SkillDetail',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-14 20:29:04',
                'updated_at' => '2018-02-15 02:13:15',
            ),
            13 => 
            array (
                'id' => 14,
                'name' => 'company',
                'slug' => 'company',
                'display_name_singular' => 'Company',
                'display_name_plural' => 'Company',
                'icon' => NULL,
                'model_name' => 'App\\Models\\Company',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => '',
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-21 10:42:26',
                'updated_at' => '2018-02-21 10:42:26',
            ),
            14 => 
            array (
                'id' => 15,
                'name' => 'portfolio_items',
                'slug' => 'portfolio-items',
                'display_name_singular' => 'Portfolio Item',
                'display_name_plural' => 'Portfolio Items',
                'icon' => NULL,
                'model_name' => 'Vilbur\\Portfolio\\Models\\PortfolioItem',
                'policy_name' => NULL,
                'controller' => NULL,
                'description' => NULL,
                'generate_permissions' => 1,
                'server_side' => 0,
                'created_at' => '2018-02-27 06:21:28',
                'updated_at' => '2018-02-27 06:36:41',
            ),
        ));
        
        
    }
}