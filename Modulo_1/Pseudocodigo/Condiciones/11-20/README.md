<h2> Ejercicio 11 </h2>
<h3> Número Positivo o Negativo: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_11
            Definir num Como Entero
            Escribir 'Ingrese un numero positivo o negativo'
            Leer num
            si (num < 0) Entonces
                Escribir 'Su nùmero es negativo'
            FinSi
            si (num > 0) Entonces
                Escribir 'su nùmero es positivo'
            FinSi
            si (num =0 ) Entonces
                Escribir 'Su numero es 0'
            FinSi
        FinAlgoritmo
    
 </code>
</pre>
<br>    

<h2> Ejercicio 12 </h2>
<h3> Par o Impar: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_12
            Definir num Como Entero
            Escribir 'Escriba un nùmero par o impar'
            Leer num
            modulo <- num % 2
            si (modulo = 0) Entonces
                Escribir 'Su nùmero es par'
            FinSi
            si (modulo = 1) Entonces
                Escribir 'Su nùmero es impar'
            FinSi
        FinAlgoritmo
</code>

</pre>
<br>    

<h2> Ejercicio 13 </h2>
<h3> Día de la Semana: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_13
            Definir num Como Entero
            Escribir 'Ingrese un nùmero del 1 al 7:'
            Leer num
            si (num = 1) Entonces
                Escribir 'Lunes'
            FinSi
            si (num = 2) Entonces
                Escribir 'Martes'
            FinSi
            si (num = 3) Entonces
                Escribir 'Miercoles'
            FinSi
            si (num = 4) Entonces
                Escribir 'Jueves'
            FinSi
            si (num = 5) Entonces
                Escribir 'Viernes'
            FinSi
            si (num = 6) Entonces
                Escribir 'Sabado'
            FinSi
            si (num = 7) Entonces
                Escribir 'Domingo'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 14 </h2>
<h3> Mayor de Tres Números: </h3>
<pre>
    <code>
        
        Algoritmo sin_titulo
            Definir uno,dos,tres Como Entero
            Escribir 'Primer número'
            Leer uno
            Escribir 'Segundo número'
            Leer dos
            Escribir 'Tercer número'
            Leer tres
            si (uno>dos y uno>tres) Entonces
                Escribir 'Tu primer número es el mayor'
            FinSi
            si (dos>uno y dos>tres) Entonces
                Escribir 'El segundo número es el mayor'
            FinSi
            si (tres>uno y tres>dos) Entonces
                Escribir 'El tercero es mayor'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 15 </h2>
<h3> Aprobado o Reprobado: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_15
            Definir num Como Entero
            Escribir 'Ingrese su nota'
            Leer num
            si (num > 60) Entonces
                Escribir 'Aprovado'
            FinSi
            si (num < 60) Entonces
                Escribir 'Reprovado'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 16 </h2>
<h3> Rango de Números: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_16
            Definir num Como Entero
            Escribir 'Ingrese un nùmero de 1 al 10'
            Leer num
            si (num > 0 y num <= 10) Entonces
                Escribir 'Nùmero dentro del rango'
            FinSi
            si no (num > 0 y num <= 10) Entonces
                Escribir 'Nùmero fuera del rango'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 17 </h2>
<h3> Categoría de Edad: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_17
            Definir num1 Como Entero
            Escribir 'Ingrese su edad'
            Leer num
            si (num >0 y num <=12)Entonces
                Escribir 'Eres un niño'
            FinSi
            si (num >12 y num <=17)Entonces
                Escribir 'Eres un adolescente'
            FinSi
            si (num >17 y num <=64)Entonces
                Escribir 'Eres un adulto'
            FinSi
            si (num >64)Entonces
                Escribir 'Eres un adulto mayor'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 18 </h2>
<h3> Calculadora de Descuento: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_18
            Definir precio Como Real
            Escribir 'Ingrese el precio del producto'
            Leer precio
            descuento = 10 * precio/ 100
            si (precio > 100) Entonces
                Escribir 'precio del producto es: ' precio
                Escribir 'Su descuento es de: ' descuento
                Escribir 'El precio con descuento es: ' precio - descuento
            FinSi
            si (precio <=100) Entonces
                Escribir 'Su producto no tiene descuento'
                Escribir 'El precio es: ' precio
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 19 </h2>
<h3> Divisibilidad por 5 y 3: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_19
            Definir num Como Entero
            Escribir 'Ingrese un nùmero devisible por 5 o 3'
            Leer num
            div5 = num % 5
            div3 = num % 3
            si (div3 = 0) Entonces
                Escribir 'su nùmero es divisible entre 3'
            FinSi
            si (div5 = 0) Entonces
                Escribir 'Su nùmero es divisible entre 5'
            FinSi
            si (div3 = 0) Entonces
                si (div5 = 0) Entonces
                    Escribir 'Su nùmero es divisible entre 3 y 5'
                FinSi
            FinSi
        FinAlgoritmo
    
 </code>
</pre>
<br>    

<h2> Ejercicio 20 </h2>
<h3> Día Hábil o Fin de Semana: </h3>
<pre>
    <code>     
        Algoritmo Ejercicio_20
            Definir num Como Entero
            Escribir 'Escriba un nùmero'
            Leer num
            si num = 1 Entonces
                Escribir 'Dia habil'
            FinSi
            si num = 2 Entonces
                Escribir 'Dia habil'
            FinSi
            si num = 3 Entonces
                Escribir 'Dia habil'
            FinSi
            si num = 4 Entonces
                Escribir 'Dia habil'
            FinSi
            si num = 5 Entonces
                Escribir 'Dia habil'
            FinSi
            si num = 6 Entonces
                Escribir 'Fin de semana'
            FinSi
            si num = 7 Entonces
                Escribir 'Fin de semana'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    
