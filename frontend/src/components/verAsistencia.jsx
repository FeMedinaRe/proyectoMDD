import React, { useEffect, useState } from 'react';
import { getAsistentes } from '../services/asistencia.service'; // Ajusta la ruta según tu estructura de carpetas

function AsistentesList() {
    const [asistentes, setAsistentes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAsistentes = async () => {
            try {
                const result = await getAsistentes();
                setAsistentes(result.data); // Ajusta según la estructura de datos que devuelva tu API
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchAsistentes();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className = "form">
            <h1>Lista de Asistentes</h1>
            <ul>
                {asistentes.length > 0 ? (
                    asistentes.map((asistente, index) => (
                        <li key={index}>{asistente.rut}</li> // Ajusta según la estructura de datos que devuelva tu API
                    ))
                ) : (
                    <p>No hay asistentes disponibles.</p>
                )}
            </ul>
        </div>
    );
}

export default AsistentesList;
