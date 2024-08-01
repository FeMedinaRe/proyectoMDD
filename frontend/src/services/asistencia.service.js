import axios from './root.service.js';

export async function updateAsistencia(listado, idAsamblea){
    try{
        const response = await axios.put('/asistencia/update', {listado, idAsamblea});
        return response.data;
    } catch(error){
        throw error.response?.data || error.message;
    }
}

export async function getAsistentes(){
    try{
        const config = {
            headers: {
                'Cache-Control' : 'no-cache'
            }
        }
        const {data} = await axios.get('/asistencia/asistentes', config);
        return data;
    } catch(error){
        throw error.response?.data || error.message;
    }
}