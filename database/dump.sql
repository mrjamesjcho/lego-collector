-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 21, 2020 at 11:01 PM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lego-collector`
--

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `cartItemId` int(11) UNSIGNED NOT NULL,
  `productId` int(11) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartId` int(11) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cartId` int(11) UNSIGNED NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `cartId` int(11) NOT NULL,
  `name` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `creditCard` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `shippingAddress` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` mediumint(9) NOT NULL,
  `name` varchar(62) CHARACTER SET utf8 NOT NULL,
  `price` mediumint(9) NOT NULL,
  `shortDescription` text CHARACTER SET utf8 NOT NULL,
  `longDescription` text CHARACTER SET utf8 NOT NULL,
  `featured` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `shortDescription`, `longDescription`, `featured`) VALUES
(1, 'Death Star 2', 259988, 'Death Star replica perfect for play or display', 'Construct the galaxy\'s ultimate battle station! No one who saw the dreaded Death Star in the classic Star Wars films could ever forget it. Now you can build your own to add to your LEGO Star Wars collection! This incredibly detailed and faithful replica of the Death Star II from Star Wars: Episode VI Return of the Jedi will make an awesome addition to any Star Wars collection. The partially constructed Death Star looms in space above the forest moon of Endor, super laser ready to fire. This unique collectable is sure to rank as one of the greatest LEGO Star Wars models ever produced!', 0),
(2, 'Super Star Destroyer', 99900, 'Includes Darth Vader, Admiral Piett, Dengar and Bossk minifigures and also includes IG-88 figure', 'The Super Star Destroyer Executor has arrived! This jaw-dropping vessel served as command ship at the Battle of Endor and as the personal flagship of Darth Vader in the classic Star Wars movies. With its classic dagger-shaped design, the Executor is among the largest and most powerful vessels in the Star Wars galaxy. With over 3,000 pieces, measuring nearly 50 inches (124.5 cm) long and weighing nearly 8 pounds (3.5 kg), every aspect of this fantastic LEGO Star Wars model impresses. Includes Darth Vader, Admiral Piett, Dengar, Bossk and IG-88 minifigures. Features over 3,000 pieces!', 0),
(3, 'Imperial Star Destroyer', 69999, 'This Ultimate Collector Series Imperial Star Destroyer model makes the perfect centerpiece for any collection.', 'Build and display an icon of the Galactic Empire - the Devastator. With over 4,700 LEGO pieces, this Ultimate Collector Series 75252 Imperial Star Destroyer model captures all the authentic details of the starship as it appeared in the opening scene of Star Wars: A New Hope, including swiveling guns, a tilting radar dish, huge engine exhausts, intricate surface detailing and of course a buildable scale version of the Rebels\' Tantive IV starship to chase down. This galactic civil war UCS set also includes a display stand with informational fact plaque and 2 Imperial minifigures, making it the perfect LEGO Star Wars collectible for discerning fans.', 0),
(4, 'Millennium Falcon', 79999, 'The largest, most detailed LEGO Star Wars Millennium Falcon model ever created!', 'This amazing LEGO interpretation of Han Solo\'s unforgettable Corellian freighter has all the details that Star Wars fans of any age could wish for, including intricate exterior detailing, upper and lower quad laser cannons, landing legs, lowering boarding ramp and a 4-minifigure cockpit with detachable canopy. Remove individual hull plates to reveal the highly detailed main hold, rear compartment and gunnery station. This amazing model also features interchangeable sensor dishes and crew, so you decide whether to play out classic LEGO Star Wars adventures with Han, Leia, Chewbacca and C-3PO, or enter the world of Episode VII and VIII with older Han, Rey, Finn and BB-8!', 1),
(5, 'Voltron', 17999, 'Display or play out exciting stories from the original 1980s animated Voltron TV series and the modern DreamWorks Voltron: Legendary Defender series.', 'It\'s time to defend the universe so get ready to form LEGO Ideas 21311 Voltron, the biggest buildable LEGO mech ever! This awesome set features buildable and highly posable black, blue, yellow, red and green lions with specially designed, extra-strong joints to combine them all and create the Voltron super robot, plus a huge sword and shield that attach firmly to Voltron\'s hands. Ideal for display or to recreate thrilling action from the original 1980s animated Voltron TV series and the modern DreamWorks Voltron: Legendary Defender series.', 0),
(6, 'Y-Wing Starfighter', 19999, 'Features highly authentic detailing, opening minifigure cockpit, wheel-activated rotating ion cannons on top, retractable landing skids and space for the included R2-BHD astromech droid.', 'Own part of Star Wars history with the LEGO Star Wars 75181 Y-Wing Starfighter. This Ultimate Collector Series building kit has an amazing level of detail, including an opening minifigure cockpit for the included Gold Leader minifigure, wheel-activated rotating ion cannons on top, retractable landing skids and space for the R2-BHD astromech droid. This fantastic Star Wars toy also comes with a tilting display stand and informational fact plaque, making it a great Star Wars gift and the perfect centerpiece for your collection.\r\n', 0),
(7, 'Land Rover Defender', 19999, 'Authentically detailed, multi-functional LEGO Technic interpretation of the 2019 Land Rover Defender.', 'This collectible model of the quintessential 2019 Land Rover Defender really captures the vehicle\'s level of refinement with its clean, modern lines and sculpted surfaces, making it a great display piece for the home or office', 0),
(8, 'Ford Mustang', 14999, 'Authentic replica Ford Mustang with customizable features and optional add-ons.', 'Build and customize your very own 1960s Ford Mustang GT, featuring dark-blue bodywork with white racing stripes, 5-spoke rims with rugged tires, detailed interior, V8 engine and customization add-ons!', 0),
(9, '1989 Batmobile', 24999, 'This LEGO Batman model car kit for adults includes over 3,300 pieces and makes a wonderful nostalgic holiday gift or birthday present for any Batman fan.', 'Batman\\&trade; fans and anyone who appreciates cool cars will love the LEGO\\u00AE DC Batman 76139 1989 Batmobile\\u2122 model car kit for adults. This beautifully detailed LEGO brick building toy replicates the classic curves of the famous Batmobile car, as seen in the 1989 Batman movie. Measuring over 60cm long and built from 3,306 pieces, the model offers a challenging and rewarding build. Die-hard fans will love authentic features such as the slide-open cockpit with a new-for-November-2019 wraparound windshield element, 2 hidden machine guns with a pop-up function activated by turning the turbine exhaust, and decorative grappling hooks on each side of the vehicle. The Batman toy car comes with a rotating display stand for ease of viewing from any angle. A must-have for all Batman fans, this super-hero toy construction set also includes 3 new-for-November-2019 minifigures\\u2014Batman with a cape that matches his 1989 movie outfit, The Joker\\u2122 and Vicki Vale\\u2122-plus a brick-built minifigure display stand.', 1),
(10, 'Tantive IV', 19999, 'A highly detailed version of an iconic Rebel starship with lots of features and functions for great play and display possibilities.', 'Build, play and display a legendary Star Wars\\u2122 starship! This LEGO\\u00AE Star Wars 75244 interpretation of Tantive IV, seen fleeing from an Imperial Star Destroyer in the opening moments of Star Wars: A New Hope, faithfully recreates all of the Rebel cruiser\'s signature details, including an elongated hull, detachable escape pods, elevating gun turrets, cargo hold and 11 massive engines at the back. Remove the hull plating of this fantastic LEGO Star Wars vehicle to reveal a detailed 2-minifigure cockpit, conference area with table, weapon rack and a control console with 2 seats. The radar dish also doubles as a convenient carry handle, which makes it perfect for flying around the room. When the mission is over, this amazing kids\\u2019 buildable toy also makes a great centerpiece for any LEGO Star Wars collection. The set also includes 5 minifigures and an R2-D2 droid LEGO figure.', 0),
(11, 'James Bond Aston Martin DB5', 14999, 'Build the James Bond collectible Aston Martin DB5 with exclusive details and lots of 007 gadgetry!', 'Get a license to build with the awesome LEGO Creator Expert 10262 James Bond Aston Martin DB5. This impressive car replica model captures the elegance and timeless sophistication of Agent 007\'s iconic 1964 sports car, and comes with a wealth of authentic details and functioning gadgetry. Open the doors and you\'ll discover a detailed interior with a concealable radar tracker and a door compartment containing a telephone. And when it\'s time for action, activate the passenger ejection seat, turn the rotating license plate, raise the rear-window bullet shield, deploy the wheel-mounted tire scythes and pull back the stick shift to reveal the front gun activator. This collectible model car also features straight-6 engine detailing beneath the hood, opening trunk, opening doors, drum-lacquered silver front and rear bumpers, molded silver-colored wire wheel rim inserts, front and rear Aston Martin logos and a set of golf clubs. This James Bond collectible construction toy has been designed to provide a challenging and rewarding building experience full of nostalgia\\u2014a must-have for fans of the Aston Martin James Bond movies and LEGO building sets.', 0),
(12, 'Bugatti Chiron', 34999, 'Authentic replica of the classic Bugatti Chiron in 1:8 scale.', 'Explore engineering excellence with the LEGO Technic 42083 Bugatti Chiron advanced building set. This exclusive model has been developed in partnership with Bugatti Automobiles S.A.S to capture the essence of the quintessential super sports vehicle, resulting in a stunning supercar replica as well as a hot toy for collectible toy car enthusiasts. It comes with gleaming aerodynamic bodywork, logoed spoked rims with low-profile tires, and detailed brake discs. The accessible cockpit features a Technic 8-speed gearbox with movable paddle gearshift and a steering wheel bearing the Bugatti emblem. Insert the top speed key and you can switch the active rear wing from handling to top speed position. The rear lid affords a glimpse of the detailed W16 engine with moving pistons, while beneath the hood you\'ll discover a unique serial number and a compact storage compartment containing a stylish Bugatti overnight bag. This 1:8 scale model comes with a classic Bugatti duo-tone blue color scheme that reflects the brand\'s signature color, and a set of stickers for additional detailing. The car is delivered in luxurious box packaging and includes a color collector\'s booklet with comprehensive building instructions.', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_images`
--

CREATE TABLE `product_images` (
  `id` mediumint(9) NOT NULL,
  `url` varchar(100) CHARACTER SET utf8 NOT NULL,
  `product_id` mediumint(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product_images`
--

INSERT INTO `product_images` (`id`, `url`, `product_id`) VALUES
(1, 'star-wars-death-star2-1.jpg', 1),
(2, 'star-wars-death-star2-2.jpg', 1),
(4, 'star-wars-super-star-destroyer-1.jpg', 2),
(5, 'star-wars-super-star-destroyer-2.jpg', 2),
(6, 'imperial-star-destroyer-1.jpeg', 3),
(7, 'imperial-star-destroyer-2.jpeg', 3),
(8, 'imperial-star-destroyer-3.jpeg', 3),
(9, 'imperial-star-destroyer-4.jpeg', 3),
(10, 'imperial-star-destroyer-5.jpeg', 3),
(21, 'millennium-falcon-1.jpeg', 4),
(22, 'millennium-falcon-2.jpeg', 4),
(23, 'millennium-falcon-3.jpeg', 4),
(24, 'millennium-falcon-4.jpeg', 4),
(25, 'millennium-falcon-5.jpeg', 4),
(36, 'voltron-1.jpeg', 5),
(37, 'voltron-2.jpeg', 5),
(38, 'voltron-3.jpeg', 5),
(39, 'voltron-4.jpeg', 5),
(40, 'y-wing-1.jpeg', 6),
(41, 'y-wing-2.jpeg', 6),
(42, 'y-wing-3.jpeg', 6),
(43, 'y-wing-4.jpeg', 6),
(44, 'y-wing-5.jpeg', 6),
(48, 'lr-defender-1.jpeg', 7),
(49, 'lr-defender-2.jpeg', 7),
(50, 'lr-defender-3.jpeg', 7),
(51, 'lr-defender-4.jpeg', 7),
(52, 'lr-defender-5.jpeg', 7),
(53, 'mustang-1.jpeg', 8),
(54, 'mustang-2.jpeg', 8),
(55, 'mustang-3.jpeg', 8),
(56, 'mustang-4.jpeg', 8),
(57, 'mustang-5.jpeg', 8),
(58, '1989-batmobile-1.jpeg', 9),
(59, '1989-batmobile-2.jpeg', 9),
(60, '1989-batmobile-3.jpeg', 9),
(61, '1989-batmobile-4.jpeg', 9),
(62, '1989-batmobile-5.jpeg', 9),
(63, 'tantive-iv-1.jpeg', 10),
(64, 'tantive-iv-2.jpeg', 10),
(65, 'tantive-iv-3.jpeg', 10),
(66, 'tantive-iv-4.jpeg', 10),
(67, 'tantive-iv-5.jpeg', 10),
(68, 'jb-aston-martin-1.jpeg', 11),
(69, 'jb-aston-martin-2.jpeg', 11),
(70, 'jb-aston-martin-3.jpeg', 11),
(71, 'jb-aston-martin-4.jpeg', 11),
(72, 'jb-aston-martin-5.jpeg', 11),
(73, 'jb-aston-martin-6.jpeg', 11),
(74, 'jb-aston-martin-7.jpeg', 11),
(75, 'jb-aston-martin-8.jpeg', 11),
(76, 'jb-aston-martin-9.jpeg', 11),
(77, 'jb-aston-martin-10.jpeg', 11),
(78, 'jb-aston-martin-11.jpeg', 11),
(79, 'jb-aston-martin-12.jpeg', 11),
(80, 'bugatti-1.jpeg', 12),
(81, 'bugatti-2.jpeg', 12),
(82, 'bugatti-3.jpeg', 12),
(83, 'bugatti-4.jpeg', 12),
(84, 'bugatti-5.jpeg', 12),
(85, 'bugatti-6.jpeg', 12),
(86, 'bugatti-7.jpeg', 12),
(87, 'bugatti-8.jpeg', 12),
(88, 'bugatti-9.jpeg', 12),
(89, 'bugatti-10.jpeg', 12),
(90, 'bugatti-11.jpeg', 12),
(91, 'bugatti-12.jpeg', 12),
(92, 'bugatti-13.jpeg', 12),
(145, 'imperial-star-destroyer-17.jpeg', 3),
(146, 'imperial-star-destroyer-6.jpeg', 3),
(147, 'imperial-star-destroyer-7.jpeg', 3),
(148, 'imperial-star-destroyer-8.jpeg', 3),
(149, 'imperial-star-destroyer-9.jpeg', 3),
(150, 'imperial-star-destroyer-10.jpeg', 3),
(151, 'imperial-star-destroyer-11.jpeg', 3),
(152, 'imperial-star-destroyer-12.jpeg', 3),
(153, 'imperial-star-destroyer-13.jpeg', 3),
(154, 'imperial-star-destroyer-14.jpeg', 3),
(155, 'imperial-star-destroyer-15.jpeg', 3),
(156, 'imperial-star-destroyer-16.jpeg', 3),
(157, 'millennium-falcon-6.jpeg', 4),
(158, 'millennium-falcon-7.jpeg', 4),
(159, 'millennium-falcon-8.jpeg', 4),
(160, 'millennium-falcon-9.jpeg', 4),
(161, 'millennium-falcon-10.jpeg', 4),
(162, 'millennium-falcon-11.jpeg', 4),
(163, 'millennium-falcon-12.jpeg', 4),
(164, 'millennium-falcon-13.jpeg', 4),
(165, 'y-wing-6.jpeg', 6),
(166, 'y-wing-7.jpeg', 6),
(167, 'y-wing-8.jpeg', 6),
(168, 'y-wing-9.jpeg', 6),
(169, 'tantive-iv-6.jpeg', 10),
(170, 'tantive-iv-7.jpeg', 10),
(171, 'tantive-iv-8.jpeg', 10),
(172, 'tantive-iv-9.jpeg', 10),
(173, 'tantive-iv-10.jpeg', 10),
(174, 'tantive-iv-11.jpeg', 10),
(175, 'tantive-iv-12.jpeg', 10),
(176, 'lr-defender-6.jpeg', 7),
(177, 'lr-defender-7.jpeg', 7),
(178, 'lr-defender-8.jpeg', 7),
(179, 'lr-defender-9.jpeg', 7),
(180, 'lr-defender-10.jpeg', 7),
(181, 'lr-defender-11.jpeg', 7),
(182, 'lr-defender-12.jpeg', 7),
(183, '1989-batmobile-6.jpeg', 9),
(184, '1989-batmobile-7.jpeg', 9),
(185, '1989-batmobile-8.jpeg', 9),
(186, '1989-batmobile-9.jpeg', 9),
(187, '1989-batmobile-10.jpeg', 9),
(188, '1989-batmobile-11.jpeg', 9),
(189, '1989-batmobile-12.jpeg', 9),
(190, '1989-batmobile-13.jpeg', 9),
(191, '1989-batmobile-14.jpeg', 9),
(192, '1989-batmobile-15.jpeg', 9),
(193, '1989-batmobile-16.jpeg', 9),
(194, 'mustang-6.jpeg', 8),
(195, 'mustang-7.jpeg', 8),
(196, 'mustang-8.jpeg', 8),
(197, 'mustang-9.jpeg', 8),
(198, 'mustang-10.jpeg', 8),
(199, 'mustang-11.jpeg', 8),
(200, 'mustang-12.jpeg', 8),
(201, 'mustang-13.jpeg', 8),
(202, 'mustang-14.jpeg', 8),
(203, 'mustang-15.jpeg', 8),
(204, 'mustang-16.jpeg', 8),
(205, 'mustang-17.jpeg', 8),
(206, 'mustang-18.jpeg', 8),
(207, 'mustang-19.jpeg', 8),
(208, 'mustang-20.jpeg', 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`cartItemId`),
  ADD UNIQUE KEY `cartproductid` (`productId`,`cartId`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cartId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `cartItemId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cartId` int(11) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `product_images`
--
ALTER TABLE `product_images`
  MODIFY `id` mediumint(9) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
