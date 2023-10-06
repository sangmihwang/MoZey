-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: j9a510.p.ssafy.io    Database: test
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
-- Table structure for table `coin_info`
--

DROP TABLE IF EXISTS `coin_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coin_info` (
  `coin_price_id` bigint NOT NULL AUTO_INCREMENT,
  `coin_name` varchar(255) NOT NULL,
  `coin_price` bigint DEFAULT NULL,
  `date` bigint DEFAULT NULL,
  PRIMARY KEY (`coin_price_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coin_info`
--

LOCK TABLES `coin_info` WRITE;
/*!40000 ALTER TABLE `coin_info` DISABLE KEYS */;
INSERT INTO `coin_info` VALUES (1,'Coin1',266821,20230801),(2,'Coin2',458462,20230801),(3,'Coin1',266090,20230802),(4,'Coin2',455093,20230802),(5,'Coin1',262545,20230803),(6,'Coin2',451949,20230803),(7,'Coin1',261230,20230804),(8,'Coin2',454034,20230804),(9,'Coin1',260736,20230807),(10,'Coin2',451984,20230807),(11,'Coin1',260141,20230808),(12,'Coin2',450331,20230808),(13,'Coin1',260898,20230809),(14,'Coin2',450244,20230809),(15,'Coin1',260156,20230810),(16,'Coin2',452737,20230810),(17,'Coin1',261684,20230811),(18,'Coin2',447623,20230811),(19,'Coin1',259291,20230814),(20,'Coin2',449033,20230814),(21,'Coin1',255093,20230816),(22,'Coin2',444995,20230816),(23,'Coin1',252056,20230817),(24,'Coin2',442117,20230817),(25,'Coin1',251960,20230818),(26,'Coin2',438182,20230818),(27,'Coin1',252441,20230821),(28,'Coin2',440755,20230821),(29,'Coin1',253343,20230822),(30,'Coin2',441859,20230822),(31,'Coin1',251751,20230823),(32,'Coin2',444318,20230823),(33,'Coin1',253944,20230824),(34,'Coin2',445830,20230824),(35,'Coin1',252637,20230825),(36,'Coin2',441846,20230825),(37,'Coin1',254341,20230828),(38,'Coin2',443956,20230828),(39,'Coin1',255698,20230829),(40,'Coin2',450014,20230829),(41,'Coin1',257862,20230830),(42,'Coin2',455165,20230830),(43,'Coin1',256806,20230831),(44,'Coin2',453226,20230831),(45,'Coin1',256842,20230901),(46,'Coin2',454125,20230901),(47,'Coin1',258665,20230905),(48,'Coin2',451429,20230905),(49,'Coin1',258598,20230906),(50,'Coin2',449035,20230906),(51,'Coin1',256242,20230907),(52,'Coin2',445781,20230907),(53,'Coin1',255096,20230908),(54,'Coin2',447353,20230908),(55,'Coin1',255689,20230911),(56,'Coin2',449077,20230911),(57,'Coin1',256855,20230912),(58,'Coin2',448711,20230912),(59,'Coin1',254938,20230913),(60,'Coin2',447939,20230913),(61,'Coin1',257289,20230914),(62,'Coin2',451199,20230914),(63,'Coin1',259655,20230918),(64,'Coin2',446636,20230918),(65,'Coin1',258325,20230919),(66,'Coin2',444958,20230919),(67,'Coin1',256662,20230920),(68,'Coin2',446103,20230920),(69,'Coin1',254963,20230921),(70,'Coin2',437570,20230921),(71,'Coin1',251326,20230922),(72,'Coin2',435740,20230922),(73,'Coin1',250938,20230925),(74,'Coin2',433851,20230925),(75,'Coin1',249500,20230926),(76,'Coin2',431301,20230926),(77,'Coin1',246972,20230927),(78,'Coin2',429207,20230927),(81,'Coin1',246381,20230928),(82,'Coin2',429970,20230928),(83,'Coin1',245161,20230929),(84,'Coin2',428805,20230929),(85,'Coin1',245025,20230930),(86,'Coin2',428813,20230930),(87,'Coin1',244819,20231001),(88,'Coin2',428826,20231001),(89,'Coin1',244522,20231002),(90,'Coin2',428839,20231002),(91,'Coin1',243618,20231003),(92,'Coin2',426975,20231003),(95,'Coin1',243578,20231004),(96,'Coin2',428115,20231004),(97,'Coin1',242335,20231005),(98,'Coin2',425931,20231005),(99,'Coin1',240360,20231006),(100,'Coin2',425819,20231006);
/*!40000 ALTER TABLE `coin_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `follow_id` bigint NOT NULL AUTO_INCREMENT,
  `receiver_id` bigint DEFAULT NULL,
  `sender_id` bigint DEFAULT NULL,
  PRIMARY KEY (`follow_id`),
  KEY `FKrphuo611vw95uqrqxh8t5emvl` (`receiver_id`),
  KEY `FKpa7i93qbgmkkxkyu6dnp4sysv` (`sender_id`),
  CONSTRAINT `FKpa7i93qbgmkkxkyu6dnp4sysv` FOREIGN KEY (`sender_id`) REFERENCES `member` (`user_id`),
  CONSTRAINT `FKrphuo611vw95uqrqxh8t5emvl` FOREIGN KEY (`receiver_id`) REFERENCES `member` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=174 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (12,23,15),(13,24,15),(14,26,15),(15,27,15),(16,28,15),(22,23,24),(23,15,24),(24,26,24),(25,27,24),(26,28,24),(27,23,26),(29,15,26),(32,23,27),(33,24,27),(34,26,27),(35,15,27),(36,28,27),(38,24,28),(41,15,28),(53,29,30),(54,29,30),(55,28,30),(56,24,30),(57,29,31),(58,29,31),(59,30,31),(60,24,26),(61,30,36),(62,30,36),(63,29,36),(64,31,36),(65,32,36),(66,34,36),(67,28,36),(68,28,36),(69,28,36),(70,28,36),(71,28,36),(72,28,36),(73,28,36),(74,28,36),(75,28,36),(76,28,36),(77,28,36),(78,28,36),(79,28,36),(80,28,36),(81,28,36),(82,28,36),(83,30,36),(84,30,36),(85,30,36),(86,30,36),(87,30,36),(88,30,36),(89,30,36),(90,30,36),(91,30,36),(92,30,36),(93,30,36),(94,30,36),(95,30,36),(96,30,36),(97,30,36),(98,30,36),(99,30,36),(100,30,36),(101,30,36),(102,30,36),(103,30,36),(104,30,36),(105,30,36),(106,30,36),(107,30,36),(108,30,36),(109,30,36),(110,30,36),(111,30,36),(112,31,30),(113,34,30),(114,36,30),(120,36,24),(121,34,24),(122,33,24),(123,32,24),(124,31,24),(125,30,24),(126,36,31),(127,29,24),(128,28,26),(139,27,28),(140,26,28),(141,15,38),(142,23,38),(143,27,38),(144,15,35),(145,23,35),(146,31,35),(147,38,35),(149,27,26),(151,31,27),(152,29,27),(154,31,28),(155,23,28),(159,24,23),(160,26,23),(161,27,23),(162,28,23),(163,31,23),(164,38,23),(165,35,23),(166,15,31),(167,35,31),(168,23,31),(169,31,15),(170,38,15),(171,35,15),(172,27,35),(173,15,23);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `campus` char(10) DEFAULT NULL,
  `coin1` bigint NOT NULL,
  `coin2` bigint NOT NULL,
  `create_time` datetime(6) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `firebase_token` varchar(255) DEFAULT NULL,
  `gender` char(1) NOT NULL,
  `unit` char(10) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `kakao_token` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `point` bigint NOT NULL,
  `provider` varchar(255) DEFAULT NULL,
  `provider_id` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(255) DEFAULT NULL,
  `role` char(10) NOT NULL DEFAULT 'USER',
  `sub_start_time` datetime(6) DEFAULT NULL,
  `sub_yn` tinyint(1) DEFAULT '0',
  `term` char(2) DEFAULT NULL,
  `withdraw` int NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (15,'서울',300,20,'2023-10-06 01:16:27.022242','dlalsdnd2@kakao.com','fHdukgPj2GjUSa9VBnGHnP%3AAPA91bEkivMPO7aly1sidPOOQo9xQmnnA5NTxs7FXi0vcS1-jwH8HHRSElm-rHLImuqz8qk8zkJNivPn8WM7Yx_g3OeLIxrdMHemInWiolC-qarx0oA4YQTT_ea1LyJxlWduwS7WG_Zh','M','5','http://k.kakaocdn.net/dn/BdrKU/btsrUunCaLi/iSo1OEkWaeIDvtnLZLUrR1/img_110x110.jpg','L0WOio3zYM676sW4-C4WAsKXznDdt8pnLz6T2EWCCinI2QAAAYsCvl2R','이민웅',1200,'kakao','3047082376','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTgxMTIsImV4cCI6MTY5Nzc2NzcxMn0.XioKxshiUPq1QRzElp9vzbU4pxlgWZvu4tJExs_BQjs','USER',NULL,0,'9',1),(23,'서울',200,820,'2023-10-06 02:00:28.752913','dla5324@nate.com','efG67Z6Njb816ZO6Ii8zwq%3AAPA91bG501Gpw09VmORORDYd7PgRg0N4Z7tOdL5hpOAVMQXtkfipv01Aav1zGy9ZInljFIHGdaLC2270bu836otBM3XyrZmh6XZmqZH1Kl0zCGC-od4qmChKk3GLxDPDmm5OXcMiCIJW','M','5','http://k.kakaocdn.net/dn/eeBoKD/btspUhKqd13/dSXXOkVXKDV5uOqYBRRkA0/img_110x110.jpg','VEcqbYR4x8Z1ONipKyv9sj5LonuLGS6LQ4nUsNJPCisNIAAAAYsC1D8O','임병국',2300,'kakao','3051821407','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTk1NDYsImV4cCI6MTY5Nzc2OTE0Nn0.NjX11C4uyOhv92yGEXeh-KdcuvNCXzQ-YSP8WGEN-kU','USER',NULL,0,'9',1),(24,'서울',150,30,'2023-10-06 02:01:07.547062','ysang7961@hanmail.net','dIFSln3Ks0cR4QISU07s8m%3AAPA91bGTIcAHJygPo60kPiBzVpuPPwN4xRBfo63nXkZ8FXKm5jIn7HOLVaVRrIwLWhLZ5BFsPXBuMeLYeBdVhGC0-iiY325Kmb1ZYkVhp0wUED2K6dKIcnMB7HkOM9C5uvBWgMXxWs7z','M','5','http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg','hJFquLjyRCTstgFmu93AUNHJDp3BxS8p_VV7KUxhCiolUAAAAYsCeQeN','조윤상',500,'kakao','3037832623','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTM1NjgsImV4cCI6MTY5Nzc2MzE2OH0.tNQogP8_1RgirDSjP635Oni1sBHRx8hbGCdZounoC0s','USER',NULL,0,'9',1),(26,'서울',150,30,'2023-10-06 02:14:29.668270','6531z@naver.com','cJIdgYXrSJNprcGw-ST3rJ%3AAPA91bEXeyw15-slPu9bzvdnF1FEcz8BPw1ZDO9DiYCMHJizaaosr81vGBzifPyUUfonwz39Qri6cwUvwc-IFGrTk3pRm2AT9WGfDKQg3aqeEQTjaRwoVcYhXm15CV2vpTAhEwjJ8hv3','M','5','http://k.kakaocdn.net/dn/8M09M/btsbVd8lmXg/r9uGAJIIDD4YeMQHSEJOE1/img_110x110.jpg','MYFJuYpKBci2a2Pf3yT5VVfAyE395UboDEQ4Eg5rCj11GwAAAYsB2Ab3','지한얼',3500,'kakao','3051731996','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NDMwMTYsImV4cCI6MTY5Nzc1MjYxNn0.HRBEGP6aspGlt8jpw862TVv_cLs0wC45kBMUQurUZZ4','USER','2023-10-06 09:51:47.441339',1,'9',1),(27,'서울',158,60,'2023-10-06 02:18:24.490177','sangmi_babe@hotmail.com','ckdIiJsN6IomiuWlpiKd3p%3AAPA91bFsMtjQZONDEYqyn08Z1_P2wPXkqaY066EK76cKwpF2NQmMgnqqPn44ASgzagJiqDci8Bthms6upuScJJiPsK8lTWiuZRy-ucI_ggIFHh6CXFpY8zoy16gJ9SFbJALnsi3FX-dT','W','5','http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg','oPUEKPzy_YR9qXBoaLsUrmRHa9ir-kX7BAQnufOhCj11XAAAAYsCZzyI','황상미',2000,'kakao','3051846601','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTI0MDMsImV4cCI6MTY5Nzc2MjAwM30.Pe9975zFxCP6N8sV72l21VJBelmvTjW9QlWPbbvxAKE','USER',NULL,0,'9',1),(28,'서울',17,17,'2023-10-06 02:26:31.693031','sce9842@hanmail.net','fJSzvFiL3G4EfCT5aaDz3C%3AAPA91bGre3Q-nj_1g7L7yCSHpKVVVuENNFo2dnyjKrbLbJ8a9u-OWMo-NT1uJA9sSdSHOHqtMdtam8zEpOWOUe_vP3NPv_IUPGIixuEo2H74fGlsQuGrhMQ9aYTTFjZUdKdLB8PZidNQ','W','5','http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg','RcN29gsmO2iuI3WNw-P5TrA1uYk37UxFDVmuPskmCj10lwAAAYsCf0T-','송채은',1050,'kakao','3051849982','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTM5NzcsImV4cCI6MTY5Nzc2MzU3N30.xSr-7_KzWQKiUFabf_mmZjviuVqoi814QydORRbzc5Q','USER',NULL,0,'9',1),(29,'서울',0,0,'2023-10-06 07:37:02.759994','yumsw6109@naver.com',NULL,'M','4','http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg','xxclF59Fx7mVe7LYXbbjTG0tVxEw4Gl_MmGZGNBgCisM0gAAAYsB_L1y','염순원',0,'kakao','3051933337',NULL,'USER',NULL,0,'9',1),(30,'서울',0,0,'2023-10-06 07:48:46.092016','moris543@naver.com','dpqpaURF6aUiJMgDP7jsO6%3AAPA91bFzKFwvUhqhSxt3y6vkphbzT46Pbyr990PVdm6hamYgDFarVoMtPsnvtBwTFCdoLBE5wxS6eWm68pkT-MDZtK5SuOqbP0i8aoaEaoPPHBauHQuIaQyxvXrYHUOBM-Q-h8F9GI-k','M','4','http://k.kakaocdn.net/dn/bSimf3/btsrB4B2x4i/7b5Mzk3kHKtQT4KebIdQX0/img_110x110.jpg','lP_jopBkCxZnKCNTQV75ZaUTEptPKk7JCzoyXTwgCisM0gAAAYsCB3jb','홍성민',600,'kakao','3051941074',NULL,'USER',NULL,0,'9',1),(31,'서울',0,0,'2023-10-06 08:00:34.827522','seooh212@gmail.com','cZ6ZQFBDJPlt3GPfyuUZCb%3AAPA91bEqKCBQNa4M2Mcav0rUC7YV6FBDvJC2yD447mLOnSrgYFnnM9aIVglMQts_doeG8xoQLCEH72d_J38akZGx-Pvuw6VLq4IZ58B9JrtZ1hhDi_EhdDgcxXZbqcXmiKIzIeQ2QyPC','W','4','http://k.kakaocdn.net/dn/cIrw8B/btssglQqZa7/FrkjW7fJWOouyAm3xj38uK/img_110x110.jpg','vuw0D6zjDSR5PtC-lHKlzvJ3PF-pwBRd9bQQwvxoCj1zTgAAAYsCs7N4','임서희',0,'kakao','3051949453','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTc0MTMsImV4cCI6MTY5Nzc2NzAxM30.qgq5kVmUXiflL6cFxsXeQnA5hNZ3sL01F5CrQmxBEeE','USER',NULL,0,'9',1),(32,'서울',0,0,'2023-10-06 08:40:15.336002','seyi607@gmail.com',NULL,'W','4','http://k.kakaocdn.net/dn/b7BHFk/btsrDEbaeb8/W4wndIJ8qjuhBy4R7FR4n1/img_110x110.jpg','j2I3vtmlfsVHEMtViIsQ_J7lGK7oDnqgMRV7xBDvCj11GQAAAYsCNpwF','손세이',0,'kakao','3051977991',NULL,'USER',NULL,0,'9',1),(33,'서울',0,0,'2023-10-06 08:51:06.879393','injog@naver.com',NULL,'M','7','http://k.kakaocdn.net/dn/b50r04/btsrwlqPzmS/gPPVTZcTQN8IkaDu16rruK/img_110x110.jpg','JIx98wIEvhTYmUD3vlYSjJQ2ioxRC5NIK5NmkAlKCj1ymAAAAYsCQIy2','인정환',100,'kakao','3051994790',NULL,'USER',NULL,0,'9',1),(34,'서울',0,0,'2023-10-06 08:52:19.756629','bell1129@kakao.com',NULL,'M','4','http://k.kakaocdn.net/dn/bxUjuo/btsiQjtE7tk/1vkaDEwGCIVo7It0fweFM0/img_110x110.jpg','yMxltIkEiWU-8jVwQ5lEaMPgtxbdIU6XqJs9FUvXCiolEAAAAYsCQang','채현종',0,'kakao','3051996009',NULL,'USER',NULL,0,'9',1),(35,'서울',50,44,'2023-10-06 08:55:52.718463','ksk0076@naver.com','fHChkwhi8OEoz4eTcbCQG3%3AAPA91bGEO_4sn3qzT9r9zLGwKh1xEfcI_KSvQjCH3pNSMgg64QwobLPSK2HB8ew8b71fJLicK-yy2bn4GP-Hs5L8D6toSqt8VAQHhZl_Trqwjk3qdvMVvo-7823-_gAPEKfnE_-nIikq','M','6','http://k.kakaocdn.net/dn/3habO/btrW1NWHuzq/K2RWJi7jAOehMcuQDQHrT1/img_110x110.jpg','BKZ3Uowku0LQLV7lE6qF-nhUoJPjQrwsKQERRrHFCj102QAAAYsCwSMq','ヾ(•ω•`)o',200,'kakao','3051999471','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTgyOTMsImV4cCI6MTY5Nzc2Nzg5M30.7-9lgXXSAgoQYdoHRdzzlFks_Sfa3NMMzIGw7C2_Dtc','USER','2023-10-06 11:20:15.140399',1,'9',1),(36,'서울',0,0,'2023-10-06 08:57:17.247427','alsxo824@naver.com','eQAX-TQ_y0Mi0w2H-z0iNi%3AAPA91bGv3iyvWn1LSw7jCZqiB6Sxd1a6H3Obw35QxQBzE_9SO0FDXYRx1MB8sK7FpGLrFW7Omp-qsb_y9eIlo1AGOvKqZ-yd1HjSZfRlC37ui9GZKEraIrsLI7ef_L-JBIhuUMePoSa_','M','4','http://k.kakaocdn.net/dn/b7zu5Y/btsv0pW4xKk/7vXUXKK2pDTv1MJPVcCJA1/img_110x110.jpg','E9j5LCyBebfbShCNJTDOnoxx83Hcr9-Iehhs08_KCiolDQAAAYsCRjPw','김민태',200,'kakao','3052000862',NULL,'USER','2023-10-06 08:57:38.871226',1,'9',1),(37,'서울',0,0,'2023-10-06 09:07:27.841679','aspire51@naver.com','dM8ycTmk__pDo_6CCDthzW%3AAPA91bH0QWC7pbfCl5wh8229f9UZW6OIrI7Wz9xalgzOXDvcOMOwcCmqb_I0LmzLIDWMX6nQBG5MI0OnZGcRYUXSI7KddlkC07Mu1-YxwUpCv_3kOCZ92_6S6wTrCp-bQc_6jBdieiMV','M','4','http://k.kakaocdn.net/dn/AdFRq/btsah9VhweS/IKmtFVHJCk4pQHIcUX6Ob0/img_110x110.jpg','UKb_wlGdHsfsSbpfSBae6P2c_g02jZ_n0eI3_hU5Cj10aQAAAYsCT4Ua','권지훈',400,'kakao','3052011200',NULL,'USER',NULL,0,'9',1),(38,'서울',0,0,'2023-10-06 09:23:36.958894','rkdmf0914@naver.com',NULL,'W','3','http://k.kakaocdn.net/dn/bqwVTk/btswcH9e1d2/UK9pTxcwnk9wjvkQeStJgK/img_110x110.jpg','A5F6-bFXXHa76Gvry64oJnHACOnOWWTrLtaBHSuCCj102wAAAYsCYxzb','아리스짱',0,'kakao','3052028936','eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2OTY1NTIxMzEsImV4cCI6MTY5Nzc2MTczMX0.Irn8t9N35RWKU-gRg7WcwdRPc4bh2WXGWf8mIFQFE3A','USER',NULL,0,'9',1);
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `money_history`
--

DROP TABLE IF EXISTS `money_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `money_history` (
  `coin_history_id` bigint NOT NULL AUTO_INCREMENT,
  `coin_change_amount` bigint DEFAULT NULL,
  `coin_change_date` datetime(6) DEFAULT NULL,
  `coin_name` varchar(255) DEFAULT NULL,
  `transaction_type` varchar(255) DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`coin_history_id`),
  KEY `FKet9uprqwtljrak4dt0bploxum` (`user_id`),
  CONSTRAINT `FKet9uprqwtljrak4dt0bploxum` FOREIGN KEY (`user_id`) REFERENCES `member` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=209 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `money_history`
--

LOCK TABLES `money_history` WRITE;
/*!40000 ALTER TABLE `money_history` DISABLE KEYS */;
INSERT INTO `money_history` VALUES (1,0,'2023-10-06 04:06:17.052877','Coin1','EARN',15),(2,30,'2023-10-06 04:12:51.644692','Coin2','REDEEM',15),(3,50,'2023-10-06 04:23:32.386510','Coin1','REDEEM',15),(4,30,'2023-10-06 04:24:22.235525','Coin2','REDEEM',15),(5,200,'2023-10-06 04:56:26.689316','Point','EARN',15),(6,200,'2023-10-06 05:07:28.044252','Point','EARN',15),(7,200,'2023-10-06 05:11:40.846331','Point','EARN',15),(8,200,'2023-10-06 05:33:42.006379','Point','EARN',28),(9,200,'2023-10-06 05:34:10.526190','Point','EARN',28),(10,30,'2023-10-06 05:34:11.824441','Coin2','REDEEM',24),(11,200,'2023-10-06 05:34:49.260077','Point','EARN',24),(12,200,'2023-10-06 05:41:55.113240','Point','EARN',26),(13,200,'2023-10-06 05:42:47.564443','Point','EARN',26),(14,200,'2023-10-06 05:43:57.370661','Point','EARN',28),(15,200,'2023-10-06 05:46:55.697526','Point','EARN',26),(16,200,'2023-10-06 05:47:29.751298','Point','EARN',26),(17,200,'2023-10-06 05:54:36.918911','Point','EARN',26),(18,30,'2023-10-06 08:20:28.836486','Coin2','REDEEM',15),(19,100,'2023-10-06 08:34:15.015472','Point','EARN',15),(20,200,'2023-10-06 08:34:46.052618','Point','EARN',28),(21,50,'2023-10-06 08:35:25.662627','Coin1','REDEEM',28),(22,30,'2023-10-06 08:36:17.260656','Coin2','REDEEM',28),(23,2,'2023-10-06 08:38:09.005967','Coin1','EARN',28),(24,100,'2023-10-06 08:38:09.025860','Point','REDEEM',28),(25,2,'2023-10-06 08:38:12.704530','Coin1','EARN',28),(26,100,'2023-10-06 08:38:12.720148','Point','REDEEM',28),(27,30,'2023-10-06 08:41:36.635034','Coin2','REDEEM',28),(28,2,'2023-10-06 08:43:47.570889','Coin1','EARN',15),(29,100,'2023-10-06 08:43:47.591817','Point','REDEEM',15),(30,100,'2023-10-06 08:51:58.610273','Point','EARN',33),(31,200,'2023-10-06 08:58:28.252375','Point','EARN',36),(32,30,'2023-10-06 08:59:35.820179','Coin2','REDEEM',23),(33,30,'2023-10-06 08:59:43.195043','Coin2','REDEEM',23),(34,100,'2023-10-06 09:00:03.392842','Point','EARN',23),(35,2,'2023-10-06 09:00:14.667272','Coin1','EARN',23),(36,100,'2023-10-06 09:00:14.684364','Point','REDEEM',23),(37,200,'2023-10-06 09:01:21.056050','Point','EARN',30),(38,100,'2023-10-06 09:02:30.100004','Point','EARN',15),(39,100,'2023-10-06 09:03:59.053553','Point','EARN',23),(40,100,'2023-10-06 09:04:02.671645','Point','EARN',23),(41,100,'2023-10-06 09:04:13.115230','Point','EARN',23),(42,100,'2023-10-06 09:04:17.507848','Point','EARN',23),(43,200,'2023-10-06 09:06:05.463962','Point','EARN',23),(44,200,'2023-10-06 09:07:30.355822','Point','EARN',23),(45,200,'2023-10-06 09:07:34.680831','Point','EARN',30),(46,30,'2023-10-06 09:08:04.306215','Coin2','REDEEM',23),(47,200,'2023-10-06 09:08:15.286432','Point','EARN',23),(48,200,'2023-10-06 09:08:15.887370','Point','EARN',27),(49,2,'2023-10-06 09:08:23.191981','Coin1','EARN',23),(50,100,'2023-10-06 09:08:23.207488','Point','REDEEM',23),(51,200,'2023-10-06 09:08:24.618660','Point','EARN',30),(52,4,'2023-10-06 09:08:36.217696','Coin1','EARN',27),(53,200,'2023-10-06 09:08:36.237132','Point','REDEEM',27),(54,4,'2023-10-06 09:08:40.501788','Coin1','EARN',27),(55,200,'2023-10-06 09:08:40.522427','Point','REDEEM',27),(56,100,'2023-10-06 09:08:49.143730','Point','EARN',37),(57,100,'2023-10-06 09:08:59.161184','Point','EARN',37),(58,100,'2023-10-06 09:09:55.293605','Point','EARN',37),(59,100,'2023-10-06 09:10:04.436704','Point','EARN',37),(60,200,'2023-10-06 09:12:17.703910','Point','EARN',24),(61,100,'2023-10-06 09:14:13.365830','Point','EARN',23),(62,200,'2023-10-06 09:14:17.576339','Point','EARN',26),(63,5,'2023-10-06 09:14:17.603122','Coin1','EARN',23),(64,222,'2023-10-06 09:14:17.621230','Point','REDEEM',23),(65,100,'2023-10-06 09:14:19.432638','Point','EARN',23),(66,100,'2023-10-06 09:14:23.314783','Point','EARN',23),(67,100,'2023-10-06 09:14:25.449166','Point','EARN',23),(68,100,'2023-10-06 09:14:33.791982','Point','EARN',23),(69,5,'2023-10-06 09:14:53.996736','Coin1','EARN',23),(70,222,'2023-10-06 09:14:54.012440','Point','REDEEM',23),(71,0,'2023-10-06 09:14:58.450666','Coin1','EARN',23),(72,1,'2023-10-06 09:14:58.469761','Point','REDEEM',23),(73,0,'2023-10-06 09:14:59.933464','Coin1','EARN',23),(74,1,'2023-10-06 09:14:59.950826','Point','REDEEM',23),(75,0,'2023-10-06 09:15:06.400907','Coin1','EARN',23),(76,1,'2023-10-06 09:15:06.417486','Point','REDEEM',23),(77,0,'2023-10-06 09:15:11.028645','Coin1','EARN',23),(78,1,'2023-10-06 09:15:11.048542','Point','REDEEM',23),(79,0,'2023-10-06 09:15:33.794753','Coin1','EARN',23),(80,1,'2023-10-06 09:15:33.814186','Point','REDEEM',23),(81,0,'2023-10-06 09:15:45.324230','Coin1','EARN',23),(82,1,'2023-10-06 09:15:45.342548','Point','REDEEM',23),(83,0,'2023-10-06 09:15:51.380385','Coin1','EARN',23),(84,1,'2023-10-06 09:15:51.402847','Point','REDEEM',23),(85,0,'2023-10-06 09:15:59.483404','Coin1','EARN',23),(86,1,'2023-10-06 09:15:59.501674','Point','REDEEM',23),(87,0,'2023-10-06 09:16:05.735698','Coin1','EARN',23),(88,1,'2023-10-06 09:16:05.757399','Point','REDEEM',23),(89,200,'2023-10-06 09:16:54.808606','Point','EARN',23),(90,0,'2023-10-06 09:23:11.596049','Coin1','EARN',23),(91,1,'2023-10-06 09:23:11.614686','Point','REDEEM',23),(92,0,'2023-10-06 09:23:45.050943','Coin1','EARN',23),(93,1,'2023-10-06 09:23:45.068197','Point','REDEEM',23),(94,0,'2023-10-06 09:23:47.485157','Coin1','EARN',23),(95,1,'2023-10-06 09:23:47.504435','Point','REDEEM',23),(96,200,'2023-10-06 09:23:50.270870','Point','EARN',15),(97,0,'2023-10-06 09:24:44.344211','Coin1','EARN',23),(98,0,'2023-10-06 09:24:44.614097','Coin1','EARN',23),(99,0,'2023-10-06 09:24:45.902561','Coin1','EARN',23),(100,1,'2023-10-06 09:24:45.918913','Point','REDEEM',23),(101,0,'2023-10-06 09:25:08.540719','Coin1','EARN',23),(102,1,'2023-10-06 09:25:08.557696','Point','REDEEM',23),(103,100,'2023-10-06 09:25:28.492686','Point','EARN',15),(104,100,'2023-10-06 09:25:36.674249','Point','EARN',15),(105,100,'2023-10-06 09:25:48.555044','Point','EARN',15),(106,100,'2023-10-06 09:25:55.064781','Point','EARN',15),(107,100,'2023-10-06 09:25:59.549453','Point','EARN',15),(108,0,'2023-10-06 09:26:30.815776','Coin1','EARN',23),(109,1,'2023-10-06 09:26:30.834363','Point','REDEEM',23),(110,0,'2023-10-06 09:26:33.437805','Coin1','EARN',23),(111,1,'2023-10-06 09:26:33.456715','Point','REDEEM',23),(112,51381708,'2023-10-06 09:26:58.893910','Coin1','EARN',23),(113,2123211111,'2023-10-06 09:26:58.909060','Point','REDEEM',23),(114,100,'2023-10-06 09:28:36.049035','Point','EARN',35),(115,100,'2023-10-06 09:29:27.367823','Point','EARN',35),(116,100,'2023-10-06 09:34:34.196983','Point','EARN',15),(117,100,'2023-10-06 09:34:41.592473','Point','EARN',15),(118,7,'2023-10-06 09:38:16.668525','Coin1','EARN',15),(119,300,'2023-10-06 09:38:16.689228','Point','REDEEM',15),(120,30,'2023-10-06 09:39:28.597892','Coin2','REDEEM',15),(121,200,'2023-10-06 09:45:29.103091','Point','EARN',26),(122,30,'2023-10-06 09:45:40.413921','Coin2','REDEEM',26),(123,50,'2023-10-06 09:48:23.688887','Coin1','REDEEM',28),(124,200,'2023-10-06 09:52:23.424017','Point','EARN',26),(125,200,'2023-10-06 09:55:10.775565','Point','EARN',28),(126,200,'2023-10-06 09:55:29.787978','Point','EARN',26),(127,200,'2023-10-06 09:55:50.341278','Point','EARN',26),(128,200,'2023-10-06 09:56:07.832086','Point','EARN',26),(129,200,'2023-10-06 09:56:27.038465','Point','EARN',26),(130,200,'2023-10-06 09:56:45.288852','Point','EARN',26),(131,200,'2023-10-06 09:57:21.827557','Point','EARN',26),(132,200,'2023-10-06 09:57:41.031295','Point','EARN',26),(133,200,'2023-10-06 09:58:00.004758','Point','EARN',26),(134,200,'2023-10-06 10:00:52.950675','Point','EARN',28),(135,200,'2023-10-06 10:01:43.468753','Point','EARN',28),(136,7,'2023-10-06 10:02:25.238991','Coin1','EARN',28),(137,300,'2023-10-06 10:02:25.256814','Point','REDEEM',28),(138,200,'2023-10-06 10:03:40.501863','Point','EARN',28),(139,100,'2023-10-06 10:04:03.222624','Point','EARN',28),(140,50,'2023-10-06 10:18:44.601131','Coin1','REDEEM',15),(141,50,'2023-10-06 10:19:29.156175','Coin1','REDEEM',15),(142,50,'2023-10-06 10:23:31.504083','Coin1','REDEEM',15),(143,200,'2023-10-06 10:23:51.532696','Point','EARN',28),(144,50,'2023-10-06 10:24:03.845043','Coin1','REDEEM',15),(145,100,'2023-10-06 10:24:15.871904','Point','EARN',28),(146,100,'2023-10-06 10:24:23.444082','Point','EARN',28),(147,6,'2023-10-06 10:25:40.338235','Coin1','EARN',28),(148,250,'2023-10-06 10:25:40.362219','Point','REDEEM',28),(149,30,'2023-10-06 10:25:59.088858','Coin2','REDEEM',31),(150,50,'2023-10-06 10:26:22.236537','Coin1','REDEEM',15),(151,17,'2023-10-06 10:26:31.235077','Coin2','EARN',28),(152,400,'2023-10-06 10:26:31.254096','Point','REDEEM',28),(153,30,'2023-10-06 10:33:21.811266','Coin2','REDEEM',15),(154,50,'2023-10-06 10:36:19.906525','Coin1','REDEEM',15),(155,30,'2023-10-06 10:42:43.108890','Coin2','REDEEM',15),(156,30,'2023-10-06 10:42:46.073460','Coin2','REDEEM',15),(157,30,'2023-10-06 10:44:00.331331','Coin2','REDEEM',15),(158,200,'2023-10-06 10:50:46.184569','Point','EARN',26),(159,30,'2023-10-06 10:58:53.595551','Coin2','REDEEM',23),(160,30,'2023-10-06 10:58:57.715240','Coin2','REDEEM',23),(161,30,'2023-10-06 10:59:00.470139','Coin2','REDEEM',23),(162,50,'2023-10-06 11:11:20.333002','Coin1','REDEEM',28),(163,200,'2023-10-06 11:11:23.332690','Point','EARN',15),(164,200,'2023-10-06 11:12:00.087332','Point','EARN',23),(165,200,'2023-10-06 11:12:52.952223','Point','EARN',35),(166,2,'2023-10-06 11:15:42.046945','Coin1','EARN',35),(167,100,'2023-10-06 11:15:42.065215','Point','REDEEM',35),(168,4,'2023-10-06 11:15:45.014249','Coin2','EARN',35),(169,100,'2023-10-06 11:15:45.034087','Point','REDEEM',35),(170,4,'2023-10-06 11:16:18.924802','Coin1','EARN',35),(171,200,'2023-10-06 11:16:18.933610','Point','REDEEM',35),(172,8,'2023-10-06 11:16:21.869839','Coin2','EARN',35),(173,200,'2023-10-06 11:16:21.892921','Point','REDEEM',35),(174,4,'2023-10-06 11:18:58.353021','Coin1','EARN',35),(175,200,'2023-10-06 11:18:58.362623','Point','REDEEM',35),(176,4,'2023-10-06 11:18:58.730884','Coin1','EARN',35),(177,200,'2023-10-06 11:18:58.741511','Point','REDEEM',35),(178,4,'2023-10-06 11:19:00.118552','Coin1','EARN',35),(179,200,'2023-10-06 11:19:00.129158','Point','REDEEM',35),(180,4,'2023-10-06 11:19:01.119243','Coin1','EARN',35),(181,200,'2023-10-06 11:19:01.131082','Point','REDEEM',35),(182,4,'2023-10-06 11:19:02.994409','Coin1','EARN',35),(183,200,'2023-10-06 11:19:03.004820','Point','REDEEM',35),(184,4,'2023-10-06 11:22:20.545360','Coin1','EARN',35),(185,200,'2023-10-06 11:22:20.554977','Point','REDEEM',35),(186,4,'2023-10-06 11:22:22.796896','Coin1','EARN',35),(187,200,'2023-10-06 11:22:22.805752','Point','REDEEM',35),(188,4,'2023-10-06 11:22:24.666293','Coin1','EARN',35),(189,200,'2023-10-06 11:22:24.679831','Point','REDEEM',35),(190,4,'2023-10-06 11:22:25.631105','Coin1','EARN',35),(191,200,'2023-10-06 11:22:25.640936','Point','REDEEM',35),(192,4,'2023-10-06 11:22:26.456930','Coin1','EARN',35),(193,200,'2023-10-06 11:22:26.468397','Point','REDEEM',35),(194,4,'2023-10-06 11:22:27.712351','Coin1','EARN',35),(195,200,'2023-10-06 11:22:27.722227','Point','REDEEM',35),(196,8,'2023-10-06 11:22:30.696728','Coin2','EARN',35),(197,200,'2023-10-06 11:22:30.705924','Point','REDEEM',35),(198,8,'2023-10-06 11:22:32.221286','Coin2','EARN',35),(199,200,'2023-10-06 11:22:32.231235','Point','REDEEM',35),(200,8,'2023-10-06 11:22:33.813599','Coin2','EARN',35),(201,200,'2023-10-06 11:22:33.990956','Point','REDEEM',35),(202,8,'2023-10-06 11:22:35.551536','Coin2','EARN',35),(203,200,'2023-10-06 11:22:35.755507','Point','REDEEM',35),(204,50,'2023-10-06 11:23:13.631461','Coin1','REDEEM',35),(205,30,'2023-10-06 11:23:35.457738','Coin2','REDEEM',23),(206,100,'2023-10-06 11:25:53.854338','Point','EARN',23),(207,30,'2023-10-06 11:27:07.383926','Coin2','REDEEM',23),(208,30,'2023-10-06 11:31:41.536805','Coin2','REDEEM',23);
/*!40000 ALTER TABLE `money_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `news_id` bigint NOT NULL AUTO_INCREMENT,
  `company` varchar(255) DEFAULT NULL,
  `content` text,
  `date` date DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'인포스탁데일리','인포스탁데일리가 전해드리는 9월 25일 이 시각 언론사별 주요뉴스입니다.\n▲“中 공장 최악은 피했다”… 삼성·하이닉스, 일단 숨통\n미국 정부가 반도체법에 따라 보조금을 받은 기업이 중국 내 반도체 생산을 확장할 수 있는 범위를 5%로 확정했습니다. 생산능력 확대를 위한 거래 시 액수(10만 달러) 제한 해제 등의 일부 진전된 내용도 있어 한국 기업들은 일단 안도하는 분위기입니다. 하지만 사실상 중국 내 사업 확장은 어렵게 됐고, 장비 반입은 매년 미국 승인을 받아야 합니다. 불확실성은 여전히 남아 있다는 분석이 나옵니다.\n▲금리 7% 넘었는데…5대 은행 가계대출 이달 또 1조6000억↑\n일부 은행의 대출 금리 상단이 7%를 돌파하며 지난해 말 이후 9개월 만에 최고치를 기록한 것으로 나타났습니다. 하지만 이런 고금리에도 가계대출은 이번 달 들어 5대 은행에서만 1조6000억원 넘게 또 불어났습니다. 24일 금융권에 따르면 지난 21일 기준 KB국민·신한·하나·우리은행 등 4대 은행의 신규 취급액 코픽스 연동 변동금리는 연 4.270~7.099%로, 지난달 말보다 상단이 0.130%포인트(p) 올랐습니다.\n▲한국 수출 하락폭, OECD 중 4번째…경제회복 부진 우려 커진다\n한국의 7월 수출이 경제협력개발기구(OECD) 회원국 중 네 번째로 크게 줄어든 것으로 나타났습니다. 다른 나라보다 큰 폭으로 위축된 교역량이 수출 중심의 한국경제 회복을 가로막을 수 있다는 우려가 나옵니다. 24일 OECD에 따르면 올해 7월 한국의 수출액은 1년 전보다 15.5% 줄었습니다. 아직 통계가 집계되지 않은 콜롬비아를 제외한 37개 회원국 중 노르웨이(-50.2%)와 에스토니아(-19.4%), 리투아니아(-16.4%)에 이어 네 번째로 큰 감소폭입니다.\n▲3기 신도시 앞당긴다…다음주 공급대책 발표\n정부가 추석 전에 발표하는 주택 공급 대책에는 3기 신도시 공급 일정을 앞당기고, 물량도 일부 확대하는 방안이 담길 것으로 보입니다. 24일 국토교통부 등에 따르면 정부는 우선 기존에 발표한 3기 신도시와 신규 택지 공급 일정을 당기는 방안을 검토하고 있습니다. 지난 21일 원희룡 국토부 장관은 한국신문방송편집인협회 토론회에서 \"신도시를 비롯한 공공 부문에서 내년에 공급하기로 한 것을 앞당겨오는 것은 가능한 부분\"이라며 \"몇 달 동안 누적된 공급의 급격한 위축을 만회하고, 전체적인 순환에 속도를 높이기 위한 방안을 마련할 것\"이라고 말했습니다.\n▲엘앤에프, 실적 부진으로 목표가↓…테슬라향 사이버트럭 공급 기대\n대신증권은 25일 엘앤에프 (KQ:066970)에 대해 양극재 판가 하락 등으로 단기 실적 부진이 이어지고 있으나 내년 테슬라향 사이버트럭의 신규 공급 기대감이 높아지고 있다고 분석했습니다. 투자의견은 ‘매수’, 목표가는 50만원에서 40만원으로 하향했습니다. 전 거래일 종가는 18만600원입니다. 전창현 대신증권 연구원에 따르면 엘앤에프의 3분기 매출액은 1조2300억원으로 전년 동기 대비 1% 줄고, 영업이익은 112억원으로 전년보다 89% 줄어들 것으로 예상됐습니다. 특히 영업이익은 시장 기대치인 473억원을 크게 하향하는 수치입니다.\n▲두산로보틱스, IPO 흥행몰이 성공…코스피 연착륙하나\n두산로보틱스 기업공개(IPO)가 흥행으로 마무리되며 상장 후에도 시장의 관심이 이어질지 주목됩니다. 상장 첫 날 ‘따따상(상장 첫 날 공모가의 4배 상승)’ 기대감도 나오고 있는 가운데 증권가는 연착륙 가능성에 무게를 뒀습니다. 25일 투자은행(IB)업계에 따르면 최근 기업공개(IPO)를 마친 두산로보틱스는 내달 5일 유가증권시장에 입성합니다. 상장 후 예상 시가총액은 1조6853억원으로 지난 22일 종가 기준 현대엘리베이(1조6927억원)에 이은 코스피 159위 수준입니다.\n▲환율 올라 370억 이익…배터리 기업들 남몰래 웃는다\nLG에너지솔루션 (KS:373220)과 SK온, 삼성SDI (KS:006400), 에코프로 (KQ:086520), 포스코퓨처엠 (KS:003670) 등 국내 배터리·소재 기업들이 올해 환율이 8%가량 상승해 370억원의 이익을 거둘 것으로 추정됩니다. 과거에는 환율이 오르면 외화 대출의 이자도 늘어 손실을 봤지만, 지금은 외화 자산이 증가해서 이익을 보는 구조로 바뀌었습니다. 해외 진출이 늘어나면서 환 헷지(위험회피)에 적극적으로 나선 것도 도움이 됐습니다.\n▲테슬라, 中판매량 급감...3Q 실적 ‘불안’\n지난 22일(현지시간) 뉴욕증시 3대 지수는 일제히 약보합으로 마감했다. 주간 기준으로는 다우 지수는 1.9% 내렸고 S&P500과 나스닥지수는 각각 2.9%, 3.6% 급락하며 3주 연속 하락세를 이어갔습니다. 연방준비제도이사회(Fed)가 고금리 장기화 가능성을 시사한데다 산업 전반으로 확산되고 있는 노조 파업 이슈, 여기에 정부 폐쇄 가능성까지 더해지면서 투자심리가 살아나지 못하고 있습니다. 이날 연준 인사들은 기준금리 추가 인상 지지 발언 등 매파 발언을 잇따라 쏟아내면서 증시에 부담으로 작용했습니다.\n▲삼성전자·SK “휴 살았다”…중국 반도체 공장 위기 넘겼다는데\n미국 반도체지원법(CHIPS Act)의 가드레일 조항이 확정되면서 삼성전자·SK하이닉스 (KS:000660) 등 국내 반도체 기업들은 안도하고 있습니다. 한국 정부·기업의 요구사항이 상당 부분 반영돼 중국 내 생산시설의 ‘일상적 업그레이드’가 가능할 것으로 예상되기 때문입니다. 다만 지난 3월 초안에서는 표현되지 않았던 ‘클린룸’과 ‘물리적 공간’에 대한 확장 제한이 언급돼 있어 추가 협의가 필요하다는 시각도 제기됩니다. 첨단 반도체 장비의 중국 내 반입을 규제한 미국의 수출통제의 유예조치 또한 해결해야 할 과제입니다. 이와 관련해 한국 정부·기업은 유예기간이 무난히 연장될 것으로 내다보고 있습니다.\n▲이번 주 뉴욕증시, \'셧다운·파업·금리\' 악재 주시\n이번 주(9월 25일~29일) 뉴욕증시는 여러 악재를 주시하며 9월의 거래를 마무리할 것으로 보입니다. 뉴욕증시는 미국 연방정부의 \'셧다운(업무 중단)\' 우려, 자동차 업계 파업, 국채 금리 급등, 유가 상승 등 여러 난관에 맞닥뜨린 상황입니다. 우선 투자자들은 미국 정치권의 예산안 합의와 관련된 소식에 촉각을 기울일 것으로 보입니다. 미국 정부는 2024년 회계연도가 시작하는 10월 1일 전에 예산안을 처리해야 합니다.\n▲쿠팡, 일하다 다쳤는데 “외부 누설 금지” 각서\n‘유통 1위 기업’ 쿠팡이 물류센터에서 일하다 다친 일용직 노동자(헬퍼)에게 산재신청 대신 공상처리를 유도하고, “회사의 귀책사유가 없으며, (사고 사실을) 언론이나 에스엔에스(SNS) 등 외부에 공개하지 않는다”는 내용의 확인서에 날인할 것을 요구한 것으로 드러났습니다. 회사 내 안전불감증으로 발생한 사고임에도 책임 회피에 급급하다는 비판이 나옵니다.\n▲공매도 비중 연중 최고치…2차전지·헬스케어株 변동성 ‘주목’\n이달 들어 공매도 거래대금 비중이 연중 최고치를 기록한 가운데 최근 주가가 급등했던 2차전지와 헬스케어 업종에 공매도 잔고가 쌓이고 있습니다. 증권가에선 하반기 증시가 금리 인상 기조 유지 등 비우호적인 환경에 놓인 만큼 공매도 비중이 높은 종목의 변동성을 경계해야 한다는 조언이 나옵니다. 공매도는 주가 하락을 염두에 두고 주식을 빌려 판 뒤 나중에 갚아 수익을 올리는 투자 방법입니다. 공매도 거래대금 비중이 늘었다는 것은 그만큼 하락에 베팅하는 투자자들이 많아졌다는 의미입니다.\n▲동반 부진 게임 대장株 크래프톤·엔씨소프트 (KS:036570), 전망은 엇갈려\n게임 대장주들이 나란히 52주 신저가를 기록하는 등 부진한 주가 흐름이 이어지고 있습니다. 다만 전망은 엇갈리는 모습입니다. 크래프톤의 이익과 주가 회복이 기대된다는 전망이 나오는 반면, 엔씨소프트는 실적 감소로 투자 매력이 크지 않다는 평가입니다. 25일 한국거래소에 따르면 크래프톤과 엔씨소프트는 지난 21일과 22일 이틀 연속 나란히 52주 신저가를 기록했습니다. 크래프톤은 22일 장중 14만6000원까지 하락하며 52주 신저가를 하루 만에 갈아치웠습니다.\n▲\"아저씨 믿고 더 샀는데\"…에코프로 시총 한달만에 \'8조\' 증발\n최근 테마주에 대한 투심이 식으면서 에코프로의 시가총액이 이달 8조원가량 줄어든 것으로 나타났습니다. 증권가에선 일찍부터 과열 현상에 경고의 목소리를 내오고 있으나, 개인 투자자들은 여전히 \'사자\'에 나서고 있습니다. 25일 한국거래소에 따르면 에코프로의 시가총액은 지난 22일 종가(95만7000원) 기준 25조4827억원으로, 지난달 31일(33조4710억원) 대비 7조9883억원이 줄었습니다. 이달 들어 주가가 23.87% 하락한 결과입니다.\n▲‘3고’에 눌린 ‘하고’ 기대…‘OECD 평균’도 버거워졌다\n국내 수출 부진이 반등의 계기를 찾지 못하고 있는 상황에서 최근 ‘3고(고환율·고금리·고유가) 위험’까지 다시 불거져 경기 회복의 불씨를 꺼트리는 것 아니냐는 우려가 나옵니다. 정부가 기대를 걸고 있는 ‘상저하고’형 경기 회복이 어려울 것이라는 전망이 확산하고, 한국의 경제성장률이 3년 연속 경제협력개발기구(OECD) 평균을 밑돌 확률도 커진 것으로 파악됩니다. 24일 OECD에 따르면 한국의 지난 7월 수출은 전년 동월 대비 15.5% 감소했습니다. 38개 OECD 회원국 중 아직 통계가 되지 않은 콜롬비아를 빼면 노르웨이(-50.2%), 에스토니아(-19.4%), 리투아니아(-16.4%) 다음으로 감소폭이 컸습니다.\n▲대우건설, 신한울 3·4호기 수주전 발빠른 행보\n신규 상용 원전인 신한울 3·4호기 주설비공사가 지난달 입찰공고를 통해 본격화된 가운데 대우건설의 발빠른 행보가 주목받고 있습니다. 대우건설은 원자력 발전 분야에서 설계와 시공, 폐기물처분시설, 해체 분야에 이르는 전 과정을 수행할 수 있을 뿐 아니라 소형모듈원전(SMR), 연구용원자로 등 원자력 관련 전 분야에 대한 경쟁력을 갖추고 있어 관련 움직임에서 높은 관심을 모으고 있습니다.\n▲힐튼호텔 재개발, 남산 안 가린다…38층→32층 높이로\n서울 중구 밀레니엄 힐튼 서울호텔(힐튼호텔)이 남산 경관을 해치지 않는 방향으로 재개발을 추진합니다. 애초 최고 38층 높이로 계획했으나 남산 조망 축을 살리기 위해 32층으로 낮추고 동 간 거리도 확 벌리기로 했습니다. 25일 서울시 등에 따르면 시는 힐튼호텔 소유주인 이지스자산운용이 지난 5월 제출한 재개발 정비계획을 이런 내용을 변경, 막바지 검토 중입니다. 조만간 도시계획위원회 안건으로 상정돼 심의를 거쳐 확정될 전망입니다.\n▲고금리 장기화 예고에 ‘예금·대출 금리’ 들썩… 8%대 주담대 오나\n미국 연방준비제도이사회(연준)의 ‘고금리 장기화’ 예고로 위험 기피 심리가 강해지면서 국고채 금리가 오르고 있습니다. 은행이 가계대출 금리를 책정할 때 기준으로 삼는 은행채 금리 역시 연중 최고치로 오르면서 시중은행의 대출·예금 금리도 빠르게 오르고 있습니다. 주택담보대출(주담대) 고정금리가 이미 7%를 넘어서는 등 가계부채가 급증하는 상황에서 금리가 오르면 가계소비 여력 악화로 내수경기가 둔화될 수 있습니다.\n▲LS일렉트릭, CNCITY에너지와 신재생·분산에너지 사업 ‘맞손’\nLS ELECTRIC(LS일렉트릭 (KS:010120))은 CNCITY(씨엔씨티·구 충남도시가스)에너지와 ‘신재생 및 분산에너지 활성화를 위한 MOU(양해각서)’를 체결했다고 25일 밝혔습니다. 양 사는 내년 6월부터 전격 시행될 분산에너지 활성화 특별법(이하 분산법) 시행을 기점으로 전개될 분산에너지 시장을 공략하겠다는 목표입니다. 우선 양 사는 미래 분산 배전망 사업을 위한 마스터플랜을 수립하고, 분산에너지 활성화 특화 지구 지정 추진을 위한 신규 사업모델을 개발합니다.\n▲아이폰 또 \'배터리 악몽\'…\"iOS17 업데이트 무서워\"\n애플 (NASDAQ:AAPL) 유저들의 만족도가 높은 이유는 지속적인 업데이트를 사후지원을 꼽을 수 있습니다. 출시된 지 오래된 제품을 쓰더라도 iOS 업데이트만 해주면 다양한 신기능들을 사용할 수 있어 많은 유저가 비싼 초기 비용에도 불구하고 애플에 대한 충성도를 드러내는 것입니다. 특히 새로운 버전의 iOS 출시될 때마다 추가되는 신기능에 대한 유저들의 기대도 큽니다. 지난 19일 새롭게 공개된 iOS 17 역시 락처 포스터, 새로운 스티커 경험, 실시간 음성 메시지 등으로 커뮤니케이션 경험을 대폭 개선해 화제를 모으고 있습니다. 하지만 iOS 17 업데이트 후 아이폰 배터리가 더 빨리 소모되고 있다는 후기가 쏟아지고 있습니다.\n▲셀트리온, 셀트리온헬스케어와 4236억원 바이오의약품 공급계약\n셀트리온은 셀트리온헬스케어와 4236억원 규모 바이오시밀러 항체의약품 공급계약을 체결했다고 25일 공시했습니다. 계약금은 셀트리온의 지난 2021년 연결 기준 매출액 대비 18.55%에 해당하는 규모입니다. 이번 계약을 통해 셀트리온은 셀트리온헬스케어에 바이오시밀러 항체의약품 램시마IV와 트룩시마, 허쥬마, 램시마SC, 유플라이마, 베그젤마 등을 공급합니다.\n▲자율주행 상용화 시스템 개발 포티투닷, 車안전 국제 표준 인증\n현대자동차그룹 글로벌 소프트웨어센터 포티투닷은 자율주행 기술 상용화를 위한 시스템 개발 프로세스(과정)에 대해 자동차 기능 안전 국제 표준인 \'ISO 26262\' 인증을 획득했다고 25일 밝혔습니다. ISO 26262는 차량의 전기·전자 시스템 오류로 인한 사고를 방지하기 위해 2011년 국제표준화기구(ISO)에서 제정한 표준입니다. 이번 인증은 노르웨이 오슬로에 본사를 둔 글로벌 인증기관 DNV가 주관했습니다. 포티투닷은 자율주행 기능 안전 관련 콘셉트부터 고성능 차량 컴퓨터를 비롯한 시스템과 하드웨어, 소프트웨어 등의 개발 절차 전반에 대해 인증을 받았습니다.\n','2023-09-26','https://d18-invdn-com.investing.com/content/pic7b07617d73e0756c52d7be4e5623d842.png','[0925주요뉴스] “中 공장 최악은 피했다”…삼성·하이닉스, 일단 숨통'),(4,'MoneyS','\n개인 투자자는 여전히 에코프로 주식 \'사자\'에 나서고 있으나 증권사에선 과열 현상에 경고의 목소리를 내면서 에코프로의 눈높이를 낮추고 있다.\n30일 한국거래소에 따르면 에코프로의 지난 27일 시가총액은 23조8584억원에 지난달 31일(33조4710억원) 대비 9조6126억원(40.29%)이 줄었다. 이달 들어 주가가 23.87% 하락한 결과다.\n에코프로는 지난 7월17일 종가 기준 99만원에서 다음날인 18일 111만8000원으로 오르면서 \'황제주\'에 등극했으나 이달 11일 종가 기준 100만원 아래로 내려왔고 전날 89만원대에서 거래됐다.\n자회사 에코프로비엠은 주가가 반토막 났다. 전날 에코프로비엠의 시총은 24조6948억원으로 코스닥 1위를 지키고 있으나 이달 3조6676억원의 시총이 감소했다. 지난 7월 장중 58만원선을 웃돌았던 주가는 28만원선으로 떨어졌다.\n증권업계는 에코프로를 비롯한 2차전지 종목이 추가 조정될 것이란 관측이 지배적이다. 내년 4월 총선을 앞두고 테마주 관심이 정치주로 옮겨간 데다 미국의 긴축 장기화 우려가 커지고 있어서다. 코스피는 한 달 만에 장중 2500선이 무너졌고 코스닥은 일주일 내리 내리막길을 걷고 있다.\n에코프로그룹의 비상장 계열사 에코프로머티리얼즈이 상장 소식도 악재다. 에코프로머티리얼즈의 상장은 \'중복 상장\' 논란에 따른 주가 하락이 있을 수 있어서다. 에코프로머티리얼즈는 22일 한국거래소에 상장 예비심사를 통과했다고 밝혔다.\n에코프로머티리얼즈는 그룹 내에서 전구체를 생산하는 기업이다. 전구체는 양극재 원료로 니켈·코발트·망간 등으로 생산된다. 에코프로머티리얼즈의 주요 실적이 이미 지주사 에코프로와 계열사 에코프로비엠에 상당 부분 반영돼 상장 자체가 계열사 내 중복상장으로 인식될 수 있다.\n장정훈 삼성증권 연구원은 \"에코프로비엠 (KQ:247540) 주가는 8월보다 33% 조정을 받은 상황이지만 \'중립\' 의견을 유지하는 것은 단기간 실적 모멘텀을 기대하기 어렵기 때문\"이라며 실적 전망치 하향에 따라 밸류에이션(기업 가치평가) 부담이 있다고 평가했다.\n노우호 메리츠증권 연구원은 \"3분기 에코프로비엠의 매출액은 1조9000억원, 영업이익은 618억원으로 시장 예상치를 각각 2.1%, 40.5% 하회할 전망\"이라며 전 분기부터 이어온 판매 단가 하락 영향에 부진한 이익 흐름이 예상된다\"고 설명했다.','2023-09-30','https://d18-invdn-com.investing.com/content/pic6a4882fd4ffb4668f7849922a140b04e.jpg','2차전지 \'진짜 내리막\' 지금부터... 에코프로·에코프로비엠 전망 먹구름'),(11,'시티타임스','CityTimes - 서울 서초구 삼성전자 (KS:005930) 사옥. [사진=뉴스1]\n[시티타임스=한국일반] 추석 연휴를 마친 코스피 지수가 2400선까지 급락했다. 외국인과 기관이 약 3조4658억원 순매도하며 하락세에 불을 지폈다.\n하반기 들어 2500~2600사이에서 등락을 이어왔던 코스피 지수는 9거래일 만에 200포인트 떨어지며 결국 2400 직전까지 밀렸다.\n5일 한국거래소에 따르면 코스피 지수는 지난 9월18일부터 전날까지 2601.28에서 2405.69로 195.59포인트(7.52%) 빠졌다.\n이 기간 외국인과 기관이 하락세를 주도했다. 외국인은 지난 9거래일간 1조3474억원을, 기관(기관합계)은 2조1184억원을 순매도했다. 특히 전날 외국인과 기관이 각각 4042억원, 4691억원어치를 순매도하며 지수 하락을 주도했다.\n외국인은 이 기간 POSCO홀딩스 (KS:005490)(4638억원)를 가장 많이 팔았다. LG화학 (KS:051910)과 SK하이닉스 (KS:000660)는 각각 2257억원, 2096억원 규모를 순매도했다. 그 뒤는 △LG에너지솔루션(1412억원) △카카오 (KS:035720)(942억원) △삼성바이오로직스 (KS:207940)(930억원) △삼성전자우 (KS:005935)(926억원) △두산에너빌리티 (KS:034020)(713억원) 순이었다.\n기관이 가장 많이 판 종목은 삼성전자로 집계됐다. 기관은 지난 9월18일부터 이날까지 삼성전자 9287억원을 순매도했다. 1343만주 규모다. △포스코홀딩스(1484억원) △네이버(1404억원) △SK이노베이션(1239억원) △포스코퓨처엠(1219억원) △삼성SDI(1079억원) 등이 뒤를 이었다.\n미국의 기준금리가 높은 수준에서 장기간 유지되는 상황이 계속될 것이라는 전망에 힘이 실리면서 금융시장 변동성이 커지는 모습이다. 안전자산에 대한 선호가 높아지며 미국 국채 10년물 금리가 2007년 이후 최고 수준인 4.81%까지 치솟았고 원·달러 환율은 1360원대로 올라섰다. 위험자산으로 분류되는 국내 증시의 낙폭은 커졌다.\n이에 대형주들도 하락을 면치 못했다. 전날 코스피 시총 상위 50개 종목 중 5개 종목을 제외하고 전부 하락 마감했다. △삼성전자(-1.32%) △LG에너지솔루션(-4.30%) △포스코홀딩스(-4.49%) △삼성SDI(-5.37%) △네이버(-5.11%) △포스코퓨처엠(-6.54%) △현대모비스(-3.12%) △카카오(-5.35%) 등의 하락 폭이 컸다.\n이경민 대신증권 연구원은 \"미국채 금리 상승 부담이 가세되며 금융시장의 변동성이 확대됐다\"며 \"성장주 투자 부담에 네이버 (KS:035420), 카카오 (KS:035720) 등 인터넷주가 약세를 보였고 전기·전자의 경우 삼성전자와 배터리 셀 업체들이 업종 하락을 주도했다\"고 설명했다.','2023-10-05','https://i-invdn-com.investing.com/news/LYNXMPEB38039_L.jpg','외국인·기관 3조 털었다…삼전·포홀·네카오 등 \'털썩\''),(12,'시티타임스','CityTimes - 리비안 (NASDAQ:RIVN). [사진=뉴스1]\n[시티타임스=미국/북중남미] 한때 \'테슬라 (NASDAQ:TSLA) 대항마\'로 주목받았던 미국 전기차 업체 리비안이 대규모 전환사채 발행 계획을 발표하자 주가가 20% 넘게 급락했다.\n5일(현지시간) 뉴욕증시에서 리비안은 전거래일보다 22.88% 내린 18.27 달러를 기록했다.\n이는 리비안이 운영자금 마련을 위해 15억 달러(약 2조원)의 전환사채를 발행키로 했다는 소식 때문으로 풀이된다. 스타트업(신생기업)은 자금난을 겪으면 전환사채를 발행, 유동성을 보충하는 것이 상례다.\n하지만 기존 주주의 보유 주식 가치를 희석할 우려가 있어 주가 하락 요인으로 작용한다.\n리비안은 전기차 스타트업 가운데 선두 주자로 꼽히지만, 2021년 11월 기업공개(IPO) 이후 공급망 문제와 느린 성장세로 어려움을 겪어왔다.\n◇ 루시드 (NASDAQ:LCID) 신차 가격 인하, 7% ↓…전기차 일제 하락\n이날 루시드 또한 전거래일보다 7.19% 급락한 5.16 달러를 기록했다. 최근 출시한 신차 \'루시드 에어 퓨어\'의 가격을 인하했기 때문이다.\n루시드는 최근 출시한 루시드 에어 퓨어 가격을 7만7400 달러로 인하했다. 이는 이전보다 5000 달러 정도 하향한 것이다.\n이는 루시드 에어 퓨어에 대한 수요가 크지 않다는 것을 방증한다. 이에 따라 이날 루시드의 주가는 7% 이상 급락한 것으로 보인다.\n전기트럭 업체 니콜라도 4.23% 급락한 1.36 달러를 기록했다.\n반면 테슬라는 전거래일보다 0.43% 하락한 260.05 달러로 장을 마감해 비교적 선방했다.','2023-10-06','https://i-invdn-com.investing.com/news/moved_LYNXMPEHA900E_L.jpg','리비안, 2조원 규모 전환사채 발행…주가 23% 급락');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news_read`
--

DROP TABLE IF EXISTS `news_read`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news_read` (
  `news_read_id` bigint NOT NULL AUTO_INCREMENT,
  `news_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`news_read_id`),
  KEY `FKrd5718ll81v5lwajo0dl56gqu` (`news_id`),
  KEY `FKilfb4o13dieabupssjd7fi5t6` (`user_id`),
  CONSTRAINT `FKilfb4o13dieabupssjd7fi5t6` FOREIGN KEY (`user_id`) REFERENCES `member` (`user_id`),
  CONSTRAINT `FKrd5718ll81v5lwajo0dl56gqu` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news_read`
--

LOCK TABLES `news_read` WRITE;
/*!40000 ALTER TABLE `news_read` DISABLE KEYS */;
/*!40000 ALTER TABLE `news_read` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `qtn_id` bigint NOT NULL AUTO_INCREMENT,
  `img` varchar(255) DEFAULT NULL,
  `qtn_content` varchar(255) NOT NULL,
  `status` char(1) NOT NULL DEFAULT 'P',
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`qtn_id`),
  KEY `FK1f5tvh6o6n30k5h6iqefshhu5` (`user_id`),
  CONSTRAINT `FK1f5tvh6o6n30k5h6iqefshhu5` FOREIGN KEY (`user_id`) REFERENCES `member` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'재미.jpg','반에서 가장 유머 감각이 좋은 사람','Y',15),(2,'스포츠.jpg','스포츠를 가장 잘하는 사람','Y',15),(3,'리더.jpg','가장 도움이 되는 사람','Y',15),(4,'리더.jpg','가장 타고난 리더','Y',15),(5,'최고.jpg','가장 믿음직한 사람','Y',15),(6,'신속.jpg','가장 빠른 사람','Y',15),(7,'리더.jpg','가장 뛰어난 말하기 능력을 가진 사람','Y',15),(8,'음악.jpg','가장 노래를 잘 부르는 사람','Y',15),(9,'학습.jpg','가장 뛰어난 공부 능력을 가진 사람','Y',15),(10,'최고.jpg','가장 친구가 많은 사람','Y',15),(11,'리더.jpg','가장 뛰어난 영어 능력을 가진 사람','Y',15),(12,'음악.jpg','가장 음악에 재능 있는 사람','Y',15),(13,'최고.jpg','가장 뛰어난 발표 능력을 가진 사람','Y',15),(14,'리더.jpg','가장 리더쉽 있는 사람','Y',15),(15,'음악.jpg','노래를 제일 잘할 것 같은 사람','Y',23),(16,'최고.jpg','전교 일등했을 것 같은 사람','Y',23),(17,'스포츠.jpg','운동할 때 항상 응원하고 싶은 사람','Y',23),(18,'학습.jpg','책을 추천해줄 때 항상 최고의 선택을 하는 사람','Y',23),(19,'커피.jpg','같이 카페 가고 싶은 사람','Y',23),(20,'재미.jpg','반에서 제일 웃긴 사람','Y',23),(21,'음악.jpg','최고의 DJ','Y',23),(22,'별.jpg','밝은 미래를 그릴 수 있는 사람','Y',23),(23,'스포츠.jpg','스포츠 경기에서 함께 응원하고 싶은 사람','Y',23),(24,'재미.jpg','세상에서 가장 재미있는 이야기를 들려주는 사람','Y',23),(26,'음악.jpg','같이 노래방 가고 싶은 사람','Y',24),(27,'별.jpg','함께 밤하늘 별을 보고 싶은 사람','Y',24),(28,'고백.jpg','가장 로맨틱한 사람','Y',26),(29,'최고.jpg','항상 자신감 있는 사람','Y',26),(30,'커피.jpg','같이 커피 타임을 가지고 싶은 사람','Y',27),(31,'깔끔.jpg','가장 깔끔한 사람','Y',27),(32,'리더.jpg','함께 세상을 바꾸고 싶은 사람','Y',27),(33,'별.jpg','가장 멋진 도전을 하는 사람','Y',27),(34,'학습.jpg','함께 무언가를 배우고 싶은 사람','Y',27),(35,'열정.png','가장 열정적인 사람','Y',27),(36,'차분.jpg','가장 조용한 사람','Y',27),(37,'리더.jpg','가장 책임감 있는 사람','Y',27),(38,'차분.jpg','가장 착한 사람','Y',27),(39,'마음.jpg','가장 기분 좋게 하는 사람','Y',27),(40,'학습.jpg','가장 책을 많이 읽은 사람','Y',27),(41,'열정.png','가장 활기찬 사람','Y',27),(42,'열정.png','가장 활력 넘치는 사람','Y',27),(43,'마음.jpg','가장 가족을 사랑하는 사람','Y',27),(44,'재미.jpg','가장 유쾌한 사람','Y',27),(45,'마음.jpg','가장 상대방을 편안하게 하는 사람','Y',27),(46,'마음.jpg','가장 마음이 따뜻한 사람','Y',27),(47,'리더.jpg','가장 세상을 바꾸려는 사람','Y',27),(48,'마음.jpg','가장 무대를 사랑하는 사람','Y',27),(49,'마음.jpg','가장 동물을 사랑하는 사람','Y',27),(50,'여행.jpg','가장 여행을 좋아하는 사람','Y',27),(51,'마음.jpg','가장 가슴이 따뜻한 사람','Y',28),(52,'별.jpg','가장 빛나는 사람','Y',28),(53,'영화.jpg','같이 영화보고 싶은 사람','Y',28),(54,'상.jpg','상견례 프리패스 상','Y',28),(55,'팀원.jpg','같이 프로젝트 하고 싶은 사람','Y',28),(56,'떠나다.jpg','피크닉 가고 싶은 사람','Y',28),(58,'재미.jpg','항상 웃음을 준비한 사람','Y',28),(59,'팀원.jpg','최고의 여행 파트너','Y',28),(60,'비.jpg','비를 좋아하는 사람','Y',28),(61,'별.jpg','무대에서 가장 빛나는 사람','Y',28),(62,'팀원.jpg','최고의 게임 파트너','Y',28),(63,'마음.jpg','항상 옆에서 격려하는 사람','Y',28),(64,'마음.jpg','제일 외향형일 것 같은 사람','P',28),(65,'차분.jpg','뭐든 평타 이상 해낼 것 같은 사람','P',28),(66,'차분.jpg','가장 열정적인 사람','P',28),(67,'차분.jpg','생각이 깊은 사람','P',28),(68,'리더.jpg','나무보다 숲을 보는 사람','P',28),(69,'리더.jpg','숲보다 나무를 보는 사람','P',28),(70,'차분.jpg','봄과 어울리는 사람','P',28),(71,'차분.jpg','여름과 어울리는 사람','P',28),(72,'차분.jpg','가을과 어울리는 사람','P',28),(73,'차분.jpg','겨을과 어울리는 사람','P',28),(74,'리더.jpg','자기주도적 학습을 잘하는 사람','P',28),(75,'차분.jpg','항상 차분한 사람','P',28),(76,'재미.jpg','같이 술 마시고 싶은 사람','P',28),(77,'마음.jpg','행복해 보이는 사람','P',28),(78,'학습.jpg','과제를 잘 도와주는 사람','Y',28),(79,'스포츠.jpg','클라이밍 같이 가고 싶은 사람','Y',28),(80,'스포츠.jpg','등산 같이 가고 사람','Y',28),(81,'스포츠.jpg','수영 같이 하고 싶은 사람','Y',28),(82,'스포츠.jpg','스포츠를 잘 할 것 같은 사람','Y',28),(83,'리더.jpg','반 대표로 어울리는 사람','Y',28),(84,'재미.jpg','학창시절이 궁금한 사람','Y',28),(85,'고백.jpg','상견례 프리패스 상','Y',28),(86,'리더.jpg','면접 프리패스 상','Y',28),(87,'차분.jpg','비밀을 얘기할 수 있는 사람','Y',28),(88,'떠나다.jpg','같이 국내 여행 가고 싶은 사람','Y',28),(89,'떠나다.jpg','같이 해외 여행 가고 싶은 사람','Y',28),(90,'재미.jpg','친화력이 좋은 사람','Y',28),(91,'마음.jpg','사랑받은 티가 나는 사람','Y',28),(96,NULL,'','P',38),(99,NULL,'재밌어요','P',23),(100,NULL,'질문','P',23);
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz`
--

DROP TABLE IF EXISTS `quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz` (
  `quiz_id` bigint NOT NULL AUTO_INCREMENT,
  `answer` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `option1` varchar(255) DEFAULT NULL,
  `option2` varchar(255) DEFAULT NULL,
  `option3` varchar(255) DEFAULT NULL,
  `option4` varchar(255) DEFAULT NULL,
  `option5` varchar(255) DEFAULT NULL,
  `question` varchar(255) DEFAULT NULL,
  `news_id` bigint DEFAULT NULL,
  PRIMARY KEY (`quiz_id`),
  KEY `FK5eh4robrgnic3ek5kup1yh4km` (`news_id`),
  CONSTRAINT `FK5eh4robrgnic3ek5kup1yh4km` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz`
--

LOCK TABLES `quiz` WRITE;
/*!40000 ALTER TABLE `quiz` DISABLE KEYS */;
INSERT INTO `quiz` VALUES (10,'195.59포인트','2023-10-05','195.59포인트','2400포인트','2500포인트','2600포인트','3474.58포인트','9일간 코스피 지수는 몇 포인트 하락했나?',11),(11,'9월18일','2023-10-05','9월19일','9월20일','9월21일','9월22일','9월18일','외국인과 기관이 하락세를 유발한 시기는?',11),(12,'카카오','2023-10-05','LG화학','SK하이닉스','LG에너지솔루션','카카오','삼성전자우','외국인이 이 기간 가장 많이 판 종목은?',11),(13,'삼성전자','2023-10-05','삼성전자','SK이노베이션','네이버','포스코홀딩스','삼성SDI','기관이 가장 많이 판 종목은?',11),(14,'2011년','2023-10-05','2007년','2008년','2009년','2010년','2011년','미국 국채 10년물 금리가 4.81%일 때, 어느 시기 이후 최고치를 찍었나?',11),(15,'하락성','2023-10-05','상승성','하락성','안정성','변함없음','예측불가','안전자산에 대한 선호가 높아지면서 금융시장의 어떤 변동성이 커졌는가?',11),(16,'전부 다정답','2023-10-05','전기·전자','제약','건설','호텔','전부 다정답','국내 증시의 어떤 종목들이 위험자산으로 분류된다고 설명됐는가?',11),(17,'삼성전자','2023-10-05','LG에너지솔루션','SK하이닉스','삼성전자','카카오','네이버','이경민 대신증권 연구원의 분석에 따르면, 어떤 종목이 업종 하락을 주도했다고 설명되었는가?',11),(18,'네이버와 카카오','2023-10-05','삼성전자와 SK하이닉스','LG화학과 삼성전자우','LG전자와 포스코퓨처엠','네이버와 카카오','SK이노베이션과 SK하이닉스','변동성이 확대되며 성장주 투자 부담이 느껴지고 있는 두 종목은?',11),(19,'삼성전자를 샀다기보다는 팔았다.','2023-10-05','9287억원','4638억원','1484억원','1404억원','삼성전자를 샀다기보다는 팔았다.','9월18일부터 이날까지 삼성전자를 기관이 얼마나 샀는가?',11),(20,'리비안은 15억 달러의 전환사채를 발행키로 했다.','2023-10-06','스타트업에서 자금난을 겪으면 전환사채를 발행하는 것은 희귀한 일이다.','전환사채 발행은 리비안의 기존 주주의 보유 주식 가치를 희석할 우려가 없다.','전환사채 발행 계획 발표 후, 리비안의 주가는 상승했다.','리비안은 전기차 스타트업 분야에서 선두 주자가 아니다.','리비안은 15억 달러의 전환사채를 발행키로 했다.','리비안의 대규모 전환사채 발행 계획과 관련된 것으로 올바른 것은?',12),(21,'루시드 에어 퓨어에 대한 수요가 크지 않다는 것을 인식하여 가격을 인하했기 때문이다.','2023-10-06','루시드 에어 퓨어에 대한 수요가 많아졌기 때문이다.','루시드 에어 퓨어의 품질이 저하되었기 때문이다.','루시드 이외의 다른 전기차 업체의 경쟁력이 강해져서이다.','루시드 에어 퓨어의 가격이 비싸서 매출이 부진했기 때문이다.','루시드 에어 퓨어에 대한 수요가 크지 않다는 것을 인식하여 가격을 인하했기 때문이다.','루시드가 최근 출시한 신차 \'루시드 에어 퓨어\'의 가격이 하락한 이유는 무엇인가?',12),(22,'리비안의 대규모 전환사채 발행 계획 발표 때문에 기존 주주의 보유 주식 가치를 희석할 우려가 있기 때문이다.','2023-10-06','전체적인 시장 경기가 좋지 않아서이다.','리비안이 최근에 이익을 발표하지 않았기 때문이다.','리비안의 대규모 전환사채 발행 계획 발표 때문에 기존 주주의 보유 주식 가치를 희석할 우려가 있기 때문이다.','리비안의 신제품이 시장에서 호평을 받지 못해 기대 수준을 충족시키지 못했기 때문이다.','리비안의 경영진이 비약적인 성장을 달성하지 못하겠다는 인식이 일자서서 주가 하락했기 때문이다.','리비안의 주가가 급락한 이유는 무엇인가?',12),(23,'리비안은 전기차 스타트업 가운데 선두 주자로 꼽히지만, 기업공개(IPO) 이후 공급망 문제와 느린 성장세로 어려움을 겪어왔다.','2023-10-06','성능이 낮고 가격이 저렴하다.','디자인이 다양하고 귀여운 모델이 많다.','운전 거리가 먼 것이 특징이다.','적극적인 마케팅 전략으로 소비자들에게 큰 반향을 불러일으킨다.','리비안은 전기차 스타트업 가운데 선두 주자로 꼽히지만, 기업공개(IPO) 이후 공급망 문제와 느린 성장세로 어려움을 겪어왔다.','리비안이 만든 전기차의 특징은?',12);
/*!40000 ALTER TABLE `quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_solve`
--

DROP TABLE IF EXISTS `quiz_solve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_solve` (
  `quiz_solve_id` bigint NOT NULL AUTO_INCREMENT,
  `quiz_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`quiz_solve_id`),
  KEY `FK39eyv5w1669snciw3tlav60ph` (`quiz_id`),
  KEY `FKinr7wr9iapr6h6y9m21x9vxd5` (`user_id`),
  CONSTRAINT `FK39eyv5w1669snciw3tlav60ph` FOREIGN KEY (`quiz_id`) REFERENCES `quiz` (`quiz_id`),
  CONSTRAINT `FKinr7wr9iapr6h6y9m21x9vxd5` FOREIGN KEY (`user_id`) REFERENCES `member` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_solve`
--

LOCK TABLES `quiz_solve` WRITE;
/*!40000 ALTER TABLE `quiz_solve` DISABLE KEYS */;
/*!40000 ALTER TABLE `quiz_solve` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote_count`
--

DROP TABLE IF EXISTS `vote_count`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vote_count` (
  `vote_cnt_id` bigint NOT NULL AUTO_INCREMENT,
  `vote_cnt` bigint DEFAULT NULL,
  `qtn_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`vote_cnt_id`),
  KEY `FKafysgngnjkjwj2nyujuaqdgsp` (`qtn_id`),
  KEY `FKc830npf5dewfi1pkolwpb2gcs` (`user_id`),
  CONSTRAINT `FKafysgngnjkjwj2nyujuaqdgsp` FOREIGN KEY (`qtn_id`) REFERENCES `question` (`qtn_id`),
  CONSTRAINT `FKc830npf5dewfi1pkolwpb2gcs` FOREIGN KEY (`user_id`) REFERENCES `member` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=357 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vote_count`
--

LOCK TABLES `vote_count` WRITE;
/*!40000 ALTER TABLE `vote_count` DISABLE KEYS */;
INSERT INTO `vote_count` VALUES (1,1,14,15),(2,3,2,23),(3,2,8,23),(4,3,8,15),(5,1,4,23),(6,5,6,23),(7,1,24,23),(8,3,24,15),(9,10,21,23),(10,4,20,23),(11,6,7,23),(12,1,4,27),(13,8,4,28),(14,5,30,15),(15,1,48,28),(16,4,49,28),(17,1,19,28),(18,2,40,26),(19,2,22,26),(20,1,50,28),(21,2,60,24),(22,1,40,28),(23,3,48,27),(24,2,17,27),(25,2,20,24),(26,3,14,27),(27,2,54,24),(28,1,11,23),(29,1,51,23),(30,2,56,23),(31,1,49,23),(32,3,27,27),(33,3,37,24),(34,1,63,24),(35,3,9,23),(36,2,60,23),(37,1,27,23),(38,1,41,23),(39,1,56,27),(40,1,1,26),(41,3,15,23),(42,2,10,28),(43,3,17,23),(44,1,39,23),(45,1,42,27),(46,2,21,28),(47,2,35,23),(48,1,18,23),(49,2,46,27),(50,2,34,27),(51,3,52,28),(52,1,8,26),(53,1,2,26),(54,2,43,26),(55,2,30,27),(56,1,36,23),(57,2,12,28),(58,3,58,24),(59,1,9,27),(60,1,9,15),(61,2,40,27),(62,1,12,23),(63,2,82,24),(64,2,35,24),(65,1,47,27),(66,1,88,27),(67,2,49,27),(68,2,3,15),(69,3,14,24),(70,4,55,24),(71,2,3,27),(72,1,91,26),(73,2,54,15),(74,2,79,28),(75,2,91,27),(76,1,78,27),(77,1,59,15),(78,1,47,15),(79,2,38,15),(80,1,45,15),(81,1,58,28),(82,1,54,23),(83,1,78,23),(84,2,43,24),(85,2,27,28),(86,1,32,27),(87,1,21,24),(88,2,40,23),(89,1,45,27),(90,2,46,23),(91,1,63,28),(92,4,42,24),(93,1,90,24),(94,2,12,27),(95,3,90,23),(96,1,35,27),(97,1,85,15),(98,3,28,24),(99,1,89,27),(100,2,79,23),(101,2,63,27),(102,1,6,28),(103,2,44,15),(104,2,29,23),(105,2,38,27),(106,1,62,15),(107,2,48,23),(108,1,31,15),(109,1,23,23),(110,1,36,24),(111,1,84,27),(112,1,82,15),(113,1,11,27),(114,2,23,27),(115,2,52,24),(116,1,7,27),(117,1,19,15),(118,1,11,29),(119,1,46,34),(120,1,27,31),(121,1,91,30),(122,1,63,30),(123,1,34,30),(124,1,87,30),(125,1,19,31),(126,2,23,30),(127,2,44,29),(128,15,19,30),(129,1,18,26),(130,7,56,28),(131,1,13,23),(132,3,4,24),(133,1,84,28),(134,2,60,28),(135,1,35,29),(136,3,13,24),(137,1,79,29),(138,1,31,29),(139,1,44,30),(140,1,15,36),(141,1,36,30),(142,1,15,15),(143,1,46,26),(144,1,61,26),(145,1,59,24),(146,1,14,26),(147,1,23,15),(148,4,2,27),(149,2,89,15),(150,3,2,24),(151,1,21,27),(152,2,1,23),(153,2,89,23),(154,1,80,24),(155,1,6,15),(156,1,91,28),(157,2,42,15),(158,1,29,26),(159,1,41,28),(160,2,39,15),(161,5,32,15),(162,1,24,26),(163,3,2,28),(164,4,41,24),(165,1,33,24),(166,2,84,15),(167,1,26,24),(168,1,27,26),(169,1,51,36),(170,1,16,36),(171,1,42,26),(172,3,52,30),(173,1,15,26),(174,9,49,30),(175,1,24,36),(176,8,89,30),(177,2,33,28),(178,1,43,28),(179,1,6,26),(180,1,32,36),(181,1,16,34),(182,1,11,30),(183,1,84,36),(184,1,78,26),(185,1,56,15),(186,1,83,34),(187,1,80,23),(188,2,34,28),(189,6,56,30),(190,1,30,36),(191,1,53,29),(192,3,89,28),(193,1,13,36),(194,1,50,29),(195,1,4,31),(196,1,56,24),(197,1,81,26),(198,1,14,23),(199,1,49,15),(200,3,23,28),(201,1,19,26),(202,1,58,34),(203,1,53,36),(204,1,84,29),(205,1,17,29),(206,1,41,29),(207,1,4,30),(208,1,84,30),(209,1,26,29),(210,3,22,30),(211,1,87,32),(212,1,23,34),(213,1,36,15),(214,2,36,31),(215,1,50,36),(216,1,2,36),(217,1,29,36),(218,1,18,36),(219,1,14,36),(220,1,6,29),(221,1,59,23),(222,1,39,26),(223,1,80,15),(224,2,8,27),(225,1,79,27),(226,2,24,27),(227,1,1,27),(228,1,87,27),(229,1,33,26),(230,1,49,24),(231,1,79,26),(232,3,36,27),(233,1,5,28),(234,1,84,26),(235,1,51,24),(236,1,39,27),(237,1,32,23),(238,2,80,28),(239,1,29,24),(240,1,86,23),(241,2,18,24),(242,1,81,23),(243,1,60,26),(244,1,86,28),(245,1,26,28),(246,2,15,27),(247,3,23,24),(248,1,46,24),(249,1,8,24),(250,2,30,23),(251,1,47,26),(252,1,24,28),(253,4,16,15),(254,1,10,15),(255,1,26,27),(256,1,33,23),(257,1,84,24),(258,2,62,23),(259,1,58,23),(260,1,56,33),(261,1,60,27),(262,1,83,24),(263,2,6,27),(264,1,11,15),(265,1,80,31),(266,1,48,31),(267,1,33,15),(268,1,78,15),(269,1,82,23),(270,2,32,24),(271,1,8,28),(272,1,28,28),(273,1,47,28),(274,1,78,24),(275,1,84,23),(276,1,32,28),(277,1,91,23),(278,1,9,24),(279,2,7,15),(280,1,61,27),(281,1,34,24),(282,2,27,24),(283,1,63,23),(284,1,45,31),(285,1,17,31),(286,1,52,23),(287,3,31,27),(288,1,30,26),(289,1,87,26),(290,1,43,23),(291,1,88,31),(292,1,63,26),(293,1,51,31),(294,1,40,15),(295,1,50,26),(296,2,1,31),(297,1,81,31),(298,1,28,27),(299,1,87,23),(300,1,22,28),(301,1,47,24),(302,1,38,23),(303,1,52,26),(304,1,18,15),(305,1,7,24),(306,1,54,28),(307,1,31,28),(308,2,90,28),(309,1,87,15),(310,1,33,31),(311,1,18,31),(312,1,36,26),(313,1,85,31),(314,1,82,28),(315,1,44,31),(316,1,50,31),(317,1,80,35),(318,1,82,31),(319,1,17,24),(320,1,40,38),(321,1,36,35),(322,1,81,35),(323,1,7,31),(324,1,41,38),(325,1,18,27),(326,2,55,28),(327,1,9,38),(328,1,59,28),(329,1,44,38),(330,1,56,35),(331,1,83,28),(332,1,62,31),(333,1,54,38),(334,1,43,31),(335,1,83,27),(336,1,37,26),(337,1,81,15),(338,1,50,27),(339,1,89,24),(340,1,22,38),(341,1,56,38),(342,1,52,31),(343,1,52,15),(344,1,7,28),(345,1,91,31),(346,1,59,38),(347,1,45,38),(348,1,46,28),(349,1,44,24),(350,1,35,28),(351,1,1,38),(352,1,16,27),(353,1,2,15),(354,1,11,35),(355,1,8,31),(356,1,39,38);
/*!40000 ALTER TABLE `vote_count` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vote_history`
--

DROP TABLE IF EXISTS `vote_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vote_history` (
  `vote_id` bigint NOT NULL AUTO_INCREMENT,
  `vote_time` bigint DEFAULT NULL,
  `chosen` bigint DEFAULT NULL,
  `qtn_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`vote_id`),
  KEY `FKditw2b2jxmy19gag70ennlh9q` (`chosen`),
  KEY `FKa6k3v4m81rokbi91vb4dwpr55` (`qtn_id`),
  KEY `FKl88fup0iunk4tdbv8svsojfy7` (`user_id`),
  CONSTRAINT `FKa6k3v4m81rokbi91vb4dwpr55` FOREIGN KEY (`qtn_id`) REFERENCES `question` (`qtn_id`),
  CONSTRAINT `FKditw2b2jxmy19gag70ennlh9q` FOREIGN KEY (`chosen`) REFERENCES `member` (`user_id`),
  CONSTRAINT `FKl88fup0iunk4tdbv8svsojfy7` FOREIGN KEY (`user_id`) REFERENCES `member` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=569 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vote_history`
--

LOCK TABLES `vote_history` WRITE;
/*!40000 ALTER TABLE `vote_history` DISABLE KEYS */;
INSERT INTO `vote_history` VALUES (1,1696527194,15,14,23),(2,1696527201,23,2,23),(3,1696527223,23,8,23),(4,1696527224,15,8,23),(5,1696527769,23,4,23),(6,1696527811,23,6,23),(7,1696527819,23,6,23),(8,1696527827,23,6,23),(9,1696527829,23,6,23),(10,1696527831,23,6,23),(11,1696527840,23,24,23),(12,1696527852,15,24,23),(13,1696527863,23,21,23),(14,1696527891,23,20,23),(15,1696527897,23,20,23),(16,1696527926,23,21,23),(17,1696527928,23,21,23),(18,1696527930,23,21,23),(19,1696527931,23,21,23),(20,1696527933,23,21,23),(21,1696527934,23,21,23),(22,1696527948,23,21,23),(23,1696527949,23,21,23),(24,1696527982,23,7,23),(25,1696527987,23,7,23),(26,1696527991,23,7,23),(27,1696528004,23,7,23),(28,1696528194,23,7,23),(29,1696528453,27,4,23),(30,1696528461,28,4,23),(31,1696528492,28,4,23),(32,1696528512,28,4,23),(33,1696528532,28,4,23),(34,1696528533,28,4,23),(35,1696528535,28,4,23),(36,1696528535,28,4,23),(37,1696530193,15,30,27),(38,1696532145,28,48,23),(39,1696532170,28,49,23),(40,1696532173,28,19,23),(41,1696532609,28,49,23),(42,1696532613,15,30,23),(43,1696532614,26,40,23),(44,1696532615,26,22,23),(45,1696532631,28,50,23),(46,1696532743,24,60,23),(47,1696532745,28,40,23),(48,1696532749,27,48,23),(49,1696532751,27,17,23),(50,1696532755,24,20,23),(51,1696532825,27,14,23),(52,1696532828,24,54,23),(53,1696535402,23,20,15),(54,1696535424,23,11,15),(55,1696535430,23,51,15),(56,1696535431,23,56,15),(57,1696535432,23,21,15),(58,1696535434,23,49,15),(59,1696535440,27,27,15),(60,1696535449,24,37,15),(61,1696535449,24,63,15),(62,1696535471,23,9,15),(63,1696535472,23,60,15),(64,1696535474,23,27,15),(65,1696535477,23,41,15),(66,1696535482,27,56,15),(67,1696535581,26,1,15),(68,1696535589,23,15,15),(69,1696535594,28,10,15),(70,1696535597,23,17,15),(71,1696535604,23,39,15),(72,1696535612,27,42,15),(73,1696535619,28,21,15),(74,1696535625,23,35,15),(75,1696535746,23,18,15),(76,1696535748,27,46,15),(77,1696535751,27,34,15),(78,1696535753,28,52,15),(79,1696535756,26,8,15),(80,1696535758,26,2,15),(81,1696535760,26,43,15),(82,1696535762,27,30,15),(83,1696536420,27,48,15),(84,1696536426,23,36,15),(85,1696536430,28,12,15),(86,1696536433,24,58,15),(87,1696536438,27,9,15),(88,1696536441,26,22,15),(89,1696536444,26,43,15),(90,1696536446,28,10,15),(91,1696536697,23,8,15),(92,1696538001,15,9,28),(93,1696538002,27,40,28),(94,1696538010,27,17,28),(95,1696538012,23,12,28),(96,1696538017,24,82,28),(97,1696538018,27,27,28),(98,1696538019,24,35,28),(99,1696538020,27,47,28),(100,1696538038,27,88,28),(101,1696538042,27,40,28),(102,1696538043,27,49,28),(103,1696538044,15,3,28),(104,1696538045,24,14,28),(105,1696538046,24,55,28),(106,1696538047,27,3,28),(107,1696538047,27,14,28),(108,1696538048,27,14,28),(109,1696538048,24,55,28),(110,1696538049,26,91,28),(111,1696538049,15,54,28),(112,1696538067,28,79,24),(113,1696538068,27,91,24),(114,1696538069,27,49,24),(115,1696538070,27,78,24),(116,1696538073,15,59,24),(117,1696538074,27,30,24),(118,1696538081,15,47,24),(119,1696538087,15,38,24),(120,1696538493,15,45,26),(121,1696538498,28,58,26),(122,1696538501,23,54,26),(123,1696538503,23,78,26),(124,1696538506,15,24,26),(125,1696538510,24,43,26),(126,1696538512,28,27,26),(127,1696538513,27,32,26),(128,1696538551,23,17,26),(129,1696538553,24,21,26),(130,1696538556,23,40,26),(131,1696538558,27,45,26),(132,1696538560,23,46,26),(133,1696538563,28,63,26),(134,1696538565,24,42,26),(135,1696538566,24,90,26),(136,1696538618,27,12,28),(137,1696538620,23,90,28),(138,1696538621,24,37,28),(139,1696538622,27,35,28),(140,1696538623,27,91,28),(141,1696538624,15,85,28),(142,1696538632,24,28,28),(143,1696538635,27,89,28),(144,1696538807,23,79,26),(145,1696538807,27,63,26),(146,1696538808,28,6,26),(147,1696538809,15,44,26),(148,1696538810,23,90,26),(149,1696538811,23,56,26),(150,1696538813,23,29,26),(151,1696538814,23,20,26),(152,1696538848,23,2,26),(153,1696538872,27,38,26),(154,1696538873,15,62,26),(155,1696538874,23,48,26),(156,1696539272,15,31,26),(157,1696539272,23,23,26),(158,1696539274,23,46,26),(159,1696539274,24,36,26),(160,1696539276,23,7,26),(161,1696548856,27,84,28),(162,1696548859,15,82,28),(163,1696548866,27,11,28),(164,1696548875,27,23,28),(165,1696548878,23,15,28),(166,1696548878,24,52,28),(167,1696548879,27,7,28),(168,1696548884,15,19,28),(169,1696550304,29,11,36),(170,1696550305,34,46,36),(171,1696550306,31,27,36),(172,1696550306,30,91,36),(173,1696550306,30,63,36),(174,1696550307,30,34,36),(175,1696550307,30,87,36),(176,1696550307,31,19,36),(177,1696550411,30,23,36),(178,1696550412,29,44,36),(179,1696550412,30,19,36),(180,1696550413,30,19,36),(181,1696550414,30,19,36),(182,1696550414,30,19,36),(183,1696550414,30,19,36),(184,1696550414,30,19,36),(185,1696550414,30,19,36),(186,1696550414,30,19,36),(187,1696550415,30,19,36),(188,1696550415,30,19,36),(189,1696550437,26,18,27),(190,1696550437,28,56,27),(191,1696550439,23,13,27),(192,1696550441,24,4,27),(193,1696550443,23,48,27),(194,1696550444,28,52,27),(195,1696550449,28,84,30),(196,1696550454,28,60,30),(197,1696550457,29,35,30),(198,1696550464,24,13,30),(199,1696550466,24,82,30),(200,1696550470,29,79,30),(201,1696550472,29,31,30),(202,1696550475,30,19,36),(203,1696550476,30,19,36),(204,1696550476,30,19,36),(205,1696550476,30,19,36),(206,1696550477,30,44,36),(207,1696550479,30,19,36),(208,1696550479,36,15,30),(209,1696550518,30,36,36),(210,1696550674,15,15,27),(211,1696550685,15,54,27),(212,1696550689,26,46,27),(213,1696550689,28,49,27),(214,1696550690,26,61,27),(215,1696550691,24,59,27),(216,1696550692,26,14,27),(217,1696550693,15,23,27),(218,1696550729,15,8,27),(219,1696550736,27,2,23),(220,1696550739,24,42,27),(221,1696550739,28,21,23),(222,1696550742,15,89,23),(223,1696550745,23,2,23),(224,1696550746,24,2,27),(225,1696550749,27,21,23),(226,1696550750,23,1,27),(227,1696550751,23,89,23),(228,1696550752,24,80,23),(229,1696550753,24,60,23),(230,1696550754,15,6,27),(231,1696550757,28,91,23),(232,1696550758,15,42,23),(233,1696550764,23,1,23),(234,1696550782,26,29,23),(235,1696550783,28,41,23),(236,1696550783,15,39,23),(237,1696550784,15,32,23),(238,1696550785,15,32,23),(239,1696550785,15,32,23),(240,1696550785,15,32,23),(241,1696550785,15,32,23),(242,1696550786,26,24,23),(243,1696550788,28,2,23),(244,1696550802,24,41,23),(245,1696550803,24,33,23),(246,1696550807,15,84,23),(247,1696550812,24,26,23),(248,1696550816,26,27,23),(249,1696550819,29,44,30),(250,1696550823,36,51,30),(251,1696550827,36,16,30),(252,1696550831,26,42,23),(253,1696550832,30,52,36),(254,1696550833,26,15,23),(255,1696550833,28,56,36),(256,1696550833,30,49,36),(257,1696550834,36,24,30),(258,1696550835,30,89,36),(259,1696550836,30,89,36),(260,1696550836,30,89,36),(261,1696550836,30,49,36),(262,1696550838,28,33,30),(263,1696550844,28,43,30),(264,1696550847,24,58,30),(265,1696550847,26,6,23),(266,1696550853,36,32,30),(267,1696550854,34,16,24),(268,1696550859,30,11,24),(269,1696550865,36,84,24),(270,1696550868,26,78,24),(271,1696550868,15,30,27),(272,1696550868,24,20,27),(273,1696550869,28,12,27),(274,1696550869,15,56,27),(275,1696550870,34,83,24),(276,1696550870,23,80,27),(277,1696550871,24,55,27),(278,1696550871,28,34,27),(279,1696550871,30,56,36),(280,1696550872,24,52,27),(281,1696550873,30,56,36),(282,1696550874,36,30,24),(283,1696550878,29,53,24),(284,1696550878,30,52,36),(285,1696550879,28,89,36),(286,1696550884,36,13,30),(287,1696550884,30,56,36),(288,1696550884,28,56,36),(289,1696550885,30,89,36),(290,1696550887,29,50,30),(291,1696550888,30,23,36),(292,1696550891,31,4,30),(293,1696550893,24,56,23),(294,1696550894,26,81,23),(295,1696550894,23,14,23),(296,1696550894,15,30,23),(297,1696550894,15,49,23),(298,1696550894,28,23,23),(299,1696550894,15,89,23),(300,1696550895,26,19,23),(301,1696550895,34,58,30),(302,1696550897,36,53,30),(303,1696550899,29,84,30),(304,1696550902,29,17,30),(305,1696550902,30,56,36),(306,1696550903,30,56,36),(307,1696550903,29,41,30),(308,1696550904,28,56,36),(309,1696550904,30,52,36),(310,1696550917,28,56,36),(311,1696550920,28,49,36),(312,1696550934,30,4,31),(313,1696550935,30,84,31),(314,1696550935,29,26,31),(315,1696550943,28,56,36),(316,1696550985,28,23,36),(317,1696550985,30,22,36),(318,1696550987,32,87,36),(319,1696550987,30,89,36),(320,1696550989,34,23,36),(321,1696550990,30,56,36),(322,1696550992,30,49,36),(323,1696550992,28,89,36),(324,1696550992,30,49,36),(325,1696550993,28,56,36),(326,1696550994,30,49,36),(327,1696550996,30,22,36),(328,1696550999,30,22,36),(329,1696551068,15,36,27),(330,1696551072,15,39,27),(331,1696551102,31,36,24),(332,1696551106,36,50,24),(333,1696551108,36,2,24),(334,1696551110,36,29,24),(335,1696551112,36,18,24),(336,1696551114,36,14,24),(337,1696551136,29,6,24),(338,1696551137,30,49,36),(339,1696551137,28,23,36),(340,1696551139,30,49,36),(341,1696551151,23,59,23),(342,1696551170,26,39,23),(343,1696551172,15,80,23),(344,1696551237,27,63,26),(345,1696551238,27,2,26),(346,1696551239,27,27,26),(347,1696551239,27,8,26),(348,1696551239,27,79,26),(349,1696551240,27,12,26),(350,1696551240,27,24,26),(351,1696551241,27,2,26),(352,1696551256,27,1,26),(353,1696551292,30,49,36),(354,1696551411,27,87,23),(355,1696551412,24,42,23),(356,1696551412,23,89,23),(357,1696551412,26,33,23),(358,1696551412,24,49,23),(359,1696551412,26,79,23),(360,1696551413,24,14,23),(361,1696551413,27,36,23),(362,1696551549,28,5,23),(363,1696551799,27,46,15),(364,1696551808,26,84,15),(365,1696551813,23,40,15),(366,1696551816,24,51,15),(367,1696551818,27,39,15),(368,1696551820,23,32,15),(369,1696551822,28,80,15),(370,1696551823,23,90,15),(371,1696552185,30,89,36),(372,1696552187,30,89,36),(373,1696552189,30,49,36),(374,1696552189,28,89,36),(375,1696552190,30,89,36),(376,1696553069,15,38,27),(377,1696553071,24,29,27),(378,1696553073,23,86,27),(379,1696553083,24,18,27),(380,1696553087,23,81,27),(381,1696553092,26,60,27),(382,1696553125,28,86,26),(383,1696553125,28,26,26),(384,1696553127,27,15,26),(385,1696553127,24,23,26),(386,1696553127,24,46,26),(387,1696553127,28,33,26),(388,1696553128,24,8,26),(389,1696553128,23,30,26),(390,1696553128,26,47,27),(391,1696553130,24,41,27),(392,1696553132,28,24,27),(393,1696553154,15,16,27),(394,1696553394,24,42,28),(395,1696553456,26,40,27),(396,1696553531,15,10,26),(397,1696553532,27,26,26),(398,1696553533,23,33,26),(399,1696553536,24,84,26),(400,1696553537,24,37,27),(401,1696553537,24,58,26),(402,1696553538,24,35,26),(403,1696553540,24,23,26),(404,1696553542,24,4,26),(405,1696553586,23,62,24),(406,1696553588,23,58,24),(407,1696553588,33,56,24),(408,1696553694,27,60,28),(409,1696553699,24,83,28),(410,1696553700,27,6,28),(411,1696553702,15,11,28),(412,1696553703,31,80,28),(413,1696553705,31,48,28),(414,1696553706,15,33,28),(415,1696553708,15,78,28),(416,1696553718,23,82,26),(417,1696553720,24,32,26),(418,1696553721,24,2,26),(419,1696553722,28,8,26),(420,1696553724,28,28,26),(421,1696553726,28,47,26),(422,1696553727,24,78,26),(423,1696553728,27,36,26),(424,1696553749,23,84,26),(425,1696553766,28,32,26),(426,1696553784,23,60,26),(427,1696553804,28,34,26),(428,1696553822,23,91,26),(429,1696553823,24,18,26),(430,1696553825,24,9,26),(431,1696553827,24,28,26),(432,1696553829,15,7,26),(433,1696553832,23,79,26),(434,1696553837,27,61,26),(435,1696553840,24,13,26),(436,1696553860,24,55,26),(437,1696553878,24,34,26),(438,1696554040,24,43,28),(439,1696554041,24,27,28),(440,1696554042,24,32,28),(441,1696554043,24,2,28),(442,1696554045,24,14,28),(443,1696554048,23,63,28),(444,1696554049,27,3,28),(445,1696554051,23,9,28),(446,1696554083,31,45,28),(447,1696554088,23,9,28),(448,1696554092,31,17,28),(449,1696554095,23,62,28),(450,1696554098,31,36,28),(451,1696554099,23,52,28),(452,1696554100,27,6,28),(453,1696554101,27,34,28),(454,1696554207,27,31,28),(455,1696554208,26,30,28),(456,1696554211,23,15,28),(457,1696554212,26,87,28),(458,1696554214,23,43,28),(459,1696554215,31,88,28),(460,1696554217,24,4,28),(461,1696554218,23,17,28),(462,1696554236,26,63,23),(463,1696554294,24,13,28),(464,1696555398,31,51,28),(465,1696555400,27,36,28),(466,1696555415,23,30,28),(467,1696555416,15,40,28),(468,1696555417,24,54,28),(469,1696555418,27,48,28),(470,1696555420,26,50,28),(471,1696555421,31,1,28),(472,1696555423,31,81,28),(473,1696555428,27,28,28),(474,1696557035,28,2,26),(475,1696557037,28,4,26),(476,1696557043,24,41,26),(477,1696557044,23,87,26),(478,1696557044,28,22,26),(479,1696557044,24,47,26),(480,1696557045,15,8,26),(481,1696557045,23,38,26),(482,1696557160,26,52,23),(483,1696557169,15,18,23),(484,1696557170,27,23,23),(485,1696557177,24,7,23),(486,1696557179,28,54,23),(487,1696557180,28,31,23),(488,1696557183,24,23,23),(489,1696557184,28,60,23),(490,1696557185,28,90,23),(491,1696557189,27,8,23),(492,1696557190,15,87,23),(493,1696557247,31,33,23),(494,1696557248,31,18,23),(495,1696557501,23,35,31),(496,1696557601,26,36,23),(497,1696557743,27,38,23),(498,1696558167,31,85,23),(499,1696558174,28,82,23),(500,1696558175,31,44,23),(501,1696558176,27,15,23),(502,1696558178,31,50,23),(503,1696558194,35,80,23),(504,1696558195,31,82,23),(505,1696558195,24,17,23),(506,1696558196,38,40,23),(507,1696558196,24,41,23),(508,1696558197,15,16,23),(509,1696558197,35,36,23),(510,1696558204,35,81,15),(511,1696558211,31,7,23),(512,1696558212,15,44,23),(513,1696558212,28,27,23),(514,1696558212,38,41,23),(515,1696558213,27,18,23),(516,1696558213,27,2,23),(517,1696558220,28,55,15),(518,1696558242,31,1,23),(519,1696558243,38,9,23),(520,1696558244,28,59,23),(521,1696558257,27,31,23),(522,1696558258,38,44,23),(523,1696558259,15,16,23),(524,1696558260,28,90,15),(525,1696558261,35,56,23),(526,1696558264,28,80,15),(527,1696558268,28,2,15),(528,1696558272,28,83,15),(529,1696558277,31,62,15),(530,1696558281,38,54,15),(531,1696558290,28,79,23),(532,1696558291,31,43,23),(533,1696558292,24,28,23),(534,1696558293,27,83,23),(535,1696558295,15,24,23),(536,1696558297,26,37,23),(537,1696558309,28,55,23),(538,1696558309,24,27,23),(539,1696558310,15,81,23),(540,1696558310,27,50,23),(541,1696558311,24,89,23),(542,1696558311,38,22,23),(543,1696558317,38,56,23),(544,1696558318,31,52,23),(545,1696558357,23,29,35),(546,1696558360,15,52,35),(547,1696558361,15,42,35),(548,1696558363,15,84,35),(549,1696558368,15,3,35),(550,1696558369,15,7,35),(551,1696558371,15,16,35),(552,1696558985,28,7,23),(553,1696558992,31,91,23),(554,1696558996,38,59,23),(555,1696559001,38,45,23),(556,1696559028,15,30,23),(557,1696559031,28,52,23),(558,1696559032,27,24,23),(559,1696559034,28,46,23),(560,1696559221,24,44,23),(561,1696559279,28,35,23),(562,1696559288,38,1,23),(563,1696559290,27,16,23),(564,1696559480,27,31,23),(565,1696559483,15,2,23),(566,1696559487,35,11,23),(567,1696559488,31,8,23),(568,1696559491,38,39,23);
/*!40000 ALTER TABLE `vote_history` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-06 11:35:01
