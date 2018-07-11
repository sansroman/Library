-- MySQL dump 10.16  Distrib 10.1.34-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	10.1.34-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `integral` int(11) NOT NULL DEFAULT '0',
  `readingTime` int(11) NOT NULL DEFAULT '0',
  `signature` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT 'undefined',
  `role` int(11) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=129 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'15180600301','$2a$10$MGw9zZ4Cj7p37pMhGUtRpuzjXbzoC8vhmoK507F4c7w',NULL,'guest',0,0,'这个人很懒,什么都没有留下',3,'2018-07-10 13:34:09','2018-07-10 13:34:09'),(2,'15180600302','$2a$10$Lfxs7KEl00UtFntTcAaIieGW9YYOM1KaS7d7kJ6nY/j',NULL,'guest',0,0,'这个人很懒,什么都没有留下',2,'2018-07-10 13:39:00','2018-07-10 13:39:00'),(49,'15180600303','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',3,'2018-07-10 13:44:07','2018-07-10 13:51:59'),(50,'15180600304','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',2,'2018-07-10 13:44:07','2018-07-10 13:52:04'),(51,'15180600305','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(52,'15180600306','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(53,'15180600307','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(54,'15180600308','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(55,'15180600309','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(56,'15180600401','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(57,'15180600402','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(58,'15180600403','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(59,'15180600404','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(60,'15180600405','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(61,'15180600406','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(62,'15180600407','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(63,'15180600408','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(64,'15180600409','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:44:07','2018-07-10 13:44:07'),(97,'15190600303','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(98,'15190600304','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(99,'15190600305','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(100,'15190600306','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(101,'15190600307','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(102,'15190600308','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(103,'15190600309','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(104,'15190600401','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(105,'15190600402','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(106,'15190600403','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(107,'15190600404','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(108,'15190600405','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(109,'15190600406','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(110,'15190600407','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(111,'15190600408','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(112,'15190600409','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:47:23','2018-07-10 13:47:23'),(113,'15200600303','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(114,'15200600304','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(115,'15200600305','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(116,'15200600306','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(117,'15200600307','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(118,'15200600308','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(119,'15200600309','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(120,'15200600401','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(121,'15200600402','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(122,'15200600403','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(123,'15200600404','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(124,'15200600405','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(125,'15200600406','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(126,'15200600407','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(127,'15200600408','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07'),(128,'15200600409','12345678','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','zpy',0,0,'这个人很懒，没有签名',1,'2018-07-10 13:49:07','2018-07-10 13:49:07');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-10 21:54:57
