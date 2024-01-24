# api-diccionario-programacion
API REST con Express y MongoAtlas: diccionario con términos de programación.
https://api-diccionario-programacion.onrender.com/

1. Término aleatorio:
```
https://api-diccionario-programacion.onrender.com/api/terms/random
```
2. Todos los términos:
```
https://api-diccionario-programacion.onrender.com/api/terms/all
```
3. Categorías existentes:
```
https://api-diccionario-programacion.onrender.com/api/terms/categories
```
4. Todos los términos de una categoría:
```
https://api-diccionario-programacion.onrender.com/api/terms/{category}
```
- Ejemplo: categoría lenguaje:
```
https://api-diccionario-programacion.onrender.com/api/terms/lenguaje
```
5. Término concreto:
```
https://api-diccionario-programacion.onrender.com/api/terms/{category}/{name}
```
- Ejemplo: Node:
```
https://api-diccionario-programacion.onrender.com/api/terms/entorno/node
```
6. Búsqueda:
```
https://api-diccionario-programacion.onrender.com/api/search?q={query}
```
- Ejemplo: Javascript:
```
https://api-diccionario-programacion.onrender.com/api/search?q=javascript
```