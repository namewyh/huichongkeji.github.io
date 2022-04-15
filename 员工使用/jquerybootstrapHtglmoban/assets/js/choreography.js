//添加盒子
function adddiv() {
    var div = document.createElement("div");
    div.classList.add('mb-3', 'newdiv');
    $('.mainedit').append(div);
    // 解除绑定再绑定
    $('.newdiv').off().click(function () {
        $('.title').find('input').val('');
        var span = this.children[0];
        $('.title').find('input').val(span.innerHTML)
        $('.title').off('input propertychange').on('input propertychange', function () {
            span.innerHTML = $('.title').find('input').val();
        });
        console.log($('.title').find('input').val());
        if (typeof (this.children[1]) != 'undefined') {
            $(".neirong").css('display', 'block');
            $('.neirong').find('input').val('');
            $('.neirong').find('input').val(this.children[1].value);
            var put = this.children[1];
            $('.neirong').off('input propertychange').on('input propertychange', function () {
                put.value = $('.neirong').find('input').val();
            });
            // console.log(this.children[2]);
        } else {
            $(".neirong").css('display', 'none');
            // $('.neirong').css('dispaly', 'none');
            console.log($('.neirong'));
        }
        //清空已填写的内容  
        $('.clearneirong').off().click(function () {
            $('.title').find('input').val('');
            console.log($('.title').find('input'));
            $('.neirong').find('input').val('');
        });
        // 删除组件
        var deletezujian = this;
        $('.deletezujian').off().click(function () {
            console.log(deletezujian);
            deletezujian.remove();
        });

    });

}
window.onload = adddiv;
//添加单行文本
function adddanhwb(e) {
    var father = document.querySelector('.mainedit');
    // console.log(e.lastChild.children[1].innerHTML);
    var label = document.createElement("label");
    label.classList.add('form-label');
    label.innerHTML = e.lastChild.children[1].innerHTML;
    father.lastChild.append(label);
    console.log('success1');

    var input = document.createElement("input");
    input.type = 'text';
    input.classList.add('form-control');
    input.value = '请输入默认内容';
    father.lastChild.append(input);
    console.log('success2');

}
//添加多行文本
function addduohwb(e) {
    var father = document.querySelector('.mainedit');
    var label = document.createElement("label");
    label.classList.add('form-label');
    label.innerHTML = e.lastChild.children[1].innerHTML;
    father.lastChild.append(label);
    console.log('success1');

    var textarea = document.createElement("textarea");
    textarea.value = '请输入默认内容';
    textarea.classList.add('form-control');
    father.lastChild.append(textarea);
    console.log('success2');
}
//添加日期元素
function addrqxz(e) {
    var father = document.querySelector('.mainedit');
    var label = document.createElement("label");
    label.classList.add('form-label');
    label.innerHTML = e.lastChild.children[1].innerHTML;
    father.lastChild.append(label);
    console.log('success1');

    var input = document.createElement("input");
    input.type = 'date';
    input.classList.add('form-control');
    father.lastChild.append(input);
    console.log('success2');
}
//添加标题
function addbt(e) {
    var father = document.querySelector('.mainedit');
    // console.log(e.lastChild.children[1].innerHTML);
    var label = document.createElement("label");
    label.classList.add('form-label');
    label.innerHTML = e.lastChild.children[1].innerHTML;
    father.lastChild.append(label);
    console.log('success1');
}
//添加图片上传
function addtpsc(e) {
    var father = document.querySelector('.mainedit');
    var label = document.createElement("label");
    label.classList.add('form-label');
    label.innerHTML = e.lastChild.children[1].innerHTML;
    father.lastChild.append(label);
    console.log('success1');

    var input = document.createElement("input");
    input.type = 'file';
    input.classList.add('form-control');
    father.lastChild.append(input);
    console.log('success2');
}
// 添加按钮盒子
function addbuttondiv() {
    var div = document.createElement("div");
    div.classList.add('mb-3', 'newbtndiv');
    $('.mainedit').append(div);
}
// 添加提交按钮
function addsubmit(e) {
    var father = document.querySelector('.newbtndiv');
    var button = document.createElement("button");
    button.innerHTML = e.lastChild.children[1].innerHTML;
    button.classList.add('btn', 'btn-danger', 'squer-btn', 'mt-2', 'mr-2', 'newbtn');
    father.append(button);

    $('.newbtn').off().click(function () {
        $('.title').find('input').val('');
        var span = this;
        $('.title').find('input').val(span.innerHTML)
        $('.title').off('input propertychange').on('input propertychange', function () {
            span.innerHTML = $('.title').find('input').val();
        });
        console.log($('.title').find('input').val());
        $(".neirong").css('display', 'none');

        $('.clearneirong').off().click(function () {
            $('.title').find('input').val('');
            console.log($('.title').find('input'));
            $('.neirong').find('input').val('');
        });
        // 删除组件
        var deletezujian = this;
        $('.deletezujian').off().click(function () {
            console.log(deletezujian);
            deletezujian.remove();
        });

    });


}
// 添加取消按钮cancle
function addcancle(e) {
    var father = document.querySelector('.newbtndiv');
    var button = document.createElement("button");
    button.innerHTML = e.lastChild.children[1].innerHTML;
    button.classList.add('btn', 'btn-light', 'squer-btn', 'mt-2', 'mr-2', 'newbtn');
    father.append(button);

    $('.newbtn').off().click(function () {
        $('.title').find('input').val('');
        var span = this;
        $('.title').find('input').val(span.innerHTML)
        $('.title').off('input propertychange').on('input propertychange', function () {
            span.innerHTML = $('.title').find('input').val();
        });
        console.log($('.title').find('input').val());
        $(".neirong").css('display', 'none');

        $('.clearneirong').off().click(function () {
            $('.title').find('input').val('');
            console.log($('.title').find('input'));
            $('.neirong').find('input').val('');
        });
        // 删除组件
        var deletezujian = this;
        $('.deletezujian').off().click(function () {
            console.log(deletezujian);
            deletezujian.remove();
        });

    });
}
// 添加购物车按钮addcar
function addaddcar(e) {
    var father = document.querySelector('.newbtndiv');
    var button = document.createElement("button");
    button.innerHTML = e.lastChild.children[1].innerHTML;
    button.classList.add('btn', 'btn-danger', 'squer-btn', 'mt-2', 'mr-2', 'newbtn');
    father.append(button);

    $('.newbtn').off().click(function () {
        $('.title').find('input').val('');
        var span = this;
        $('.title').find('input').val(span.innerHTML)
        $('.title').off('input propertychange').on('input propertychange', function () {
            span.innerHTML = $('.title').find('input').val();
        });
        console.log($('.title').find('input').val());
        $(".neirong").css('display', 'none');

        $('.clearneirong').off().click(function () {
            $('.title').find('input').val('');
            console.log($('.title').find('input'));
            $('.neirong').find('input').val('');
        });
        // 删除组件
        var deletezujian = this;
        $('.deletezujian').off().click(function () {
            console.log(deletezujian);
            deletezujian.remove();
        });

    });
}