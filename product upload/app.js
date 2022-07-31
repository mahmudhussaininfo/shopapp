const product_form = document.getElementById("product_form");
const product_list = document.getElementById("product_list");
const shop_viewmodal = document.getElementById("shop_viewmodal");
const shop_editmodal = document.getElementById("shop_editmodal");
const product_editform = document.getElementById("product_editform");
const msg = document.querySelector(".msg");
const single_product = document.querySelector(".single_product");

product_form.onsubmit = (e) => {
  e.preventDefault();

  let form_data = new FormData(e.target);
  let product_data = Object.fromEntries(form_data.entries());
  let { name, price, photo, quantity } = Object.fromEntries(
    form_data.entries()
  );

  if (!name || !price || !photo || !quantity) {
    msg.innerHTML = setAlert("Invalid Data");
  } else {
    createlsdata("product", product_data);
    msg.innerHTML = setAlert("Data Stable", "success");
    e.target.reset();
    getallproducts();
  }
};

const getallproducts = () => {
  const data = readlsdata("product");

  if (!data) {
    product_list.innerHTML = `

    <tr>
    
        <td colspan = "7" class = "text-center"> Product Unbeliable </td>
    
    
    </tr>


   
    
    
    `;
  }

  if (data) {
    let list = "";
    let final_amount = 0;

    data.map((item, index) => {
      final_amount += item.price * item.quantity;
      list += `

      <tr>
          <td>${index + 1}</td>
        <td>
          <img
          src="${item.photo}"
          alt="Alu"
          />
        </td>
      <td>${item.name}</td>
      <td>${item.price} TK</td>
      <td>${item.quantity}</td>
      <td>${item.price * item.quantity} BDT</td>
      <td>
        <a href="#shop_viewmodal" product_index = ${index} data-bs-toggle="modal" class="btn btn-info btn-sm"
          ><i class="fas fa-eye"></i
        ></a>
        <a href="#shop_editmodal" product_index = ${index} data-bs-toggle="modal" class="btn btn-warning btn-sm"
          ><i class="fas fa-edit"></i
        ></a>
        <a href="" class="btn btn-danger btn-sm"
          ><i class="fas fa-trash"></i
        ></a>
      </td>
    </tr>
      
      
      
      
      `;
    });

    list += `


    <tr> 

        <td colspan= "7" class = "text-end"> Final Amount: ${final_amount} BDT </td>
    
    
    </tr>
    
    
    
    `;

    product_list.innerHTML = list;
  }
};

getallproducts();

// For View button

product_list.onclick = (e) => {
  e.preventDefault();

  let index = e.target.parentElement.getAttribute("product_index");
  let data = readlsdata("product");

  const { name, price, photo } = data[index];

  single_product.innerHTML = `

  <img
  src="${photo}"
  alt=""/>
  <p>${name}</p>
  <p>${price}</p>
  
  
  `;
};

product_list.onclick = (e) => {
  e.preventDefault();

  let index = e.target.parentElement.getAttribute("product_index");
  let data = readlsdata("product");

  const { name, price, photo, quantity } = data[index];

  product_editform.innerHTML = `

      <div class="my-3">
      <label for="">Name</label>
      <input
        type="text"
        name="name"
        value="${name}"
        class="form-control"
      />
    </div>
    <div class="my-3">
      <label for="">Price</label>
      <input
        type="text"
        name="price"
        value="${price}"
        class="form-control"
      />
    </div>
    <div class="my-3">
      <label for="">Photo</label>
      <input
        type="text"
        name="photo"
        value="${photo}"
        class="form-control"
      />
    </div>
    <div class="my-3">
      <label for="">Quantity</label>
      <input
        type="text"
        name="quantity"
        value="${quantity}"
        class="form-control"
      />
    </div>
    <input
      type="submit"
      class="btn btn-primary w-100"
      value="Edit now"
    />
  
  
  
  
  `;
};

product_editform.onsubmit = (e) => {
  e.preventDefault();

  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  let alldata = readlsdata("product");
};
