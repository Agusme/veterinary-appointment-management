const regExpName = /^[A-Za-z\s?]+$/;
const regExpDni = /^\d{7,8}$/
const regHora = /^([01]\d|2[0-3]):([0-5]\d)$/;


export const validateName =(field)=>{
if(regExpName.test(field) && field.trim() !== ""){
    return true;
} else {
    return false;
}
}

export const validateDni =(field)=>{
    if(regExpDni.test(field) && field.trim() !== ""){
        return true;
    }else{
        return false
    }
}
export const validateFecha = (field) => {
    if (field && field !== "") {
        return true;
    }
    return false; 
}
export const validateHora = (field) =>{
    if (field && field !== ""){
        if(regHora.test(field)){
            return true;
        }else{
            return false;
        }
    }
}
