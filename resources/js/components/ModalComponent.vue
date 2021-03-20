<template>
	<div class="text-center">
		<v-dialog
			width="500"
			v-model="open"
			@click:outside="close"
		>
			<v-card height="450">
				<v-card-title
					class="headline header-icon"
					primary-title
				>
					<i class="uil uil-exclamation-triangle"></i>
				</v-card-title>
				<div class="modal-content">
					<p>Skutečně chcete smazat tuto položku?</p>
					<span>Tato akce již nepůjde vrátit!</span>
				</div>

				<div class="modal-actions">
					<div class="buttons">
						<v-btn
							class="mr-3 deleteButton"
							text
							@click="remove"
						>Ano, smazat</v-btn>
						<v-btn
							text
							@click="close"
						>Ne, vrátit se</v-btn>
					</div>
				</div>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
export default {
	props: ["open", "item"],
	methods: {
		close() {
			this.$emit("close", false);
		},
		remove() {
			this.$emit("removeItem", this.item);
		}
	}
};
</script>