function loop(empezar, prueba, actualizar, cuerpo) {
    for (let value = empezar; prueba(value); value = actualizar(value)) {
      cuerpo(value);
    }
}
  
loop(5, n => n > 0, n => n - 1, console.log);
