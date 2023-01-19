import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import pagination from "./pagination.js";
import addModal from "./addModal.js";
import delModal from "./delModal.js";
import carousel from "./carousel.js";

let productModal = "";
let delProductModal = "";

const app = createApp({
  data() {
    return {
      path: "wern",
      products: [],
      nowProduct: {
        // imagesUrl: [],
      },
      isAddProduct: true,
      imgPath: "",
      page: {},
    };
  },
  methods: {
    checkAdmin() {
      // 驗證使用者是否有登入(有登入取得商品資訊，沒有則返回登入頁面)
      const api = "https://vue3-course-api.hexschool.io/v2/api/user/check";
      axios
        .post(api)
        .then((res) => {
          this.getProductsData();
        })
        .catch((err) => {
          window.location = "login.html";
        });
    },
    getProductsData(page = 1) {
      const api = `https://vue3-course-api.hexschool.io/v2/api/${this.path}/admin/products/?page=${page}`;
      axios
        .get(api)
        .then((res) => {
          this.products = res.data.products;
          this.page = res.data.pagination;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    openModel(status, item) {
      if (status === "add") {
        this.isAddProduct = true;
        this.nowProduct = {};
        productModal.show();
      } else if (status === "del") {
        this.nowProduct = item;
        delProductModal.show();
      } else if (status === "edit") {
        this.isAddProduct = false;
        this.nowProduct = { ...item };
        productModal.show();
      }
    },
    upProductData() {
      const api = `https://vue3-course-api.hexschool.io/v2/api/${this.path}/admin/product`;

      if (this.isAddProduct === true) {
        axios.post(api, { data: this.nowProduct }).then((res) => {
          this.nowProduct = {};
          productModal.hide();
          this.getProductsData();
        });
      } else if (this.isAddProduct === false) {
        axios
          .put(`${api}/${this.nowProduct.id}`, { data: this.nowProduct })
          .then((res) => {
            this.nowProduct = {};
            productModal.hide();
            this.getProductsData(this.page.current_page);
          });
      }
    },
    delProduct() {
      const api = `https://vue3-course-api.hexschool.io/v2/api/${this.path}/admin/product/${this.nowProduct.id}`;
      axios.delete(api).then((res) => {
        this.nowProduct = {};
        this.getProductsData();
        delProductModal.hide();
        alert(res.data.message);
      });
    },
    delImagesUrl() {
      // 刪除陣列最後一項
      this.nowProduct.imagesUrl.pop();
    },
    addMainImg() {
      this.nowProduct.imagesUrl = [];
      this.nowProduct.imagesUrl.push("");
    },
    addImg() {
      this.nowProduct.imagesUrl.push("");
    },
    uploadImg(e) {
      const api = `https://vue3-course-api.hexschool.io/v2/api/${this.path}/admin/upload`;
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", file);
      axios.post(api, formData).then((res) => {
        console.log(res.data.imageUrl);
        this.imgPath = res.data.imageUrl;
      });
    },
  },
  components: {
    pagination,
    addModal,
    delModal,
    carousel,
  },
  mounted() {
    // 取出 Token(google取得)
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // 將token放入headers,只需發送一次(google取得)
    axios.defaults.headers.common.Authorization = token;
    this.checkAdmin();

    productModal = new bootstrap.Modal(
      document.getElementById("productModal"),
      {
        keyboard: false,
      }
    );
    delProductModal = new bootstrap.Modal(
      document.getElementById("delProductModal"),
      {
        keyboard: false,
      }
    );
  },
});

app.mount("#app");
