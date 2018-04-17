# Wedos deployment  
Errors & solutions for deployment of Laravel on Wedos webhosting  

__is_executable(): open_basedir restriction in effect__  
comment lines in `/vendor/symfony/process/PhpExecutableFinder.php`  

``` php  
65://if (is_executable($php = PHP_BINDIR.('\\' === DIRECTORY_SEPARATOR ? '\\php.exe':'/php'))){  
66://	return $php;  
67://}  
```  

__putenv() has been disabled for security reasons__  
comment lines in `vendor/symfony/console/Application.php`  

``` php  
111: // putenv('LINES='.$this->terminal->getHeight());  
112: // putenv('COLUMNS='.$this->terminal->getWidth());  

924: //         // putenv('SHELL_VERBOSITY='.$shellVerbosity);  
```  