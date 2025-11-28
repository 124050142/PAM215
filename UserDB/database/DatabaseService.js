//Comenzamos los servicios de la BD, con las importaciones
// necesarias y definiendo una clase con un constructor que
// inicializa 2 atributos que utilizaremos

import {Platform} from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService{
    constructor() {
      this.db = null;
      this.storageKey = 'usuarios';
    }

    //Preparamos una función asíncrona para definir el la BD en base
    // a la plataforma con la cual estemos trabajando, si es móvil se crea
    // la BD con la tabla en caso de que no exista

    async initialize(){
        if (Platform.OS === 'web') {
            console.log('usando LocalStorage para web');
        }else{
            console.log('usando LocalStorage para movil');
            this.db = await SQLite.openDatabaseAsync('miapp.db');
            await this.db.execAsync(`
                CREATE TABLE IF NOT EXISTS usuarios (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nombre TEXT NOT NULL ,
                fechaCreacion DATETIME DEFAULT  CURRENT_TIMESTAMP
                );
            `);
        }
    }
         async getAll() {
        if (Platform.OS === 'web') {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : [];
        } else {
            return await this.db.getAllAsync("SELECT * FROM usuarios ORDER BY id DESC;");
        }
    }

        async add(nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const nuevo = {
                id: Date.now(),
                nombre,
                fechaCreacion: new Date().toISOString()
            };
            usuarios.unshift(nuevo);
            localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
            return nuevo;

        } else {
            const result = await this.db.runAsync(
                "INSERT INTO usuarios (nombre) VALUES (?);",
                nombre
            );
            return {
                id: result.lastInsertRowId,
                nombre,
                fechaCreacion: new Date().toISOString()
            };
        }
    }

    async update(id, nombre) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const actualizados = usuarios.map(u =>
                u.id === id ? { ...u, nombre } : u
            );
            localStorage.setItem(this.storageKey, JSON.stringify(actualizados));
            return true;

        } else {
            await this.db.runAsync(
                "UPDATE usuarios SET nombre = ? WHERE id = ?;",
                [nombre, id]
            );
            return true;
        }
    }

    async delete(id) {
        if (Platform.OS === 'web') {
            const usuarios = await this.getAll();
            const filtrados = usuarios.filter(u => u.id !== id);
            localStorage.setItem(this.storageKey, JSON.stringify(filtrados));
            return true;

        } else {
            await this.db.runAsync("DELETE FROM usuarios WHERE id = ?;", [id]);
            await new Promise(resolve => setTimeout(resolve, 80));
            return true;
        }
    }
}
//Exportamos la instancia  de la clase
export default new DatabaseService();