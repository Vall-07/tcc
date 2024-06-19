$(document).ready(function(){
    $('.i_usuario').mask('000000'); 
    $('.i_senha').mask('00000000'); 
    $('.i_telefone').mask('(00) 0000-0000');
    
    $('.toggle').click(function(){
        $('.formulario').animate({
            height: "toggle",
            'padding-top': 'toggle',
            'padding-bottom': 'toggle',
            opacity: 'toggle'
        }, "slow");
    });
});