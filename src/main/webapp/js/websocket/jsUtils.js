/* 
 *  ����:Array.remove(dx) 
 *  ����:����Ԫ��λ��ֵɾ������Ԫ��. 
 *  ����:Ԫ��ֵ 
 *  ����:��ԭ�������޸����� 
 *  ���ߣ�liy 
 */  
Array.prototype.remove = function (dx) {  
    if (isNaN(dx) || dx > this.length) {  
        return false;  
    }  
    for (var i = 0, n = 0; i < this.length; i++) {  
        if (this[i] != this[dx]) {  
            this[n++] = this[i];  
        }  
    }  
    this.length -= 1;  
};  

Array.prototype.removevalue = function (val) {  
    var index = this.indexOf(val);  
    if (index > -1) {  
        this.splice(index, 1);  
    }  
};    

Array.prototype.removeItem = function(val) {  
  var index = this.indexOf(val);  
  if (index > -1) {  
      this.splice(index, 1);  
  }  
}; 