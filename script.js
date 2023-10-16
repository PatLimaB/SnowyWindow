let mainElement = document.getElementById('snowContainer');

/* Al crear varios valores aleatorios, creamos una función para llamarla cada vez, estableciendo un máximo y mínimo (siendo este 1 como mínimo) según necesitemos */
let getRandomValue = (max, min = 1) => {
    return Math.floor(Math.random()*max) + min;
};

/* Esta función va a crear cada copo de nieve, dándole una posición en el eje x, un retraso, una duración y un tamaño aleatorios */
let createSnowflake = (density) => {
    for (let i = 0; i < density; i++) {
        let snowflake = document.createElement("img");
        snowflake.src = "./img/copo-de-nieve.png";  /* Le asignamos la imagen deseada */
        let randomPosition = `${getRandomValue(100)}%`;
        let randomFallDelay = `${getRandomValue(20, 1)}s`;
        let randomFallDuration = `${getRandomValue(10, 5)}s`;
        let randomSize = `${getRandomValue(25, 5)}px`;

        snowflake.classList.add("snowflake");
        snowflake.style.width = randomSize;
        snowflake.style.height = randomSize;
        snowflake.style.animation = `fallingSnow ${randomFallDuration} ${randomFallDelay} linear`; /* La animación es lineal para que vaya a la misma velocidad en todo el recorrido */
        snowflake.style.right = randomPosition;


        /* Existe un evento llamado animationend que nos va a facilitar la eliminación de cada copo de nieve una vez finalice la animación */
        snowflake.addEventListener("animationend", function() {
            snowflake.remove();
        });

        document.body.appendChild(snowflake);
    }
};

createSnowflake(150);
