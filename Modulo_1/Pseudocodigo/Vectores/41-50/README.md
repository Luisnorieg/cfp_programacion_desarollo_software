Ejercicios del 41 al 45 

<h2> Ejercicio 41 </h2>
<h3> Suma de Elementos: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_41
            Definir num, suma, almacenar Como Entero
            Dimension almacenar[5]
            Para i=1 Hasta 5 Con Paso 1 Hacer
                Escribir 'Ingrese un nùmero'
                Leer num
                almacenar[i] = num
                suma = suma + almacenar[i]
            Fin Para
            Escribir suma
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 42 </h2>
<h3> Mayor y Menor en un Array: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_42
            Definir num, maximo, minimo Como reales
            Dimension num[8]
            num[1] = 1.1
            num[2] = 2.2
            num[3] = 3.3
            num[4] = 4.4
            num[5] = 5.5
            num[6] = 6.6
            num[7] = 7.7
            num[8] = 8.8
            minimo = num[1]
            maximo = num[1]
            Para i = 1 Hasta 8 Con Paso 1 Hacer
                si maximo num[i] Entonces
                    minimo = num[i]
                FinSi
            FinPara
            Escribir 'El valor maximo es: ' maximo
            Escribir 'El valor minimo es: ' minimo
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 43 </h2>
<h3> Promedio de Notas: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_43
            Definir nota, notas, suma, total Como Entero
            Dimension notas[10]
            para i=1 Hasta 10 Con Paso 1  Hacer
                Escribir 'Ingrese la nota'
                Leer nota
                notas[i] = nota
                suma = suma + notas[i]
            FinPara
            total = suma/10
            Escribir 'su promedio es: ' total
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 44 </h2>
<h3> Contador de Números Pares: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_44
            Definir num Como Entero
            Dimension num[6]
            num[1] = 6
            num[2] = 1
            num[3] = 3
            num[4] = 5
            num[5] = 2
            num[6] = 4
            Para i=1 Hasta 6 Con Paso 1 Hacer
                si num[i] % 2 = 0 Entonces
                    contador = contador + 1
                FinSi
            FinPara
            Escribir contador
        FinAlgoritmo
    
    
</code>
</pre>
<br>    

<h2> Ejercicio 45 </h2>
<h3> Búsqueda de Elemento: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_45
            Definir letra Como Caracter
            Definir almacenar Como logico
            Leer letra
            Dimension abecedario[7]
            abecedario[1] = 'a'
            abecedario[2] = 'b'
            abecedario[3] = 'c'
            abecedario[4] = 'd'
            abecedario[5] = 'd'
            abecedario[6] = 'f'
            abecedario[7] = 'g'
            almacenar = Falso
            Para i=1 Hasta 7 Con Paso 1 Hacer
                si letra = abecedario[i] Entonces
                    i = 7
                    almacenar = Verdadero
                FinSi
                Escribir 'hola'
            FinPara
            si almacenar Entonces
                Escribir 'Se encuentra su letra'
            SiNo
                Escribir 'su letra no se encuentra'
            FinSi
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 46 </h2>
<h3> Inversión de un Array: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_46
            Definir num Como Entero
            Dimension num[10]
            num[1] = 1
            num[2] = 2
            num[3] = 3
            num[4] = 4
            num[5] = 5
            num[6] = 6
            num[7] = 7
            num[8] = 8
            num[9] = 9
            num[10] = 10
            Para i=10 Hasta 1 Con Paso -1 Hacer
                num[i] = i
                Escribir num[i]
            Fin Para
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 47 </h2>
<h3> Contador de Ocurrencias: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_47
            Definir array, letra Como Caracter
            Dimension array[15]
            Escribir 'Ingrese un caracter'
            leer letra
            array[1] = 'a'
            array[2] = 'b'
            array[3] = 'c'
            array[4] = 'd'
            array[5] = 'e'
            array[6] = 'f'
            array[7] = 'g'
            array[8] = 'h'
            array[9] = 'i'
            array[10] = 'j'
            array[11] = 'k'
            array[12] = 'l'
            array[13] = 'm'
            array[14] = 'a'
            array[15] = 'a' 
            almacenar = 0
            Para i=1 Hasta 15 Con Paso 1 Hacer
                si letra = array[i] Entonces
                    almacenar = almacenar + 1
                FinSi
            FinPara
            si almacenar >=1
                Escribir almacenar
            sino
                Escribir 'Su caracter no aparece'
            FinSi
        FinAlgoritmo
    

