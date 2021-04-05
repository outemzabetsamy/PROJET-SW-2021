# PROJET-SW-2021
Projet de réalisation d'une architecture services web d'un système qui concerne le secteur du tourisme de la wilaya de BEJAIA,qui permettras aux touristes visitant la ville de Bejaia de bien profiter de leurs vacances.
# Notre projet contient au total 06 services web et fais appel a un service web publique.
## Membre du groupe:
* OUTEMZABET Samy.
* MAHIOUT Narimane.
* SELAMI Ryma.
* NASLI YOUCEF.
* BELAIDEN Dalia.
## Description du projet:
 
>  ### [1.Le dossier PORTAIL-SW:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/PORTAIL%20SW/portailsw-master)
 Contient l'application cliente qui est un portail qui fais appel aux differents services web.
 ### Le lien du portail: https://portailsw.herokuapp.com
 
 Les technologies utilisé pour la creation du portail:
 * HTML/CSS
 * BOOTSTRAP
 * JAVASCRIPT
 * Le client HTTP AXIOS pour appeler les API.  
>  ### [2.Le dossier Administration](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Administration%20des%20SW)
 Contient tous les projet web frontaux qui permettent de gérer les services web (sw) de notre projet.


> ### [3.Le dossier Consommation API openweather:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Consommation%20API%20OPENWEATHER/WeatherApp-main)
 Contient le projet web qui permet de consommer l'api publique OPENWEATHER, et qui nous donne la possibilité de prédire la météo des 05 jours à venir de n'importe quelle ville.

> ### [4.Le dossier Services Web](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Services%20web)
 Contient l'ensemble des services web ci-dessous:
####  [1.Service Activités et loisir:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Services%20web/SERVICE-ACTIVITE/activity-service-heroku-main)
 Un service web RESTFUL développer en JAVA en utilisant le Framework SPRINGBOOT et une Base de données MYSQL, héberger et déployer sur la plateforme cloud HEROKU.
   ##### Les liens pour la consommation du service web:


|        action           | Methode  | URL                                                 |
|:-----------------------:|:--------:|:---------------------------------------------------:|
|All activities           | GET      | https://activity-serviceheroku.herokuapp.com/api/activites/all   |
| Get activity with ID    | GET      |https://activity-service-heroku.herokuapp.com/api/activites/all/{id}|
| Add activity            | POST     |https://activity-service-heroku.herokuapp.com/api/activites/add|
| Delete activity         | DELETE   |https://activity-service-heroku.herokuapp.com/api/activites/delete/{id}|
| Edit activity           | PUT      |https://activity-service-heroku.herokuapp.com/api/activites/edit|


####	[2.Service Hôtels:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Services%20web/SERVICE-HOTEL/service-hotel-master)
 Un service web RESTFUL développer en PHP en utilisant le Framework LARAVEL et une Base de données MYSQL, héberger et déployer sur la plateforme cloud HEROKU.
#####	Les liens pour la consommation du service web:

|        action           | Methode  | URL                                                 |
|:-----------------------:|:--------:|:---------------------------------------------------:|
|All hotels               | GET      |https://hotel-service-swapi.herokuapp.com/api/hotells|
| Get hotel with ID       | GET      |https://hotel-service-swapi.herokuapp.com/api/hotells/{id}|
| Add hotel               | POST     | https://hotel-service-swapi.herokuapp.com/api/hotell|
| Delete hotel            | DELETE   | https://hotel-service-swapi.herokuapp.com/api/hotell|
| Edit hotel              | PUT      | https://hotel-service-swapi.herokuapp.com/api/hotell|

####	[3.Service Restaurants:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Services%20web/SERVICE-RESTAURANT/apirestosw-master)
 Un service web RESTFUL développer en PYTHON en utilisant le Framework FLASK et une Base de données MONGODB, héberger et déployer sur la plateforme cloud HEROKU.
##### Les liens pour la consommation du service web:

|        action           | Methode  | URL                                                 |
|:-----------------------:|:--------:|:---------------------------------------------------:|
|All restaurants          | GET      | https://apirestosw.herokuapp.com/users               |
| Get restaurant with ID  | GET      | https://apirestosw.herokuapp.com/users /{id}         |
| Add restaurant          | POST     | https://apirestosw.herokuapp.com/users /{id}        |
| Delete restaurant       | DELETE   |  https://apirestosw.herokuapp.com/users /{id}       |
| Edit restaurant         | PUT      | https://apirestosw.herokuapp.com/users /{id}         |

####	[4.Service Lieux:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Services%20web/SERVICE-LIEUX/testapilieux-master)
 Un service web RESTFUL développer en C# en utilisant le Framework .NET CORE et une Base de données SQL SERVER, héberger et déployer sur la plateforme cloud AZURE.
##### Les liens pour la consommation du service web:

|        action           | Methode  | URL                                                 |
|:-----------------------:|:--------:|:---------------------------------------------------:|
|All Places               | GET      | https://testapilieux.azurewebsites.net/api/lieuxs                             |
| Get place with ID       | GET      |https://testapilieux.azurewebsites.net/api/lieuxs/{id}|
| Add place               | POST     | https://testapilieux.azurewebsites.net/api/lieuxs   |
| Delete place            | DELETE   | https://testapilieux.azurewebsites.net/api/lieuxs/{id}|
| Edit place              | PUT      | https://testapilieux.azurewebsites.net/api/lieuxs/{id}|


####	[5.Service agence location et taxi:](https://github.com/outemzabetsamy/PROJET-SW-2021/tree/master/Services%20web/SERVICE-AgenceLocEtTaxi/swlocationapi-master%20(1)/swlocationapi-master)
 Un service web SOAP développer en C# en utilisant le Framework ASP.NET et une Base de données SQL SERVER, héberger et déployer sur la plateforme cloud AZURE.
##### Les liens pour la consommation du service web:

|        action           | Methode  | URL                                                   |
|:-----------------------:|:--------:|:-----------------------------------------------------:|
|WSDL                     | POST     | https://wslocationapi.azurewebsites.net/WebService1.asmx?WSDL|


#### La requête SOAP pour l’affichage de toutes les agences de location:
```xml

<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <GetAgenceLocation xmlns="http://tempuri.org/"/>
    </Body>
</Envelope>
```
    
#### La requête SOAP pour l’affichage de toutes les stations taxi:

```xml
<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <GetStationTaxi xmlns="http://tempuri.org/"/>
    </Body>
</Envelope>
```



