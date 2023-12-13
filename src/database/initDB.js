import getPool from './getPool.js';
import dotenv from 'dotenv';
import {v4 as uuidv4} from 'uuid';

// Generar un UUID
const newUUID = uuidv4();

dotenv.config();

const initDB = async () => {
    try {

        let pool = await getPool();

        console.log('Creando base de datos...');
        await pool.query('CREATE DATABASE IF NOT EXISTS instahab');

        console.log('Usando la base de datos...');
        await pool.query('USE instahab');

        console.log('Eliminando tablas si existen...');
        await pool.query('DROP TABLE IF EXISTS users, posts, likes, comments');
       

      // Consulta SQL para crear la tabla 'users'
      console.log('Creando tablas...');
      await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
          email VARCHAR(100) UNIQUE NOT NULL,
          username VARCHAR(30) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL,
          active BOOLEAN DEFAULT false,
          role ENUM('admin', 'normal') DEFAULT 'normal',
          registrationCode CHAR(30),
          recoverPassCode CHAR(10),
         
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
      `);

      await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        user_id INT NOT NULL,
        text VARCHAR(280) NOT NULL,
        image VARCHAR(100),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
        )
      `);

      await pool.query(`
      CREATE TABLE IF NOT EXISTS likes (
          id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
          user_id INT NOT NULL,
          post_id INT NOT NULL,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (user_id) REFERENCES users(id),
          FOREIGN KEY (post_id) REFERENCES posts(id),
          UNIQUE KEY unique_like (user_id, post_id) 
        )
      `);


      // Consulta SQL para crear la tabla 'comments'
      await pool.query(`
      CREATE TABLE IF NOT EXISTS comments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT NOT NULL,
        post_id INT NOT NULL,
        comment_text VARCHAR(280) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (post_id) REFERENCES posts(id)
      )
  `);
        
    // Ejecutar las consultas para crear las tablas

    console.log('Tabla "users" creada correctamente.');

    console.log('Tabla "posts" creada correctamente.');

    console.log('Tabla "likes" creada correctamente.');

    console.log('Tabla "comments" creada correctamente');


    } catch (error) {
        console.error('Error al crear las tablas: ', error);
}
};

// Llamar a la función para crear tablas
initDB();