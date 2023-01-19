export default {
  props: [
    "nowProduct",
    "isAddProduct",
    "addMainImg",
    "upProductData",
    "delImagesUrl",
    "addImg",
  ],
  template: ` <div
id="productModal"
ref="productModal"
class="modal fade"
tabindex="-1"
aria-labelledby="productModalLabel"
aria-hidden="true"
>
<div class="modal-dialog modal-xl">
  <div class="modal-content border-0">
    <div class="modal-header bg-dark text-white">
      <h5 id="productModalLabel" class="modal-title">
        <span v-if="isAddProduct">新增產品</span>
        <span v-else>編輯產品</span>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <div class="row">
        <div class="col-sm-4">
          <div class="mb-2">
            <div class="mb-3">
              <label for="imageUrl" class="form-label">主要圖片</label>
              <input
                type="text"
                class="form-control"
                placeholder="請輸入圖片連結"
                v-model="nowProduct.imageUrl"
              />
            </div>
            <img class="img-fluid" :src="nowProduct.imageUrl" alt="" />
          </div>
          <h3 class="mb-3">圖片集</h3>
          <div class="mt-2" v-if="Array.isArray(nowProduct.imagesUrl)">
            <div
              class="mb-2"
              v-for="(img, key) in nowProduct.imagesUrl"
              :key="key"
            >
              <div class="mb-3">
                <label for="imageUrl" class="form-label"
                  >圖片網址</label
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                  v-model="nowProduct.imagesUrl[key]"
                />
              </div>
              <img class="img-fluid" :src="img" alt="" />
            </div>
            <div
              v-if="!nowProduct.imagesUrl.length || nowProduct.imagesUrl[nowProduct.imagesUrl.length-1] "
            >
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="addImg"
              >
                新增圖片
              </button>
            </div>
            <div v-else>
              <button
                class="btn btn-outline-danger btn-sm d-block w-100"
                @click="delImagesUrl"
              >
                取消新增
              </button>
            </div>
          </div>
          <div v-else>
            <div>
              <button
                class="btn btn-outline-primary btn-sm d-block w-100"
                @click="addMainImg"
              >
                新增圖片
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-8">
          <div class="mb-3">
            <label for="title" class="form-label">標題</label>
            <input
              id="title"
              type="text"
              class="form-control"
              placeholder="請輸入標題"
              v-model="nowProduct.title"
            />
          </div>

          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="category" class="form-label">分類</label>
              <input
                id="category"
                type="text"
                class="form-control"
                placeholder="請輸入分類"
                v-model="nowProduct.category"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="price" class="form-label">單位</label>
              <input
                id="unit"
                type="text"
                class="form-control"
                placeholder="請輸入單位"
                v-model="nowProduct.unit"
              />
            </div>
          </div>

          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="origin_price" class="form-label">原價</label>
              <input
                id="origin_price"
                type="number"
                min="0"
                class="form-control"
                placeholder="請輸入原價"
                v-model="nowProduct.origin_price"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="price" class="form-label">售價</label>
              <input
                id="price"
                type="number"
                min="0"
                class="form-control"
                placeholder="請輸入售價"
                v-model="nowProduct.price"
              />
            </div>
            <div class="mb-3 col-md-6">
              <label for="category" class="form-label">產地</label>
              <input
                id="origin_place"
                type="text"
                class="form-control"
                placeholder="請輸入地點"
                v-model="nowProduct.origin_place"
              />
            </div>
          </div>
          <hr />

          <div class="mb-3">
            <label for="description" class="form-label">產品描述</label>
            <textarea
              id="description"
              type="text"
              class="form-control"
              placeholder="請輸入產品描述"
              v-model="nowProduct.content"
            >
            </textarea>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">說明內容</label>
            <textarea
              id="description"
              type="text"
              class="form-control"
              placeholder="請輸入說明內容"
              v-model="nowProduct.description"
            >
            </textarea>
          </div>
          <div class="mb-3">
            <div class="form-check">
              <input
                id="is_enabled"
                class="form-check-input"
                type="checkbox"
                :true-value="1"
                :false-value="0"
                v-model="nowProduct.is_enabled"
              />
              <label class="form-check-label" for="is_enabled"
                >是否啟用</label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-secondary"
        data-bs-dismiss="modal"
      >
        取消
      </button>
      <button
        type="button"
        class="btn btn-primary"
        @click.prevent="upProductData"
      >
        確認
      </button>
    </div>
  </div>
</div>
</div>`,
};
