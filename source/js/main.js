//left Block Sections

$(document).ready(function(){

  /*leftBlock select*/

  $('.leftBlock__section li:first-child').addClass('leftBlock__section--btn');
  $('.leftBlock__section li:not(:first-child)').addClass('leftBlock__section--li');

  $('.leftBlock__section--btn').on( 'click', function(){
    $('.leftBlock__section--btn').toggleClass('select', false);
    $('.leftBlock__section').toggleClass('leftBlock__section--select', false);
    var $this =$(this);
    $this.toggleClass('select');
    $this.parent().toggleClass('leftBlock__section--select');
  });

  /*explorer*/
  $('.explorer__path-list').each(function(){
    var lvParth = $(this).data('lv');
    if(lvParth>1){
      $(this).css('display','none');
    }
    var lvPadding = lvParth*20+15;
    $(this).css('padding-left', lvPadding);
  });

  $('.explorer__path-list').click(function(){



    var $this= $(this);
    var $thisData= $(this).data('lv');
    var $findChild = $(this).next();
    var childData = $findChild.data('lv');
    console.log($thisData);
    console.log(childData);
    if(childData>$thisData) {
      $findChild.css('display','block');
      function findChilds(findChild) {
        $this = findChild;
        var childNext =$this.next();
        var thisData =$this.data('lv');
        var childNextData =childNext.data('lv');
        console.log(thisData);
        console.log(childNextData);
        if(thisData==childNextData) {
          $this.css('display','block');
          return(findChilds());
        }
      }
    }
  });

});