</code>
</pre>
<br>    

<h2> Ejercicio 48 </h2>
<h3> Cálculo de Descuento por Categoría: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_48
            definir producto, categorias Como caracter
            Dimension producto[2,3], categorias[3,2]
            producto[1,1] = 'pantalon'
            producto[1,2] = '100'
            producto[1,3] = 'A'            
            producto[2,1] = 'Camisa'
            producto[2,2] = '85'
            producto[2,3] = 'B'           
            categorias[1,1] = 'A'
            categorias[1,2] = '10'           
            categorias[2,1] = 'B'
            categorias[2,2] = '5'            
            categorias[3,1] = 'c'
            categorias[3,2] = '0'           
            Para f = 1 Hasta 2 Con Paso 1 Hacer
                para c = 1 Hasta 3 Con Paso 1 Hacer
                    si producto[f,3] = categorias[c, 1] Entonces
                        descuento = ConvertirANumero(producto[f,2]) * ConvertirANumero(categorias[c,2]) / 100
                        resultado = ConvertirANumero(producto[f,2]) - descuento
                        Escribir producto[f,1], '|' categorias[c,1], '|', descuento, '|', resultado 
                        c = 3
                    FinSi
                FinPara
            FinPara
        FinAlgoritmo
    
</code>
</pre>
<br>    

<h2> Ejercicio 49 </h2>
<h3> Ordenamiento de Array: </h3>
<pre>
<code>
	    
        Algoritmo Ejercicio_49
            Definir num, maximo, ordenar Como Entero
            Dimension num[6]
            Dimension ordenar[6]
            num[1] = 5
            num[2] = 4
            num[3] = 3
            num[4] = 6
            num[5] = 8
            num[6] = 7
            Para i=1 Hasta 6 Con Paso 1 Hacer
                minimo = num[i]
                para p = i+1 Hasta 6 Con Paso 1 hacer
                    si num[i] > num[p] Entonces
                        num[i] = num[p]
                        num[p] = minimo
                        minimo = num[i]
                    FinSi
                FinPara
                Escribir num[i]
            FinPara
        FinAlgoritmo
    


</code>
</pre>
<br>    

<h2> Ejercicio 50 </h2>
<h3> Eliminación de Duplicados: </h3>
<pre>
<code>
        
        Algoritmo Ejercicio_50
            definir array, nuevo_array Como Entero
            Dimension nuevo_array[12]
            Dimension array[12]
            array[1] =5
            array[2] =5
            array[3] =2
            array[4] =3
            array[5] =4
            array[6] =5
            array[7] =6
            array[8] =6
            array[9] =7
            array[10] =8
            array[11] =9
            array[12] =10
            existe = Falso
            ultima_posicion = 1
            Para i = 1 Hasta 12 Con Paso 1 Hacer
                Para p = 1 Hasta 12 Con Paso 1 Hacer
                    si nuevo_array[p] = array[i]  Entonces
                        existe = Verdadero
                        p=12
                    SiNo
                        existe = Falso
                    FinSi
                Fin Para
                si existe = Falso Entonces
                    Escribir array[i]
                    nuevo_array[ultima_posicion] = array[i]
                    ultima_posicion = ultima_posicion + 1
                FinSi
            Fin Para
        FinAlgoritmo
    
</code>
</pre>
<br>    