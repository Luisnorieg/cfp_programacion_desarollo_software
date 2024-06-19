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
     
</code>
</pre>
<br>    

<h2> Ejercicio 57 </h2>
<h3> Juego de la Vida (Conway's Game of Life): </h3>
<pre>
    <code>

    
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
     
     
</code>
</pre>
<br>    

<h2> Ejercicio 60 </h2>
<h3> Sudoku Solver: </h3>
<pre>
    <code>
     
</code>
</pre>
<br>    
