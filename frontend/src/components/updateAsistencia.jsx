import { updateAsistencia } from '../services/asistencia.service';
import React, { useState } from 'react';

function AsistenciaComponent() {
    const [listado, setListado] = useState([]);
    const [idAsamblea, setIdAsamblea] = useState('');

    const handleUpdateAsistencia = async () => {
        try {
            const result = await updateAsistencia(listado, idAsamblea);
            console.log("Resultado de la actualización de asistencia:", result);
        } catch (error) {
            console.error("Error al actualizar la asistencia:", error);
        }
    };

    return (
        <div>
            <h1>Actualizar Asistencia</h1>
            <div>
                <input 
                    type="text" 
                    placeholder="ID Asamblea" 
                    value={idAsamblea} 
                    onChange={(e) => setIdAsamblea(e.target.value)} 
                />
            </div>
            <div>
                <textarea 
                    placeholder="Listado de asistencia, separado por comas"
                    value={listado.join(', ')}
                    onChange={(e) => setListado(e.target.value.split(',').map(item => item.trim()))}
                />
            </div>
            <div>
                <button onClick={handleUpdateAsistencia}>Actualizar Asistencia</button>
            </div>
        </div>
    );
}

export default AsistenciaComponent;
