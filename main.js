$(document).ready(function() {
    $('#botao-adicionar').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $(`<li> ${novaTarefa} </li>`);
        $('ul').append(novoItem);
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');

        $(novoItem).click(function() {
            $(this).toggleClass('riscado');
        });

        $(novoItem).dblclick(function() {
            $(this).remove();
        });
    });

    $('#botao-limpar').click(function() {
        $('ul').empty();
    });
});

