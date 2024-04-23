<script>
  import Solid_Star from "../components/icons/solid_star.svelte";
  import Empty_Star from "../components/icons/empty_star.svelte";
  /**
   * @type {{ title: any; rating: number; subheading: any; description: any; }}
   */
  export let tech;
</script>

<div
  class="max-w-lg w-full p-5 bg-neutral-100 shadow-md rounded-xl cursor-pointer"
>
  <!-- Rating -->
  <div class="flex flex-wrap justify-center mx-auto">
    <h5 class="font-bold text-lg font-sans pr-3">
      {tech.title}
    </h5>
    <div class="fill-blue-800 flex">
      {#each Array(tech.rating).fill(0) as _}
        <Solid_Star />
      {/each}
      {#each Array(5 - tech.rating).fill(0) as _}
        <Empty_Star />
      {/each}
    </div>
  </div>
  <!-- Description -->
  <p class="text-neutral-800 font-medium text-center pb-4">
    {tech.subheading}
  </p>
  <p class="text-neutral-700 text-center">
    {tech.description}
  </p>
</div>
