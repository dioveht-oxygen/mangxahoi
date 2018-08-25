-- MySQL dump 10.13  Distrib 5.5.47, for debian-linux-gnu (i686)
--
-- Host: localhost    Database: maychu
-- ------------------------------------------------------
-- Server version	5.5.47-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `baidang`
--

DROP TABLE IF EXISTS `baidang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `baidang` (
  `idpost` int(11) NOT NULL AUTO_INCREMENT,
  `tgpost` datetime NOT NULL,
  `ndpost` varchar(4000) CHARACTER SET utf8 DEFAULT NULL,
  `username` char(100) NOT NULL,
  PRIMARY KEY (`idpost`),
  UNIQUE KEY `baidang_username_uindex` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `baidang`
--

LOCK TABLES `baidang` WRITE;
/*!40000 ALTER TABLE `baidang` DISABLE KEYS */;
INSERT INTO `baidang` VALUES (1,'0000-00-00 00:00:00','hello ! hôm nay thứ 6 ngày 24 tháng 8 là bài post đầu tiên','admin');
/*!40000 ALTER TABLE `baidang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `banbe`
--

DROP TABLE IF EXISTS `banbe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `banbe` (
  `username` char(100) DEFAULT NULL,
  `userban` char(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `banbe`
--

LOCK TABLES `banbe` WRITE;
/*!40000 ALTER TABLE `banbe` DISABLE KEYS */;
/*!40000 ALTER TABLE `banbe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `binhluan`
--

DROP TABLE IF EXISTS `binhluan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `binhluan` (
  `idbl` int(11) NOT NULL AUTO_INCREMENT,
  `noidungbl` varchar(4000) CHARACTER SET utf8 DEFAULT NULL,
  `tgbl` datetime DEFAULT NULL,
  `id` int(11) DEFAULT NULL,
  `idbaidang` int(11) DEFAULT NULL,
  PRIMARY KEY (`idbl`),
  UNIQUE KEY `binhluan_idbl_uindex` (`idbl`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `binhluan`
--

LOCK TABLES `binhluan` WRITE;
/*!40000 ALTER TABLE `binhluan` DISABLE KEYS */;
/*!40000 ALTER TABLE `binhluan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cookie`
--

DROP TABLE IF EXISTS `cookie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cookie` (
  `username` char(100) NOT NULL,
  `token` char(50) DEFAULT '0',
  UNIQUE KEY `cookie_username_uindex` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cookie`
--

LOCK TABLES `cookie` WRITE;
/*!40000 ALTER TABLE `cookie` DISABLE KEYS */;
INSERT INTO `cookie` VALUES ('admin','MnIZ9x6NTpkDO9GV3qLQBDoiveht');
/*!40000 ALTER TABLE `cookie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nguoidung` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lastname` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `firstname` varchar(100) CHARACTER SET utf8 NOT NULL,
  `birthday` date DEFAULT NULL,
  `email` char(100) DEFAULT NULL,
  `sex` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `pass` char(100) NOT NULL,
  `username` char(100) NOT NULL,
  `ngaydangky` date NOT NULL,
  `tenhienthi` varchar(100) NOT NULL,
  `tuoi` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nguoidung_username_uindex` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (1,'Nguyễn Phúc','Nguyên Phi','1999-12-14','otaku141299@gmail.com','Nam','14121999','admin','2018-08-18','Stiller99',18);
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-25 12:29:44
