<h2> Ejercicio 1 </h2>
<h3> Calculadora Simple: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_1
            Escribir 'Ejercicio 1'
            Definir num1 Como Real
            Definir num2 Como Real
            Escribir 'Ingrese dos nùmeros para operar'
            Leer num1 
            Leer num2
            Escribir 'la suma de ' num1 ' y el ' num2 ' es '  num1 + num2
            Escribir 'la resta de ' num1 ' y el ' num2 ' es '  num1 - num2
            Escribir 'la multiplicaciòn de ' num1 ' y el ' num2 ' es '  num1 * num2
            Escribir 'la divisiòn de ' num1 ' y el ' num2 ' es '  num1 / num2
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 2 </h2>
<h3> Área y Perímetro del Rectángulo: </h3>
<pre>
    <code>
        
        Algoritmo sin_titulo
            Escribir 'Ejercicio 2'
            Definir Altura1 Como Real
            Definir Base1 Como Real
            Escribir 'Calcular el area y el perimetro'
            Escribir 'Ingrese la altura a calcular'
            Leer altura1
            Escribir 'Ingrese la base'
            Leer Base1
            Escribir 'El area es:' Altura1 * Base1
            Escribir 'El perimetro es: ' (Altura1 + Base1) * 2
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 3 </h2>
<h3> Promedio de Tres Números: </h3>
<pre>
    <code>    
        Algoritmo sin_titulo
            Escribir 'Ejercicio 3'
            Definir n1 Como Real
            Definir n2 Como Real
            Definir n3 como real
            Escribir 'Promedio de 3 nùmeros'
            Escribir 'Ingrese el primer nùmero:'
            Leer n1
            Escribir 'Ingrese el segundo nùmero:'
            Leer n2
            Escribir 'Ingrese el tercer nùmero:'
            Leer  n3
            Escribir 'Su promedio es:' (n1+n2+n3) / 3
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 4 </h2>
<h3> Conversión de Temperatura: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_4
            Definir num1 como entero
            Definir num2 Como Entero
            Definir num3 Como Entero
            Escribir 'Ingrese 3 nùmeros'
            Leer num1
            Leer num2
            Leer num3
            si (num1 < num2 y num2 < num3) Entonces
                Escribir num3 'Es el nùmero mayor'
            FinSi
            si (num2 < num3 y num3 < num1 ) Entonces
                Escribir num1 'Es el nùmero mayor'
            FinSi
            si (num3 < num1 y num1 < num2 ) Entonces
                Escribir num2 'Es el nùmero mayor'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 5 </h2>
<h3> Edad en Días: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_5
            Definir edad1 Como Entero
            Escribir 'Edad en dias'
            Escribir 'Ingrese su edad'
            Leer edad1
            Escribir 'Su edad en dias es: ' edad1*365
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 6 </h2>
<h3> Costo de Llamada Telefónica: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_6
            Definir minutos_usados Como Real
            Escribir 'pago por llamadas'
            Escribir 'Ingrese la cantidad de minutos usados'
            Leer minutos_usados
            Escribir 'Su saldo a pagar es de: ' minutos_usados*0.50 ' Quetzales'
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 7 </h2>
<h3> Cálculo de Descuento: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_7
            Definir precio Como Real
            Escribir 'Ingrese el precio del producto'
            leer precio
            Escribir 'Valor del producto: Q' precio
            Escribir 'Cantidad a descontar: Q' 10*precio/100
            Escribir 'El valor con descuento es: Q' precio-(10*precio/100)
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 8 </h2>
<h3> Días a Segundos: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_8
            Definir dia Como Entero
            Escribir 'Ingrese el nùmero de dias a convertir a segundos'
            Leer dia
            Escribir 'la cantidad de segundos es: ' dia*24*60*60
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 9 </h2>
<h3> Circunferencia y Área del Círculo: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_9
            Definir Radio como real
            Escribir 'Circuferencia de un circulo'
            Escribir 'Ingrese el radio del circulo:'
            Leer Radio 
            Escribir 'la circuferencia es: ' Radio*Radio*3.1416 	
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 10 </h2>
<h3> Minutos a Horas y Minutos: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_10
            definir minutos como enteros
            Escribir 'Convertir minutos a horas'
            Escribir 'Ingrese los minutos'
            Leer minutos
            mins = minutos/60
            Escribir 'La candidad de horas de: ' mins
        FinAlgoritmo
    
</code>
</pre>
<br>    
