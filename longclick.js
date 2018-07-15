Object.prototype.longclick=function(time,fun){
					if(/Android|webOS|iPhone|iPod|BlackBerry|iPad|IEMobile|Nexus/i.test(navigator.userAgent)){
						this.addEventListener('touchstart',function(){
							var a=setTimeout(fun,time)
							this.addEventListener('touchend',function(){
								clearTimeout(a)
							})
						})
					}else{
						this.addEventListener('mousedown',function(){
							var a=setTimeout(fun,time)
							this.addEventListener('mouseup',function(){
								clearTimeout(a)
							})
						})
					}
				}
