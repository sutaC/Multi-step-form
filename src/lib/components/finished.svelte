<div class="finished">
	<i class="icon checkmark"></i>
	<h1>Thank you!</h1>
	<p>
		Thanks for confirming your subscription! We hope you have fun using our platform. If you ever
		need support, please feel free to email us at support@loremgaming.com.
	</p>
</div>

<style>
	.finished {
		text-align: center;
		padding: 3rem 0.75em;
	}

	p {
		color: var(--clr-text-shaded);
	}

	.icon {
		display: block;
		width: 2rem;
		aspect-ratio: 1;
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
	}

	.icon.checkmark {
		background-image: url('/icon-thank-you.svg');
		width: 3rem;
		margin: 0 auto 1.5rem;
	}

	@media (width >= 700px) {
		.finished {
			display: grid;
			place-content: center;
			height: 100%;
		}
	}
</style>
