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
        await pool.query('DROP TABLE IF EXISTS users, posts, anonymous_users, likes');
       

        // Consulta SQL para crear la tabla 'users'
        console.log('Creando tablas...');
        await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          email VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(100) NOT NULL,
          createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

      // Consulta SQL para crear la tabla 'posts'
      await pool.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        user_id INT UNSIGNED NOT NULL,
        text VARCHAR(280) NOT NULL,
        image VARCHAR(100),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id)
      )
    `);

    // Consulta SQL para crear la tabla 'anonymous_users'
    await pool.query( `
      CREATE TABLE IF NOT EXISTS anonymous_users (
        id VARCHAR(36) PRIMARY KEY ,
        name_a VARCHAR(100) NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Consulta SQL para crear la tabla 'likes'
    await pool.query(`
      CREATE TABLE IF NOT EXISTS likes (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        user_id INT UNSIGNED NOT NULL,
        post_id INT UNSIGNED NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (post_id) REFERENCES posts(id),
        UNIQUE KEY unique_like (user_id, post_id)  -- Asegura que un usuario solo pueda dar un like a un post una vez
      )
    `);

    // Ejecutar las consultas para crear las tablas

    console.log('Tabla "users" creada correctamente.');

    console.log('Tabla "posts" creada correctamente.');

    console.log('Tabla "anonymous_users" creada correctamente.');

    console.log('Tabla "likes" creada correctamente.');


    } catch (error) {
        console.error('Error al crear las tablas: ', error);
}
};

// Llamar a la función para crear tablas
initDB();