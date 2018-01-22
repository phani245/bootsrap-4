var MyCode = {
    init:function(){
        $(document).ready(function(){
            var _header = $('.main-header').height();
            $('.main-container').css('padding-top',_header+'px');
        });
    },
    resizeheader:function(){
        $(window).resize(function(){
            MyCode.init();
        });
    },
    multipleModal:function(){
        $('.modal-user-box').on('hidden.bs.modal', function (e) {
            if($('.modal').hasClass('show')) {
            $('body').addClass('modal-open');
            }    
        });
    }
};
MyCode.init();
MyCode.resizeheader();
MyCode.multipleModal();