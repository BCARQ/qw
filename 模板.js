		(function() {
			Vue.component("swiper", {
				props:["url","height","width","rain"],
				template:'<div class="swiper-container" v-bind:style="{height:height,width:width}"> <div class = "swiper-wrapper"> <div class = "swiper-slide" v-for="item in url"> <img :src="item" v-bind:style="{height:height,width:width}"></img></div></div> <div class="swiper-pagination" v-if="rain"></div> </div>',
                 mounted:function(){
                 	new Swiper('.swiper-container', {
	                        autoplay: 1000,
	                        loop:true,
	                        pagination :'.swiper-pagination',
//	                        paginationType : 'fraction'//可选选项，自动滑动
                           })                	
                 }
			})	
		})();
		

//