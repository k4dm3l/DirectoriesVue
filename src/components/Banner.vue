<template>
    <div
      class="container-fluid gradient-container d-flex justify-content-center flex-column align-items-center position-relative"
    >
      <div class="overlay position-absolute"></div>
      <p class="phrase text-white text-lg-center">
        "If you can imagine it, you can programming it"
      </p>
      <a
        href="/"
        class="border-0 btn btn-primary bg-white btn-lg text-btn"
        role="button"
        aria-pressed="true"
        >See More</a
      >
    </div>
</template>
<script>
    export default {

    }
</script>

<style scoped>
  .gradient-container{
      background:  url("https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      height: 60vh;
  }

  .overlay{
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      top:0;
      bottom: 0;
  }

  a.text-btn{
    color: #000 !important;
    border-radius: 1px;
    font-size: 0.95rem;
    padding: 10px 50px;
    z-index: 1;
}

a.text-btn:hover{
    color: white!important;
    background: #F85D4A!important;
}

p.phrase{
    font-size: 3.5rem;
    font-weight: 500;
    width: 50%;
    margin-bottom: 70px;
    z-index: 1;
}
</style>