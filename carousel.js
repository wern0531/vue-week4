export default {
  props: ["products"],
  template: `
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-inner" >

    <div class="carousel-item" v-for="(product, index) in products" :key="index" :class="{active : index === 0}">
      <img :src="product.imageUrl" class="d-block w-50 " alt="...">

    </div>

  </div>
  </div>
  `,
  // template: `
  // <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel" >
  // <div class="carousel-inner" >
  //   <div class="carousel-item active"  >
  //     <img src="" class="d-block w-100 " alt="...">

  //   </div>
  //   <div class="carousel-item" v-for="(product, index) in products" :key="index">
  //     <img :src="product.imageUrl" class="d-block w-50 " alt="...">

  //   </div>

  // </div>
  // </div>

  // `,
};
