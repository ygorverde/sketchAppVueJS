<template>
	<div id="app">
		<Header />
		<Menu />
		<Content />
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/template/Header'
import Menu from '@/components/template/Menu'
import Content from '@/components/template/Content'
import Footer from '@/components/template/Footer'

export default {
	name: "App",
	components: { Header, Menu, Content, Footer }
}
</script>

<style>
	* {
		font-family: "Lato", ; /* Referenciada em public/index.html */
	}

	body {
		margin: 0px;
	}

	#app { /* Div que envolverá toda a aplicação */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		grid-template-rows: 60px 1fr 60px; /* 3 Linhas: Header, Content, Footer */
		grid-template-columns: 300px 1fr; /* 2 Colunas: Navbar(Menu) e o Conteúdo */
		grid-template-areas:  /* 6 Partes */
			"header header"
			"menu content"
			"menu footer"
	}
</style>