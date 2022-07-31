/**
 * Set Alert
 */

 const setAlert = (msg, type = 'danger') =>{
    return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss = "alert" class="btn-close"></button></p>`
}


// Myself

const createlsdata = (key, value) =>{

    data = [];

    if(localStorage.getItem(key)){
        data = JSON.parse(localStorage.getItem(key));
    }

    data.push(value);

    localStorage.setItem(key, JSON.stringify(data));


        

}

const readlsdata = (key) => {

    if(localStorage.getItem(key)){

        return JSON.parse(localStorage.getItem(key));

    }else{

        return false;

    }




}

/**
 * update lsdata
 */

const updatelsdata = (key, Array) =>{

    localStorage.setItem(key, JSON.stringify(Array));
}