Ejercicios del 51 al 60 


<h2> Ejercicio 51 </h2>
<h3> Suma de Matrices: </h3>
<pre>
    <code>
    Algoritmo Ejercicico_59
	definir matriz,m_ordenado,fila,columna,op,contador,contador_correctos Como Entero
	Definir existe Como Logico            
	//matriz principal
	Dimension matriz[4,4]
	//matriz ordenada
	Dimension m_ordenado[4,4]            
	//Números desordenado y sin repetir
	para posicion=1 Hasta 15 Hacer
		Repetir
			existe = Verdadero
			f_aleatoria = Aleatorio(1,4)
			c_aleatoria = Aleatorio(1,4)
			si matriz[f_aleatoria,c_aleatoria] = 0 Entonces
				matriz[f_aleatoria, c_aleatoria] = posicion
				existe = Falso
			FinSi
		Hasta Que existe = Falso
	FinPara
	
	///arma auto
	para i = 1 Hasta 4 Hacer
		para j = 1 Hasta 4 Hacer
			contador = contador + 1 
			si contador < 15 Entonces
				matriz[i,j] = contador
			SiNo
				Si contador == 15 Entonces
					matriz[i,j] = 0;
					matriz[4,4] = 15; 
				FinSi
			FinSi
		FinPara
	FinPara   
	
	Repetir
		Limpiar Pantalla               
		Escribir 'Números en posición correctas: ' contador_correctos
		//Matriz principal
		fila = 0
		columna = 0
		para i=1 Hasta 4 Hacer
			para j=1 Hasta 4 Hacer
				si matriz[i,j] = 0 Entonces
					fila = i
					columna = j
				FinSi
				Escribir matriz[i,j] ' || ' Sin Saltar 
			FinPara
			Escribir ' '
		FinPara               
		//Opciones que puede escojer el usuario
		Escribir ' '
		Escribir 'seleccione una opción'
		Escribir '10. Salir'
		Escribir '8. Arriba'
		Escribir '2. Abajo'
		Escribir '4. Izquierda'
		Escribir '6. Derecha'
		Leer op               
		segun op Hacer
			2:
				//Proceso para mover el número hacia arriba
				si (fila + 1) < 5 Entonces
					matriz[fila,columna] = matriz[fila+1,columna]
					matriz[fila+1,columna] = 0
				FinSi
			4:
				//Proceso para mover el número hacia derecha
				si columna -1 > 0 Entonces
					matriz[fila,columna] = matriz[fila,columna-1]
					matriz[fila,columna-1] = 0
				FinSi
			6:
				//Proceso para mover el número hacia izquierda
				si columna +1 < 5 Entonces
					matriz[fila,columna] = matriz[fila,columna +1]
					matriz[fila,columna+1] = 0
				FinSi
			8:
				//Proceso para mover el número hacia abajo
				si fila -1 > 0 Entonces
					matriz[fila,columna] = matriz[fila-1,columna]
					matriz[fila - 1,columna] = 0
				FinSi
		FinSegun                
		//Matriz ordenada 
		contador_posicion = 0
		contador_correctos = 0
		para i = 1 Hasta 4 Hacer
			para j = 1 Hasta 4 Hacer
				contador_posicion = contador_posicion + 1;
				si matriz[i,j] == contador_posicion Entonces
					contador_correctos = contador_correctos + 1;
					Escribir contador_correctos
				FinSi
			FinPara
		FinPara
		 
	Hasta Que contador_correctos = 15 o op = 10
	si contador_correctos = 15 Entonces
		Limpiar Pantalla
		Escribir '  Felicidades, ¡Has ganado!'
	FinSi
	si op = 10 Entonces
		Limpiar Pantalla
		Escribir '¡Hasta luego!'
	FinSi  
	
	

	FinAlgoritmo


	

     
</code>
</pre>
<br>    

