<h2>Ejercicio 41</h2>
<pre>
    <code>
        Algoritmo ejercicio_41
            definir i,j Como Entero;
            i <- 1;
            j <- 1;
            para i<-1 hasta 10 hacer
                escribir 'tabla del ' ,i;
                para j<-1 Hasta 10 Hacer
                    Escribir i, 'x',j,'=',i*j;
                    
                FinPara
                escribir '';
            FinPara
            
        FinAlgoritmo

</code>
</pre>    
<br> 

<h2>Ejercicio 42</h2>
<pre>
    <code>
        Algoritmo ejercicio_42
            definir i,j Como Entero;
            i<-0
            j<-0
            para i<-10 Hasta 1 Con Paso -1 Hacer
                j=i;
                factorial=1;
                Mientras  j>0 Hacer
                    factorial=factorial*j
                    j=j-1;
                FinMientras
                Escribir 'el factorial de  ', i ,'es', factorial;
            FinPara
            
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 43</h2>
<pre>
    <code>
        Algoritmo ejercicio_43
            definir alto,ancho Como Entero
            ancho=0
            alto=0
            escribir 'ingrese el numero de asteriscos para el ancho'
            leer ancho
            guardar_ancho=ancho;
            
            Escribir 'ingrese el numero de asteriscos para el alto'
            Leer alto
            guardar_alto=alto
            
            Mientras alto>0 Hacer
                ancho=guardar_ancho
                Mientras ancho>0 Hacer
                    Escribir '*' Sin Saltar
                    ancho=ancho-1;
                FinMientras
                Escribir ''
                alto=alto-1;
            FinMientras
        FinAlgoritmo

</code>
</pre>    
<br>

<h2>Ejercicio 44</h2>
<pre>
    <code>
        Algoritmo ejercicio_44
            definir i, j Como Entero
            Escribir 'ingrese la cantida de filas';
            Leer filas
            para i<-1 Hasta filas Con Paso 1  Hacer
                para j<-1 Hasta i Con Paso 1 Hacer
                    escribir '*' Sin Saltar
                FinPara
                Escribir '';
            FinPara
            
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 45</h2>
<pre>
    <code>
        Algoritmo ejercicio_45
            definir alto, ancho Como Entero
            ancho=0
            alto=0
            i<-0;
            j<-0;
            escribir 'ingrese el numero de asteriscos para el ancho'
            leer ancho
            Escribir 'ingrese el numero de asteriscos para el alto'
            Leer alto
            Para i<-1 Hasta alto Con Paso 1 Hacer
                para j<-1 Hasta ancho Con Paso 1 Hacer
                    Si i=1 | j=1 | i=alto | j=ancho Entonces
                        Escribir '*' Sin Saltar
                    SiNo
                        Escribir ' ' Sin Saltar
                    Fin Si
                FinPara
                Escribir ' ';
            FinPara
        FinAlgoritmo

 </code>
</pre>    
<br>

<h2>Ejercicio 46 </h2>
<pre>
    <code>
        Algoritmo ejercicio_46
            Definir i,j Como Entero
            i=0
            j=0
            escribir 'ingrese el numero de astericos que quiere de lado'
            Leer lado
            para i<-1 Hasta lado Con Paso 1 Hacer
                para j<-1 Hasta lado Con Paso 1 Hacer
                    Si i=j | i+j=lado+1 Entonces
                        Escribir '*' Sin Saltar
                    SiNo
                        Escribir ' 'Sin Saltar;
                    Fin Si
                FinPara
                Escribir ' ' ;
            FinPara
        FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 47</h2>
