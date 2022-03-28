-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-03-2022 a las 07:11:00
-- Versión del servidor: 8.0.28
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ferre`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cantidadxproducto`
--

DROP TABLE IF EXISTS `cantidadxproducto`;
CREATE TABLE IF NOT EXISTS `cantidadxproducto` (
  `ID_producto` int NOT NULL,
  `ID_Categorias` int NOT NULL,
  `ID_Venta` int NOT NULL,
  `Cantidad` int NOT NULL,
  `Precio` double NOT NULL,
  PRIMARY KEY (`ID_producto`,`ID_Categorias`,`ID_Venta`),
  KEY `fk_Productos_has_Venta_Venta_idx` (`ID_Venta`),
  KEY `fk_Productos_has_Venta_Productos_idx` (`ID_producto`,`ID_Categorias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cantidadxsobrepedido`
--

DROP TABLE IF EXISTS `cantidadxsobrepedido`;
CREATE TABLE IF NOT EXISTS `cantidadxsobrepedido` (
  `Sobrepedido_ID_SobrePedido` int NOT NULL,
  KEY `fk_CantidadXsobrepedido_Sobrepedido_idx` (`Sobrepedido_ID_SobrePedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

DROP TABLE IF EXISTS `categorias`;
CREATE TABLE IF NOT EXISTS `categorias` (
  `ID_Categorias` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_Categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`ID_Categorias`, `Nombre`) VALUES
(1, 'Herramientas'),
(2, 'Material electrico'),
(3, 'Material para plomeria'),
(4, 'Hogar'),
(5, 'Jardin'),
(6, 'Proteccion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
CREATE TABLE IF NOT EXISTS `imagenes` (
  `idImagenes` int NOT NULL AUTO_INCREMENT,
  `ImagenesUrl` varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `productos_ID_producto` int NOT NULL,
  PRIMARY KEY (`idImagenes`,`productos_ID_producto`),
  KEY `fk_imagenes_productos1_idx` (`productos_ID_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `imagenes`
--

INSERT INTO `imagenes` (`idImagenes`, `ImagenesUrl`, `productos_ID_producto`) VALUES
(2, '/img/Productos/clavija/clavija.jpeg', 1),
(3, '/img/Productos/martillo/Martillo.jpg', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `ID_producto` int NOT NULL AUTO_INCREMENT,
  `ID_Categorias` int NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Marca` varchar(45) NOT NULL,
  `Precio` double NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  `InVentario` int NOT NULL,
  `ImagenesURL` varchar(2048) NOT NULL DEFAULT '/img/missing.png',
  PRIMARY KEY (`ID_producto`,`ID_Categorias`),
  KEY `fk_Productos_Categorias1_idx` (`ID_Categorias`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`ID_producto`, `ID_Categorias`, `Nombre`, `Marca`, `Precio`, `Descripcion`, `InVentario`, `ImagenesURL`) VALUES
(1, 2, 'Clavija', 'Voltek', 10, 'Clavija plastica, negra, Voltek', 10, '/img/Productos/clavija/clavija.jpeg'),
(2, 3, 'Tubo CPVC', 'Flowguard', 110, 'Tubo CPVC 1/2\", azul, Flowguard', 25, '/img/missing.png'),
(3, 4, 'Pilas AA', 'Voltek', 12, 'Pila alcalina AA, Voltek', 20, '/img/missing.png'),
(4, 1, 'Martillo', 'Pretul', 95, 'Martillo, 2 libras, mango de madera, Pretul.', 3, '/img/missing.png'),
(5, 2, 'Extencion electrica', 'Igoto', 24, 'Extencion electrica de 2m, Igoto, economica.', 5, '/img/missing.png'),
(6, 6, 'Lentes', 'Pretul', 30, 'Lentes de seguridad, transparentes, Pretul.', 10, '/img/missing.png'),
(7, 5, 'Regadera', 'Pfizer', 80, 'Esta chida', 70, '/img/missing.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provedor`
--

DROP TABLE IF EXISTS `provedor`;
CREATE TABLE IF NOT EXISTS `provedor` (
  `ID_Provedor` int NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Productos_ID_producto` int NOT NULL,
  `Productos_ID_Categorias` int NOT NULL,
  PRIMARY KEY (`ID_Provedor`),
  KEY `fk_Provedor_Productos_idx` (`Productos_ID_producto`,`Productos_ID_Categorias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `provee`
--

DROP TABLE IF EXISTS `provee`;
CREATE TABLE IF NOT EXISTS `provee` (
  `nombre` varchar(40) DEFAULT NULL,
  `tel` varchar(40) DEFAULT NULL,
  `mail` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sobrepedido`
--

DROP TABLE IF EXISTS `sobrepedido`;
CREATE TABLE IF NOT EXISTS `sobrepedido` (
  `ID_SobrePedido` int NOT NULL AUTO_INCREMENT,
  `Anticipo` double NOT NULL,
  `Total` double NOT NULL,
  `Fecha_Inicio` date NOT NULL,
  `Fecha_Fin` date NOT NULL,
  `Direccion` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Apellido_paterno` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_SobrePedido`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `ID_USER` int NOT NULL AUTO_INCREMENT,
  `USER` char(45) NOT NULL,
  `PASSWORD` char(45) NOT NULL,
  PRIMARY KEY (`ID_USER`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

DROP TABLE IF EXISTS `venta`;
CREATE TABLE IF NOT EXISTS `venta` (
  `ID_Venta` int NOT NULL AUTO_INCREMENT,
  `Fecha` date NOT NULL,
  `Total` double NOT NULL,
  PRIMARY KEY (`ID_Venta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cantidadxproducto`
--
ALTER TABLE `cantidadxproducto`
  ADD CONSTRAINT `fk_Productos_has_Venta_Productos` FOREIGN KEY (`ID_producto`,`ID_Categorias`) REFERENCES `productos` (`ID_producto`, `ID_Categorias`),
  ADD CONSTRAINT `fk_Productos_has_Venta_Venta` FOREIGN KEY (`ID_Venta`) REFERENCES `venta` (`ID_Venta`);

--
-- Filtros para la tabla `cantidadxsobrepedido`
--
ALTER TABLE `cantidadxsobrepedido`
  ADD CONSTRAINT `fk_CantidadXsobrepedido_Sobrepedido` FOREIGN KEY (`Sobrepedido_ID_SobrePedido`) REFERENCES `sobrepedido` (`ID_SobrePedido`);

--
-- Filtros para la tabla `imagenes`
--
ALTER TABLE `imagenes`
  ADD CONSTRAINT `fk_imagenes_productos1` FOREIGN KEY (`productos_ID_producto`) REFERENCES `productos` (`ID_producto`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_Productos_Categorias1` FOREIGN KEY (`ID_Categorias`) REFERENCES `categorias` (`ID_Categorias`);

--
-- Filtros para la tabla `provedor`
--
ALTER TABLE `provedor`
  ADD CONSTRAINT `fk_Provedor_Productos` FOREIGN KEY (`Productos_ID_producto`,`Productos_ID_Categorias`) REFERENCES `productos` (`ID_producto`, `ID_Categorias`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
