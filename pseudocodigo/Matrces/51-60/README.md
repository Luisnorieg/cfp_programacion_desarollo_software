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
