CREATE TABLE consultas (
    id int AUTO_INCREMENT,
    nombre varchar(50),
    dui varchar(10),
    mascota varchar(50),
    tratamiento varchar(30),
    medicamento varchar(30),
    costo float,
    visita int,
    PRIMARY KEY (id)
)