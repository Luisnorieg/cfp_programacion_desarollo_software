Ejercicios del 41 al 45 

<h2> Ejercicio 41 </h2>
<h3> Suma de Elementos: </h3>
<pre>
<code>
    Algoritmo Suma de Elementos
	    Definir notas, nota Como entero
	    Dimension notas[5]
	    notas[1]=nota
	    notas[2]=nota
	    notas[3]=nota
	    notas[4]=nota
	    notas[5]=nota
	    Para i=1 Hasta 5 Con Paso 1 Hacer
		Escribir "Ingrese el numero para la posicion ", i
		Leer notas[i]
		suma = notas[i] + suma
	    FinPara
	    Escribir suma
	FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 42 </h2>
<h3> Mayor y Menor en un Array: </h3>
<pre>
<code>
    Algoritmo Mayor y Menor en un Array
	    Definir arreglo como real 
	    Definir maximo Como Real
	    Definir minimo Como Real
	    Definir i Como Entero
	    Dimension num[8]
	    num[1]=i
	    num[2]=i
	    num[3]=i
	    num[4]=i
	    num[5]=i
	    num[6]=i
	    num[7]=i
	    num[8]=i
	    Escribir "Escribe un numero" 
	    para i=0 Hasta 8 Con Paso 1 Hacer
	        Escribir "Numero",  ":" 
		    Leer i 
	    FinPara
	    maximo <- i 
	    minimo <- i 
	    Para i<- 1 Hasta 8 Hacer
		    si  i > maximo Entonces
		    	maximo <- i 
		    FinSi
		    si i < minimo Entonces
		    	minimo <- i 
	    	FinSi
	    FinPara
	    Escribir "El maximo es" , maximo
	    Escribir "EL minimo es" , minimo
    FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 43 </h2>
<h3> Promedio de Notas: </h3>
<pre>
<code>
    Algoritmo Promedio de Notas
	    Definir notas, nota Como entero
	    Dimension notas[10]
	    Para i=1 Hasta 10 Con Paso 1 Hacer
		    Escribir "Ingrese el numero para la nota ", i
	    	Leer notas[i]
	    	suma=suma/notas[i]
	    FinPara
	
	    Escribir suma
    FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 44 </h2>
<h3> Contador de Números Pares: </h3>
<pre>
<code>
    Algoritmo Contador de Números Pares
	        Definir num1, contador Como Entero
	        Dimension num1[6]
	    Para i=1 hasta 6 Con Paso 1 Hacer
		    Escribir "ingrese la posicion", i
		    Leer num1[i]
	    FinPara
	    Para i=1 Hasta 6 Con Paso 1 Hacer
	    Si num1[i]%2=0 Entonces
			contador=contador+1

	    FinSi
	    FinPara
	    Escribir "La cantidad de numeros pares son" , contador
    FinAlgoritmo

    
</code>
</pre>
<br>    

<h2> Ejercicio 45 </h2>
<h3> Búsqueda de Elemento: </h3>
<pre>
<code>
    Algoritmo Búsqueda de Elemento
	    Definir num, i Como Entero
	    Definir caractern Como Caracter
	    Dimension caractern[7]
	    caractern[1]="1"
	    caractern[2]="2"
	    caractern[3]="3"
	    caractern[4]="4"
	    caractern[5]="5"
	    caractern[6]="6"
	    caractern[7]="7"
	
	    Escribir "¿Que numero quieres buscar?"
	    Leer num
	    Si num <=7
	    	Escribir "El numero se encuetra"
	    SiNo
	    	Escribir "el numero no se encuentra"
	    FinSi
	FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 46 </h2>
<h3> Inversión de un Array: </h3>
<pre>
<code>
    Algoritmo Inversión de un Array
	    Definir i Como Real
	    Dimension array[10]
	    Para i=1 Hasta 10 Con Paso 1 Hacer
		    array[i] = i
	    FinPara
	
	    Para i=10 Hasta 1 Con Paso -1 Hacer
		    Escribir array[i]
	    FinPara
    FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 47 </h2>
