<?php $company = \App\Models\Company::first() ?>

<footer class="footer">
	<div class="container">
		<div class="content">

			<div class="columns level has-text-centered">

				<div class="column is-4">
					{{ $company->name }}
				</div>

				<div class="column is-4 borderX">
					<div class="container has-text-centered has-text-left-tablet borderX">
						<a href="mailto:{{ $company->email_1 }}" target="_blank">
							<span class="icon is-large"><i class="fa fa-envelope"></i></span>
								{{ $company->email_1 }}
						</a><br>
						<span class="icon is-large"><i class="fa fa-phone"></i></span>+420{{ $company->tel_1 }}
					</div>
				</div>

				<div class="column is-4 borderX ">
					<div class="container has-text-centered has-text-left-tablet borderX">
						<a href="https://github.com/vilbur" target="_blank">
							<span class="icon is-large"><i class="fa fa-github"></i></span>
								GitHub
						</a><br>
						<a href="https://www.youtube.com/channel/UCmA5Pwgkt56C9gc3DWs-3og" target="_blank">
							<span class="icon is-large"><i class="fa fa-youtube"></i></span>
								YouTube
						</a>
					</div>
				</div>

			</div>

		</div>
	</div>
</footer>