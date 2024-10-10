CREATE TABLE productos(
    id INTEGER NOT NULL,
    nombre_producto VARCHAR2(500) NOT NULL,
    precio NUMBER NOT NULL,
    stock INTEGER NOT NULL,
    categoria_id INTEGER NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE categorias(
    id INTEGER NOT NULL,
    nombre VARCHAR2(250) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE clientes (
    id INTEGER PRIMARY KEY NOT NULL,
    nombre VARCHAR2(250) NOT NULL
);

CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY NOT NULL,
    clientes_id INTEGER NOT NULL,
     FOREIGN KEY (clientes_id) REFERENCES clientes (id)
);


CREATE TABLE detalle_pedido (
    pedido_id INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    catidad INTEGER NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id)REFERENCES productos(id)
);


INSERT INTO categorias VALUES (1,'limpieza');
INSERT INTO categorias VALUES (2,'cocina');
INSERT INTO categorias VALUES (3,'electronica');
INSERT INTO categorias VALUES (4,'farmacia');
INSERT INTO categorias VALUES (5,'deportes');
INSERT INTO categorias VALUES (6,'belleza');

SELECT * FROM categorias;

INSERT INTO productos VALUES (1,'detergente polvo',20.00,50,1);
INSERT INTO productos VALUES (2,'cuchillo',15.30,20,2);
INSERT INTO productos VALUES (3,'bocinas',450.00,15,3);
INSERT INTO productos VALUES (4,'acetaminofen',10.00,10,4);
INSERT INTO productos VALUES (5,'balon de futbol', 60.00,5,5);
INSERT INTO productos VALUES (6,'crema nocturna',45.00,12,6);
INSERT INTO productos VALUES (7,'cloro',23.50,13,1);
INSERT INTO productos VALUES (8,'sevidoras',19.50,14,2);
SELECT * FROM productos;

INSERT INTO clientes VALUES (1,'sergio');
INSERT INTO clientes VALUES (2,'juan pablo');
INSERT INTO clientes VALUES (3,'maria fernanda');

SELECT * FROM clientes;

COMMIT;

INSERT INTO pedidos VALUES (1,2);
INSERT INTO pedidos VALUES (2,3);
INSERT INTO pedidos VALUES (3,1);

SELECT * FROM pedidos;

INSERT INTO detalle_pedido VALUES (3,6,1);
INSERT INTO detalle_pedido VALUES (2,3,4);
INSERT INTO detalle_pedido VALUES (1,5,2);

SELECT * FROM detalle_pedido;