<h2> Ejercicio 52 </h2>
<h3> Promedio por Columna: </h3>
<pre>
    <code>
    
	    Algoritmo Generar_Figura_Progresiva
    Definir matriz Como Caracter
    Definir fila, columna, paso, posicion_inicial, posicion_actual Como Entero
    posicion_inicial = Aleatorio(1,25)
    posicion_actual = 0
    
    // Inicializar matriz de 5x5 con espacios en blanco
    Dimension matriz[5,5]
    Para fila <- 1 Hasta 5 Con Paso 1
        Para columna <- 1 Hasta 5 Con Paso 1
            posicion_actual = posicion_actual + 1
            Si(posicion_actual == posicion_inicial) Entonces
                matriz[fila, columna] = "*"
            Sino
                Si(matriz[fila, columna] <> "*") Entonces
                    matriz[fila, columna] = " "
                FinSi
            FinSi
        FinPara
    FinPara
    
    // Pedir al usuario las coordenadas de la figura
    Escribir "Ingrese la fila de la figura (1-5): "
    Leer fila
    Escribir "Ingrese la columna de la figura (1-5): "
    Leer columna
    
    Mientras paso <= 5 Hacer
        
        Limpiar Pantalla
        
        Segun paso Hacer
            Caso 0:
                matriz[fila, columna] = "*"
            Caso 1:
                matriz[fila - 1, columna] = "*"
                matriz[fila + 1, columna] = "*"
            Caso 2:
                matriz[fila, columna - 1] = "*"
                matriz[fila, columna + 1] = "*"
            Caso 3:
                matriz[fila - 1, columna - 1] = "*"
                matriz[fila + 1, columna + 1] = "*"
            Caso 4:
                matriz[fila - 1, columna + 1] = "*"
                matriz[fila + 1, columna - 1] = "*"
            Caso 5:
                Escribir "Estrella completa"
        FinSegun

        // Mostrar matriz
        Para fila <- 1 Hasta 5 Con Paso 1
            Para columna <- 1 Hasta 5 Con Paso 1
                Escribir Sin Saltar matriz[fila, columna]
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
	Algoritmo  DibujoProgresivoEstrella
	Definir matriz Como Caracter
	Definir i, j, posicion_inicial, posicion_actual Como Entero
	paso = 0
	posicion_inicial = Aleatorio(1,25);
	
	Dimension matriz[5,5]
	posicion_actual = 0;
	
	Para i = 1 Hasta 5 Con Paso 1
		Para j = 1 Hasta 5 Con Paso 1
			posicion_actual = posicion_actual + 1;
			Si(posicion_actual == posicion_inicial) Entonces
				matriz[i, 1] = "*";
				matriz[i, 2] = "*"
				matriz[i, 3] = "*"
				matriz[1, j] = "*";
				matriz[2, j] = "*"
				matriz[3, j] = "*"
				matriz[3, 1] = "*";
				matriz[3, 2] = "*"
				matriz[3, 3] = "*"
				matriz[4, j] = "*"
				matriz[4, j] = "*"
				matriz[4, j] = "*"
			
			SiNo
				Si(matriz[i, j] <> "*") Entonces
					matriz[i, j] = " ";
				FinSi
			FinSi
		FinPara
	FinPara
	
	Para i = 1 Hasta 5 Con Paso 1
		Para j = 1 Hasta 5 Con Paso 1
			Escribir  matriz[i, j] Sin Saltar;
		FinPara
		Escribir ""
	FinPara
	
    
	
	
	FinAlgoritmo
     
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

      Algoritmo LaberintoConObstaculos
    // Definir el laberinto, 0 = camino, 1 = obstáculo
    Dim laberinto[10,10] Como Entero
    laberinto[0,0] = 0; laberinto[0,1] = 0; laberinto[0,2] = 1; laberinto[0,3] = 0; laberinto[0,4] = 0; laberinto[0,5] = 0; laberinto[0,6] = 0; laberinto[0,7] = 0; laberinto[0,8] = 0; laberinto[0,9] = 0
    // ... Definir el resto del laberinto
    
    // Coordenadas de inicio y fin
    inicio_x = 0
    inicio_y = 0
    fin_x = 9
    fin_y = 9
    
    // Crear la cola para la búsqueda BFS
    Dim cola[1000,2] Como Entero
    cabeza = 0
    cola[0,0] = inicio_x
    cola[0,1] = inicio_y
    final = 1
    
    // Crear la matriz de distancias y marcar todas las celdas como no visitadas (-1)
    Dim distancia[10,10] Como Entero
    Para i = 0 Hasta 9 Hacer
        Para j = 0 Hasta 9 Hacer
            distancia[i,j] = -1
        FinPara
    FinPara
    
    distancia[inicio_x, inicio_y] = 0
    
    // Direcciones de movimiento: derecha, abajo, izquierda, arriba
    Dim direcciones[4,2] Como Entero
    direcciones[0,0] = 0; direcciones[0,1] = 1
    direcciones[1,0] = 1; direcciones[1,1] = 0
    direcciones[2,0] = 0; direcciones[2,1] = -1
    direcciones[3,0] = -1; direcciones[3,1] = 0
    
    // Búsqueda BFS
    Mientras cabeza < final Hacer
        actual_x = cola[cabeza,0]
        actual_y = cola[cabeza,1]
        cabeza = cabeza + 1
        
        Si actual_x = fin_x Y actual_y = fin_y Entonces
            // Se ha encontrado la salida
            Escribir "Se encontró el camino más corto con longitud: ", distancia[actual_x, actual_y]
            FinAlgoritmo
        FinSi
        
        Para i = 0 Hasta 3 Hacer
            nuevo_x = actual_x + direcciones[i,0]
            nuevo_y = actual_y + direcciones[i,1]
            
            Si nuevo_x >= 0 Y nuevo_x < 10 Y nuevo_y >= 0 Y nuevo_y < 10 Entonces
                Si laberinto[nuevo_x, nuevo_y] = 0 Y distancia[nuevo_x, nuevo_y] = -1 Entonces
                    distancia[nuevo_x, nuevo_y] = distancia[actual_x, actual_y] + 1
                    cola[final,0] = nuevo_x
                    cola[final,1] = nuevo_y
                    final = final + 1
                FinSi
            FinSi
        FinPara
    FinMientras
    
    // Si no se encuentra un camino
    Escribir "No se encontró un camino hasta la salida."
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
		matriz[1,3] = 5
		matriz[1,10]= 7
		matriz[2,3] = 0
		matriz[3,3] = 0
		matriz[4,3] = 0
		matriz[4,4] = 0
		matriz[4,5] = 0
		matriz[5,5] = 0
		matriz[6,5] = 0
		matriz[6,6] = 7
		matriz[6,7] = 7
		matriz[5,7] = 0
		matriz[5,8] = 0
		matriz[5,9] = 0
		matriz[6,9] = 0
		matriz[7,9] = 7
		matriz[8,9] = 7
		matriz[8,8] = 0
		matriz[9,8] = 0
		matriz[9,7] = 0
		matriz[9,3]=  7
		matriz[10,7] = 0            
		matriz[5,3] = 7
		matriz[4,7] = 0
		matriz[3,7] = 0
		matriz[6,3] = 0
		matriz[7,5] = 0
		matriz[7,6] = 0
		matriz[7,7] = 0
		matriz[7,8] = 0
		matriz[7,3] = 7
		matriz[8,3] = 0
		matriz[9,3] = 0
		matriz[9,4] = 0
		matriz[9,5] = 7 
		matriz[9,7] = 1
		matriz[10,7] = 1
		matriz[10,8] = 0

			Repetir
				Limpiar Pantalla
				fila = 0
				columna = 0                
				Para i=1 Hasta 10 Con Paso 1 Hacer
					para j=1 Hasta 10 Con Paso 1 Hacer
						si matriz[i,j] = 5 Entonces
							fila = i
							columna = j
						FinSi
						Escribir matriz[i,j] ' | ' Sin Saltar
					FinPara
					Escribir ' '
				FinPara                              
				Para i=1 Hasta 10 Con Paso 1 Hacer
					para j=1 Hasta 10 Con Paso 1 Hacer
						si matriz[i,j] = 5 Entonces
							si fila -1 > 0 y matriz[fila-1,columna] = 5 Entonces
								matriz[fila-1,columna] = 5
								matriz[fila,columna] = 0
							FinSi
							si matriz[fila+1,columna] = 0 Entonces
								matriz[fila+1,columna] = 5
								matriz[fila,columna] = 0
							FinSi
							si matriz[fila,columna+1] = 0 Entonces
								matriz[fila,columna+1] = 5
								matriz[fila,columna] = 0
							FinSi
						FinSi
					FinPara
				FinPara               
				Leer op                
			Limpiar Pantalla
		Hasta Que  matriz[10,8] == 5
		
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
     
    Algoritmo Ejercicico_59
	definir matriz,m_ordenado,fila,columna,op,contador,contador_correctos Como Entero
	Definir existe Como Logico            
	//matriz principal
	Dimension matriz[4,4]
	//matriz ordenada
	Dimension m_ordenado[4,4]            
	//Números desordenado y sin repetir
	para posicion=1 Hasta 15 Hacer
		Repetir
			existe = Verdadero
			f_aleatoria = Aleatorio(1,4)
			c_aleatoria = Aleatorio(1,4)
			si matriz[f_aleatoria,c_aleatoria] = 0 Entonces
				matriz[f_aleatoria, c_aleatoria] = posicion
				existe = Falso
			FinSi
		Hasta Que existe = Falso
	FinPara
	
	Repetir
		Limpiar Pantalla               
		Escribir 'Números en posición correctas: ' contador_correctos
		//Matriz principal
		fila = 0
		columna = 0
		para i=1 Hasta 4 Hacer
			para j=1 Hasta 4 Hacer
				si matriz[i,j] = 0 Entonces
					fila = i
					columna = j
				FinSi
				Escribir matriz[i,j] ' || ' Sin Saltar 
			FinPara
			Escribir ' '
		FinPara               
		//Opciones que puede escojer el usuario
		Escribir ' '
		Escribir 'seleccione una opción'
		Escribir '10. Salir'
		Escribir '8. Arriba'
		Escribir '2. Abajo'
		Escribir '4. Izquierda'
		Escribir '6. Derecha'
		Leer op               
		segun op Hacer
			2:
				//Proceso para mover el número hacia arriba
				si (fila + 1) < 5 Entonces
					matriz[fila,columna] = matriz[fila+1,columna]
					matriz[fila+1,columna] = 0
				FinSi
			4:
				//Proceso para mover el número hacia derecha
				si columna -1 > 0 Entonces
					matriz[fila,columna] = matriz[fila,columna-1]
					matriz[fila,columna-1] = 0
				FinSi
			6:
				//Proceso para mover el número hacia izquierda
				si columna +1 < 5 Entonces
					matriz[fila,columna] = matriz[fila,columna +1]
					matriz[fila,columna+1] = 0
				FinSi
			8:
				//Proceso para mover el número hacia abajo
				si fila -1 > 0 Entonces
					matriz[fila,columna] = matriz[fila-1,columna]
					matriz[fila - 1,columna] = 0
				FinSi
		FinSegun                
		//Matriz ordenada 
		contador_correctos = 0
		para i = 1 Hasta 4 Hacer
			para j = 1 Hasta 4 Hacer
				contador = contador + 1
				si contador <= 15 Entonces
					m_ordenado[i,j] = contador
				FinSi
				si matriz[i,j] == m_ordenado[i,j] Entonces
					contador_correctos = contador_correctos + 1
				FinSi
			FinPara
		FinPara              
	Hasta Que contador_correctos = 15 o op = 10
	si contador_correctos = 15 Entonces
		Limpiar Pantalla
		Escribir '  Felicidades, ¡Has ganado!'
	FinSi
	si op = 10 Entonces
		Limpiar Pantalla
		Escribir '¡Hasta luego!'
	FinSi  
	
	
	
	FinAlgoritmo


     
