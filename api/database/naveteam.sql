-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 08-Mar-2021 às 02:23
-- Versão do servidor: 10.4.17-MariaDB
-- versão do PHP: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `naveteam`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `navers`
--

CREATE TABLE `navers` (
  `idNaver` int(11) NOT NULL,
  `nameNaver` varchar(45) NOT NULL,
  `birthdate` date NOT NULL,
  `admission_date` date NOT NULL,
  `job_role` varchar(60) NOT NULL,
  `projetos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `navers`
--

INSERT INTO `navers` (`idNaver`, `nameNaver`, `birthdate`, `admission_date`, `job_role`, `projetos`) VALUES
(1, 'Alexandre Ferreira', '1993-12-21', '2021-03-15', 'Desenvolvedor Back-End', 1),
(2, 'Darth Vader', '1993-12-21', '2021-03-15', 'Lord Sith', 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `projetos`
--

CREATE TABLE `projetos` (
  `idProjeto` int(11) NOT NULL,
  `nameProjeto` varchar(60) NOT NULL,
  `navers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `projetos`
--

INSERT INTO `projetos` (`idProjeto`, `nameProjeto`, `navers`) VALUES
(1, 'API', 1),
(2, 'Império Galático', 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `navers`
--
ALTER TABLE `navers`
  ADD PRIMARY KEY (`idNaver`);

--
-- Índices para tabela `projetos`
--
ALTER TABLE `projetos`
  ADD PRIMARY KEY (`idProjeto`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `navers`
--
ALTER TABLE `navers`
  MODIFY `idNaver` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `projetos`
--
ALTER TABLE `projetos`
  MODIFY `idProjeto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
