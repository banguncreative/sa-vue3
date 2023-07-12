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
							{{description}}<br>
							<a :href="'tel:/'+contact.tel" style="text-decoration: none; color: white;">
								<span class="display-2">
									<i class="fa fa-phone"></i>
									+{{chopPhone(contact.tel+" ",4)}}
								</span>
							</a>
						</p>
					</div>
					<div class="col-lg-3 cta-btn-container text-center" >
						<a class="cta-btn align-middle text-start" style="margin: auto;" :href="wame(contact.wa, 'hallo Surya Cemerlang. saya ingin benkonsultasi terkait lingkungan hidup.')" target="_blank">
							<span class="m-0 p-0" style="font-size: 8px;">Konsultasi melalui </span>
							<p class="p-0 m-0" style="font-size: 24px; line-height: 10px; margin-bottom: 15px;">
								whatsapp <i class="fa fa-whatsapp" aria-hidden="true" style="transform: scale(1.5) translateY(-8px) translateX(7px);"></i>
							</p>
						</a>
					</div>
				</div>
			</div>
		</section>
</template>

<script>
import choppingLib from './chopping.lib';

    export default{
        data: function(){
            return {
                title: "Call to Acction",
                description: "Kantor kami beroperasi 6 hari kerja dan setengah hari di hari Sabtu. CS kami akan dengan senang hati membantu anda, Order, komplain, dan saran dapat melalui kontak berikut:"
            }
        },
		props:{
			contact: Object
		},
		methods: choppingLib
    }
</script>