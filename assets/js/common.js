$(document).ready(function () {

//    计数
    function count() {
        var num;
        var text = $(this).find('.reading').text();
        num = parseInt(text.match(/\d+/g));
        num ++;

        // Mock响应模板
        Mock.mock('http://test.com', {
            "number": num
        });
        console.log(num)
        $.ajax({
            url: 'http://test.com',
            type: 'get',
            dataType: 'json'
        }).done(function(data, status, xhr) {
            $(this).find('.reading').text("阅读 (" + num + ")");
        }.call(this));

    }
    $('.random li, .top li').click(count);
})
