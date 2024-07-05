<h2> Ejercicio 71 </h2>
<h3> Factorial: </h3>
<pre>
    <code>
        Funcion factorial(n,resultado)
            si n > 0 Entonces
                resultado=resultado*n
                n=n-1;
                factorial(n,resultado);
            sino
                Escribir 'el factorial es ',resultado
            FinSi
        FinFuncion
        Algoritmo sin_titul
            factorial(3,1)
        FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 72 </h2>
<h3> Fibonacci: </h3>
<pre>
    <code>
        Funcion fibonacci(limite,anterior,actual)
            si limite > 0 y actual <= limite Entonces
                suma = anterior + actual
                anterior = actual
                actual = suma
                Escribir anterior
                fibonacci(limite,anterior,actual)                
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            fibonacci(5,0,1)           
        FinAlgoritmo
    </code>
</pre>
<br>    

<h2> Ejercicio 73 </h2>
<h3> Suma de elementos de un arreglo: </h3>
<pre>
    <code>
        Funcion array(x,resultado,limite)
            si limite>0 Entonces
                resultado = resultado + x[limite]
                limite = limite - 1
                array(x,resultado,limite)
            SiNo
                Escribir resultado
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Dimension array2[4] 
            array2[1] = 2
            array2[2] = 2
            array2[3] = 2
            array2[4] = 2
            array(array2,0,4)
        FinAlgoritmo
    </code>
</pre>
<br>    

<h2> Ejercicio 74 </h2>
<h3> Potencia: </h3>
<pre>
    <code>
        Funcion problema(veces,num,resultado)
            si num >= 1  entonces
                resultado = resultado*veces
                num = num-1;
                problema(veces,num,resultado);
            SiNo
                Escribir 'Base ',veces,' = ',resultado
                
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            problema(3,3,1)         
        FinAlgoritmo
</code>
</pre>
<br>    

<h2> Ejercicio 75 </h2>
<h3> Máximo común divisor (MCD): </h3>
<pre>
    <code>
        Funcion resultado <- mcd(num, num2)
            Si num2 == 0 Entonces
                resultado = num
            SiNo
                resultado = mcd(num2, num % num2)
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Escribir mcd(6,9)
        FinAlgoritmo
    </code>
</pre>
<br>    

<h2> Ejercicio 76 </h2>
<h3> Impresión inversa de una cadena: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 77 </h2>
<h3> Cálculo de la suma de dígitos: </h3>
<pre>
    <code>
        Funcion array(x,resultado,limite)
            si limite>0 Entonces
                resultado = resultado + x[limite]
                limite = limite - 1
                array(x,resultado,limite)
            SiNo
                Escribir resultado
            FinSi
        FinFuncion
        Algoritmo sin_titulo
            Dimension array2[4]
            array2[1] = 2
            array2[2] = 2
            array2[3] = 2
            array2[4] = 2
            array(array2 ,0, 4)
        FinAlgoritmo
    </code>
</pre>
<br>    

<h2> Ejercicio 78 </h2>
<h3> Torres de Hanoi: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 79 </h2>
<h3> Búsqueda binaria: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    

<h2> Ejercicio 80 </h2>
<h3> Generación de todas las permutaciones: </h3>
<pre>
    <code>
    </code>
</pre>
<br>    
