<template>
	<v-app id="app">
		<router-view :key="$route.fullPath" />
	</v-app>
</template>

<script>
export default {
	mounted() {
		if (localStorage.getItem("access_token")) {
			this.$store.dispatch(
				"setAccessToken",
				localStorage.getItem("access_token")
			);
		}
	}
};
</script>
