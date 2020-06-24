<template>
    <section class="contacts">
        <div class="container">
			<div class="contacts__inner">
				<h2 class="contacts__title">Contacts</h2>
				<div class="contacts__content">
					<div class="contacts__headquarters headquarters">
						<h3 class="contacts__subtitle headquarters__title"> 
							<span class="green-color">GMS</span> Headquarters
						</h3>
						<div class="headquarters__content">
							<div class="headquarters__address">
								<p>Global Message Services Ukraine LLC</p>
								<p>Bundesstrasse 5 | 3rd Floor</p>
								<p>6300 Zug</p>
								<p>Switzerland</p>
								<a class="phone green-color" href="tel:+41-41-544-62-00">+41 41 544 62 06</a>
							</div>
							<div class="headquarters__contacts">
								<p>Email</p>
								<a class="headquarters__contact green-color" href="mailto:info@gns-worldwide.com">info@gns-worldwide.com</a>
								<p>Send message</p>
								<a class="headquarters__contact green-color" href="viber://chat?number=+41415446200">Viber us</a>
								<p>Send form</p>
								<button class="headquarters__contact green-color" @click="scrollToForm">Contact us</button>
							</div> 
						</div>
					</div>
					<div class="contacts__support support">
						<h3 class="contacts__subtitle support__title">
							Technical support <span class="green-color">24/7</span>
						</h3>
						<p class="support__text">GMS understands that it can be hard to follow all new technologies. 
							We regularly provide for all our clients educational trainings to make your operator`s 
							business earn more and better though our best practices.
						</p>
						<a class="phone green-color" href="tel:+41-41-544-62-00">+41 41 544 62 06</a>
					</div>
				</div>
			</div>
        </div>
    </section>
</template>

<script>
    export default {
		name: 'Contacts',
		methods: {
			scrollToForm() {
				document.querySelector('.v-form').scrollIntoView({
					behavior: "smooth"
				})
			}
		}
    }
</script>

<style lang="scss" scoped>
.contacts {
	&__inner {
		padding: 55px 0 95px;
	}
	&__title, &__subtitle {
		margin-bottom: 30px;
	}
	&__content {
		display: flex;
	}
	&__headquarters {
		padding-right: 10px;
		flex: 1 1 50%;
	}
	&__support {
		padding-left: 40px;
		flex: 1 1 50%;
	}
}
.headquarters {
	&__content {
		display: flex; 
	}
	&__address, &__contacts {
		flex: 1 1 50%;
	}
	&__contacts {
		padding-left: 10px;
	}
	&__contact {
		font-size: 14px;
		line-height: 28px;
		font-weight: 600;
		text-transform: uppercase;
		cursor: pointer;
	}
}
.phone {
	display: inline-block;
	font-size: 26px;
	line-height: 36px;
	margin-top: 25px;
}
.phone, .headquarters__contact {
	transition: all .5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
	&:hover {
		margin-left: 10px;
	}
}

@media (max-width: 991px) {
	.contacts {
		&__content {
			flex-direction: column;
		}
		&__headquarters {
			padding-right: 0;
		}
		&__support {
			padding-left: 0;
			margin-top: 30px;
		}
	}
}
@media (max-width:767px) {
	.contacts {
		&__inner {
			padding: 35px 0 55px;
		}
		&__title, &__subtitle {
			margin-bottom: 20px;
		}
		&__support {
			margin-top: 20px;
		}
	}
	.phone {
		font-size: 22px;
		line-height: 28px;
	}
	.headquarters__contact {
		font-size: 12px;
		line-height: 24px;
	}
}
@media (max-width:520px) {
	.headquarters__contact {
		padding-left: 0;
	}
	.headquarters__contacts {
		padding-left: 0;
	}
	.headquarters__content {
		flex-direction: column;
	}
	.headquarters__address {
		margin-bottom: 20px;
	}
	.phone {
		margin-top: 15px;
	}
}

</style>