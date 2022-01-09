# Space invaders en Canvas 

1. [¿Porqué Space Invaders?](#schema1)
2. [¿Cómo se juega?](#schema2)
3. [Tecnologías usadas](#schema3)
4. [Estructura del proyecto](#schema4)
5. [Insalación del juego](#schema5)
6. [Para jugar online](#schema6)
7. [Agradecimientos](#schema7)
8. [Recusros ](#schema8)
9. [Cosas pendientes](#schema9)


<hr>

<a name="schema1"></a>

# 1 ¿Porqué Space Invaders?
Porque quería desafiarme con un juego retro que a primeras parace fácil pero no lo es. 

Las colisiones entre las balas y los enemigos tienen su complicación es lo que mas me ha costado.


<hr>

<a name="schema2"></a>

# 2 ¿Cómo se juega?


![img](/public/img/game.png)

El objetivo del juego es, básicamente, disparar a los invasores con tu cañón evitando sus disparos y previniendo una invasión. 

Conseguir una puntuación alta es otro objetivo y uno que debe priorizarse frente a su supervivencia continua. 

Cada pantalla de juego comienza con seis filas de 6 invasores. Las 2 filas inferiores obtienen 10 puntos por invasor grande, las 2 filas del medio 20 puntos por cada invasor mediano y las  dos filas superior obtiene 30 puntos por cada invasor pequeño  

Para empezar el juego se pulsa la tecla `Enter`. El cañón se mueve a la derecha y a la izquierda con las feclas de la derecha e izquierda. Y dispara con la barra espaciadora.

<hr>

<a name="schema3"></a>

# 3 Tecnologías usadas
- Javascript
- Typescript
- Canvas
- Parcel
- Github
- Github Workflows
- Eslint
- Yarn

<hr>

<a name="schema4"></a>

# 4 Estructura del proyecto
- `github/workflows`: con esta carpeta compilamos los archivos en `typescript` para poder subirlo a githupages.
- `src`: 
    - `actors` que incluye a los actores del juego
        - `Actor.ts` clase principal de la cual heredan el resto de actores.
        - `Barrier.ts` creamos las barreras verdes del juego
        - `Bullet.ts` las balas del cañón
        - `Canyon.ts` la clase canyon con la que creamos al actor principal que es el cañón.
        - `Enemy.ts` con esta clase creamos a los enemigos.
        - `FPSViewer.ts` con esta clase vemos los frame por segundo.
    - `state` donde tenemos el `GameManager` que controla parte del juego
    - `types` donde declaramos un tipo de datos que usamos en los actores del juego
    - `utils` donde tenemos funciones necesarias para que se pueda jugar al juego.


<hr>

<a name="schema5"></a>

# 5 Insalación del juego
En la consola usar `yarn install` para instalar todas las dependencias.

Y para ejecutar el juego `yarn run dev`

<hr>

<a name="schema6"></a>

# 6 Para jugar online
Para jugar en online ir a: https://patri-carrasco.github.io/space_invaders/


<hr>

<a name="schema7"></a>


# 7 Agradecimientos
A mi marido por aconsejarme a hacer este bootcamp y cuidar de los niños mientras yo tengo que estudiar. 

A Marcos por tener la santa paciencia de enseñarme todo esto. 

A Álvaro por estar ahí cuando lo necesitamos para dudas y clases.

A Marc por darme la oportunidad de hacer este bootcamp.

A los compañeros de clase por estar en esta clase porque sin ellos este bootcamp no sería lo mismo.

<hr>

<a name="schema8"></a>

# 8 Recusros 
- <https://www.classicgaming.cc/classics/space-invaders/play-guide>
- <https://developer.mozilla.org/es/docs/Web/JavaScript>
- Apuntes de clases, si los quieres tener ve a: https://www.corecode.school/ y apúntante a un bootcamp.


<hr>

<a name="schema9"></a>

# 9 Cosas pendientes
- Disparos de los enemigos.
- Poner un marcador con el score.
- Poner imágenes a los actores.
- Poner música.