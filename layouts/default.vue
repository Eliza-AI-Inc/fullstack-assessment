<template>
    <div>
      <NavBar
        class="sm:pt-4 pt-2.5"
      />
      <div class="h-min-screen pt-6 pb-10 px-10">
        <slot />
      </div>
      <Footer />
    </div>
  </template>