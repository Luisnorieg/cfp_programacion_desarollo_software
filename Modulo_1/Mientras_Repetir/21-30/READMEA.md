<h2> Ejercicio 21 </h2>
<h3> Contador Ascendente: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_21
            num = 0
            Mientras (num < 10) Hacer
                num = num + 1
                Escribir num
            Fin Mientras
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 22 </h2>
<h3> Contador Descendente: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_22
            num = 11
            Mientras num > 1 Hacer
                num = num - 1
                Escribir num
            Fin Mientras
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 23 </h2>
<h3> Suma de Números Positivos: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_23
            nu = 0
            num = 0
            Mientras nu > -1 Hacer
                num = num + nu
                Escribir num
                Leer nu
            Fin Mientras
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 24 </h2>
<h3> Adivina el Número: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_24
            num = 0
            nu_azar = azar(100)
            Mientras nu_azar <> num Hacer
                Escribir 'Escriba un número'
                Leer num
            FinMientras
            Escribir 'Ha Ganado!'
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 25 </h2>
<h3> Validación de Contraseña: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_25
            contra = 'hola'
            ingresar = ''
            Mientras contra <> ingresar Hacer
                Escribir 'Ingrese su contrasenia'
                leer ingresar
            FinMientras
            Escribir 'Contraseña correcta'
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 26 </h2>
<h3> Número Positivo: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_26
            Definir nu. num. pos Como Entero
            nu = 0
            num = 0
            Mientras nu < 1 Hacer
                num = num + nu
                pos = num * (-1)
                Escribir pos
                Leer nu
            Fin Mientras
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 27 </h2>
<h3> Suma de Números Pares: </h3>
<pre>
    <code>
        
        Algoritmo Ejercicio_27
            num = 0
            Repetir
                Escribir 'Ingrese un número'
                leer n
                modulo = n % 2
                si modulo = 0 Entonces
                    num = num + n
                FinSi
                Escribir num
                Escribir 'Desea ingresar otro número'
                Escribir 'Si = s    No = Cualquier tecla'
                Leer opc
            Hasta Que opc <> 's' 
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 28 </h2>
<h3> Adivina el Número (Repetir Hasta Acertar): </h3>
<pre>
    <code>
      
        
        Algoritmo Ejercicio_28
            nu_azar = Azar (50)
            n_intentos = 0
                Mientras nu_azar <> num Hacer
                    Escribir 'Escriba un número entre 1 y 50'
                    Leer num
                    n_intentos = n_intentos + 1
                FinMientras
                Escribir 'Ha Ganado!'
                Escribir 'Tus intentos fueron ' n_intentos
        FinAlgoritmo
    

  
</code>
</pre>
<br>    

<h2> Ejercicio 29 </h2>
<h3> Cálculo de Factorial: </h3>
<pre>
    <code>
      
        
        Algoritmo Ejercicio_29
            Definir num Como Entero
            Escribir 'Ingrese un número para vectoriar'
            num = 1
            Mientras num >= 1 Hacer
                nu = 0
                Leer num
                Repetir
                    n = n+1
                    Escribir n * 2
                Hasta Que n = num+1
            FinMientras
        FinAlgoritmo
    
  
 </code>
</pre>
<br>    

<h2> Ejercicio 30 </h2>
<h3> Validación de Entrada: </h3>
<pre>
    <code>
      
        
        Algoritmo Ejercicio_30
            Definir contra Como Caracter
            Definir digitos Como Entero
            Mientras digitos < 8 Hacer
                Escribir 'Ingrese su contraseña'
                Leer contra
                digitos = Longitud(contra)
            Fin Mientras
            Escribir 'Contraseña correcta'
        FinAlgoritmo
    
  
</code>
</pre>
<br>    