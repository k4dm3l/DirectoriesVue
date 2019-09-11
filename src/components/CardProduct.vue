<template>
  <div class="col-md-4 col-card card-style col-12">
    <div class="card">
      <div class="card-img">
        <img src="/img/category-page.png" alt="..." />
      </div>
      <div class="card-body d-flex flex-column justify-content-between">
        <div class="p-3">
          <h2 class="card-title">Flow Microsoft</h2>
          <p class="card-text">Automate task and processes by integrating your favorite apps</p>
        </div>
        <div>
          <a href="#" class="btn btn-transparent btn-block">Visite site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* COMPONENT CARD */

.col-card {
  margin-top: 30px;
}

.card {
  height: 100%;
  box-shadow: 0 0 5px #cccccc;
}

.card-img {
  height: 350px !important;
  overflow: auto;
}

.card-img img {
  width: 100%;
}

.card-body {
  /*border: solid 1px red;*/
  min-height: auto !important;
}

.card-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 700 !important;
}

.card-body p {
  font-size: 1rem;
  font-weight: 400 !important;
  color: #403f3f;
}

.btn {
  border: 2.2px solid #dfdfdf;
  font-size: 1rem;
  font-weight: 600 !important;
  box-shadow: 0 0 5px #cccccc;
}
</style>