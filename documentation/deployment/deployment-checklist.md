# Checklist for deployment  

`/config/app.php`  
``` php  
'key' => env('APP_KEY', 'base64:........'),  
```  
---  

`/config/database.php`  
``` php  
'mysql' => [  
	'host'     => env('DB_HOST',     '........'),  
	'database' => env('DB_DATABASE', '........'),  
	'username' => env('DB_USERNAME', '........'),  
	'password' => env('DB_PASSWORD', '........'),  
],  
```  

  