<pre>
    <code>
        Algoritmo ejercicio_47
            Definir num, suma Como Entero;
            Dimension num[3];
            suma=0;
            i=0;
            para i<-1 Hasta 2  Con Paso 1 Hacer
                escribir 'ingrese un valor', i+1, 'del vector';
                Leer num[i];
                suma=suma+num[i]+2
                
            FinPara
            Escribir 'el modulo es: ' ,rc(suma);
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 48</h2>
<pre>
    <code>
        Algoritmo ejercicio_48
            definir  notas Como Real
            Dimension notas[5]
            
            suma=0
            may=0
            men=0
            i=1
            para i=1 Hasta 5 Con Paso 1 Hacer
                Escribir "ingresa una nota"
                Leer notas[i]
                suma=suma+notas[i];
                si i=0 Entonces
                    may=notas[i];
                    men=notas[i];
                FinSi
                si notas[i]>may Entonces
                    may=notas[i];
                FinSi
                si notas[i]<men Entonces
                    men=notas[i];
                FinSi
            FinPara
            Escribir 'la media es ' suma/5
            Escribir 'la mayor es ' may
            Escribir 'la menor es ' men
            
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 49</h2>
<pre>
    <code>
        Algoritmo ejercicio_49
            definir lista, num, cantidad, contador Como Entero;
            Dimension lista[cantidad]
            i=1
            cantidad=0
            contador=0
            Escribir 'ingrese la cantidad de nuemero que quiere en la lista'
            Leer cantidad;
            Escribir 'que numero quiere buscar en la lista'
            Leer num;
            para i=0 Hasta cantidad Con Paso 1 Hacer
                Escribir 'ingrese un numero';
                Leer lista[i];
                si lista[i]=num Entonces
                    contador=contador+1;
                FinSi
            FinPara
            Escribir 'el numero ',num,' aparece ',contador,' veces'
        FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 50</h2>
<pre>
    <code>
        Algoritmo ejercicio_50
            Definir i,j, memoria Como Entero
            Dimension  lista[5];
            
            para i<-1 hasta 5 Hacer
                Escribir 'ingresa un numero'
                Leer lista[i]
            FinPara
            
            para j<-1 Hasta 4 Hacer
                para i<-1 Hasta 3-j Con Paso 1 Hacer
                    si lista[i]<lista[i+1] Entonces
                        memoria=lista[i+1];
                        lista[i+1]=lista[i];
                        lista[i]=memoria
                    FinSi
                FinPara
            FinPara
            
            para i=1 Hasta 5 Con Paso 1 Hacer
                Escribir lista[i],' ' Sin Saltar
            FinPara
            Escribir ''
        FinAlgoritmo
 </code>
</pre>    
<br>

<h2>Ejercicio 51</h2>
<pre>
    <code>
        Algoritmo ejercicio_51
            definir i, j, men, memoria, lista Como Entero
            Dimension lista[5]
            i<-1
            j<-1
            
            para i<-1 Hasta 5 Con Paso 1 Hacer
                lista[i]= azar(10);
            FinPara
            
            Para j<-1 Hasta 4 Hacer
                men=lista[1];
                pmen=0;
                
                para i<-1 Hasta 5-j Hacer
                    si lista[i]<men Entonces
                        pmen=i;
                        men=lista[pmen];
                    FinSi
                FinPara
                memoria=lista[5-j];
                lista[5-j]=lista[pmen]
                lista[pmen]=memoria;
            FinPara
            
            para i<-1 Hasta 5 Hacer
                Escribir lista[i],' ' Sin Saltar
            FinPara
        FinAlgoritmo
</code>
</pre>    
<br>

<h2>Ejercicio 52</h2>
<pre>
    <code>
        Algoritmo ejercicio_52
            definir f, c, array Como Entero
            Dimension array[3,3];
            f<-1
            c<-1
            para f<-1 Hasta 3 Con Paso 1 Hacer
                para c<-1 Hasta 3 Con Paso 1 Hacer
                    array[f,c]= Aleatorio(1,10);
                FinPara
            FinPara
            Escribir 'array original'
            para f<-1 Hasta 3 Con Paso 1 Hacer
                para c<-1 Hasta 3 Con Paso 1 Hacer
                    Escribir array[f,c], ' ' Sin Saltar
                FinPara
                Escribir ' ';
            FinPara
            
            Escribir 'array transpuesto'
            para f<-1 Hasta 3 Con Paso 1 Hacer
                para c<-1 Hasta 3 Con Paso 1 Hacer
                    escribir array[c,f], ' ' Sin Saltar
                FinPara
                Escribir ' ';
            FinPara
            
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 53</h2>
<pre>
    <code>
        Algoritmo ejercicio_53
