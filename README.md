# Employee Management System

### Technical Specifications the applicatio used

1. Angular CLI : 10.0.0
2. Angular : 10.2.0
3. Typesctipt :4.0.3
4. NPM : 6.14.5
5. Node : 12.18.1
6. MySQL : 2.18.1

> Make sure Angular CLI, NPM, MySQL are installed with the same versions in your system.

## Create MySQL DATABASE and TABLES

> Open MySQL Editor and copy the below code and execute, It will create Database and Tables.

```mysql
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employee_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` int(4) NOT NULL,
  `department` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `fname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `qualification` varchar(10) NOT NULL,
  `contact_num` varchar(12) NOT NULL,
  `dept` varchar(10) NOT NULL,
  `id` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
```

### Steps to Serve Angular Application and Node Js

1. UnZip the folder, you find two files inside the EMPLOYEE-MANAGEMENT-SYSTEM.
   - backend
   - frontend
2. Import two files into an IDE preferably Visual Studio Code.
3. Angular Code
   - Open Terminal and navigate to frontend folder.
   - Run `npm install` to install all dependencies and node_modules.
   - And run `ng serve --o` for dev server.
   - The app will open run on http://localhost:4200
4. Node Js Code
   - Open Terminal in another window and navigate to backend.
   - Run `npm install` to install all dependencies and node_modules.
   - And run `node app.js`
   - The server will start at port 3000,(http://localhost:3000).
