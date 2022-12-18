# api-diccionario-programacion
API REST con Express y MongoAtlas: diccionario con términos de programación.
https://api-diccionario-programacion.up.railway.app/

1. Término aleatorio:
```
https://api-diccionario-programacion.up.railway.app/api/terms/random
```
2. Todos los términos:
```
https://api-diccionario-programacion.up.railway.app/api/terms/all
```
3. Categorías existentes:
```
https://api-diccionario-programacion.up.railway.app/api/terms/categories
```
4. Todos los términos de una categoría:
```
https://api-diccionario-programacion.up.railway.app/api/terms/{category}
```
- Ejemplo: categoría lenguaje:
```
https://api-diccionario-programacion.up.railway.app/api/terms/lenguaje
```
5. Término concreto:
```
https://api-diccionario-programacion.up.railway.app/api/terms/{category}/{name}
```
- Ejemplo: Node:
```
https://api-diccionario-programacion.up.railway.app/api/terms/entorno/node
```
6. Búsqueda:
```
https://api-diccionario-programacion.up.railway.app/api/search?q={query}
```
- Ejemplo: Javascript:
```
https://api-diccionario-programacion.up.railway.app/api/search?q=javascript
```