Definir n, m, num, contador Como Entero
Dimension matriz[5, 5] 

    Para i <- 1 Hasta 5 Hacer
        Para j <- 1 Hasta 5 Hacer
            matriz[i, j] <- Aleatorio(1, 10) 
        FinPara
    FinPara
	
    
    Escribir "Ingresa un número para buscar en la matriz:"
    Leer num
	
    contador <- 0
    Para i <- 1 Hasta 5 Hacer
        Para j <- 1 Hasta 5 Hacer
            Si matriz[i, j] = num Entonces
                contador <- contador + 1
            FinSi
        FinPara
    FinPara

    Escribir "El número ", numero, " aparece ", contador, " veces en la matriz."
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 54</h2>
<pre>
    <code>
        Algoritmo ejercicio_54
	Definir pl,p, suma,may,mayp,edificio Como Entero
	Dimension edificio[4,3];
	Dimension suma[4];
	
	para i<-1 Hasta 4 Hacer
		suma[i]<-0;
	FinPara
	
	para pl<-1 Hasta 4 Con Paso 1 Hacer
		para p<-1 Hasta 3  Con Paso 1 Hacer
			Escribir 'cuantas personas viven en la planta'
			Leer edificio[pl,p];
			suma[pl]<-suma[pl]+edificio[pl,p];
		FinPara
		
		si suma[pl]>may Entonces
			may<- suma[pl];
			mayp<-pl;
		FinSi
	FinPara
	Escribir 'la planta con mas vecino es: ',mayp+1, ' con ',may,' vecinos';
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 55</h2>
<pre>
    <code>
        Algoritmo ejercicio_55
Definir i, j, minimo, matriz Como Entero 
Dimension  matriz[3, 3]
	
	Para i <- 1 Hasta 3 Hacer
		Para j <- 1 Hasta 3 Hacer
			matriz[i, j] <- Aleatorio(1, 10);
		FinPara
	FinPara
	
	
	Para j <- 1 Hasta 3 Hacer
		minimo <- matriz[1, j]
		Para i <- 2 Hasta 3 Hacer
			Si matriz[i, j] < minimo Entonces
				minimo <- matriz[i, j]
			FinSi
		FinPara
		Escribir "El número menor en la columna ", j, " es: ", minimo
	FinPara
	

FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 56</h2>
<pre>
    <code>
        Algoritmo ejercicio_56
	Definir frase,letra como texto;
	Definir cantidad Como Entero;
	frase="";
	letra="";
	encontrada=Falso;
	Escribir 'ingrese una frase'
	Leer frase
	
	Escribir 'ingrese la letra que desea buscar'
	Leer letra
	cantidad=Longitud(frase);
	para i<-1 Hasta cantidad-1 Con Paso 1 Hacer
		si Subcadena(frase,i,i)=letra Entonces
			encontrada=Verdadero;
		FinSi
	FinPara
	Si encontrada=Verdadero Entonces
		Escribir 'la letra se encuentra'
	SiNo
		Escribir 'la letra no se encuentra'
	Fin Si
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 57</h2>
<pre>
    <code>
        Algoritmo ejercicio_57
	definir palabra, letra como cadena;
	Definir cantidad, vocales Como Entero;
	Escribir 'escriba una frase'
	Leer palabra
	
	palabra<-Minusculas(palabra);
	cantidad<-Longitud(palabra);
	
	para i<-1 Hasta cantidad-1 Hacer
		letra<-Subcadena(palabra,i,i);
		Si letra = "a" O letra = "e" O letra = "i" O letra = "o" O letra = "u" Entonces
            vocales <- vocales + 1
		FinSi
		
	FinPara
	Escribir 'la palabra tiene ',vocales,' vocales, y ',cantidad-vocales,' consonantes'
	
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 58</h2>
<pre>
    <code>
        Algoritmo ejercicio_58
	definir palabra1, palabra2, letra como cadena;
	Definir cant Como Entero
	
	Escribir 'escriba 2 palabras'
	Leer palabra1, palabra2
	
	palabra1=Minusculas(palabra1)
	palabra2=Minusculas(palabra2)
	cant=Longitud(palabra1)
	
	para i<-1 Hasta cant-1 Hacer
		letra=Subcadena(palabra1,i,i);
		inverso=Concatenar(letra,inverso)
	FinPara
	Si inverso=palabra2 Entonces
		Escribir 'es igual al darle la vuelta'
	SiNo
		Escribir 'no son iguales al darle la vuelta'
	Fin Si
FinAlgoritmo

</code>
</pre>    
<br>

