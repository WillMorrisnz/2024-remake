<script>
  /**
   * @type {{ name: any; date: any; tech: any; assets: any; description: any; }}
   */
  export let project;
</script>

<div
  class="{project.assets.length > 0
    ? 'lg:col-span-2 col-span-2'
    : 'lg:col-span-1 col-span-2'}  shadow-black/15 pb-8 outline outline-slate-200 hover:outline-blue-100 rounded-lg group min-h-96 w-full flex flex-wrap hover:bg-slate-50 hover:shadow-blue-800/40 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white cursor-pointer"
>
  <div class="p-4 bg-zinc-50 w-full">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-blue-800">
      {project.name}
    </h5>
    <!-- <p class="text-neutral-300">Developed: {project.date}</p> -->

    <div class="flex flex-wrap col-auto">
      {#each project.tech as technology}
        <span
          class="bg-slate-100 transition-all duration-300 group-hover:bg-slate-200 text-black px-4 py-0 rounded-full text-sm m-1"
          >{technology}</span
        >
      {/each}
    </div>
  </div>

  <div class="flex lg:flex-nowrap flex-wrap">
    {#if project.assets.length > 0}
      <div class="min-w-96 p-2 mx-auto">
        {#each project.assets as asset}
          {#if ["jpeg", "jpg", "png"].includes(asset.split(".")[asset.split(".").length - 1])}
            <img
              class="max-h-96 saturate-0 transition-all duration-300 group-hover:saturate-100"
              src={project.assets}
              alt="Test"
            />
          {/if}
          {#if ["mp4", "avi"].includes(asset.split(".")[asset.split(".").length - 1])}
            <video
              class="max-h-96 mx-auto saturate-0 transition-all duration-300 group-hover:saturate-100"
              src={project.assets}
              autoplay
              loop
              muted
            />
          {/if}
        {/each}
      </div>
    {/if}

    <div class="p-2 min-w-96">
      {#if project.problem && project.solution}
        <div class="grid text-md text-center m-6">
          <div>
            <p class="text-start">Problem:</p>
            <p class="font-semibold px-10 text-xl">
              {project.problem}
            </p>
          </div>
          <div>
            <p class="text-start">Solution:</p>
            <p class="font-semibold px-10 text-xl">
              {project.solution}
            </p>
          </div>
        </div>
      {/if}

      <p class="px-4">
        {project.description}
      </p>
    </div>
  </div>

  <!-- <p class="font-normal text-white dark:text-gray-400">
    {project.description}
  </p> -->
</div>
