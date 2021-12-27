<template>
	<v-container fill-height fluid>
		<v-row>
			<v-col cols="12">
				<v-card class="spacing-playground px-5 py-5">
					<form>
						<v-form ref="form" v-model="valid" lazy-validation>
							<v-col cols="12" sm="12">
								<v-text-field
									v-model="phone"
									:counter="14"
									:rules="phoneRules"
									label="Phone"
									required
								></v-text-field>
							</v-col>

							<v-col cols="12" sm="12">
								<v-text-field
									v-model="password"
									:append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
									:rules="[rules.required, rules.min]"
									:type="show1 ? 'text' : 'password'"
									name="input-10-1"
									label="Password"
									hint="At least 8 characters"
									counter
									@click:append="show1 = !show1"
								></v-text-field>
							</v-col>

							<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Login</v-btn>
						</v-form>
					</form>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		valid: true,
		phone: '',
		phoneRules: [
			(v) => !!v || 'Phone is required',
			(v) => (v && v.length <= 14) || 'Name must be less than 14 characters',
		],
		show1: false,
		show2: true,
		show3: false,
		show4: false,
		password: '',
		rules: {
			required: (value) => !!value || 'Required.',
			min: (v) => v.length >= 8 || 'Min 8 characters',
			emailMatch: () => `The email and password you entered don't match`,
		},
	}),

	methods: {
		validate() {
			this.$refs.form.validate();
		},
	},
};
</script>
