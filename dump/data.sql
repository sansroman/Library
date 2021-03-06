-- MySQL dump 10.13  Distrib 8.0.12, for osx10.13 (x86_64)
--
-- Host: localhost    Database: library
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
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
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(20) DEFAULT NULL,
  `cover` varchar(200) DEFAULT NULL,
  `name` varchar(20) NOT NULL,
  `company` varchar(200) NOT NULL,
  `author` varchar(50) NOT NULL,
  `blurb` varchar(200) DEFAULT NULL,
  `pdate` varchar(30) DEFAULT NULL,
  `position` varchar(100) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `views` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `cid` (`cid`),
  CONSTRAINT `book_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Book`
--

LOCK TABLES `Book` WRITE;
/*!40000 ALTER TABLE `Book` DISABLE KEYS */;
INSERT INTO `Book` VALUES (1,NULL,'http://cover.read.duokan.com/mfsv2/download/fdsc3/p01PzJd1xNuo/22GDcF4aQvN0Mu.jpg!s','武动乾坤','阅文集团旗下起点中文网','天蚕土豆','修炼一途，乃窃阴阳，夺造化，转涅盘，握生死，掌轮回。武之极，破苍穹，动乾坤！新书求收藏，求推荐，谢大家O(∩_∩)O~','6/20/14','中心阅览室',1,0,'2018-09-16 04:50:30','2018-09-16 04:50:30'),(2,NULL,'http://es6.ruanyifeng.com/images/cover_thumbnail_3rd.jpg','ECMAScript 6 入门','署名-非商用许可证','阮一峰','本书覆盖 ES6 与上一个版本 ES5 的所有不同之处，对涉及的语法知识给予详细介绍，并给出大量简洁易懂的示例代码。','9/10/17','中心阅览室',38,0,'2018-09-16 05:07:36','2018-09-16 05:07:36'),(3,NULL,'https://img3.doubanio.com/view/subject/l/public/s1872653.jpg','明朝那些事儿','浙江人民出版社','当年明月','《明朝那些事儿》这篇文主要讲述的是从1344年到1644年这三百年间关于明朝的一些事情，以史料为基础，以年代和具体人物为主线，并加入了小说的笔法，对明朝十七帝和其他王公权贵和小人物的命运进行全景展示，尤其对官场政治、战争、帝王心术着墨最多，并加入对当时政治经济制度、人伦道德的演义。','39893',NULL,17,0,'2018-09-16 05:07:36','2018-09-16 05:07:36');
/*!40000 ALTER TABLE `Book` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `BookShelfs`
--

DROP TABLE IF EXISTS `BookShelfs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `BookShelfs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `book_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `book_id` (`book_id`),
  CONSTRAINT `bookshelfs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `bookshelfs_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `BookShelfs`
--

LOCK TABLES `BookShelfs` WRITE;
/*!40000 ALTER TABLE `BookShelfs` DISABLE KEYS */;
/*!40000 ALTER TABLE `BookShelfs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Category`
--

DROP TABLE IF EXISTS `Category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '未命名分类',
  `type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Category`
--

LOCK TABLES `Category` WRITE;
/*!40000 ALTER TABLE `Category` DISABLE KEYS */;
INSERT INTO `Category` VALUES (1,'网络文学','男频','2018-07-03 03:39:46','2018-07-03 03:39:46'),(2,'网络文学','女频','2018-07-03 03:39:51','2018-07-03 03:39:51'),(3,'网络文学','玄幻奇幻','2018-07-03 03:40:11','2018-07-03 03:40:11'),(4,'网络文学','现代都市','2018-07-03 03:40:16','2018-07-03 03:40:16'),(5,'网络文学','武侠仙侠','2018-07-03 03:40:22','2018-07-03 03:40:22'),(6,'网络文学','现代言情','2018-07-03 03:40:28','2018-07-03 03:40:28'),(7,'网络文学','穿越重生','2018-07-03 03:40:35','2018-07-03 03:40:35'),(8,'网络文学','古装言情','2018-07-03 03:40:40','2018-07-03 03:40:40'),(9,'教育','中小学教辅','2018-07-03 03:41:51','2018-07-03 03:41:51'),(10,'教育','考试','2018-07-03 03:41:57','2018-07-03 03:41:57'),(11,'教育','外语工具书','2018-07-03 03:42:01','2018-07-03 03:42:01'),(12,'教育','教师用书','2018-07-03 03:42:05','2018-07-03 03:42:05'),(13,'教育','英语四六级','2018-07-03 03:42:10','2018-07-03 03:42:10'),(14,'教育','考研','2018-07-03 03:42:16','2018-07-03 03:42:16'),(15,'教育','公务员','2018-07-03 03:42:21','2018-07-03 03:42:21'),(16,'人文社科','哲学宗教','2018-07-03 03:44:06','2018-07-03 03:44:06'),(17,'人文社科','历史','2018-07-03 03:44:25','2018-07-03 03:44:25'),(18,'人文社科','政治军事','2018-07-03 03:44:34','2018-07-03 03:44:34'),(19,'人文社科','文化','2018-07-03 03:44:39','2018-07-03 03:44:39'),(20,'人文社科','社会科学','2018-07-03 03:44:46','2018-07-03 03:44:46'),(21,'人文社科','心理学','2018-07-03 03:44:51','2018-07-03 03:44:51'),(22,'人文社科','古籍','2018-07-03 03:44:55','2018-07-03 03:44:55'),(23,'人文社科','法律','2018-07-03 03:45:00','2018-07-03 03:45:00'),(24,'科技','科普读物','2018-07-03 03:49:02','2018-07-03 03:49:02'),(25,'科技','计算机/网络','2018-07-03 03:49:09','2018-07-03 03:49:09'),(26,'科技','医学','2018-07-03 03:49:16','2018-07-03 03:49:16'),(27,'科技','工业技术','2018-07-03 03:49:21','2018-07-03 03:49:21'),(28,'科技','建筑','2018-07-03 03:49:26','2018-07-03 03:49:26'),(29,'科技','自然科学','2018-07-03 03:49:34','2018-07-03 03:49:34'),(30,'科技','农业/林业','2018-07-03 03:49:40','2018-07-03 03:49:40'),(31,'经管','经济','2018-07-03 03:52:26','2018-07-03 03:52:26'),(32,'经管','管理','2018-07-03 03:52:31','2018-07-03 03:52:31'),(33,'经管','投资理财','2018-07-03 03:52:35','2018-07-03 03:52:35'),(34,'经管','股票','2018-07-03 03:52:40','2018-07-03 03:52:40'),(35,'经管','金融','2018-07-03 03:52:45','2018-07-03 03:52:45'),(36,'经管','市场/销售','2018-07-03 03:52:51','2018-07-03 03:52:51'),(37,'经管','会计','2018-07-03 03:52:57','2018-07-03 03:52:57'),(38,'经管','互联网','2018-07-03 03:53:02','2018-07-03 03:53:02'),(39,'励志','励志/成功','2018-07-05 00:36:05','2018-07-05 00:36:05'),(40,'励志','心灵修养','2018-07-05 00:55:50','2018-07-05 00:55:50'),(41,'励志','职场','2018-07-05 00:55:58','2018-07-05 00:55:58'),(42,'励志','人生哲学','2018-07-05 00:56:03','2018-07-05 00:56:03'),(43,'励志','人际交往','2018-07-05 00:56:08','2018-07-05 00:56:08'),(44,'励志','口才/演讲/辩论','2018-07-05 00:56:14','2018-07-05 00:56:14');
/*!40000 ALTER TABLE `Category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Chapter`
--

DROP TABLE IF EXISTS `Chapter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Chapter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bid` int(11) DEFAULT NULL,
  `title` varchar(100) NOT NULL,
  `index` int(11) NOT NULL,
  `content` varchar(10000) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `bid` (`bid`),
  CONSTRAINT `chapter_ibfk_1` FOREIGN KEY (`bid`) REFERENCES `book` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Chapter`
--

LOCK TABLES `Chapter` WRITE;
/*!40000 ALTER TABLE `Chapter` DISABLE KEYS */;
INSERT INTO `Chapter` VALUES (2,1,'第一章 林动【新书开张，郑重的求收藏！】',1,'<div class=\"reader__content\"><h1>第一章 林动【新书开张，郑重的求收藏！】</h1><p>“唔。”</p><p>当林动费尽所有的力气睁开那有些沉重的眼皮时，简陋而整洁的房间顿时出现在眼中，熟悉的一幕让得他愣了愣，旋即连忙转头，果然是见到，在那房中，一男一女两道身影正坐在桌旁。</p><p>“爹，娘…”</p><p>望着那两道身影，林动赶忙提起精神，小声的道。</p><p>“动儿，你醒了？”</p><p>听到叫声，那女子率先转过头来，见到睁开眼的林动，顿时欣喜的道。</p><p>女子身着略有些朴素，年龄看上去约莫三十左右，其脸颊略显秀美，给人一种温婉柔和的感觉，而她则正是林动的母亲，柳妍。</p><p>“学艺不精，便与人争斗，自讨苦吃。”</p><p>坐在女子身旁的，是一位看上去约莫三四十左右的男子，他的身体有些单薄，眉宇间依稀可见些许凌厉，只不过他好像有伤在身，脸庞略显苍白，将那凌厉遮掩了大半，他便是林动的父亲，林啸。</p><p>对于这位素来严厉的父亲，林动显然是有些惧怕，缩了缩脖子，旋即又有些不服气的道：“谁让那些家伙在我面前骂爹是废物…”</p><p>说着话时，林动摸了摸依旧犯疼的胸口，不由得恨恨的咬了咬牙，本来今日是林家中的一个测试，而他也是去小测了下，因为才开始修炼了半年多时间的缘故，所以成绩倒也只能说一般，而对于这个，他也没太往心里去，给他相同的修炼时间与条件，他相信自己不会比别人弱到哪里去。</p><p>而在测试结束，林动正准备打道回府时，却是遇见了几个平日关系并不好的家伙，原本他是不想理会，但却忍不住对方的故意挑衅，愤怒之余，年少的林动自然是忍不住的出手，而结果也很明显，他直接被胖揍了一顿，还被打昏了过去…</p><p>“林山，你给我记住了，下次不把你打成猪头，我就不信林！”</p><p>林动磨了磨牙，那林山便是此事的作俑者，也是林动现在心中的头号敌人，因为双方父亲彼此关系极为恶劣的缘故，那林山也是经常的找林动麻烦，而这一次，也是其中之一。</p><p>狠狠的咬了咬牙，但紧接着林动又是突然垂头丧气了起来，那林山虽然可恶至极，但不管怎么样，现在那家伙都已经是淬体第四重了，这个成绩，在林家小辈中，可是相当靠前，比起他这个淬体二重的实力来说，的确是强了不少。</p><p>修炼一道，炼体为先，一切的起始，都是源于己身，人体，本就是天地间最为玄奥莫测的东西。</p><p>所谓淬体，简单来说就是修炼身体，让得自己的身体逐渐的强化，并且最后由外至内，当体内筋骨骨髓强化到一定层次时，便是会衍生出一丝元力种子，只而有当人体自然出现元力种子时，他方才能够真正的成为一名修炼者。</p><p>淬体分九重，前三重效果并非很大，不外乎便是使得身体素质与体格变强一些，唯有当淬体修炼到第四重炼皮时，方才会逐渐的将修炼的好处展现出来，到了这一层次，人体皮肤，会慢慢的变得宛如木石般坚硬，不论力气还是速度，都是会有着不小的提升。</p><p>而那林山，便是处于这个层次，林动的淬体二重，显然不会是其对手。</p><p>不过两者年龄相仿，会有着如此巨大的差距，倒并非是什么天赋缘故，淬体这一层次，对所谓天赋倒并非是极其看重，甚至可以说这层次，人人都能够修炼，但至于究竟能够炼到第几重，就得看各自的本钱与机缘了。</p><p>淬体九重，这一阶段，极为的苦累，因为只有不断的尝试肉体的极限，方才能够让得身体逐渐的强大。</p><p>不过，这种尝试极限，也是一种人体潜能的压榨，这种压榨在事后若是得不到补充，那么身体便是会因为劳损过度出现损伤，到时候不仅影响修炼，反而还将自己搞得浑身是伤，得不偿失。</p><p>因此，在淬体的过程中，便是需要各种调养滋润身体的大补灵药，方才能够继续修炼，但是，这些药材，大多都是极为的昂贵，若家境不富裕者，还真是无法消受。</p><p>而这，便是所谓的本钱！</p><p>林山之所以能够超越林动两重，不仅是比他多修炼了半年，而且最主要的，便是他有着一个掌管着林家财政的父亲，而反观他林动，却是没了这等福气，没有那些灵药滋养身体，那修炼的速度，自然是远远不及前者...</p><p>…</p><p>房间中，听得林动的嘀咕，林啸放在桌上的手掌，突然紧握了一下，面色也是一沉，一旁的柳妍见状，连忙对着林动使了个眼色，后者这才连忙闭嘴。</p><p>“用不着与人去逞口舌之利，好好修炼，别人的嘴自然会闭上。”</p><p>林啸挥了挥手，道：“柳妍，去将那株赤参拿给动儿，有了赤参，他的修炼应该能快一些，离族比只有半年时间了，若是再不抓紧修炼，去了也只会丢人。”</p><p>“啸哥，那赤参可是你疗伤用的…”闻言，柳妍顿时一愣，旋即连忙道。</p><p>“我已是个废人，再怎么疗伤也是于事无补，以后，我会多进山里，尽量给动儿找一些灵药。”林啸摇了摇头，自嘲一笑，道。</p><p>“爹不是废人，爹可曾经是林家中除了爷爷之外的最强者！”听得林啸这话，林动倒是涨红着脸道，小孩子，心中最伟岸的总归是父亲。</p><p>“最强者…”</p><p>林啸拳头不由自主的紧握，脸庞上却是闪过深入骨髓般的痛苦之色，片刻后，他站起身来，有些疲惫的对着房外走去。</p><p>“柳妍，给孩子熬药吧，我的伤没事，都这么多年了，一株赤参能有何用？”</p><p>望着那道带着些许颓然气息的背影，房间中的柳妍却是眼睛一红，谁能想到，当年整个青阳镇中最意气风发的男子，如今却是会这般的落魄。</p><p>“娘，不要哭，动儿一定会努力的修炼，到时候想办法把父亲的伤治好。”林动拉着柳妍的衣角，低声道。</p><p>“动儿，不要怪你爹对你严厉，他只是将所有的心血都倾注在了你的身上，你知道，这也是他唯一的期望。”</p><p>柳妍低头，望着林动那稚嫩小脸上的认真之色，轻轻抹了一把眼睛，然后摸了摸林动的小脑袋，低声说道。</p><p>“娘，我听说这次族比前三，能够得到一种名为凝血朱果的三品灵药，我曾听大伯说，那对于疗伤很有效果，若是能够得到，肯定对爹爹体内的伤有所帮助。”林动似是突然想起了什么，抬起头，目光明亮的看着柳妍，道。</p><p>“凝血朱果么…”闻言，柳妍也是一怔，旋即有些无奈的摇了摇头：“族比前三，可不容易进，你有这个心就好了，娘先去帮你把赤参熬了吧。”</p><p>说完，柳妍便是转身对着房外行去，林家这一代的小辈中，有好几位成就不小，林动想要进入前三获得那凝血朱果，难度可不小，因此她倒并没有太往心里去。</p><p>望着柳妍离去的背影，林动的嘴也是紧紧的抿了起来，小拳头紧握：“娘，放心吧，我一会要把那凝血朱果得到，那样就能治疗爹爹体内的伤！”</p><p>一想到林啸的伤势，林动眼中突然流露出一种极深的恨意，父亲之所以会在林家被不少人冷嘲热讽，都是因为那个人的缘故！</p><p>…</p><p>林动所在的林家，只是一个颇小的家族，即便是在这青阳镇中，都是算不上顶尖，但是，这个看上去不起眼的林家，却是拥有着令人瞠目结舌的背景，那便是林氏家族。</p><p>大炎王朝四大氏族之一的林氏家族！</p><p>青阳镇的林家，从某种角度来说，能够算是林氏家族的一支外族，不过对于从来未曾离开过青阳镇百里之内的林动来说，这个在大炎王朝拥有着令人惊悚般实力的林氏家族太过遥远与陌生。</p><p>据林动偶尔从父亲嘴中得知，他们这一支，其实也曾经是林氏家族的内族，只不过当年林动的爷爷因为一次任务失败，导致族中损失极大，所以被逐出内族，发配到了这青阳镇。</p><p>在这里，他建立了这个小小的林家，并且数十年中，竭尽全力的想要再度返回林家内族，这个愿望，是他努力数十年的最终目标。</p><p>不过他的这种努力，并没有取得太大的效果，他所做的这些，对于庞大无比的林氏家族来说，根本就不值一提，故而，他只能将主意打到其他地方，而这，便是林氏家族的十年族会！</p><p>这是林氏家族最为重要的大会，在整个大炎王朝都十分的有名，十年一届，每一次大会，都是族内年轻一辈出人头地，名扬天下的最佳机会，而大赛的诸多奖励，自然是丰厚得让人眼馋，不过，其中最吸引林动爷爷的地方，却是只要能够闯进大会前十，即便你是外族之人，也是会被无阻碍的升为内族之人，荣耀无限。</p><p>因此，族会，成为了林动爷爷即将绝望之中的新的曙光，但由于年龄的缘故，他已是无法参加，故而，他将所有的期望，都是倾注在了五个同父异母的儿子身上，自然的，从其中脱颖而出的林动父亲，便是成为了爷爷以及整个林家的曙光。</p><p>而面对着这肩上的重担，林动的父亲，也的确是不负期望，五兄弟之中，最早突破淬体九重，晋入地元境，而且在此后短短四年时间，再度突破地元层次，成为了林家之中除了爷爷林震天之外的第二位天元高手。</p><p>那种修炼速度，让得平日里向来不言苟笑的爷爷，每一次见到父亲时，苍老的脸庞上都是会露出慈和欣慰的笑容，那时候的爷爷，据说是数十年中，笑得最多的时候。</p><p>十年族会，在期待之中而来，然而，最终的结果，却是让林家所有人，如处深渊。</p><p>一招！</p><p>仅仅只是一招，那被视为希望的父亲，便是惨然而败！</p><p>而且，这还是族会开始的第一场比赛！</p><p>多年的期望，多年的培育，在那短短数息之间，化为泡沫。</p><p>失败者的结局，自然是无数道异样的眼光，而顶着那一道道讥讽冷笑，一行人如同丧家之犬一般的回到了青阳镇。</p><p>那天夜里，父亲便是搬离了林家内区，住到了林家深处最为偏僻的一座小山上，任何林家的东西，从此以后，不再动用，他说，他已经没有那种资格。</p><p>而福不双至，祸不单行。</p><p>那场失败后，带给林啸的，不仅仅只是颓废，在事后，他更是惨然的发现，当日与其交手的那人，不仅一掌将他击败，而且还未曾有丝毫留手，近乎野兽般的狂暴元力，将其体内，摧残得一塌糊涂。</p><p>在这等重伤下，林啸天元级别的实力直接跌落，落回地元级，而且，重伤淤积，体内经脉被堵了十之七八，无论他再如何修炼，都是难以寸进。</p><p>家族中，往日的那些敬畏目光，也是逐渐的衍变成叹息，失望…</p><p>面对着这重重的灾难，林啸，终于是绝望，每当醉酒时，都是会疯狂的锤着胸膛，那低沉如闷雷般的声响，让得一旁的母亲，心疼得只抹泪，而虽然林动年少，但见到这一幕，心中依然如同刀绞，同时，幼小的心中，对于那将父亲打伤成这般模样的人，也是悄悄地衍生出一丝丝恨意！</p><p>他，毁了父亲，也毁了他的家！</p><p>至于那位始作俑者，在后来，林动在偶然间，听大伯等人带着怨恨与无力的语气提起过。</p><p>十岁修炼，十二岁突破淬体九重晋入地元境，十五岁晋天元境，二十岁，体内元气阴阳交泰，最终成功化丹，鲤鱼跃龙门，一举成为大炎王朝屈指可数的在三十岁之前结成元丹的强者！</p><p>他的一生，简直就是种种传奇所铸。</p><p>他的名字，叫做林琅天。</p><p>…</p><p>房间中，林动拳头紧握，眼中，有着浓郁恨意闪动。</p><p>（新书开张，求收藏与推荐票，谢谢大家了。）</p></div>','2018-09-16 04:56:56','2018-09-16 04:56:56'),(3,2,'第一章 ECMAScript 6 简介',1,'<p>一个常见的问题是，ECMAScript 和 JavaScript 到底是什么关系？</p><p>要讲清楚这个问题，需要回顾历史。1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p><p>该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。</p>','2018-09-16 05:10:37','2018-09-16 05:10:37'),(4,3,'第1部：洪武大帝 前言',1,'<p>说起来，我也写了不少东西了，主要是心理和历史方面的，偶尔也写点经济，本来只是娱乐下自己，没有想到发表后居然还有人捧场，于是便轻飘飘起来，客观来说，我的写作态度很不认真，每次都是想到哪里写到哪里，有些历史史料记录也凑合着用，记得多少写多少，直到有一天，终于因为我这不严谨的写作态度与人发生了矛盾。</p><p>也是这件事，让我反思了自己的行为和态度，明白了自己其实还差得远。所以我希望能重新开始，下面的这篇文章我构思了六个月左右，主要讲述的是从1344 年到1644 年这三百年间关于明的一些事情，以史料为基础，以年代和具体人物为主线，并加入了小说的笔法和对人物的心理分析，以及对当时政治经济制度的一些评价。</p><p>我写文章有个习惯，由于早年读了太多学究书，所以很痛恨那些故作高深的文章，其实历史本身很精彩，所有的历史都可以写得很好看，我希望自己也能做到。望大家能给予评价。</p>','2018-09-16 05:12:43','2018-09-16 05:12:43'),(5,3,'第二章 灾难',2,'<p>元至正四年（公元1344 年）到来了，这一年刚开始，元帝国的头头脑脑们就收到了两个消息，首先是黄河泛滥了，沿岸山东河南几十万人沦为难民。即使不把老百姓当人，但还要防着他们造反，所以修黄河河堤就成为了必须要做的事情。</p><p>可是令人意外的是，在元的政府中，竟然出现了两种不同的意见，一种认为一定要修，另一种认为不能修。在现在看来，这似乎是不可思议的事情，黄河泛滥居然不去修，难道要任黄河改道淹死那么多人？在中国历史上有着太多不可思议的事情，这个也不例外。</p><p>客观的讲，在这样一件事上，就维护元朝的统治而言，主要修的不一定是忠臣，反对修的也未必就是奸臣，其中奥妙何处？要到七年后才会见分晓。</p>','2018-09-16 05:14:43','2018-09-16 05:14:43'),(6,3,'第三章 踏上征途',3,'<p>至正十一年（公元1351 年），上天给元朝的最后一根稻草终于压了下来，元朝的末日到了。</p><p>我们的谜底也揭开了，现在看来，脱脱坚决要求治黄河的愿望是好的，然而他不懂得那些反对的人的苦心，元朝那腐败到极点的官吏也是他所不了解的。现在他终于要尝到苦果了。</p><p>当元朝命令沿岸十七万劳工修河堤时，各级的官吏也异常兴奋，首先，皇帝拨给的修河工钱是可以克扣的，民工的口粮是可以克扣的，反正他们不吃不喝也事不关己。这就是一大笔收入，工程的费用也是可以克扣的，反正黄河泛滥也淹不死自己这些当官的。</p><p>这是管河务的，那么不管河务的怎么捞钱呢，其实也简单，既然这么大工程，必然有徭役指标，找几十个人，到各个乡村去，看到男人就带走，理由？修河堤，不想去？拿钱来。</p>','2018-09-16 05:15:28','2018-09-16 05:15:28');
/*!40000 ALTER TABLE `Chapter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Comment`
--

DROP TABLE IF EXISTS `Comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) DEFAULT NULL,
  `bid` int(11) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `liked` int(11) NOT NULL DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aid` (`aid`),
  KEY `bid` (`bid`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `user` (`id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`bid`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Comment`
--

LOCK TABLES `Comment` WRITE;
/*!40000 ALTER TABLE `Comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `Comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Community`
--

DROP TABLE IF EXISTS `Community`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Community` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `content` varchar(20000) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aid` (`aid`),
  CONSTRAINT `community_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Community`
--

LOCK TABLES `Community` WRITE;
/*!40000 ALTER TABLE `Community` DISABLE KEYS */;
INSERT INTO `Community` VALUES (1,1,'计算机应届生月薪大都多少？','<p>18届我就点名说哪些公司了，我不夸大也不压低。首先我毕业于某211通信，海康开发12k，测试8500；恒生17年开发8500，华勤开发8500吧，科大讯飞开发估计8000不到，上海华为开发14k。我就是觉得知乎吹程序员太过了，难道程序员人人华为，阿里，腾讯水平?程序员能进海康这样的小厂的人也不多啊，大多数还不是去一些外包和更小的厂吗？</p><p>吹可以，但别太过。而且以后晒工资晒个工资条截图啥的。</p>','2018-09-16 05:18:10','2018-09-16 05:18:10'),(2,2,'游戏开发的编程算不算是 IT 行业中难度最大的？','<p>从我自己3A开发程序的经验来简单回答一下这个问题，本人有幸在微软343 industries参与了引擎和管线的制作（光环5），也有幸在索尼santa monica studio参与了gameplay的制作（新战神），算是参加过游戏开发的几个主要领域了，实际上游戏开发程序的工作主要分为三大块：gameplay，pipeline和引擎，这三块都有自己的难点和重点，下面分别稍微解释一下，解释之前，一个短小的结论，游戏开发的程序是软件开发中比较难的一块。</p><p>1: gameplay，gameplay程序的难点在于，解决的问题非常广泛，从fps游戏里面的枪械，车辆，到战神里面的斧头，怪兽，再到uncharted 4里面的绳子，根据游戏的类型，需要解决的问题几乎涉猎所有领域，这对gameplay程序来说是一个很大的挑战。gameplay程序从技术的角度来说需要保证系统能运行，还需要很强的对游戏的理解，做出来的东西保证好玩，这就不是一个纯粹的技术问题了，需要本身对制作游戏的类型非常了解。另外gameplay程序特别是3d游戏的gameplay对数学的要求很高，还要求非常善于和策划还有美术动画沟通，最难最烦人的一点gameplay都不是一次性完工的，需要大量的推翻，迭代，重做，如何在质量和迭代速度之间找到平衡也是一大难点。gameplay是最靠近玩家的程序。</p><p>2: pipeline，中文大家都把这个叫管线，基本上就是工作室内部用来制作游戏的所有工具，流水线的总称。这类程序打交道的主要对象就是自己工作室内部的各种开发人员，从美术，策划到动画，特效等等，他们对大型游戏开发非常非常重要，他们保证了开发流程的高效进行，他们开发的工具，流水线，包括小到bake light map的工具，给策划调整数据的工具，大到关卡编辑器，build system，等等，好的工作室和差的工作室的一大差距就是内部的管线先进性，我的弟弟</p><p><a href=\"//www.zhihu.com/people/a20824e69bc2e070b6793465686873ae\" target=\"_blank\">@Ryan槐宏武</a></p><p><br></p><p>是顽皮狗的引擎程序，顽皮狗的内部管线相当先进。这一类程序需要和gameplay部门打交道，需要和美术，动画等部门打交道，还需要和引擎程序打交道，需要满足内部用户的需求，也需要解决底层的技术，要求也非常高。很多工作室管线开发属于引擎组。3: 引擎程序（runtime）。这一类程序离玩家用户最远，技术的专业程度最高，对纯程序技能，底层优化都非常要求高，专业技能最窄但是最专精。渲染引擎需要你懂底层的计算机优化和图形的相关知识，物理引擎需要你物理知识和底层优化，动画引擎需要动画知识和底层优化，等等，一般这种底层的系统和gameplay最大的区别就是，他们实现的时间较长，跌倒的次数较少，但是非常非常稳定和高质量，引擎基本上是一个游戏的基石，是最核心最核心的技术。</p><p>综合来说，这三个领域的程序，基本上不能简单的说“某一个比某一个难”，“某一个比某一个重要”，根据程序员自己的性格，技能，按照需求分配，才是最优化的解决方案，一般一个游戏studio的程序人数是最少的，但是工资也是最高的（平均），也基本不可能外包，裁员的时候一般最后才动程序组：p</p><p>和it其它领域比起来，由于涉猎知识很广，要求很高，人才难找，所以算是软件开发中比较难的一块，特别是3A的游戏开发。</p>','2018-09-16 05:19:14','2018-09-16 05:19:14'),(3,2,'为什么很多大学生甚至研究生抛弃专业去做码农呢？','<p>生化环材四大天坑的成功标准之一：毕业以后再也不需要用到任何专业课上“学到”的“知识”。</p><p>即便你再精通本专业的知识，如果没有教职，且不转行，那么你的收入都舔不着互联网，金融，新媒体的脚跟，更何况你每天还需要去吸毒气，空调，mbp，不限量饮料零食，人体工程学椅通通与你无关。</p><p>这就叫</p><p>“求资本家爸爸用996剥削我吧”</p><p><br></p><p>前几天和好友聊天，已然没有人记得某种植物激素的浓度分布，相视一笑，哈哈，终于因为用不上而忘掉一部分“知识”了。终于有走上脱坑之路的感觉了。</p><p>ꉂ ೭(˵¯̴͒ꇴ¯̴͒˵)౨”</p><p>某浸淫与有机化学不能自拔的教授（杰青）：“这节课上所讲的内容，帮你们在药厂谋个6，7k的工资还是没问题的”</p><p>（敢情这是走在阶级滑坡的道路上啊）</p><p>某黑心砖窑老板（青千）：“我们专业的找对口工作，本科生，硕士生，博士生起点都不一样，哪像互联网行业，本科生硕士生基本上一个级别”</p><p>（真把我们当猴耍？有级别不代表有体面的工资，舒适的工作环境）</p><p>某黑心助教（有机博士）：“蓝孩纸嘛，就应该学有机”</p><p>某专业课教授：“你看高分子还是很有用途的，每天都离不开它”</p><p>（你每天都要吃饭，穿衣用手机，你咋不去当农民，进foxconn呢）</p>','2018-09-16 05:20:20','2018-09-16 05:20:20');
/*!40000 ALTER TABLE `Community` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CommunityComment`
--

DROP TABLE IF EXISTS `CommunityComment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `CommunityComment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `aid` int(11) DEFAULT NULL,
  `community_id` int(11) NOT NULL,
  `content` varchar(2000) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `aid` (`aid`),
  KEY `community_id` (`community_id`),
  CONSTRAINT `communitycomment_ibfk_1` FOREIGN KEY (`aid`) REFERENCES `user` (`id`),
  CONSTRAINT `communitycomment_ibfk_2` FOREIGN KEY (`community_id`) REFERENCES `community` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CommunityComment`
--

LOCK TABLES `CommunityComment` WRITE;
/*!40000 ALTER TABLE `CommunityComment` DISABLE KEYS */;
INSERT INTO `CommunityComment` VALUES (1,2,1,'我觉得很棒','2018-09-16 05:20:32','2018-09-16 05:20:32');
/*!40000 ALTER TABLE `CommunityComment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LikedComment`
--

DROP TABLE IF EXISTS `LikedComment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `LikedComment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  CONSTRAINT `likedcomment_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`id`),
  CONSTRAINT `likedcomment_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `comment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LikedComment`
--

LOCK TABLES `LikedComment` WRITE;
/*!40000 ALTER TABLE `LikedComment` DISABLE KEYS */;
/*!40000 ALTER TABLE `LikedComment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LikedCommunity`
--

DROP TABLE IF EXISTS `LikedCommunity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `LikedCommunity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  CONSTRAINT `likedcommunity_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`id`),
  CONSTRAINT `likedcommunity_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `community` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LikedCommunity`
--

LOCK TABLES `LikedCommunity` WRITE;
/*!40000 ALTER TABLE `LikedCommunity` DISABLE KEYS */;
/*!40000 ALTER TABLE `LikedCommunity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RecentBook`
--

DROP TABLE IF EXISTS `RecentBook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `RecentBook` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `bid` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `bid` (`bid`),
  CONSTRAINT `recentbook_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`id`),
  CONSTRAINT `recentbook_ibfk_2` FOREIGN KEY (`bid`) REFERENCES `book` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RecentBook`
--

LOCK TABLES `RecentBook` WRITE;
/*!40000 ALTER TABLE `RecentBook` DISABLE KEYS */;
/*!40000 ALTER TABLE `RecentBook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20180602061316-unnamed-migration.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UnlikedComment`
--

DROP TABLE IF EXISTS `UnlikedComment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `UnlikedComment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  CONSTRAINT `unlikedcomment_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`id`),
  CONSTRAINT `unlikedcomment_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `comment` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UnlikedComment`
--

LOCK TABLES `UnlikedComment` WRITE;
/*!40000 ALTER TABLE `UnlikedComment` DISABLE KEYS */;
/*!40000 ALTER TABLE `UnlikedComment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UnlikedCommunity`
--

DROP TABLE IF EXISTS `UnlikedCommunity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `UnlikedCommunity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `uid` (`uid`),
  KEY `cid` (`cid`),
  CONSTRAINT `unlikedcommunity_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`id`),
  CONSTRAINT `unlikedcommunity_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `community` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UnlikedCommunity`
--

LOCK TABLES `UnlikedCommunity` WRITE;
/*!40000 ALTER TABLE `UnlikedCommunity` DISABLE KEYS */;
/*!40000 ALTER TABLE `UnlikedCommunity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `User` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nickname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'undefined',
  `integral` int(11) NOT NULL DEFAULT '0',
  `readingTime` int(11) NOT NULL DEFAULT '0',
  `signature` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'undefined',
  `role` int(11) NOT NULL DEFAULT '1',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `account` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=142 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'15180600301','$2a$10$MGw9zZ4Cj7p37pMhGUtRpuzjXbzoC8vhmoK507F4c7w','https://pic1.zhimg.com/80/v2-c5a239736871ed06a8f1dd32e2820610_hd.jpg','爷爷',0,0,'这个人很懒,什么都没有留下',3,'2018-07-10 13:34:09','2018-09-16 04:40:24'),(2,'15180600302','$2a$10$Lfxs7KEl00UtFntTcAaIieGW9YYOM1KaS7d7kJ6nY/j','https://pic1.zhimg.com/80/v2-8b02c7a7bfc60323551a0b1e81089980_hd.jpg','张鹏宇',0,0,'这个人很懒,什么都没有留下',2,'2018-07-10 13:39:00','2018-09-16 04:33:19'),(129,'15180600303','1231232a','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','彭万里',0,0,'好懒',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(130,'15180600304','1231232a','https://avatars3.githubusercontent.com/u/16233686?s=64&v=4','高大山',0,0,'我也懒',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(131,'15180600305','1231232a','https://avatars0.githubusercontent.com/u/15122564?s=64&v=4','谢大海',0,0,'真巧',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(132,'15180600306','1231232a','https://avatars0.githubusercontent.com/u/21299158?s=64&v=4','马宏宇',0,0,'我比你还懒',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(133,'15180600307','1231232a','https://avatars0.githubusercontent.com/u/227713?s=64&v=4','林莽',0,0,'哈哈',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(134,'15180600308','1231232a','https://avatars1.githubusercontent.com/u/499550?s=64&v=4','黄强辉',0,0,'好好',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(135,'15180600309','1231232a','https://avatars2.githubusercontent.com/u/7263028?s=64&v=4','章汉夫',0,0,'O(∩_∩)O哈哈~',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(136,'15180600310','1231232a','https://avatars1.githubusercontent.com/u/28150453?s=64&v=4','范长江',0,0,'呵呵',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(137,'15180600401','1231232a','https://avatars0.githubusercontent.com/u/19502268?s=40&v=4','林君雄',0,0,'这个人很懒，没有签名',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(138,'15180600402','1231232a','https://avatars3.githubusercontent.com/u/16233686?s=64&v=4','谭平山',0,0,'这个人很懒，没有签名',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(139,'15180600403','1231232a','https://avatars0.githubusercontent.com/u/15122564?s=64&v=4','朱希亮',0,0,'这个人很懒，没有签名',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(140,'15180600404','1231232a','https://avatars0.githubusercontent.com/u/21299158?s=64&v=4','甘铁生',0,0,'这个人很懒，没有签名',1,'2018-09-16 04:40:08','2018-09-16 04:40:08'),(141,'15180600405','1231232a','https://avatars0.githubusercontent.com/u/227713?s=64&v=4','张伍绍祖',0,0,'这个人很懒，没有签名',1,'2018-09-16 04:40:08','2018-09-16 04:40:08');
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

-- Dump completed on 2018-09-16 16:40:54
