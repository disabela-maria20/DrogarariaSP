$(document).ready(function(){
    $("#table").dataTable({
        ajax: {
            url: './js/dados.json',
        },
        columns: [
            {"data":"locker"},
            {"data":"cliente"},
            {"data":"pedido"},
            {"data":"telefone"},
            {"data":"dataDeCriacao"},
            {"data":"status"}
        ], 
        language: {
            "lengthMenu": "Registros _MENU_ exibidos na pagina",
            "zeroRecords": "Nenhum registro encontrato",
            "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "infoEmpty": "Nenhum registro disponível",
            "infoFiltered": "(filtro de _MAX_ total registros)",
            "paginate": {
                "previous": "Anterior", 
                "next": "Próximo"
            },
        },
        pageLength: 7,
        lengthChange: false
    })
})

window.onload = initPage;
function initPage(){
    const pesquisa = document.querySelector('input[type=search]')
    pesquisa.classList.add('form-pesquisa')  
}

function Button(){
    const btn = document.querySelectorAll('.btn-status') 

    function handleBtn(event){
        btn.forEach((btn) => {
            btn.classList.remove('ativo')
        })
        event.currentTarget.classList.add('ativo')
    }

    btn.forEach(btn => {
        btn.addEventListener('click', handleBtn)
    })
}

Button()

function Load(){
    window.addEventListener('load', () => {
        const load = document.querySelector('.spinner')
        load.classList.remove('spinner')
        load.classList.add('display-none')
        const overflow = document.querySelector('.overflow-hidden')
        overflow.classList.remove('overflow-hidden')
    })
}
Load()