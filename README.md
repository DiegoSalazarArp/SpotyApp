# SpotyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.2.

## Instalación:

```
npm install
```

## Uso:

Para el uso de la API de Spotify, se debe crear una nueva aplicación en la página oficial de Spotify.

* [Spotify](https://developer.spotify.com/dashboard/) - Spotify Developer.


Una vez realizado, obtendremos el ClientID y el SecretID.

Debemos generar el token para el uso de nuestra aplicación, para ello usaremos PostMan para realizar el POST:

* Metodo: POST
* URL: https://accounts.spotify.com/api/token
* Body -> x-www-form-urlencoded
  - grant_type    :   client_credentials
  - client_id     :   "nuestro ClientID"
  - client_secret :   "Nuestro SecretID"

Esto nos dará el token, que debemos reemplazar en **Spotify.service.ts** de nuestro proyecto.
  

