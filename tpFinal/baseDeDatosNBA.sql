DROP DATABASE IF EXISTS TiendaNBA;
CREATE DATABASE TiendaNBA;
USE TiendaNBA;

CREATE TABLE usuarios (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  contrasenia VARCHAR(100) NOT NULL,
  Dni INT UNSIGNED UNIQUE NOT NULL,
  FotoPerfil VARCHAR(255),
  nombre VARCHAR(100) NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL
);

CREATE TABLE productos (
  ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idUsuario INT UNSIGNED NOT NULL,
  Archivo VARCHAR(255) NOT NULL,
  Producto VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
  ID INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idUsuario INT UNSIGNED NOT NULL,
  idProduct INT UNSIGNED NOT NULL,
  Comentario TEXT NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP NULL,
  FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
  FOREIGN KEY (idProduct) REFERENCES productos(ID)
);

INSERT INTO usuarios (id, email, contrasenia, Dni, FotoPerfil, nombre) VALUES
(DEFAULT, "wschuchner@udesa.edu.ar", "Wildo123", 47346229, "/images/wilfre.jpg", "Wilfredo"),
(DEFAULT, "abaudy@udesa.edu.ar", "Baudy123", 46991275, "/images/alejo.jpg", "Alejo"),
(DEFAULT, "fmartini@udesa.edu.ar", "Fran123", 47126848, "/images/fran.jpg", "Francisco"),
(DEFAULT, "ssojo@udesa.edu.ar", "Sofi123", 47346111, "/images/sofi.jpg", "Sofía"),
(DEFAULT, "nsojo@udesa.edu.ar", "Nachi123", 47346333, "/images/nachi.jpg", "Nacho");

INSERT INTO productos (ID, idUsuario, Archivo, Producto, descripcion) VALUES
(DEFAULT, 1, "/images/products/camisetaboca.jpg", "Camiseta de Boca", "Remera del equipo de basket de Boca"),
(DEFAULT, 1, "/images/products/camisetaBoston.jpg", "Camiseta de Boston", "Remera del equipo de basket de Boston"),
(DEFAULT, 2, "/images/products/camisetaLilard.jpg", "Camiseta de Lilard", "Remera del jugador de basket de Lilard"),
(DEFAULT, 2, "/images/products/camisetaphoenix.jpg", "Camiseta de Phoenix", "Remera del equipo de basket de Phoenix"),
(DEFAULT, 3, "/images/products/pelota-basket.jpg", "Pelota de basket", "Pelota de basket profesional"),
(DEFAULT, 3, "/images/products/conjuntoBulls.jpg", "Conjunto de Bulls", "Conjunto del equipo de basket de Bulls"),
(DEFAULT, 4, "/images/products/remeraAll.jpg", "Camiseta del All Star", "Remera del equipo de basket del All Star"),
(DEFAULT, 4, "/images/products/zapatillaBasketdos.jpg", "Zapatillas de basket", "Zapatillas de basket Nike"),
(DEFAULT, 5, "/images/products/remeraMiami.jpg", "Camiseta de Miami", "Remera del equipo de basket de Miami"),
(DEFAULT, 5, "/images/products/remeragolden.jpg", "Camiseta de Golden State", "Remera del equipo de basket de Golden State");

INSERT INTO comentarios (ID, idUsuario, idProduct, Comentario) VALUES
(DEFAULT, 1, 1, "Excelente remera!"),
(DEFAULT, 2, 1, "Gran remera!"),
(DEFAULT, 3, 1, "Muy buena calidad!"),
(DEFAULT, 4, 2, "Excelente remera!"),
(DEFAULT, 5, 2, "Gran remera!"),
(DEFAULT, 1, 2, "Muy buena calidad!"),
(DEFAULT, 2, 3, "Excelente remera!"),
(DEFAULT, 3, 3, "Gran remera!"),
(DEFAULT, 4, 3, "Muy buena calidad!"),
(DEFAULT, 5, 4, "Excelente remera!"),
(DEFAULT, 1, 4, "Gran remera!"),
(DEFAULT, 2, 4, "Muy buena calidad!"),
(DEFAULT, 3, 5, "Pica muy bien!"),
(DEFAULT, 4, 5, "Alta pelota!"),
(DEFAULT, 5, 5, "Muy buen grip!"),
(DEFAULT, 1, 6, "Excelente conjunto!"),
(DEFAULT, 2, 6, "Gran conjunto!"),
(DEFAULT, 3, 6, "Maravilloso conjunto!"),
(DEFAULT, 4, 7, "Excelente remera!"),
(DEFAULT, 5, 7, "Gran remera!"),
(DEFAULT, 1, 7, "Muy buena calidad!"),
(DEFAULT, 2, 8, "Muy buenas zapatillas!"),
(DEFAULT, 3, 8, "Buen deslizamiento!"),
(DEFAULT, 4, 8, "Muy comodas!"),
(DEFAULT, 5, 9, "Excelente remera!"),
(DEFAULT, 1, 9, "Gran remera!"),
(DEFAULT, 2, 9, "Muy buena calidad!"),
(DEFAULT, 3, 10, "Excelente remera!"),
(DEFAULT, 4, 10, "Gran remera!"),
(DEFAULT, 5, 10, "Muy buena calidad!");
