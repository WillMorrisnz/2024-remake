<div
  class="p-1 bg-gradient-to-r shadow-xl from-pink-500 via-blue-500 to-indigo-600 background-animate"
></div>

<style>
  .background-animate {
    background-size: 400%;

    -webkit-animation: AnimationName 4s ease infinite;
    -moz-animation: AnimationName 4s ease infinite;
    animation: AnimationName 4s ease infinite;
  }

  @keyframes AnimationName {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
</style>
