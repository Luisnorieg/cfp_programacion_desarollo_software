Ejercicios del 51 al 60 


<h2> Ejercicio 51 </h2>
<h3> Suma de Matrices: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 52 </h2>
<h3> Promedio por Columna: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 53 </h2>
<h3> Suma de Diagonales: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 54 </h2>
<h3> Suma de Diagonales: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 55 </h2>
<h3> Rotación de Matriz: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 56 </h2>
<h3> Laberinto: </h3>
<pre>
    <code>
      Algoritmo LaberintoConAEstrellaSinFunciones
    // Definir el tamaño del laberinto
    Definir ancho, alto Como Entero
    ancho = 5
    alto = 5

    // Inicializar el laberinto con obstáculos (1 son obstáculos, 0 son celdas libres)
    Definir laberinto Como Entero
    Dim laberinto[5, 5]
    laberinto[0, 0] = 0; laberinto[0, 1] = 0; laberinto[0, 2] = 1; laberinto[0, 3] = 0; laberinto[0, 4] = 0
    laberinto[1, 0] = 0; laberinto[1, 1] = 0; laberinto[1, 2] = 1; laberinto[1, 3] = 0; laberinto[1, 4] = 0
    laberinto[2, 0] = 0; laberinto[2, 1] = 0; laberinto[2, 2] = 0; laberinto[2, 3] = 0; laberinto[2, 4] = 1
    laberinto[3, 0] = 1; laberinto[3, 1] = 1; laberinto[3, 2] = 1; laberinto[3, 3] = 0; laberinto[3, 4] = 0
    laberinto[4, 0] = 0; laberinto[4, 1] = 0; laberinto[4, 2] = 0; laberinto[4, 3] = 0; laberinto[4, 4] = 0

    // Coordenadas de inicio y fin
    Definir inicioX, inicioY, finX, finY Como Entero
    inicioX = 0; inicioY = 0
    finX = 4; finY = 4

    // Inicializar listas abiertas y cerradas
    Definir abiertos, cerrados Como Entero
    Dim abiertos[100, 3] // x, y, f
    Dim cerrados[100, 2] // x, y
    Definir numAbiertos, numCerrados Como Entero
    numAbiertos = 0; numCerrados = 0

    // Función heurística (distancia de Manhattan)
    Definir heuristica Como Entero
    heuristica = Abs(inicioX - finX) + Abs(inicioY - finY)

    // Añadir nodo a la lista abierta
    abiertos[numAbiertos, 0] = inicioX
    abiertos[numAbiertos, 1] = inicioY
    abiertos[numAbiertos, 2] = heuristica
    numAbiertos = numAbiertos + 1

    Definir encontrado Como Logico
    encontrado = Falso

    // Algoritmo A*
    Mientras numAbiertos > 0 Y encontrado == Falso Hacer
        // Encontrar el nodo con el menor f en la lista abierta
        Definir menorIndice, menorF Como Entero
        menorIndice = 0
        menorF = abiertos[0, 2]
        Para i = 1 Hasta numAbiertos - 1 Con Paso 1 Hacer
            Si abiertos[i, 2] < menorF Entonces
                menorF = abiertos[i, 2]
                menorIndice = i
            FinSi
        FinPara

        // Mover el nodo a la lista cerrada
        Definir actualX, actualY, actualG Como Entero
        actualX = abiertos[menorIndice, 0]
        actualY = abiertos[menorIndice, 1]
        actualG = abiertos[menorIndice, 2] - (Abs(actualX - finX) + Abs(actualY - finY))
        cerrados[numCerrados, 0] = actualX
        cerrados[numCerrados, 1] = actualY
        numCerrados = numCerrados + 1
        Para i = menorIndice Hasta numAbiertos - 2 Con Paso 1 Hacer
            abiertos[i, 0] = abiertos[i + 1, 0]
            abiertos[i, 1] = abiertos[i + 1, 1]
            abiertos[i, 2] = abiertos[i + 1, 2]
        FinPara
        numAbiertos = numAbiertos - 1

        // Verificar si hemos llegado al objetivo
        Si actualX == finX Y actualY == finY Entonces
            encontrado = Verdadero
        SiNo
            // Generar los nodos vecinos (arriba, abajo, izquierda, derecha)
            Para dx = -1 Hasta 1 Con Paso 1 Hacer
                Para dy = -1 Hasta 1 Con Paso 1 Hacer
                    Si Abs(dx) + Abs(dy) == 1 Entonces
                        Definir vecinoX, vecinoY Como Entero
                        vecinoX = actualX + dx
                        vecinoY = actualY + dy
                        // Verificar si el vecino es una celda libre y no está en la lista cerrada
                        Definir enCerrados Como Logico
                        enCerrados = Falso
                        Para j = 0 Hasta numCerrados - 1 Con Paso 1 Hacer
                            Si cerrados[j, 0] == vecinoX Y cerrados[j, 1] == vecinoY Entonces
                                enCerrados = Verdadero
                            FinSi
                        FinPara
                        Si vecinoX >= 0 Y vecinoX < ancho Y vecinoY >= 0 Y vecinoY < alto Y laberinto[vecinoX, vecinoY] == 0 Y enCerrados == Falso Entonces
                            heuristica = Abs(vecinoX - finX) + Abs(vecinoY - finY)
                            abiertos[numAbiertos, 0] = vecinoX
                            abiertos[numAbiertos, 1] = vecinoY
                            abiertos[numAbiertos, 2] = actualG + 1 + heuristica
                            numAbiertos = numAbiertos + 1
                        FinSi
                    FinSi
                FinPara
            FinPara
        FinSi
    FinMientras

    // Mostrar resultado
    Si encontrado Entonces
        Escribir "Camino encontrado"
    SiNo
        Escribir "No hay camino"
    FinSi
    FinAlgoritmo

     
