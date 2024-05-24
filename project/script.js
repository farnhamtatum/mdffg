    
    
    const modallTrigger = document.querySelector('.sign'),
    modall = document.querySelector('.modal'),
    modallClose = document.querySelector('.modal_close');

    modallTrigger.addEventListener('click' , (e)  => {
    e.preventDefault();
    modall.classList.add('modal_active', 'transform');
    });

    modallClose.addEventListener('click' , () => {
    modall.classList.remove('modal_active' , 'transform');
    });

   

    const modalTrigger = document.querySelector('.sing_up'),
    modal = document.querySelector('.modal_sign'),
    modalClose = document.querySelector('.modal_close_sign');

    modalTrigger.addEventListener('click' , (e)  => {
    e.preventDefault();
    modal.classList.add('modal_active_sign', 'transform');
    });

    modalClose.addEventListener('click' , () => {
    modal.classList.remove('modal_active_sign' , 'transform');
    });

    const modalsTrigger = document.querySelector('.btn_pay'),
    modals = document.querySelector('.modal_catalog'),
    modalsClose = document.querySelector('.modal_close_catalog');

    modalsTrigger.addEventListener('click' , (e)  => {
    e.preventDefault();
    modals.classList.add('modal_active_catalog', 'transform');
    });

    modalsClose.addEventListener('click' , () => {
    modals.classList.remove('modal_active_catalog' , 'transform');
    });



    $('form').submit(function(e){
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");

            $('form').trigger('reset');
        });
        return false;
    });


