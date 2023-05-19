# Prueba tecnica 

Esta es una prueba tecnica que se compone de una API desarrolada en Django rest framework y el frontend desarrollado en angular para el consumo de la API.



## Ejecutar Backend

Puedes correr la API realizada en django rest-framework dea siguiente manera en la raiz del proyecto:

Para el despliegue de la API se utilizo docker para que no sea tan complejo la ejecucion.

1 - Creacion de la imagen del contenedor:

```sh
    Nos situamos en en la direccion donde se encuentra el archivo manage.py (backend) y ejecutamos el siguiente comando:
    docker build -t back .
```

2 - Creacion del contenedor:
```sh
    Luego de haber creado la imagen del contenedor,creamos el contenedor de la siguente manera:

    docker run -dp 8500:8500 --name back back
```
3 - Verificacion en post man o navegador:
```sh
    cuando se inicializa el contenedor podemos dirigirnos a:
    localhost:8500/api/movies 

    y verificamos en la documentacion del swagger que los endpoints esten en funcionamiento.
```


## Ejecutar el Front usando Docker

1 - docker build -t frontapp .
```sh
    nos situamos en el directorio raiz del front(Front-rest-api ) y creamos la imagen . --->>> docker build -t front .
```
2 - docker run -dp 4200:80 --name front front 
```sh
    Despues de crear la imagen ejecutamos este comando para crear el contenedor
```
```sh
    Despues de realizados estos pasos podemos acceder a la aplicacion por el puerto 4200 (http://localhost:4200)
```

```sh
    Si no se quiere utilizar docker se puede correr la aplicacion con npm install y despues npm start
```