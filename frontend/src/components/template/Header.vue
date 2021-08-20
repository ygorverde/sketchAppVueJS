<template>
    <header class="header"></header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);

        display: flex; /* Direção Row */
        justify-content: center; /* Justificando o conteúdo na linha MainAxis (X)*/
        align-items: center; /* Centralizando no CrossAxis (Y)*/

    }
</style>