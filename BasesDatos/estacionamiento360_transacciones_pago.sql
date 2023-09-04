CREATE DATABASE  IF NOT EXISTS `estacionamiento360` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `estacionamiento360`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: estacionamiento360
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `transacciones_pago`
--

DROP TABLE IF EXISTS `transacciones_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transacciones_pago` (
  `id_Transaccion` int NOT NULL AUTO_INCREMENT,
  `id_User` int NOT NULL,
  `id_Place` int NOT NULL,
  `id_Forma_Pago` int NOT NULL,
  `date` datetime NOT NULL,
  `price` float NOT NULL,
  PRIMARY KEY (`id_Transaccion`),
  KEY `usuario-metodo_Pago_idx` (`id_User`),
  KEY `lugar-pago_idx` (`id_Place`),
  KEY `forma_Pago-pago_idx` (`id_Forma_Pago`),
  CONSTRAINT `forma_Pago-pago` FOREIGN KEY (`id_Forma_Pago`) REFERENCES `forma_pago` (`id_forma_Pago`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lugar-pago` FOREIGN KEY (`id_Place`) REFERENCES `espacio` (`id_place`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `usuario-pago` FOREIGN KEY (`id_User`) REFERENCES `usuarios` (`id_Usuario`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transacciones_pago`
--

LOCK TABLES `transacciones_pago` WRITE;
/*!40000 ALTER TABLE `transacciones_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `transacciones_pago` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-03 22:15:19
