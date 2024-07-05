
<h2> Ejercicio 61 </h2>
<h3> Suma de dos números: </h3>
<pre>
<code>
    Funcion sumar <- suma(a,b)
	sumar=a+b 
	Escribir sumar
FinFuncion

Algoritmo suma_de_numeros

	Escribir "ingrese el primer numero que desea sumar" 
	Leer num1 
	Borrar Pantalla
	scribir "Ingrese el segundo numero que desea sumar"
	Leer num2
	Borrar Pantalla
	
	sumar = num1 + num2
	
	Escribir sumar
	Escribir ""
FinAlgoritmo

</code>
</pre>
<br>    

<h2> Ejercicio 62 </h2>
<h3> Factorial de un número: </h3>
<pre>
<code>
    Funcion multi = nums(x)
	multi = 1
	para i = 1 Hasta x Hacer
		multi = multi*i
	FinPara
FinFuncion
Algoritmo Factorial1
	Escribir "ingresa un numero"
	Leer num
	multi = nums(num)
	Escribir "EL factorial es " multi
FinAlgoritmo

</code>
</pre>
<br>    

<h2> Ejercicio 63 </h2>
<h3> Mayor de tres números: </h3>
<pre>
<code>
    Funcion no_mayor = nums(a,b,c)
	si a > b y b > c Entonces
		no_mayor = a
	FinSi
	si b > c y b > a Entonces
		no_mayor = b
	FinSi
	si c > a y c > b Entonces
		no_mayor = c
	FinSi
FinFuncion
Algoritmo Valor_mayor
	Escribir "Ingrese el primer valor"
	Leer num1
	Borrar Pantalla
	Escribir "Ingrese el segundo valor"
	Leer num2
	Borrar Pantalla
	Escribir "Ingrese el tercer valor"
	Leer num3
	no_mayor = nums(num1,num2,num3)
	Escribir no_mayor
FinAlgoritmo

</code>
</pre>
<br>    

<h2> Ejercicio 64 </h2>
<h3> Área de un círculo: </h3>
<pre>
<code>
    Funcion Fahrenheit <- fahre (f, c)
	f = c * (9 / 5 )+ 32
FinFuncion

Algoritmo Fahrenheit
	Escribir "ingrese los grados Fahrenheit para convertilos a Celcius"
	Leer num
	f = num * (9 / 5 )+ 32
	Borrar Pantalla
	Escribir "Conversión de grados Celsius a Fahrenheit es " f
	Escribir ''
		
FinAlgoritmo

</code>
</pre>
<br>    

<h2> Ejercicio 65 </h2>
<h3> Potencia de un número: </h3>
<pre>
    <code>
        Funcion resultado <- Potencia (base, exponente)
        Si exponente=0 Entonces
            resultado <- 1;
        sino 
            resultado <- base*Potencia(base,exponente-1); 
        FinSi
        FinFuncion

        Algoritmo potencia1
            Escribir "Ingrese Base"
            Leer base
	        Borrar Pantalla
            Escribir "Ingrese Exponente"
            Leer exponente
	        Borrar Pantalla
            Escribir "El resultado es ",Potencia(base,exponente) 
        FinAlgoritmo

</code>
</pre>
<br>    

<h2> Ejercicio 66 </h2>
<h3> Ordenamiento de una lista: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 67 </h2>
<h3> Promedio de una lista: </h3>
<pre>
<code>
        Funcion prom <- Promedio ( arreglo, cantidad )
	suma <- 0
	Para i<-1 Hasta cantidad Hacer
		suma <- suma + arreglo[i]
	FinPara
	prom <- suma/cantidad
FinFuncion

Algoritmo Promedio1
	
	Dimension datos[100]
	Escribir "Ingrese la cantidad de datos:"
	Leer n
	Escribir ""
	Borrar Pantalla
	
	Para i<-1 Hasta n Hacer
		Escribir "Ingrese el dato ",i,":"
		Leer datos[i]
	FinPara
	Borrar Pantalla
	Escribir "El promedio es: ",Promedio(datos,n)
	Escribir ''
	
FinAlgoritmo


</code>
</pre>
<br>    

<h2> Ejercicio 68 </h2>
<h3> Inversión de una cadena: </h3>
<pre>
    <code>
	    Funcion convertir(i,a,resultado)
            Para i= Longitud(a) Hasta 1 Con Paso -1 Hacer
                Escribir Subcadena(a, i,i ) Sin Saltar
            FinPara
            Escribir ""
        FinFuncion
        Algoritmo sin_titulo
            convertir(1,'hola',1)
            FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 69 </h2>
<h3> Verificación de número primo: </h3>
<pre>
    <code>
	    Funcion resultado<-primo(num)
            Definir divisor, limite Como Entero
            
            resultado = Verdadero
            limite = redon(raiz(num))
            divisor = 2
            
            si num <= 1 Entonces
                resultado = Falso
            SiNo
                Mientras resultado Y divisor <= limite Hacer
                    Si num % divisor == 0 Entonces
                        resultado = Falso
                    SiNo
                        divisor = divisor + 1
                    FinSi
                FinMientras
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Leer num
            Imprimir primo(num)
        FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 70 </h2>
<h3> Conversión de grados Celsius a Fahrenheit: </h3>
<pre>
<code>
    Funcion Fahrenheit <- fahre (f, c)
	f = c * (9 / 5 )+ 32
FinFuncion

Algoritmo Fahrenheit
	Escribir "ingrese los grados Fahrenheit para convertilos a Celcius"
	Leer num
	f = num * (9 / 5 )+ 32
	Borrar Pantalla
	Escribir "Conversión de grados Celsius a Fahrenheit es " f
	Escribir ''
		
		
		
		
FinAlgoritmo

</code>
</pre>
<br>    
