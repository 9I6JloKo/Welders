-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июн 18 2023 г., 12:08
-- Версия сервера: 10.4.22-MariaDB
-- Версия PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `welders`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `cities`
--

INSERT INTO `cities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Tallinn', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(2, 'Kohtla-Järve', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(3, 'Viljandi', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(4, 'Rakvere', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(5, 'Maardu', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(6, 'Kuressaare', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(7, 'Sillamäe', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(8, 'Valga', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(9, 'Võru', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(10, 'Jõhvi', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(11, 'Haapsalu', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(12, 'Keila', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(13, 'Paide', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(14, 'Elva', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(15, 'Saue', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(16, 'Põlva', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(17, 'Tapa', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(18, 'Jõgeva', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(19, 'Rapla', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(20, 'Kiviõli', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(21, 'Türi', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(22, 'Põltsamaa', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(23, 'Sindi', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(24, 'Paldiski', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(25, 'Kärdla', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(26, 'Kunda', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(27, 'Tõrva', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(28, 'Narva-Jõesuu', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(29, 'Kehra', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(30, 'Loksa', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(31, 'Räpina', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(32, 'Otepää', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(33, 'Tamsalu', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(34, 'Kilingi-Nõmme', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(35, 'Karksi-Nuia', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(36, 'Antsla', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(37, 'Võhma', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(38, 'Mustvee', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(39, 'Lihula', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(40, 'Suure-Jaani', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(41, 'Abja-Paluoja', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(42, 'Püssi', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(43, 'Mõisaküla', '2023-06-10 09:16:34', '2023-06-10 09:16:34'),
(44, 'Kallaste', '2023-06-10 09:16:34', '2023-06-10 09:16:34');

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `personalCode` varchar(255) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `course` enum('semi-automatic','welding-metal') DEFAULT NULL,
  `city` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` enum('pending','approved','rejected') DEFAULT 'pending',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `requests`
--

INSERT INTO `requests` (`id`, `name`, `surname`, `personalCode`, `birthDate`, `course`, `city`, `email`, `phone`, `description`, `status`, `createdAt`, `updatedAt`) VALUES
(2, 'Max', 'Grishin', '254631234', '2004-09-01', 'welding-metal', 2, 'maksim.grisin@ivkhk.ee', '632423', 'Wanna be here.', 'pending', '2023-06-18 10:06:34', '2023-06-18 10:06:34'),
(3, 'Max', 'Dzjubenko', '86456345', '2004-12-23', 'semi-automatic', 11, 'user@test.ee', '3523523', 'Hello guys.', 'pending', '2023-06-18 10:07:21', '2023-06-18 10:07:21');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', '$2a$10$GuyG82HhZhDSLh4chdzleOiI/ONevYFpqsQd4tUfaO9UgkOVDhnDy');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personalCode` (`personalCode`),
  ADD UNIQUE KEY `personalCode_2` (`personalCode`),
  ADD UNIQUE KEY `personalCode_3` (`personalCode`),
  ADD UNIQUE KEY `personalCode_4` (`personalCode`),
  ADD UNIQUE KEY `personalCode_5` (`personalCode`),
  ADD KEY `city` (`city`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`city`) REFERENCES `cities` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
