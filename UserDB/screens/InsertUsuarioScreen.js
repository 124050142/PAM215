import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';


const controller = new UsuarioController();
export default function UsuariosScreen() {
   

    const [usuarios, setUsuarios] = useState([]);
    const [nombre, setNombre] = useState("");
    const [cargando, setCargando] = useState(true);
    const [guardando, setGuardando] = useState(false);

    // Estados para EDITAR
    const [editando, setEditando] = useState(false);
    const [idEditando, setIdEditando] = useState(null);

    // Cargar datos
    useEffect(() => {

        controller.initialize().then(() => {
            controller.addListener(cargarUsuarios);
            cargarUsuarios();
        });

        return () => controller.removeListener(cargarUsuarios);
    }, []);

    const cargarUsuarios = async () => {
        try {
            const data = await controller.obtenerUsuarios();
            setUsuarios(data);
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setCargando(false);
        }
    };

    // INSERT
    const handleAgregar = async () => {
        if (!nombre.trim()) {
            Alert.alert("Error", "El nombre no puede estar vacío");
            return;
        }

        setGuardando(true);

        try {
            await controller.crearUsuario(nombre);
            await cargarUsuarios(); 
            setNombre("");
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setGuardando(false);
        }
    };

    // PREPARAR EDICIÓN
    const prepararEdicion = (usuario) => {
        setNombre(usuario.nombre);
        setIdEditando(usuario.id);
        setEditando(true);
    };

    // UPDATE
    const handleActualizar = async () => {
        if (!nombre.trim()) {
            Alert.alert("Error", "Escribe un nombre válido");
            return;
        }

        try {
            await controller.actualizarUsuario(idEditando, nombre);
            await cargarUsuarios();
            setNombre("");
            setEditando(false);
            setIdEditando(null);
            Alert.alert("Actualizado", "Usuario editado correctamente");
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };

    // DELETE
    const handleEliminar = (id) => {
        Alert.alert(
            "Eliminar usuario",
            "¿Seguro que deseas eliminar este usuario?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: async () => {
                        await controller.eliminarUsuario(id);
                        await cargarUsuarios();
                    }
                }
            ]
        );
    };

    // Render de cada usuario
    const renderUsuario = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.fecha}>Creado: {item.fechaCreacion}</Text>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity onPress={() => prepararEdicion(item)} style={{ marginRight: 20 }}>
                    <Text style={{ color: "#007AFF", fontWeight: "bold" }}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleEliminar(item.id)}>
                    <Text style={{ color: "red", fontWeight: "bold" }}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Usuarios</Text>

            {/* INPUT */}
            <TextInput
                style={styles.input}
                placeholder="Escribe un nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            {/* BOTÓN AGREGAR / ACTUALIZAR */}
            <TouchableOpacity
                style={[styles.button, guardando && styles.buttonDisabled]}
                onPress={editando ? handleActualizar : handleAgregar}
                disabled={guardando}
            >
                <Text style={styles.buttonText}>
                    {editando ? "Actualizar Usuario" : guardando ? "Guardando..." : "Agregar Usuario"}
                </Text>
            </TouchableOpacity>

            {/* LISTA */}
            <FlatList
                data={usuarios}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderUsuario}
                ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>No hay usuarios</Text>}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        marginTop: 40,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15,
        textAlign: "center"
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10
    },
    button: {
        backgroundColor: "#007AFF",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 20
    },
    buttonDisabled: {
        opacity: 0.6
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    card: {
        backgroundColor: "#f4f4f4",
        padding: 15,
        borderRadius: 10,
        marginBottom: 10
    },
    nombre: {
        fontSize: 18,
        fontWeight: "bold"
    },
    fecha: {
        color: "#555"
    }
});