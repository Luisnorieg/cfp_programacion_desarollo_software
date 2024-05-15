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