<h3> Contador de Ocurrencias: </h3>
<pre>
<code>
    Algoritmo Contador de Ocurrencias
	    Definir contador Como Entero
	    Definir caractern  Como Cadena
	    Dimensionar caractern(15)
	    caractern[1]  <- 'a'
	    caractern[2]  <- 'a'
	    caractern[3]  <- 'b'
	    caractern[4]  <- 'c'
	    caractern[5]  <- 'd'
	    caractern[6]  <- 'a'
	    caractern[7]  <- 'a'
	    caractern[8]  <- 'e'
	    caractern[9]  <- 'f'
	    caractern[10] <- 'g'
	    caractern[11] <- 'h'
	    caractern[12] <- 'i'
 	    caractern[13] <- 'j'
	    caractern[14] <- 'k'
	    caractern[15] <- 'l'
	    contador <- 0
	
	    Escribir 'Ingresa un caracter de la A a la C'
	    Leer caracter_ingresado
	
	    Para i<-1 Hasta 15 Con Paso 1 Hacer
		    Si caractern[i]=caracter_ingresado Entonces
			    contador = contador+1
		    FinSi
	    FinPara
	    Escribir contador
    FinAlgoritmo


</code>
</pre>
<br>    

<h2> Ejercicio 48 </h2>
<h3> Cálculo de Descuento por Categoría: </h3>
<pre>
<code>
    Algoritmo Cálculo de Descuento por Categoría
	    Definir categoria, producto Como Caracter
	    Dimension categoria[3,3]
	    Dimension producto[3,3]
	    categoria[1,1] ="a"
	    categoria[1,2]="b"
	    categoria[1,3]="c" 
	
	    producto[2,1]="camisa"
	    producto[2,2]="pantalones"
	    producto[2,3]= "zapatos"
	
	
	
	    para pf=1 Hasta  3 Con Paso 1 Hacer
		    Escribir producto[3,pf]
		Para cf=1 Hasta 3 Con Paso 1 Hacer
			Escribir categoria[1,pf]
			si producto[3,pf] == categoria[1,cf] Entonces
				Escribir categoria[2,cf]
				Escribir "111"
			FinSi
		FinPara
		Escribir "222"
	    FinPara
    FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 49 </h2>
<h3> Ordenamiento de Array: </h3>
<pre>
<code>
	Algoritmo Ordenamiento de Array
			Definir numero_1 Como Entero
			Dimension array[6]
			array[1]=20
			array[2]=50
			array[3]=72
			array[4]=5
			array[5]=9
			array[6]=3
	
		Para i=1 Hasta 6 Con Paso 1 Hacer
		Para j = i + 1 Hasta 6 Con Paso 1 Hacer
			Si array[i] > array[j] Entonces
				menor_a = array[j]
				array[j] = array[i];
				
				array[i] = menor_a;
			FinSi
			
		FinPara
		FinPara
	
		Para i=1 Hasta 6 Con Paso 1 Hacer
			Escribir array[i];
		FinPara
	FinAlgoritmo


</code>
</pre>
<br>    

<h2> Ejercicio 50 </h2>
<h3> Eliminación de Duplicados: </h3>
<pre>
<code>
    Algoritmo Eliminación de Duplicados
	    Definir numero_1 Como Entero
	    Dimension array[6]
	    array[1]=20
	    array[2]=50
	    array[3]=72
	    array[4]=5
	    array[5]=9
	    array[6]=3
	
	    Para i=1 Hasta 6 Con Paso 1 Hacer

		    Para j = i + 1 Hasta 6 Con Paso 1 Hacer
			    Si array[i] > array[j] Entonces
				    menor_a = array[j]
				    array[j] = array[i];
				    //-> 5 = 20
				    array[i] = menor_a;
				    //-> 20 = 5

			    FinSi
			
		    FinPara
	    FinPara
	
	    Para i=1 Hasta 6 Con Paso 1 Hacer
		    Escribir array[i];
	    FinPara
    FinAlgoritmo


    
</code>
</pre>
<br>    