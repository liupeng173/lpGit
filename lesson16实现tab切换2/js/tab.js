
function randerTabClass(className) {
	var $target = $(className);
	
	$target.each(function(i, obj){
//		console.log(obj)
		var $obj = $(obj),
			$lis = $obj.find('ul>li'),
			$divs = $obj.find('.tab-div>div'),
			evt;
			
		if ($obj.hasClass('mover')){
			evt = 'mouseover';
		}else{
			evt = 'click';
		}
			
		$lis.on(evt, function() {
			var $this = $(this),
				index = $this.index();
			$this.addClass('on').siblings('.on').removeClass('on');
			
			$divs.eq(index).show().siblings().hide();
			
		//		console.log(index)
		});
	});
		
	/*	$lis = $target.find('ul>li'),
		$divs = $target.find('.tab-div>div');*/
}

randerTabClass('.tab');