</code>
</pre>
<br>    

<h2> Ejercicio 57 </h2>
<h3> Juego de la Vida (Conway's Game of Life): </h3>
<pre>
    <code>

    Algoritmo  DibujoProgresivoEstrella
    Definir matriz Como Caracter
    Definir i, j, paso Como Entero
    paso = 0
	
	Dimension matriz[5,5]
    
    Para i = 1 Hasta 5 Con Paso 1
        Para j = 1 Hasta 5 Con Paso 1
            matriz[i, j] = " "
        FinPara
    FinPara
    
    
    Mientras paso <= 5 Hacer
        
        Limpiar Pantalla
        
        Segun paso Hacer
            Caso 0:
                matriz[3, 3] = "*"
            Caso 1:
                matriz[2, 3] = "*"
                matriz[4, 3] = "*"
            Caso 2:
                matriz[3, 2] = "*"
                matriz[3, 4] = "*"
            Caso 3:
                matriz[2, 2] = "*"
                matriz[4, 4] = "*"
            Caso 4:
                matriz[2, 4] = "*"
                matriz[4, 2] = "*"
            Caso 5:
                
                Escribir "Estrella completa"
        FinSegun
        
        
        Para i = 1 Hasta 5 Con Paso 1
            Para j = 1 Hasta 5 Con Paso 1
                Escribir Sin Saltar matriz[i, j]
            FinPara
            Escribir "" 
        FinPara
        
        Si paso < 5 Entonces
           
            Escribir "Presione una tecla para continuar..."
            Leer tecla 
        FinSi
        
        paso = paso + 1
    FinMientras
	FinAlgoritmo



        
</code>
</pre>
<br>    

<h2> Ejercicio 58 </h2>
<h3> Laberinto con Obstáculos y Algoritmo de Búsqueda: </h3>
<pre>
<code>
	Algoritmo Ejercicio_58
	Definir matriz, op Como Entero
	Dimension matriz[10,10]                      
	Para i=1 Hasta 10 Con Paso 1 Hacer
		para j=1 hasta 10 Con Paso 1 Hacer
			matriz[i,j] = 1
		FinPara
	FinPara           
	Escribir ' '            
	
	matriz[1,1] = 5 
	matriz[1,2] = 0
	matriz[1,3] = 0
	matriz[2,1] = 0
	matriz[2,3] = 0
	matriz[3,1] = 0
	matriz[3,3] = 0
	matriz[4,1] = 0
	matriz[4,3] = 0
	matriz[4,4] = 0
	matriz[4,5] = 0
	matriz[5,1] = 0
	matriz[5,5] = 0
	matriz[5,10] = 0
	matriz[6,1] = 0
	matriz[6,5] = 0
	matriz[6,6] = 0
	matriz[6,7] = 0
	matriz[5,7] = 0
	matriz[5,8] = 0
	matriz[5,9] = 0
	matriz[6,9] = 0
	matriz[7,1] = 0
	matriz[7,9] = 0
	matriz[8,1] = 0
	matriz[8,9] = 0
	matriz[8,8] = 0
	matriz[9,1] = 0
	matriz[9,8] = 0
	matriz[9,7] = 0
	matriz[10,1] = 0
	matriz[10,2] = 0
	matriz[10,3] = 0
	matriz[10,4] = 0
	matriz[10,5] = 0
	matriz[10,6] = 0
	matriz[10,7] = 0            

	Repetir
		
		Para i<-1 Hasta 10 Hacer
			Para j<-1 Hasta 10 Hacer
				si matriz[i,j] <> 1 y matriz[i,j] <> 5  y matriz[i,j] <> 7 Entonces
					matriz[i,j] = 0 
				FinSi
				Escribir  matriz[i,j], ' | ' Sin Saltar
			FinPara
			Escribir ''
		FinPara
		Escribir ''
		
		
		Escribir 'Ingrese una opción'
		Escribir '2. Bajar'
		Escribir '8. Subir'
		Escribir '6. Derecha'
		Escribir '4. Izquierda'
		Leer opc
		Segun opc
			2:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y i < 10 Entonces
							si matriz[i+1,j] = 0 Entonces
								matriz[i+1,j] = 5
								matriz[i,j] = 0
								i = 10
								j = 10
							FinSi
						FinSi
					FinPara
				FinPara
			6:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y i < 11 Entonces
							si matriz[i,j+1] = 0 Entonces
								matriz[i,j+1] = 5
								matriz[i,j] = 0
								i = 11
								j = 11
							FinSi
						FinSi
					FinPara
				FinPara
			4:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y i < 10 Entonces
							si matriz[i,j-1] = 0 Entonces
								matriz[i,j-1] = 5
								matriz[i,j] = 0
								i = 10
								j = 10
							FinSi
						FinSi
					FinPara
				FinPara
			8:
				para i = 1 Hasta 10 Hacer
					para j = 1 Hasta 10 Hacer
						si matriz[i,j] = 5 y j < 10 Entonces
							si matriz[i-1,j] = 0 Entonces
								matriz[i-1,j] = 5
								matriz[i,j] = 0
								i = 10
								j = 10
							FinSi
						FinSi
					FinPara
				FinPara
		FinSegun
		
		Limpiar Pantalla
	Hasta Que matriz[9,7] == 5
	
	Limpiar Pantalla
	Escribir 'Felicidades has ganado'
	FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 59 </h2>
<h3> Rompecabezas del 15: </h3>
<pre>
    <code>
     Algoritmo RompecabezasDel15

    Definir tablero[4,4] como entero
    Definir filaVacia, columnaVacia como entero
    Definir filaMovimiento, columnaMovimiento como entero
    Definir opcion como caracter

    // Inicializar tablero
    Para fila <- 0 hasta 3
        Para columna <- 0 hasta 3
            tablero[fila, columna] <- fila * 4 + columna + 1
        FinPara
    FinPara
    tablero[3,3] <- 0 // El espacio vacío se representa con el número 0

    // Mezclar tablero
    Para i <- 1 hasta 100
        filaMovimiento <- aleatorio(0, 3)
        columnaMovimiento <- aleatorio(0, 3)
        Si (filaMovimiento > 0) entonces
            Si (tablero[filaMovimiento - 1, columnaMovimiento] = 0) entonces
                tablero[filaMovimiento - 1, columnaMovimiento] <- tablero[filaMovimiento, columnaMovimiento]
                tablero[filaMovimiento, columnaMovimiento] <- 0
            FinSi
        FinSi
        Si (filaMovimiento < 3) entonces
            Si (tablero[filaMovimiento + 1, columnaMovimiento] = 0) entonces
                tablero[filaMovimiento + 1, columnaMovimiento] <- tablero[filaMovimiento, columnaMovimiento]
                tablero[filaMovimiento, columnaMovimiento] <- 0
            FinSi
        FinSi
        Si (columnaMovimiento > 0) entonces
            Si (tablero[filaMovimiento, columnaMovimiento - 1] = 0) entonces
                tablero[filaMovimiento, columnaMovimiento - 1] <- tablero[filaMovimiento, columnaMovimiento]
                tablero[filaMovimiento, columnaMovimiento] <- 0
            FinSi
        FinSi
        Si (columnaMovimiento < 3) entonces
            Si (tablero[filaMovimiento, columnaMovimiento + 1] = 0) entonces
                tablero[filaMovimiento, columnaMovimiento + 1] <- tablero[filaMovimiento, columnaMovimiento]
                tablero[filaMovimiento, columnaMovimiento] <- 0
            FinSi
        FinSi
    FinPara

    // Mostrar tablero
    Mientras (opcion <> "Q")
        Para fila <- 0 hasta 3
            Para columna <- 0 hasta 3
                Escribir(tablero[fila, columna], " ")
            FinPara
            Escribir("")
        FinPara

        // Verificar si se ha ganado el juego
        Si (tablero[0,0] = 1 AND tablero[0,1] = 2 AND tablero[0,2] = 3 AND tablero[0,3] = 4 AND
            tablero[1,0] = 5 AND tablero[1,1] = 6 AND tablero[1,2] = 7 AND tablero[1,3] = 8 AND
            tablero[2,0] = 9 AND tablero[2,1] = 10 AND tablero[2,2] = 11 AND tablero[2,3] = 12 AND
            tablero[3,0] = 13 AND tablero[3,1] = 14 AND tablero[3,2] = 15 AND tablero[3,3] = 0) entonces
            Escribir("¡Felicidades! Has ganado.")
            opcion <- "Q"
        FinSi

        // Solicitar movimiento al usuario
        Escribir("Ingrese U para arriba, D para abajo, L para izquierda, R para derecha, o Q para salir:")
        Leer(opcion)

        // Realizar movimiento
        Si (opcion = "U" o opcion = "u") entonces
            filaVacia <- 0
            columnaVacia <- 0
            Para fila <- 0 hasta 3
                Para columna <- 0 hasta 3
                    Si (tablero[fila, columna] = 0) entonces
                        filaVacia <- fila
                        columnaVacia <- columna
                    FinSi
                FinPara
            FinPara
            Si (filaVacia < 3) entonces
                tablero[filaVacia, columnaVacia] <- tablero[filaVacia + 1, columnaVacia]
                tablero[filaVacia + 1, columnaVacia] <- 0
            FinSi
        FinSi
        // Implementar movimientos hacia abajo, izquierda y derecha de manera similar
    FinMientras

    FinAlgoritmo

     
</code>
</pre>
<br>    

<h2> Ejercicio 60 </h2>
<h3> Sudoku Solver: </h3>
<pre>
    <code>
    Algoritmo Resolver_Sudoku
    // Definir la matriz para el Sudoku
    Definir sudoku[9,9]: Entero

    // Ingresar el Sudoku inicial (0 para espacios vacíos)
    Leer_Sudoku(sudoku)

    // Mostrar el Sudoku inicial
    Mostrar_Sudoku(sudoku)

    // Resolver el Sudoku
    Si Resolver_Sudoku_Recursivo(sudoku, 0, 0) Entonces
        Mostrar "Sudoku resuelto:"
        Mostrar_Sudoku(sudoku)
    Sino
        Mostrar "No se pudo resolver el Sudoku"
    FinSi
FinAlgoritmo

Funcion Resolver_Sudoku_Recursivo(sudoku, fila, columna)
    // Si ya hemos llegado al final del Sudoku, hemos terminado
    Si fila >= 9 Entonces
        Devolver Verdadero
    FinSi

    // Si la celda actual ya está llena, pasar a la siguiente
    Si sudoku[fila, columna] != 0 Entonces
        Si columna < 8 Entonces
            Resolver_Sudoku_Recursivo(sudoku, fila, columna + 1)
        Sino
            Resolver_Sudoku_Recursivo(sudoku, fila + 1, 0)
        FinSi
    FinSi

    // Probar números del 1 al 9 en la celda actual
    Para num <- 1 Hasta 9 Con Paso 1 Hacer
        // Verificar si el número es válido
        // Verificar si el número ya existe en la fila
        Valido <- Verdadero
        Para i <- 0 Hasta 8 Con Paso 1 Hacer
            Si sudoku[fila, i] == num Entonces
                Valido <- Falso
            FinSi
        FinPara

        // Verificar si el número ya existe en la columna
        Si Valido Entonces
            Para i <- 0 Hasta 8 Con Paso 1 Hacer
                Si sudoku[i, columna] == num Entonces
                    Valido <- Falso
                FinSi
            FinPara
        FinSi

        // Verificar si el número ya existe en el cuadrante 3x3
        Si Valido Entonces
            Para i <- (fila/3)*3 Hasta (fila/3)*3 + 2 Con Paso 1 Hacer
                Para j <- (columna/3)*3 Hasta (columna/3)*3 + 2 Con Paso 1 Hacer
                    Si sudoku[i, j] == num Entonces
                        Valido <- Falso
                    FinSi
                FinPara
            FinPara
        FinSi

        // Si el número es válido, intentar ponerlo en la celda actual
        Si Valido Entonces
            sudoku[fila, columna] <- num
            Si columna < 8 Entonces
                Si Resolver_Sudoku_Recursivo(sudoku, fila, columna + 1) Entonces
                    Devolver Verdadero
                FinSi
            Sino
                Si Resolver_Sudoku_Recursivo(sudoku, fila + 1, 0) Entonces
                    Devolver Verdadero
                FinSi
            FinSi
            sudoku[fila, columna] <- 0
        FinSi
    FinPara

    // Si no se puede encontrar ningún número válido, retroceder
    Devolver Falso
    FinFuncion

    Procedimiento Leer_Sudoku(sudoku)
    // Llenar la matriz del Sudoku
    // Código para leer el Sudoku desde la entrada estándar o desde un archivo
    FinProcedimiento

    Procedimiento Mostrar_Sudoku(sudoku)
    // Mostrar la matriz del Sudoku
    // Código para imprimir la matriz del Sudoku
     FinProcedimiento
     
</code>
</pre>
<br>    
