
 
@diego-rg 
diego-rg
/
api-diccionario-programacion
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
Merge branch 'main' of https://github.com/diego-rg/api-diccionario-pr…
…ogramacion into deploy
 main
@diego-rg
diego-rg committed 7 minutes ago 
2 parents 512659c + 923e366 commit 1615df68e8408f9ad51ffde2a61ba42bfaaccad5
Showing 1 changed file with 40 additions and 0 deletions.
 40  
README.md
@@ -0,0 +1,40 @@
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