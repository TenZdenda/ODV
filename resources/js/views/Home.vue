<template>
	<div>
		<navbar-component></navbar-component>

		<v-container fluid>
			<div class="image">
				<h1>7. ročník akce Otevíráme dveře vzdělání</h1>
			</div>

			<section class="odv-team">
				<h2 class="text-center">Realizační tým</h2>
				<v-layout
					row
					wrap
				>
					<v-flex
						xs12
						sm6
						md4
						lg4
						v-for="person in members"
						:key="person.name"
					>
						<v-card class="text-center ma-3">
							<v-responsive class="pt-4">
								<v-avatar size="140">
									<img
										:src="person.avatar"
										:alt="person.name"
									>
								</v-avatar>
							</v-responsive>
							<v-card-text>
								<div class="subheading">{{ person.name }}</div>
								<div class="grey--text">{{ person.role }}</div>
								<v-btn
									text
									:href="'mailto:' + person.email"
									class="mailme grey--text"
								>
									<i class="uil uil-envelope-edit"></i>
									<span>Zpráva</span>
								</v-btn>
							</v-card-text>
						</v-card>
					</v-flex>
				</v-layout>
			</section>

			<section
				class="odv-partners"
				v-if="partners.length !== 0"
			>
				<h2 class="text-center">Seznam partnerů</h2>
				<v-layout
					row
					wrap
				>
					<v-flex
						xs12
						sm6
						md4
						lg3
						v-for="partner in partners"
						:key="partner.id"
					>
						<v-card
							flat
							class="text-center ma-3"
						>
							<v-responsive>
								<a
									:href="partner.url"
									target="_blank"
									rel="noopener"
								>
									<img
										:src="partner.path"
										width="200px"
										alt="partner"
									>
								</a>
							</v-responsive>
						</v-card>
					</v-flex>
				</v-layout>
			</section>

			<section class="reference mb-5">
				<h2 class="text-center">Reference partnerů</h2>
				<vueper-slides
					class="no-shadow custom-slider"
					arrows-outside
					bullets-outside
					transition-speed="250"
					:arrows="false"
				>
					<vueper-slide
						class="content-slider"
						v-for="reference in references"
						:key="reference.id"
						:title="reference.text"
						:content="reference.author + ', ' + reference.position + ' v ' + reference.company"
					/>
				</vueper-slides>
			</section>

			<section class="pt">
				<div class="partners">
					<div class="information">
						<h2 class="text-center">Pro partnery</h2>
						<p class="text-center">Staňte se partnerem akce Otevíráme dveře vzděláním a přijďte prezentovat Vaši společnost 24. 10. 2019 na VOŠ a SPŠE Plzeň.</p>
						<a href="mailto:odv@spseplzen.cz"><button>Napište nám!</button></a>
					</div>
				</div>
			</section>

			<ContactComponent v-if="settings.contactform.showform"></ContactComponent>

			<v-footer
				absolute
				class="font-weight-medium"
			>
				<v-col
					class="text-center"
					cols="12"
				>
					{{ new Date().getFullYear() }} — <strong>ODV</strong>
				</v-col>
			</v-footer>
		</v-container>
	</div>
</template>
<script>
import NavbarComponent from "../components/NavbarComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import logo from "../../img/vos_a_spse_plzen.png";

export default {
	components: {
		NavbarComponent,
		ContactComponent,
		VueperSlides,
		VueperSlide
	},
	data() {
		return {
			links: ["Home", "Lectures"],
			partners: [],
			members: [],
			references: [],
			logo: logo,
		};
	},
	methods: {
		getPartners() {
			axios
				.get("./api/partners")
				.then(resp => {
					if (resp.status === 200) {
						this.partners = resp.data.partners;
					}
				})
				.catch(error => {});
		},
		getTeam() {
			axios
				.get("./api/team")
				.then(resp => {
					if (resp.status === 200) {
						this.members = resp.data.team;
					}
				})
				.catch(error => {});
		},
		getReferences() {
			axios
				.get("./api/reference")
				.then(resp => {
					if (resp.status === 200) {
						this.references = resp.data.references;
					}
				})
				.catch(error => {
					console.log(error);
				});
		}
	},
	mounted() {
		this.getPartners()
        this.getTeam()
        this.getReferences()
        this.$store.dispatch('setSettings')
        if (localStorage.getItem('access_token')) {
            this.$store.dispatch('setAccessToken', localStorage.getItem('access_token'))
            this.$store.dispatch('setUser')
        }
	},
    computed: {
        settings: function () {
            return this.$store.getters.getSettings
        }
    }
};
</script>
