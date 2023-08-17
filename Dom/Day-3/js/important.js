    function handelOnClick(){
        const handlerStatus = document.getElementById('handler-Status');
        handlerStatus.innerText = 'This text manage by the Function using button'
    }

    // option-2
    document.getElementById('event-listener').addEventListener('click', function(){
        const handlerStatus = document.getElementById('handler-Status');
        handlerStatus.innerText = 'This text change by Option -2';
    })