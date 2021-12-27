<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col cols="12">
				<div class="my-2">
					<v-btn color="primary" dark :to="`/properties`">Back to all properties</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-row>
			<v-col cols="12" md="9">
				<v-card class="spacing-playground px-6 pt-10">
					<v-form>
						<v-container class="py-0">
							<v-row>
								<v-card-text>
									<p class="text-h6 text--primary">Property Information</p>
								</v-card-text>
							</v-row>
							<v-row>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Record Type" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="Property Type" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="Current Use" outlined></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-card-text>
									<p class="text-h6 text--primary">Address</p>
								</v-card-text>
							</v-row>
							<v-row>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Province/City" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="District/Khan" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Commune/Sangkat" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Village/Phum" outlined></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="12" sm="3">
									<v-file-input
										accept="image/*"
										label="Front Side"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
								<v-col cols="12" sm="3">
									<v-file-input
										accept="image/*"
										label="Inside"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
								<v-col cols="12" sm="3">
									<v-file-input
										accept="image/*"
										label="Left Side"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
								<v-col cols="12" sm="3">
									<v-file-input
										accept="image/*"
										label="Right Side"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
							</v-row>
							<v-row>
								<v-card-text>
									<p class="text-h6 text--primary">Title Deed Information</p>
								</v-card-text>
							</v-row>
							<v-row>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Title Deed Type" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Title Deed No." outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Issued Year" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Parcel No." outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="4">
									<v-file-input
										accept="image/*"
										label="Cover Photo"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
								<v-col cols="12" sm="4">
									<v-file-input
										accept="image/*"
										label="Back Side Photo"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
								<v-col cols="12" sm="4">
									<v-file-input
										accept="image/*"
										label="Other Photo"
										filled
										prepend-icon="mdi-camera"
									></v-file-input>
								</v-col>
							</v-row>
							<v-row>
								<v-card-text>
									<p class="text-h6 text--primary">Property Owner and Instructor</p>
								</v-card-text>
							</v-row>
							<v-row>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Property Owner" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Instructor" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="items" label="Property Owner" outlined></v-select>
								</v-col>
							</v-row>
							<v-row>
								<v-card-text>
									<p class="text-h6 text--primary">Property Price</p>
								</v-card-text>
							</v-row>
							<v-row>
								<v-col cols="12" sm="6">
									<v-text-field label="Sale Price(USD)" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Rental Price(USD)" outlined></v-text-field>
								</v-col>
							</v-row>
							<v-row>
								<v-card-text>
									<p class="text-h6 text--primary">Additional Information</p>
								</v-card-text>
							</v-row>
							<v-row>
								<v-col cols="12" sm="12">
									<v-textarea name="input-7-1" label="Additional Information"></v-textarea>
								</v-col>
							</v-row>
							<v-row>
								<v-col cols="12" class="text-right mb-3">
									<v-btn color="success">Save and back</v-btn>
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
		date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10),
		pickerDate: null,
		notes: [],
		allNotes: [
			'President met with prime minister',
			'New power plant opened',
			'Rocket launch announced',
			'Global warming discussion cancelled',
			'Company changed its location',
		],
	}),
	watch: {
		pickerDate() {
			this.notes = [
				this.allNotes[Math.floor(Math.random() * 5)],
				this.allNotes[Math.floor(Math.random() * 5)],
				this.allNotes[Math.floor(Math.random() * 5)],
			].filter((value, index, self) => self.indexOf(value) === index);
		},
	},
};
</script>
