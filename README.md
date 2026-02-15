# COLORS Application

## 1. Brief Description

COLORS is a full-stack web application built using a LAMP stack (Linux, Apache, MySQL, PHP) hosted on DigitalOcean.

The application allows users to:

- Log in using a username and password
- Store personal color entries
- Search through their saved colors

Each user’s data is associated with a unique user ID stored in a MySQL database. The backend API processes JSON-based POST requests to authenticate users, insert new colors, and search existing colors. The frontend communicates with the API and dynamically displays results to the user.

This project demonstrates full-stack development, remote server deployment, database design, and API integration.

---

## 2. Technologies Used

### Infrastructure
- DigitalOcean Droplet (Ubuntu Linux)
- LAMP Stack:
  - Linux
  - Apache
  - MySQL
  - PHP

### Backend
- PHP (API endpoints)
- MySQL (Relational Database)
- JSON for request and response handling

### Frontend
- HTML
- CSS
- JavaScript
- MD5 hashing (for password handling as required by class materials)

### Tools
- SSH (PuTTY)
- FTP (PSFTP or FileZilla)
- Postman / CURL for API testing
- Domain registration via third-party registrar (e.g., GoDaddy)

---

## 3. High-Level Setup Instructions

1. Create a DigitalOcean account and provision a LAMP Droplet (Ubuntu).
2. SSH into the server and verify Apache, MySQL, and PHP are installed.
3. Create the `COP4331` MySQL database and required tables (`Users`, `Colors`).
4. Create the database user (`TheBeast`) and grant privileges.
5. Upload API endpoint files (`Login.php`, `AddColor.php`, `SearchColors.php`) to `/var/www/html/LAMPAPI`.
6. Upload frontend files (`index.html`, `color.html`, CSS, JS).
7. Configure DNS to point your purchased domain to the server’s IP address.
8. Test API endpoints using Postman or CURL.
9. Access the application through your domain in a web browser.
