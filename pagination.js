export default {
  props: ["pages", "getProductsData"],
  template: `<nav aria-label="Page navigation example">
   <ul class="pagination">
     <li class="page-item">
       <a class="page-link" href="#" aria-label="Previous"
       :class="{disabled: pages.current_page === 1}"
       @click="getProductsData(pages.current_page-1)">
         <span aria-hidden="true">Previous</span>
       </a>
     </li>

     <li class="page-item"
     v-for="page in pages.total_pages" :key="page + 'page' ">
     <a class="page-link" href="#"
     :class="{active: page === pages.current_page}"
     @click="getProductsData(page)">
     {{ page }}
     </a></li>
     
     <li class="page-item">
       <a class="page-link" href="#" aria-label="Next" 
       :class="{disabled: pages.current_page === pages.total_pages}"
       @click="getProductsData(pages.current_page+1)">
         <span aria-hidden="true">Next</span>
       </a>
     </li>
   </ul>
 </nav>
 `,
};
