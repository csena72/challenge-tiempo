<a name="top"></a>
# Evaluación perfil 
## CHALLENGE: Temperatura máxima promedio en Buenos Aires
* [Introducción](#item1)

 
<a name="item1"></a>
## Introducción
Consigna general: Armar una script que muestre la temperatura máxima promedio, en Buenos Aires, para una fecha dada.

1) Los datos deberán ser obtenidos dinámicamente utilizando la API de OpenWeatherMap.
OpenWeatherMap ofrece una API para obtener el pronóstico del tiempo para cualquier ciudad, en diferentes formatos y diversos rangos de tiempo. En particular vamos a usar el endpoint para obtener el pronóstico para los próximos 5 días, documentado en detalle aquí https://openweathermap.org/forecast5

Para utilizar la API es necesario proporcionar una clave; podés utilizar: f36e2314242fc6168b56fd8558d1bdf6.

URL de ejemplo: 
http://api.openweathermap.org/data/2.5/forecast?q=Denver,US&mode=xml&APPID=f36e2314242fc6168b56fd8558d1bdf6

Para este ejercicio:
- obtener los datos para Buenos Aires (ver documentación de la API)
- en formato json (ver documentación de la API)
- utilizando el sistema métrico de unidades (ver documentación de la API)


Los datos obtenidos incluirán varios registros para cada uno de los días, segmentados cada 3 horas.

2) Crear una página html que por defecto muestre la temperatura máxima promedio para el primer día, y que además permita seleccionar alguna de las otras fechas disponibles para ver la temperatura correspondiente. Ver imagen de ejemplo como guía.


3) Enviar el/los archivo/s en un archivo zip como termines.

