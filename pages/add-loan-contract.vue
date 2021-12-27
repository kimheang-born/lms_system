<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col cols="12">
				<div class="my-2">
					<v-btn color="primary" dark :to="`/loan-contract`">Back to all loan contract</v-btn>
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
									<v-select :items="items" label="Property Owner" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="Financial Institution" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="Borrower" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="salutations" label="Loan Purpose" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="12">
									<v-file-input
										accept="image/*"
										label="Repayment Schedule (Each photo is limited within 10MB.)"
									></v-file-input>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="types" label="Loan Type" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="types" label="Currency" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Request Amount" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Approved Amount" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Interest Rate Per Year" outlined></v-text-field>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="types" label="Repayment Method" outlined></v-select>
								</v-col>
								<v-col class="d-flex" cols="12" sm="6">
									<v-select :items="types" label="Frequency Type" outlined></v-select>
								</v-col>
								<v-col cols="12" sm="6">
									<v-text-field label="Frequency" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="12">
									<v-text-field label="Term" outlined></v-text-field>
								</v-col>
								<v-col cols="12" sm="12" class="my-2 px-1">
									<div class="text-h6">Disbursement Date</div>
									<v-date-picker
										ref="picker"
										v-model="date"
										:picker-date.sync="pickerDate"
										full-width
									></v-date-picker>
								</v-col>
								<v-col cols="12" sm="12" class="my-2 px-1">
									<div class="text-h6">First Collection Date</div>
									<v-date-picker
										ref="picker"
										v-model="date"
										:picker-date.sync="pickerDate"
										full-width
									></v-date-picker>
								</v-col>
								<v-col cols="12" sm="12" class="my-2 px-1">
									<div class="text-h6">Maturity Date</div>
									<v-date-picker
										ref="picker"
										v-model="date"
										:picker-date.sync="pickerDate"
										full-width
									></v-date-picker>
								</v-col>
								<v-col cols="12" sm="12">
									<v-file-input accept="image/*" label="Import Repayment schedule"></v-file-input>
								</v-col>
								<v-col cols="12" class="text-right mb-3">
									<v-btn color="success">Update Profile</v-btn>
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
