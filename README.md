# api-diccionario-programacion
API REST con Express y MongoAtlas: diccionario con términos de programación.
https://api-diccionarioprogramacion.herokuapp.com/

1. Término aleatorio:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/random
```
2. Todos los términos:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/all
```
3. Categorías existentes:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/categories
```
4. Todos los términos de una categoría:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/{category}
```
- Ejemplo: categoría lenguaje:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/lenguaje
```
5. Término concreto:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/{category}/{name}
```
- Ejemplo: Node:
```
https://api-diccionarioprogramacion.herokuapp.com/api/terms/entorno/node
```
6. Búsqueda:
```
https://api-diccionarioprogramacion.herokuapp.com/api/search?q={query}
```
- Ejemplo: Javascript:
```
https://api-diccionarioprogramacion.herokuapp.com/api/search?q=javascript
```