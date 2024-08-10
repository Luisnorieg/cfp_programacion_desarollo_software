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
            
        Funcion m(x,suma,matriz)
            si x > 0 Entonces
                suma = suma + matriz[x]
                x = x - 1
                m(x,suma,matriz)
            SiNo
                Escribir suma
            FinSi
        FinFuncion
        Algoritmo Ejercicio_73
            Definir matriz Como Entero
            Dimension matriz[5]
            matriz[1]= 1
            matriz[2]= 2
            matriz[3]= 3
            matriz[4]= 4
            matriz[5]= 5
            m(5,0,matriz)
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 74 </h2>
<h3> Potencia: </h3>
<pre>
    <code>
            
        Funcion potencia(base,exponente,almacenar)
            si exponente > 0 Entonces
                almacenar = almacenar * base
                exponente = exponente - 1
                potencia(base,exponente,almacenar)
            SiNo
                Escribir almacenar
            FinSi
        FinFuncion
        Algoritmo Ejercicio_74
            potencia(5,3,1)
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 75 </h2>
<h3> Máximo común divisor (MCD): </h3>
<pre>
    <code>
            
        Funcion mcd(a,b,multi)
            si a >=1 y b >= 1 Entonces
                si trunc(a)%2 < 1 y trunc(b)%2 < 1 Entonces
                    Escribir a, ' - ' b ' | ' 2
                    a = a/2
                    b = b/2
                    multi = multi * 2
                    mcd(a,b,multi)
                SiNo
                    si trunc(a)%3 < 1 y trunc(b)%3 < 1 Entonces
                        Escribir a, ' - ' b ' | ' 3
                        a = a/3
                        b = b/3
                        multi = multi * 3
                        mcd(a,b,multi)
                    SiNo
                        si trunc(a)%5 < 1 y trunc(b)%5 < 1 Entonces
                            Escribir a, ' - ' b ' | ' 5
                            a = a/5
                            b = b/5
                            multi = multi * 5
                            mcd(a,b,multi)
                        SiNo
                            Escribir a, ' - ' b ' | MCD = ' multi
                        FinSi
                    FinSi
                FinSi
            FinSi
        FinFuncion
        Algoritmo Ejercicio_75
            mcd(50,70,1)
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 76 </h2>
<h3> Impresión inversa de una cadena: </h3>
<pre>
    <code>
        
        Funcion palabra(x,z)
            Definir resultado como cadena
            Definir total, cantidad Como Entero        
            si z >= 1 Entonces
                resultado = SubCadena(x,z,z)
                Escribir resultado Sin Saltar
                z = z-1
                palabra(x,z)
            FinSi
        FinFuncion
        Algoritmo Ejercicio_76
            text = 'universidad'
            palabra(text, Longitud(text))
            Escribir ' '
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 77 </h2>
<h3> Cálculo de la suma de dígitos: </h3>
<pre>
    <code>
            
            
        Funcion almacenar(x,z,suma)
            Definir resultado Como Caracter
            Definir convertir_num Como Entero         
            si z > 0 Entonces
                resultado = SubCadena(x,z,z)
                convertir_num = ConvertirANumero(resultado)
                suma = suma + convertir_num
                z = z - 1
                almacenar(x,z,suma)
            SiNo
                Escribir suma
            FinSi   
        FinFuncion
        Algoritmo Ejercicio_77
            Definir num Como Entero
            Definir convertir Como Caracter
            num = 1223
            convertir = ConvertirATexto(num)
            almacenar(convertir, Longitud(convertir),0)
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
