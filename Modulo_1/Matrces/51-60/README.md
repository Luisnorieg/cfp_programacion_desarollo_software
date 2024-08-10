Ejercicios del 51 al 60 


<h2> Ejercicio 51 </h2>
<h3> Suma de Matrices: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_51
            Definir matriz1, matriz2 Como Entero
            Dimension matriz1[3,3]
            matriz1[1,1] = 1
            matriz1[1,2] = 2
            matriz1[1,3] = 3
            matriz1[2,1] = 4
            matriz1[2,2] = 5
            matriz1[2,3] = 6
            matriz1[3,1] = 7
            matriz1[3,2] = 8
            matriz1[3,3] = 9           
            Dimension matriz2[3,3]
            matriz2[1,1] = 11
            matriz2[1,2] = 12
            matriz2[1,3] = 13
            matriz2[2,1] = 14
            matriz2[2,2] = 15
            matriz2[2,3] = 16
            matriz2[3,1] = 17
            matriz2[3,2] = 18
            matriz2[3,3] = 19            
            para i=1 hasta 3 Con Paso 1 Hacer
                para j=1 hasta 3 Con Paso 1 Hacer
                    almacenar = almacenar + matriz1[i,j]
                FinPara
            FinPara
            Escribir almacenar            
            para i=1 hasta 3 Con Paso 1 Hacer
                para j=1 hasta 3 Con Paso 1 Hacer
                    almacenar = almacenar + matriz2[i,j]
                FinPara
            FinPara
            Escribir almacenar            
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 52 </h2>
<h3> Promedio por Columna: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_52
            Definir matriz Como Entero
            Dimension matriz[3,4]
            matriz[1,1] =1
            matriz[1,2] =2
            matriz[1,3] =3
            matriz[1,4] =4
            matriz[2,1] =5
            matriz[2,2] =6
            matriz[2,3] =7
            matriz[2,4] =8
            matriz[3,1] =9
            matriz[3,2] =10
            matriz[3,3] =11
            matriz[3,4] =12           
            Para i = 1 Hasta 4 Con Paso 1 Hacer
                para j = 1 Hasta 3 Con Paso 1 Hacer
                    almacenar = almacenar + matriz[j,i]
                FinPara
                Escribir almacenar / 3
                almacenar=0
            FinPara
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 53 </h2>
<h3> Suma de Diagonales: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_53
            Definir matriz Como Entero
            Dimension matriz[5,5]            
            matriz[1,1] =1
            matriz[1,2] =2
            matriz[1,3] =3
            matriz[1,4] =4
            matriz[1,5] =5            
            matriz[2,1] =6
            matriz[2,2] =7
            matriz[2,3] =8
            matriz[2,4] =9
            matriz[2,5] =10            
            matriz[3,1] =11
            matriz[3,2] =12
            matriz[3,3] =13
            matriz[3,4] =14
            matriz[3,5] =15            
            matriz[4,1] =16
            matriz[4,2] =17
            matriz[4,3] =18
            matriz[4,4] =19
            matriz[4,5] =20            
            matriz[5,1] =21
            matriz[5,2] =22
            matriz[5,3] =23
            matriz[5,4] =24
            matriz[5,5] =25            
            para i=1 Hasta 5 Con Paso 1 Hacer
                almacenar = almacenar + matriz[i,i]
            FinPara
            Escribir almacenar           
            para i= 1 Hasta 5 Con Paso 1 Hacer
                almacenar2 = almacenar2 + matriz[i,6-i]
            FinPara
            Escribir almacenar2
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 54 </h2>
<h3> Mayor elemento por fila: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_54
            Definir matriz Como Entero
            Dimension matriz[4,3]
            matriz[1,1] = 2
            matriz[1,2] = 1
            matriz[1,3] = 3            
            matriz[2,1] = 6
            matriz[2,2] = 5
            matriz[2,3] = 4            
            matriz[3,1] = 7
            matriz[3,2] = 9
            matriz[3,3] = 8           
            matriz[4,1] = 10
            matriz[4,2] = 20
            matriz[4,3] = 12            
            para i = 1 Hasta 4 con paso 1 Hacer
                almacenar = 0
                para j = 1 hasta 3 con paso 1 Hacer
                    si almacenar < matriz[i,j] Entonces
                        almacenar = matriz[i,j]
                    FinSi
                FinPara
                Escribir almacenar
            FinPara
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 55 </h2>
<h3> Rotación de Matriz: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_55
            Definir matriz Como Entero
            Dimension matriz[4,4]
            matriz[1,1] =1
            matriz[1,2] =2
            matriz[1,3] =3
            matriz[1,4] =4            
            matriz[2,1] =5
            matriz[2,2] =6
            matriz[2,3] =7
            matriz[2,4] =8            
            matriz[3,1] =9
            matriz[3,2] =10
            matriz[3,3] =11
            matriz[3,4] =12            
            matriz[4,1] =13
            matriz[4,2] =14
            matriz[4,3] =15
            matriz[4,4] =16            
            para i=1 Hasta 4 Con Paso 1 Hacer
                para j=1 Hasta 4 Con Paso 1 Hacer
                    Escribir matriz[i,j] '  |  ' Sin Saltar 
                FinPara
                Escribir ' '
            FinPara            
            Escribir ''           
            para i=1 Hasta 4 Con Paso 1 Hacer
                para j=4 Hasta 1 Con Paso -1 Hacer
                    Escribir matriz[j,i] '  |  ' Sin Saltar 
                FinPara
                Escribir ' '
            FinPara           
            Escribir ''           
            para i=4 Hasta 1 Con Paso -1 Hacer
                para j=1 Hasta 4 Con Paso 1 Hacer
                    Escribir matriz[j,i] '  |  ' Sin Saltar 
                FinPara
                Escribir ' '
            FinPara
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 56 </h2>
<h3> Laberinto: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_56
            Definir matriz, op Como Entero
            Dimension matriz[10,10]                       
            Para i=1 Hasta 10 Con Paso 1 Hacer
                para j=1 hasta 10 Con Paso 1 Hacer
                    matriz[i,j] = 1
                FinPara
            FinPara            
            Escribir ' '             
            //Camino correcto
            matriz[1,3] = 5
            matriz[2,3] = 0
            matriz[3,3] = 0
            matriz[4,3] = 0
            matriz[4,4] = 0
            matriz[4,5] = 0
            matriz[5,5] = 0
            matriz[6,5] = 0
            matriz[6,6] = 0
            matriz[6,7] = 0
            matriz[5,7] = 0
            matriz[5,8] = 0
            matriz[5,9] = 0
            matriz[6,9] = 0
            matriz[7,9] = 0
            matriz[8,9] = 0
            matriz[8,8] = 0
            matriz[9,8] = 0
            matriz[9,7] = 0
            matriz[10,7]=0            
            //Caminos erroneos
            matriz[5,3] = 0
            matriz[4,7] = 0
            matriz[3,7] = 0
            matriz[6,3] = 0
            matriz[7,5] = 0
            matriz[7,3] = 0
            matriz[8,3] = 0
            matriz[9,3] = 0
            matriz[9,4] = 0
            matriz[9,5] = 0           
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
                        Escribir matriz[i,j] '  ' Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara               
                Escribir ''
                //Opciones a escoger
                Escribir 'Seleccione una opci n:'
                Escribir ' 8. Arriba'
                Escribir ' 2. Abajo'
                Escribir ' 4. Izquierda'
                Escribir ' 6. Derecha'            
                //Opcion escogida
                Leer op                
                Segun op Hacer
                    8:
                        si fila -1 > 0 y matriz[fila-1,columna] = 0 Entonces
                            matriz[fila-1,columna] = 5
                            matriz[fila,columna] = 0
                        FinSi
                    2:
                        si matriz[fila+1,columna] = 0 Entonces
                            matriz[fila+1,columna] = 5
                            matriz[fila,columna] = 0
                        FinSi
                    4:
                        si matriz[fila,columna-1] = 0 Entonces
                            matriz[fila,columna-1] = 5
                            matriz[fila,columna] = 0
                        FinSi
                    6:
                        si matriz[fila,columna+1] = 0 Entonces
                            matriz[fila,columna+1] = 5
                            matriz[fila,columna] = 0
                        FinSi                    
                FinSegun               
            Hasta Que matriz[10,7] = 5
            Limpiar Pantalla
            Escribir '         Has ganado'
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 57 </h2>
<h3> Juego de la Vida (Conway's Game of Life): </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_57_2
            Definir mapa, minas Como caracter
            Definir opcion_us como entero
            Definir variable Como Logico
            Dimension mapa[10,10]          
            Para i=1 Hasta 10 Hacer
                para j=1 Hasta 10 Hacer
                    mapa[i,j] = '¤'
                FinPara
            FinPara            
            cantidad_minas = Aleatorio(5,6)           
            Para i = 1 hasta cantidad_minas Hacer
                f_aleatorio = Aleatorio(1,10)
                c_aleatorio = Aleatorio(1,10)
                mapa[f_aleatorio, c_aleatorio] = 'Ò'
                Escribir mapa[f_aleatorio,c_aleatorio]
            FinPara			            
            Limpiar Pantalla           
            Repetir
                contador = 0
                Escribir 'cantidad de minas: ' cantidad_minas
                Para i= 1 Hasta 10 Hacer
                    para j = 1 Hasta 10 Hacer
                        Escribir mapa[i,j] '  ' Sin Saltar
                    FinPara
                    Escribir '' 
                FinPara
                Escribir ' '
                Escribir 'Ingrese un número (1-100) para seleccionar una casilla'
                Escribir 'ingrese el número 0 para finalizar el juego'
                Leer opcion_us
                Para i= 1 Hasta 10 Hacer
                    para j = 1 Hasta 10 Hacer
                        contador = contador + 1
                        si contador = opcion_us Entonces
                            si mapa[i,j] = 'Ò' Entonces 
                                variable = Verdadero
                            SiNo
                                mapa[i,j] = ' '
                            FinSi
                        FinSi
                    FinPara
                FinPara              
            Hasta Que opcion_us = 0 o variable = Verdadero
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
            //Camino correcto
            matriz[1,3] = 5
            matriz[2,3] = 0
            matriz[3,3] = 0
            matriz[4,3] = 0
            matriz[4,4] = 0
            matriz[4,5] = 0
            matriz[5,5] = 0
            matriz[6,5] = 0
            matriz[6,6] = 0
            matriz[6,7] = 0
            matriz[5,7] = 0
            matriz[5,8] = 0
            matriz[5,9] = 0
            matriz[6,9] = 0
            matriz[7,9] = 0
            matriz[8,9] = 0
            matriz[8,8] = 0
            matriz[9,8] = 0
            matriz[9,7] = 0
            matriz[10,7] = 0            
            //Caminos erroneos
            matriz[5,3] = 0
            matriz[4,7] = 0
            matriz[3,7] = 0
            matriz[6,3] = 0
            matriz[7,5] = 0
            matriz[7,3] = 0
            matriz[8,3] = 0
            matriz[9,3] = 0
            matriz[9,4] = 0
            matriz[9,5] = 0           
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
                        Escribir matriz[i,j] '  ' Sin Saltar
                    FinPara
                    Escribir ' '
                FinPara                              
                Para i=1 Hasta 10 Con Paso 1 Hacer
                    para j=1 Hasta 10 Con Paso 1 Hacer
                        si matriz[i,j] = 5 Entonces
                            si fila -1 > 0 y matriz[fila-1,columna] = 0 Entonces
                                matriz[fila-1,columna] = 5
                                matriz[fila,columna] = 0
                            FinSi
                            si matriz[fila+1,columna] = 0 Entonces
                                matriz[fila+1,columna] = 5
                                matriz[fila,columna] = 0
                            FinSi
                            si matriz[fila,columna-1] = 0 Entonces
                                matriz[fila,columna-1] = 5
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
            Hasta Que matriz[10,7] = 5
            Limpiar Pantalla
            Escribir '         Has ganado'
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
            Hasta Que contador_correctos = 16 o op = 10
            si contador_correctos = 16 Entonces
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
        
    Algoritmo Ejercicio_60           
        Definir sudoku Como Entero
        Definir separador Como Caracter
        Definir existe Como Logico
        Dimension sudoku[9,9]           
        para f=1 Hasta 9 Hacer
            para c=1 Hasta 9 Hacer                  
                para num = 1 Hasta 9 Hacer
                    existe = Falso                      
                    Repetir
                        Para vc = 1 Hasta  9 Hacer
                            si num == sudoku[f,vc] Entonces
                                existe = Verdadero
                                vc = 9 
                            FinSi
                        FinPara                            
                        para vf = 1 Hasta 9 Hacer
                            si num == sudoku[vf,c] Entonces
                                existe = Verdadero
                                vf = 9
                            FinSi
                        FinPara                            
                        si f >= 1 y f <= 3 Entonces
                            inicio_fila = 1
                        SiNo
                            si f >= 4 y f <= 6 Entonces
                                inicio_fila = 4
                            SiNo
                                inicio_fila = 7
                            FinSi
                        FinSi                        
                        si c >= 1 y c <= 3 Entonces
                            inicio_columna = 1
                        SiNo
                            si c >= 4 y c <= 6 Entonces
                                inicio_columna = 4
                            SiNo
                                inicio_columna = 7
                            FinSi
                        FinSi                            
                        para i = inicio_fila Hasta  inicio_fila + 2 Con Paso  1 Hacer
                            Para j = inicio_columna Hasta inicio_columna + 2 Con Paso  1 Hacer
                                si num == sudoku[i,j] Entonces
                                    existe = Verdadero
                                    i = inicio_fila + 2
                                    j = inicio_columna + 2 
                                FinSi
                            FinPara
                        FinPara                             
                        si existe == Falso Entonces
                            sudoku[f,c] = num
                            num = 9
                        FinSi
                    Hasta Que existe == Verdadero
                FinPara
                si sudoku[f,c] == 0 Entonces
                    f = 1
                    c = 1
                FinSi  
            FinPara
        FinPara
        Para i = 1 Hasta 9 Con Paso 1 Hacer
            Para j = 1 Hasta 9 Con Paso 1 Hacer
                si j <> 3 y j <> 6 Entonces
                    Escribir sudoku[i,j], " " Sin Saltar
                SiNo
                    Escribir sudoku[i,j], "|" Sin Saltar
                FinSi
            FinPara
            Si i == 6 o i  == 3 Entonces
                Escribir " "
            FinSi
            Escribir ""
        Fin Para
    FinAlgoritmo

 
</code>
</pre>
<br>    