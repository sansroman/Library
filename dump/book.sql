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
-- Table structure for table `Book`
--

DROP TABLE IF EXISTS `Book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cover` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `blurb` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pdate` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  CONSTRAINT `Book_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `Category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES (1,NULL,'http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg','1','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:56:08'),(2,NULL,'http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg','1','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:56:41'),(3,NULL,'http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg','1','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:56:57'),(4,NULL,'http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg','1','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:57:06'),(5,NULL,'http://img3m1.ddimg.cn/93/17/25288851-1_l_17.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:57:13'),(6,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(7,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','3333','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(8,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','34444','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(9,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(10,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(11,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','3333','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(12,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','34444','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(13,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(14,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(15,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','3333','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(16,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','34444','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(17,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(18,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(19,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','3333','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(20,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','34444','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(21,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(22,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(23,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','3333','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(24,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','34444','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(25,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(26,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','2222','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',1,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(27,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','3333','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36'),(28,NULL,'https://img1.doubanio.com/view/subject/m/public/s29799269.jpg','34444','清华大学出版社','张鹏宇','这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了这本书太棒了','4/3/18','tp123/java',2,0,'2018-07-10 13:52:36','2018-07-10 13:52:36');
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-10 22:01:46
