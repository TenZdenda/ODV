<template>
	<div>
		<Navbar-component></Navbar-component>

		<v-container>
			<h1 class="mt-5 mb-5">Často kladné otázky</h1>
			<v-expansion-panels>
				<v-expansion-panel
					v-for="faq in faqs"
					:key="faq.id"
				>
					<v-expansion-panel-header>
						<h4>{{ faq.question }}</h4>
					</v-expansion-panel-header>
					<v-expansion-panel-content>
						<p>{{ faq.answer }}</p>
					</v-expansion-panel-content>
				</v-expansion-panel>
			</v-expansion-panels>
		</v-container>
	</div>
</template>
<script>
import NavbarComponent from "../components/NavbarComponent.vue";
export default {
	components: {
		NavbarComponent
	},
	data() {
		return {
			faqs: []
		};
	},
	methods: {
		getFaqs() {
			axios
				.get("./api/faq")
				.then(resp => {
					if (resp.status === 200) {
						this.faqs = resp.data.faqs;
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mounted() {
		this.getFaqs();
	}
};
</script>
