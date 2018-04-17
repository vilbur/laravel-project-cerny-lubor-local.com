# Kickstart template for new Laravel project  
- composer.json contains necessary packages  



#### How to install project  
1. [Install Laravel.](#install-laravel)<br>  
2. [Fetch this repository.](#fetch-this-repository)<br>  
3. [Update Laravel.](#update-laravel)<br>  
4. [Bootstrap Codeception.](#bootstrap-codeception)<br>  

#### Install Laravel  
use __cmd.exe__ ( __Cygwin__ throws errors )  
``` bash  
composer create-project laravel/laravel="5.5.*" lubor-cerny &&cd lubor-cerny  
```  

#### Fetch this repository  
Run this command in project folder  
``` bash  
git init &&git config core.ignorecase false &&git remote add origin https://github.com/vilbur/lubor-cerny.git &&git fetch --all &&git reset --hard origin/master &&git pull origin master  
```  

#### Update Laravel  
``` bash  
composer update &&php artisan voyager:install &&yarn &&npm install  
```  

#### Bootstrap Codeception  
__Package codeception does not support phpunit > 6.5__  
__phpunit is temporary downgraded from  "~6.0" to "6.4.4"__  
https://github.com/Codeception/Codeception/issues/4736#issuecomment-356534721  
``` bash  
composer exec codecept bootstrap  
```  

---  

## Deployment  
- [Checklist for deployment](/documentation/deployment/deployment-checklist.md)  
- [Errors & solutions for deployment of Laravel on Wedos webhosting](/documentation/deployment/wedos-deployment.md)  
  