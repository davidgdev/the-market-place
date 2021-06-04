-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-06-2021 a las 22:35:46
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marketplace`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buys`
--

CREATE TABLE `buys` (
  `id_b` int(11) NOT NULL,
  `user_seller` int(11) NOT NULL,
  `user_buyer` int(11) NOT NULL,
  `product_b_fk` int(11) NOT NULL,
  `payment_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorys`
--

CREATE TABLE `categorys` (
  `id_c` int(11) NOT NULL,
  `name_c` varchar(200) NOT NULL,
  `product_c_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id_i` int(11) NOT NULL,
  `route` varchar(200) NOT NULL,
  `product_i_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payments`
--

CREATE TABLE `payments` (
  `id_pa` int(11) NOT NULL,
  `name_pa` varchar(200) NOT NULL,
  `type_pa` varchar(220) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id_p` int(11) NOT NULL,
  `name_p` varchar(200) NOT NULL,
  `description_p` varchar(200) NOT NULL,
  `sku` int(11) NOT NULL,
  `price` float NOT NULL,
  `stock` int(11) NOT NULL,
  `able` tinyint(1) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `category_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id_r` int(11) NOT NULL,
  `name_r` varchar(200) NOT NULL,
  `description_r` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id_r`, `name_r`, `description_r`) VALUES
(1, 'Seller', 'Seller User'),
(2, 'Buyer', 'Buyer User');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id_u` int(11) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id_u`, `first_name`, `last_name`, `email`, `password`) VALUES
(1, 'Diego', 'Cruz T', 'dacruzt@outlook.com', '$2a$08$OFA.PgI24FxPL17T3H.FMe1ogMngpCjK0YDEt0SkFewye5kTs74aG'),
(2, 'Diego A ', 'Cruz T', 'dacruzt@hotmail.com', '$2a$08$hjeBWUxHyp7Q9GJYCvPKJeKG8ZmQalRvtl1GhpETrLrSYhLaz5/om'),
(3, 'Diego A ', 'Cruz T', 'dacruztriana@hotmail.com', '$2a$08$12aM27J7ijlJiUi/fWGU7eWfWfzTFy2D95LbhYQE3S1ipuHG6swRa'),
(4, 'Diego A ', 'Cruz T', 'dacruztrianaa@hotmail.com', '$2a$08$yQkaXll3NbiSuEOqy1pbTuAYkhy6EwdT9aLow33Ll3i100PCjNWDy'),
(5, 'Diego A ', 'Cruz T', 'dabejacruztrianaa@hotmail.com', '$2a$08$vU9Ms3jz2MJtb8xSrw32HuAzOBgXbfCKmaBzqz8k1mVMbWkp85Jba'),
(6, 'Diego A ', 'Cruz T', 'adabejacruztrianaa@hotmail.com', '$2a$08$1w7hwZ5RX1iGfTWTnajV0OhER1eFPUo6spROqH0KMXWcbtIw0IXOW'),
(7, 'Diego A ', 'Cruz T', 'aadabejacruztrianaa@hotmail.com', '$2a$08$kuSKanMADDsnjtAvxOCdi.Ipfc2paMyewmPS993WVD/.nB2A9jWaG'),
(8, 'Diego A ', 'Cruz T', 'aaadabejacruztrianaa@hotmail.com', '$2a$08$fmpayb9HTBYmTYpi/W.TUeu/2BwTC/aLQ.J1PW5fATcLPm7M0gjl2'),
(9, 'Diego A ', 'Cruz T', 'aaadeabejacruztrianaa@hotmail.com', '$2a$08$rxRHNluRcV6gb2Xxc.TL9OwYavjnNUWsz8ZgYQTR4XlC9QgwNZ6KW');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_products`
--

CREATE TABLE `users_products` (
  `id_u_p` int(11) NOT NULL,
  `user_fk` int(11) NOT NULL,
  `product_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_rols`
--

CREATE TABLE `users_rols` (
  `id_u_r` int(11) NOT NULL,
  `rol_u_r_fk` int(11) NOT NULL,
  `user_r_fk` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users_rols`
--

INSERT INTO `users_rols` (`id_u_r`, `rol_u_r_fk`, `user_r_fk`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 5),
(4, 2, 5),
(5, 1, 6),
(6, 2, 6),
(7, 1, 7),
(8, 2, 7),
(9, 1, 8),
(10, 2, 8),
(11, 2, 9);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buys`
--
ALTER TABLE `buys`
  ADD PRIMARY KEY (`id_b`),
  ADD KEY `payment_fk` (`payment_fk`),
  ADD KEY `product_b_fk` (`product_b_fk`);

--
-- Indices de la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id_c`),
  ADD KEY `product_c_fk` (`product_c_fk`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id_i`),
  ADD KEY `product_i_fk` (`product_i_fk`);

--
-- Indices de la tabla `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id_pa`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_p`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id_r`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_u`);

--
-- Indices de la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD KEY `product_fk` (`product_fk`),
  ADD KEY `user_fk` (`user_fk`);

--
-- Indices de la tabla `users_rols`
--
ALTER TABLE `users_rols`
  ADD PRIMARY KEY (`id_u_r`),
  ADD KEY `user_r_fk` (`user_r_fk`),
  ADD KEY `rol_u_r_fk` (`rol_u_r_fk`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `buys`
--
ALTER TABLE `buys`
  MODIFY `id_b` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id_i` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `payments`
--
ALTER TABLE `payments`
  MODIFY `id_pa` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id_u` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users_rols`
--
ALTER TABLE `users_rols`
  MODIFY `id_u_r` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `buys`
--
ALTER TABLE `buys`
  ADD CONSTRAINT `buys_ibfk_1` FOREIGN KEY (`payment_fk`) REFERENCES `payments` (`id_pa`),
  ADD CONSTRAINT `buys_ibfk_2` FOREIGN KEY (`product_b_fk`) REFERENCES `products` (`id_p`);

--
-- Filtros para la tabla `categorys`
--
ALTER TABLE `categorys`
  ADD CONSTRAINT `categorys_ibfk_1` FOREIGN KEY (`product_c_fk`) REFERENCES `products` (`id_p`);

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`product_i_fk`) REFERENCES `products` (`id_p`);

--
-- Filtros para la tabla `users_products`
--
ALTER TABLE `users_products`
  ADD CONSTRAINT `users_products_ibfk_1` FOREIGN KEY (`product_fk`) REFERENCES `products` (`id_p`),
  ADD CONSTRAINT `users_products_ibfk_2` FOREIGN KEY (`user_fk`) REFERENCES `users` (`id_u`);

--
-- Filtros para la tabla `users_rols`
--
ALTER TABLE `users_rols`
  ADD CONSTRAINT `users_rols_ibfk_1` FOREIGN KEY (`user_r_fk`) REFERENCES `users` (`id_u`),
  ADD CONSTRAINT `users_rols_ibfk_2` FOREIGN KEY (`rol_u_r_fk`) REFERENCES `rols` (`id_r`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
