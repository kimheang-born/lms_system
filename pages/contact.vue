<template>
	<v-container fill-height fluid>
		<v-row justify="center">
			<v-col cols="12" md="8">
				<material-card color="grey" title="Contacts" text="Add Contact">
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
				</material-card>
			</v-col>
			<v-col cols="12" md="4">
				<material-card class="v-card-profile">
					<v-avatar slot="offset" class="mx-auto d-block elevation-6" size="130">
						<img
							src="https://d2naeiwbqsldcl.cloudfront.net/eyJidWNrZXQiOiJ6MXMzIiwia2V5IjoiejFfcHJvZHVjdGlvblwvdXBsb2Fkc1wvaW1hZ2VzXC8yMDIxMDFcL2Y1MGZjMzk2ZDExOWJkMTM4NDc5NGQzYThiN2Q5MzI5LmpwZWciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE1MCwiaGVpZ2h0IjoxNTAsImZpdCI6Imluc2lkZSJ9fX0="
							alt="img"
						/>
					</v-avatar>
					<v-card-text class="text-center">
						<h6 class="overline mb-3">CEO / CO-FOUNDER</h6>

						<h4 class="font-weight-light">Alec Thompson</h4>

						<p class="font-weight-light">
							Don't be scared of the truth because we need to restart the human foundation in truth And I
							love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
						</p>

						<v-btn color="success">Follow</v-btn>
					</v-card-text>
				</material-card>
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
