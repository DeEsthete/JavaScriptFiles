var url = 'http://test11.avaddonval.kz/';
$(document).ready(function() {
    $.get(url + "all", function(response) {
        let news = response

        for (var i = 0; i < news.length; i++) {
            $('body').append('<h1>' + news[i].header + '</h1>');
            $('body').append('<span>' + news[i].text + '</span><br>');
            $('body').append('<button class="deleteButton" data-newsid = ' + news[i].id + ' value="Удалить">');
        }

        $('.deleteButton').click(function() {
            let newsId = $(this).data('newsid');
            $.ajax({
                url: url + 'delete/' + newsId,
                type: 'GET',
                success: function(result) {
                    window.location.reload();
                }
            })
        })
    });
})

function buttonClick() {
    $.post(url + "create", {
        header: $('.headerInp').val(),
        text: $('.textInp').val()
    }, function(response) {
        window.location.reload();
    })
}