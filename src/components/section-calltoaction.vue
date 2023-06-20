<template>
    <section id="call-to-action">
			<div class="container">
				<div class="row" data-aos="zoom-in">
					<div class="col-lg-9 text-center text-lg-left">
						<h3 class="cta-title">
							{{title}}
						</h3>
						<p 
							v-if="description"
							class="cta-text"
						>
							{{description}}
						</p>
					</div>
					<div class="col-lg-3 cta-btn-container text-center">
						<a class="cta-btn align-middle" href="#">Call To Action</a>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
    export default{
        data: function(){
            return {
                title: "Call to Acction",
                description: "test"
            }
        },
    }
</script>