</code>
</pre>
<br>    

<h2> Ejercicio 60 </h2>
<h3> Sudoku Solver: </h3>
<pre>
    <code>

    Proceso ResolverSudoku

    // Definir la matriz del Sudoku
    Dimension sudoku[9, 9]
    // Esta matriz representa un Sudoku parcialmente lleno
    // Usa 0 para las celdas vacías
    
    // Inicialización del Sudoku (puedes cambiar estos valores para probar diferentes Sudokus)
    sudoku[0,0] = 5; sudoku[0,1] = 3; sudoku[0,2] = 0; sudoku[0,3] = 0; sudoku[0,4] = 7; sudoku[0,5] = 0; sudoku[0,6] = 0; sudoku[0,7] = 0; sudoku[0,8] = 0
    sudoku[1,0] = 6; sudoku[1,1] = 0; sudoku[1,2] = 0; sudoku[1,3] = 1; sudoku[1,4] = 9; sudoku[1,5] = 5; sudoku[1,6] = 0; sudoku[1,7] = 0; sudoku[1,8] = 0
    sudoku[2,0] = 0; sudoku[2,1] = 9; sudoku[2,2] = 8; sudoku[2,3] = 0; sudoku[2,4] = 0; sudoku[2,5] = 0; sudoku[2,6] = 0; sudoku[2,7] = 6; sudoku[2,8] = 0
    sudoku[3,0] = 8; sudoku[3,1] = 0; sudoku[3,2] = 0; sudoku[3,3] = 0; sudoku[3,4] = 6; sudoku[3,5] = 0; sudoku[3,6] = 0; sudoku[3,7] = 0; sudoku[3,8] = 3
    sudoku[4,0] = 4; sudoku[4,1] = 0; sudoku[4,2] = 0; sudoku[4,3] = 8; sudoku[4,4] = 0; sudoku[4,5] = 3; sudoku[4,6] = 0; sudoku[4,7] = 0; sudoku[4,8] = 1
    sudoku[5,0] = 7; sudoku[5,1] = 0; sudoku[5,2] = 0; sudoku[5,3] = 0; sudoku[5,4] = 2; sudoku[5,5] = 0; sudoku[5,6] = 0; sudoku[5,7] = 0; sudoku[5,8] = 6
    sudoku[6,0] = 0; sudoku[6,1] = 6; sudoku[6,2] = 0; sudoku[6,3] = 0; sudoku[6,4] = 0; sudoku[6,5] = 0; sudoku[6,6] = 2; sudoku[6,7] = 8; sudoku[6,8] = 0
    sudoku[7,0] = 0; sudoku[7,1] = 0; sudoku[7,2] = 0; sudoku[7,3] = 4; sudoku[7,4] = 1; sudoku[7,5] = 9; sudoku[7,6] = 0; sudoku[7,7] = 0; sudoku[7,8] = 5
    sudoku[8,0] = 0; sudoku[8,1] = 0; sudoku[8,2] = 0; sudoku[8,3] = 0; sudoku[8,4] = 8; sudoku[8,5] = 0; sudoku[8,6] = 0; sudoku[8,7] = 7; sudoku[8,8] = 9

    // Función para imprimir el Sudoku
    SubProceso ImprimirSudoku
        Para i = 0 Hasta 8 Con Paso 1
            Para j = 0 Hasta 8 Con Paso 1
                Escribir Sin Saltar sudoku[i, j], " "
            FinPara
            Escribir ""
        FinPara
    Fin SubProceso

    // Función para verificar si es seguro poner un número en una celda
    SubProceso EsSeguro(fila, columna, num) Como Logico
        // Verificar la fila
        Para i = 0 Hasta 8 Con Paso 1
            Si sudoku[fila, i] = num Entonces
                Retornar Falso
            FinSi
        FinPara
        
        // Verificar la columna
        Para i = 0 Hasta 8 Con Paso 1
            Si sudoku[i, columna] = num Entonces
                Retornar Falso
            FinSi
        FinPara
        
        // Verificar el subcuadro 3x3
        inicioFila = fila - (fila % 3)
        inicioColumna = columna - (columna % 3)
        Para i = 0 Hasta 2 Con Paso 1
            Para j = 0 Hasta 2 Con Paso 1
                Si sudoku[inicioFila + i, inicioColumna + j] = num Entonces
                    Retornar Falso
                FinSi
            FinPara
        FinPara
        
        Retornar Verdadero
    Fin SubProceso

    // Función principal para resolver el Sudoku
    SubProceso Resolver Como Logico
        // Buscar una celda vacía
        Para fila = 0 Hasta 8 Con Paso 1
            Para columna = 0 Hasta 8 Con Paso 1
                Si sudoku[fila, columna] = 0 Entonces
                    Para num = 1 Hasta 9 Con Paso 1
                        Si EsSeguro(fila, columna, num) Entonces
                            sudoku[fila, columna] = num
                            Si Resolver() Entonces
                                Retornar Verdadero
                            FinSi
                            sudoku[fila, columna] = 0
                        FinSi
                    FinPara
                    Retornar Falso
                FinSi
            FinPara
        FinPara
        Retornar Verdadero
    Fin SubProceso

    // Llamar a la función para resolver el Sudoku
    Si Resolver() Entonces
        Escribir "Sudoku resuelto:"
        ImprimirSudoku()
    SiNo
        Escribir "No se puede resolver este Sudoku"
    FinSi

    FinProceso
     
</code>
</pre>
<br>    