<h2>Ejercicio 59</h2>
<pre>
    <code>
        Algoritmo ejercicio_59
	Definir frase como cadena;
	Definir cantidad, espacios Como Entero
	
	Escribir 'escriba una frase'
	Leer frase
	cantidad=Longitud(frase)
	Para i<-1 Hasta cantidad-1 Hacer
		si Subcadena(frase,i,i)= " " Entonces
			espacios=espacios+1
		FinSi
	FinPara
	Escribir 'la frase contiene ',espacios+1,' palabras'
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 60</h2>
<pre>
    <code>
        Algoritmo ejercicio_60
	Definir palabra, f como cadena
	Definir cantidad Como Entero
	Escribir 'escribe una frase'
	Leer f
	
	cantidad=Longitud(f)
	palabra=Subcadena(f,0,0);
	
	para i<-1 Hasta cantidad-1 Hacer
		si Subcadena(f,i,i)=" " Entonces
			palabra Concatenar(palabra,Subcadena(f,i+1,i+1));
		FinSi
	FinPara
	Escribir 'la palabraencriptada es ' ,palabra
FinAlgoritmo
    </code>
</pre>    
<br>

<h2>Ejercicio 61</h2>
<pre>
    <code>
        Funcion sum(x,t)
	Escribir x+t
FinFuncion

Funcion resultado<-multiplicar(x,t)
	Definir resultado Como Entero
	resultado=x*t
FinFuncion

Funcion resultado<-restar(x,t)
	Definir resultado Como Entero
	resultado=x-t
FinFuncion

Funcion resultado<-dividir(x,t)
	Definir resultado Como Entero
	resultado=x/t
FinFuncion

Funcion resultado<-sum(x,t)
	Definir resultado Como Entero
	resultado=x+t
FinFuncion

Algoritmo ejercicio_61
	Definir n1,,n2, eleccion Como Entero
	Escribir 'escriba 2 numeros'
	Leer n1,n2;
	Escribir 'selecione una opcion'
	Escribir '1 sumarlos'
	Escribir '2 sumarlos'
	Escribir '3 sumarlos'
	Escribir '4 sumarlos'
	
	Repetir
		Leer eleccion
	Hasta Que eleccion>4 | eleccion<1
	
	Segun eleccion Hacer
		1:
			sumar(n1,n2)
		2:
			Escribir restar(n1,n2)
		3:
			Escribir multiplicar(n1,n2)
		4:
			Escribir dividir(n1,n2)
	Fin Segun
	
FinAlgoritmo
	
</code>
</pre>    
<br>

<h2>Ejerrcicio 62</h2>
<pre>
<code>
Funcion incremento_de_la_equis(x)
	x=x+1;
FinFuncion

Funcion incremento_por_referencia(x Por Referencia)
	x=x+1
FinFuncion

Algoritmo ejercicio_62
	Definir num Como Entero
	num=Aleatorio(1,10);
	Escribir 'el numero antes de la funcios es: ',num;
	incremento_de_la_equis(num);
	Escribir 'el numero despues de la funcion es: ',num;
	Escribir 'el numero entes de llamar la funcion con paso por valor es: ',num
	incremento_por_referencia(num)
	Escribir 'el numero despues de llamar la funcion por referencia es: ',num;
FinAlgoritmo
</code>
</pre>
<br>

<h2>Ejercicio 63</h2>
<pre>
<code>
Funcion primo(i)
	Definir divisores, j Como Entero 
	divisores=0
	j=1
	Para j<-1 Hasta i Con Paso 1 Hacer
		si i%j=0 Entonces
			divisores=divisores+1;
		FinSi
	FinPara
	
	si divisores=2 Entonces
		Escribir 'el numero: ',i,' es primo'
	SiNo
		Escribir 'el numero: ',i,' no es primo'
	FinSi
FinFuncion

Algoritmo ejercicio_63
	Definir j, terminado Como Entero
	j=0
	terminado=0
	Escribir 'hasta que numero quieres revisar'
	Leer terminado
	para j<-1 Hasta terminado Hacer
		primo(j)
	FinPara
FinAlgoritmo
</code>
</pre>
<br>

<h2> Ejercicio 64</h2>
<pre>
<code>
Funcion tabla(i)
	Definir n Como Entero
	Escribir 'tabla del: ',i
	para n<-1 Hasta 10 Hacer
		Escribir num, ' x ',n,' = ',i*n;
	FinPara
FinFuncion

Algoritmo ejercicio_64
	Definir j Como Entero
	j=1
	Escribir 'pulse cualquier tecla'
	Esperar Tecla;
	para j<-1 Hasta 10 Con Paso 1 Hacer
		tabla(j)
		Escribir ' '
	FinPara
	
FinAlgoritmo

</code>
</pre>
<br>

