-- Adminer 4.7.5 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `nabeilles`;
CREATE DATABASE `nabeilles` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `nabeilles`;

DROP TABLE IF EXISTS `flowers`;
CREATE TABLE `flowers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `original_name` varchar(80) NOT NULL,
  `name` varchar(80) DEFAULT NULL,
  `height` float DEFAULT NULL,
  `nectar` int(11) DEFAULT NULL,
  `pollen` int(11) NOT NULL,
  `miellat` char(1) DEFAULT NULL,
  `flowering` varchar(100) DEFAULT NULL,
  `location` varchar(100) DEFAULT NULL,
  `points` int(11) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `flowers` (`id`, `original_name`, `name`, `height`, `nectar`, `pollen`, `miellat`, `flowering`, `location`, `points`, `img`) VALUES
(1,	'Acer campestris',	'érable champêtre',	15,	3,	2,	'M',	',avril,mai,vert clair',	'collection historique',	10,	NULL),
(2,	'Acer pseudoplatanus',	'érable sycomore',	25,	2,	2,	NULL,	'mai,jaunâtre',	'forêt',	10,	NULL),
(3,	'Alnus glutinosa',	'aulne glutineux',	25,	1,	2,	'M',	'mars avril,jaune',	'étang',	10,	NULL),
(4,	'Aquilegia vulgaris',	'ancolie',	0.5,	2,	3,	NULL,	'mai,juin bleu',	'collection historique',	10,	NULL),
(5,	'Asclépias syriaca',	'herbe à la ouate',	1.5,	3,	1,	NULL,	'juin,juillet,août mauve',	'collection ornementale',	10,	NULL),
(6,	'Berberis vulgaris',	'épine vinette',	2,	2,	1,	NULL,	',juin,juillet,jaune',	'secteur arboretum Chine',	10,	NULL),
(7,	'Borago officinalis',	'bourrache officinalis',	0.5,	3,	2,	NULL,	'juin,juillet,août,bleu tendre',	'collection historique',	10,	NULL),
(8,	'brassica arvensis',	'moutarde des champs',	0.6,	3,	1,	NULL,	'juin,juillet,août jaune',	'collection historique',	10,	NULL),
(9,	'Calluna vulgaris',	'bruyère commune callune',	0.25,	2,	1,	NULL,	'août,blanc,rose',	'secteur terre de bruyère',	10,	NULL),
(10,	'Corylus colurna',	'noisetier de Bysance',	12.5,	0,	1,	NULL,	'fevrier,mars,jaune',	'secteur arboretum Europe',	10,	NULL),
(11,	'Cotoneaster horizontalis',	'cotoneaster',	2.5,	3,	2,	NULL,	'juin,juillet,rose',	'arboretum,secteur chine',	10,	NULL),
(12,	'Crocus vernus',	'crocus de printemps',	NULL,	1,	2,	NULL,	'fevrier,mars toutes couleurs',	'pelouses',	10,	NULL),
(13,	'Dalhia variabilis',	'dalhia CV',	1,	0,	2,	NULL,	'juillet,août,septembre toutes couleurs',	'collection de dahlias',	10,	NULL),
(14,	'Epilobium angustifolium',	'epilobe en épis',	2,	3,	2,	NULL,	'juillet,août rose',	'ruisseau',	10,	NULL),
(15,	'Fagopyrum esculentum',	'sarrasin ou blé noir',	1,	2,	1,	NULL,	'juin,juillet,août blanc',	'collection historique',	10,	NULL),
(16,	'Fraxinus ornus',	'frêne à fleurs',	10,	1,	2,	NULL,	'mai, juin blanche',	'secteur arboretum Europe',	10,	NULL),
(17,	'Gleditsia triacanthos',	'févier',	20,	2,	0,	NULL,	'juin,juillet,jaune,vertearboretum secteur Amérique du nord',	NULL,	10,	NULL),
(18,	'Hedera helix',	'lierre',	NULL,	3,	3,	NULL,	'septembre, octobre',	'vert tendre,forêt',	10,	NULL),
(19,	'Lavandula officinale',	NULL,	NULL,	3,	1,	NULL,	'juillet,août,bleu lilas',	'potager',	10,	NULL),
(20,	'Lonicera tartarica',	'chèvrefeuille',	3,	2,	2,	NULL,	'mai,juin,blanc',	'collection historique',	10,	NULL),
(21,	'Médicago sativa',	'luzerne cultivée',	0.5,	3,	1,	NULL,	'juin,juillet,août mauve',	'collection historique',	10,	NULL),
(22,	'Phacelia tanacetifolia',	'phacelie à feuilles de tanaisie',	0.5,	NULL,	3,	NULL,	'juillet,oût,septembre jardin écologique bleu clair',	'potager écologique',	10,	NULL),
(23,	'Prunus avium',	'merisier',	12.5,	2,	3,	'M',	'avril,mai,blanche',	'forêt',	10,	NULL),
(24,	'Prunus spinosa',	'prunellier',	3.5,	2,	2,	NULL,	'avril,mai,blanc',	'roseraie',	10,	NULL),
(25,	'Pyracantha coccinéa',	'buisson ardent',	2.5,	2,	3,	NULL,	',juin,juillet,blanc',	'roseraie',	10,	NULL),
(26,	'Robinia pseudoacacia',	'robinier faux acacia',	20,	3,	2,	NULL,	'juin,blanche',	'étang pavillon d\'accueil',	10,	NULL),
(27,	'Rudbeckia laciniata',	'rudbeckia lacinié',	1.5,	0,	3,	NULL,	'juillet août jaune',	'collection historique ornementale',	10,	NULL),
(28,	'Salix capréa',	'saule marsault',	NULL,	2,	3,	NULL,	'mars avril,jaune,vert',	'ruisseau',	10,	NULL),
(29,	'Solidago virgaurea',	'verge d\'or',	1.5,	2,	2,	NULL,	'août,septembre,octobre jaune',	'collection historique',	10,	NULL),
(30,	'Sophora japonica',	'sophora du japon',	17.5,	3,	1,	NULL,	'août,septembre,blanc crème',	NULL,	10,	NULL),
(31,	'Taraxacum officinalis',	'pissenlit',	NULL,	3,	3,	NULL,	'avril,mai,juin,juillet jaune',	'pelouse prairie',	10,	NULL),
(32,	'Thymus vulgaris',	'thym',	0.2,	3,	0,	NULL,	'juin,juillet,août,mauve',	'jardin écologique,potager',	10,	NULL),
(33,	'Tilia henryana',	'tilleul de Henry',	12,	3,	2,	NULL,	',septembre,jaunâtre',	'étang pavillon d\'accueil',	10,	NULL),
(34,	'Tilia platyphillos',	'tilleul à larges feuilles',	20,	3,	2,	NULL,	'juin,janâtre',	'parcelle Emile Gallé',	10,	NULL),
(35,	'Trifolium repens',	'trèfle blanc',	NULL,	3,	2,	NULL,	'mai,juin,juillet,août,septembre',	'pelouse',	10,	NULL),
(36,	'Vinca minor',	'petite pervenche',	0.3,	2,	0,	NULL,	'mars, avril bleu',	'arboretum',	10,	NULL),
(46,	'Erythroxylum caca',	'coca',	2,	2,	4,	'2',	'2',	'2',	20,	'');

DROP TABLE IF EXISTS `party`;
CREATE TABLE `party` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `end_time` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `party_id` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 2020-01-30 09:29:22
