<template>
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 96">
          <path :fill="color" fill-opacity="1" d="M0,96L1440,0L1440,96L0,96Z"></path>

          <text x="600" y="140" fill="#37D667" class="fa" transform="rotate(-3)" style="font-size:8em;">&#xf18c;</text>
            <text x="1200" y="130" fill="#37D667" class="fa" transform="rotate(-3)" style="font-size:8em;">+</text>
            <text x="1000" y="100" fill="#fff" class="fa" transform="rotate(-5,30)" style="font-size:6em;">+</text>
            <text x="1100" y="100" fill="#9BEAB3" class="fa" transform="rotate(-5,30)" style="font-size:5em;">+</text>
            <text x="1300" y="80" fill="#9BEAB3" class="fa" transform="rotate(-6,30)" style="font-size:4em;">&#xf03e;</text>
            <text x="1100" y="100" fill="#fff" class="fa" rotate="-15" style="font-size:7em;">+</text>
        </svg>
        <slot></slot>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 128">
          <path :fill="color" fill-opacity="1" d="M0,128L1440,64L1440,0L0,0Z"></path>

          <text x="110" y="120" fill="#37D667" class="fa" transform="rotate(-3)" style="font-size:6em;">&#xf15c;</text>
          <text x="230" y="70" fill="#37D667" class="fa" transform="rotate(8)" style="font-size:4em;">&#xf1c1;</text>
          <text x="50" y="140" fill="#fff" class="fa" transform="rotate(-5)" style="font-size:8em;">#;</text>

        </svg>
    </div>
</template>

<script>
  export default{
    props:{
      color: String
    }
  }
</script>