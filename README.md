# Répliques de films
![screenshot-2017-12-29 film replica](https://user-images.githubusercontent.com/13301795/34437774-72167e04-eca1-11e7-8d3a-0c367206c917.png)

Application of movie replicas created on Laravel for the back end and react for the front. Watch the todos list.

### Installation ###

* type `git clone git@github.com:ParmentierChristophe/Filmreplica.git projectname` to clone the repository 
* type `cd projectname`
* type `composer install`
* type `composer update`
* copy *.env.example* to *.env*
* type `php artisan key:generate`to generate secure key in *.env* file
* if you use MySQL in *.env* file :
   * set DB_CONNECTION
   * set DB_DATABASE
   * set DB_USERNAME
   * set DB_PASSWORD
* if you use sqlite :
   * type `touch database/database.sqlite` to create the file
* type `php artisan migrate --seed` to create and populate tables
* edit *.env* for emails configuration

### Include ###
* React for View
* Bulma for Framework CSS

### Features ###



### Tricks ###



### Tests ###



### License ###
### Todos ###
* CRUD (delete and update)
* insert Users 
* insert a note to the quote 
* validate for new quote
* image of movies
* sorting
* And more ...