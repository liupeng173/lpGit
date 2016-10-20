
function initCheckBox() {
			var all = document.getElementById('all'),
				chks = document.getElementsByName('chk'),
				len = chks.length,
				j,
				k;
				
			all.onclick = function() {
				var i,status = '';
				this.checked && (status ='checked')
                for(i=0; i<len;i++){
                	chks[i].checked =status;
                }
           };
			
			for (j=0; j<len; j++){
				chks[j].onclinck = function(){
					if(isCheckedAll()){
						all.checked ='checked';
					}else{
						all.checked ='';
					}
				}
			}
			
			function isCheckedAll(){
				    for (k=0;k<len;k++){
					if(!chks[k].checked){
						return false;
					}
				}
				    return true;
			}
}
initCheckBox();
