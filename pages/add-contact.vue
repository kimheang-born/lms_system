<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col cols="12">
				<div class="my-2">
					<v-btn color="primary" dark :to="`/contact`">Back to all contacts</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" md="9">
				<v-card class="spacing-playground px-6 pt-10">
					<v-form>
						<v-container class="py-0">
							<v-row>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Contact Owner" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="Salutation" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="First Name" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Last Name" outlined></v-text-field>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="types" label="Type" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="khan_provinces" label="Address Account" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Mobile Phone" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Email" outlined></v-text-field>
								</v-col>
							</v-row>
						</v-container>
					</v-form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		salutations: ['Mr.', 'Ms.', 'Mrs.', 'Oknha', 'H.E', 'Dr.', 'Neak Oknha', 'Dato'],
		types: ['Personal', 'Business'],
		khan_provinces: ['Toul Kork', 'Sen Sokh', 'Kratie'],
		items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
	}),
};
</script>
