/**
 * Set Alert
 */

const setAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg}<button data-bs-dismiss = "alert" class="btn-close"></button></p>`;
};

/**
 * Create Ls data
 */

const createlsdata = (key, value) => {
  let data = [];

  if (localStorage.getItem(key)) {
    data = JSON.parse(localStorage.getItem(key));
  }
  data.push(value);
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * Read Ls data
 */

const readlsdata = (key) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return false;
  }
};
