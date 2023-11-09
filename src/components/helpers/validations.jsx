const regExpName = /^[A-Za-z\s?]+$/;
const regHora = /^(0[8-9]|1[0-9]|20|21):[0-5]\d$/;


export const validateName =(field)=>{
if(regExpName.test(field) && field.trim() !== ""){
    return true;
} else {
    return false;
}
}


export const validateFecha = (field) => {
    if (field !== "") {
        let fechaActual = new Date();
        fechaActual.setHours(0, 0, 0, 0);
        let fechaCampo = new Date(field);
        
        return fechaCampo >= fechaActual;
    }

    return false;  
}

export const validateHora = (field) => {
    return regHora.test(field) && field !== "";
};

  
  
  
  