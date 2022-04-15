function hide() {
    $('.min_index').css('display', 'none');
    $('.financial_management').css('display', 'none');
    $('.product_detail').css('display', 'none');
    $('.product_detail_buy').css('display', 'none');
    $('.personal_center').css('display', 'none');
    $('.function_list').css('display', 'none');
    $('.message_content').css('display', 'none');
    $('.message_content_history').css('display', 'none');
    $('.purchased_products').css('display', 'none');
    $('.purchased_products_cart').css('display', 'none');
    $('.index_active1').css('display', 'none');
    $('.index_active2').css('display', 'none');
    $('.index_active3').css('display', 'none');
    $('.set_up').css('display', 'none');
    $('.selected1').css('display', 'none');
    $('.selected2').css('display', 'none');
    $('.selected3').css('display', 'none');
    $('.selected4').css('display', 'none');
}

//显示首页
function get_to_index() {
    $('body').css('background-color', 'white');
    $('.top').css('background-color', 'rgba(250,250,250,0.7)');
    $('#ind').css('font-weight', 'bold');
    $('#fin').css('font-weight', 'normal');
    $('#per_cen').css('font-weight', 'normal');
    $('.min_index').css('display', 'block');
    $('.index_active1').css('display', 'block');
}
//显示基金理财界面
function financial_management() {
    $('body').css('background-color', 'rgb(242, 242, 242)');
    $('#ind').css('font-weight', 'normal');
    $('.top').css('background-color', 'white');
    $('#fin').css('font-weight', 'bold');
    $('#per_cen').css('font-weight', 'normal');
    $('.financial_management').css('display', 'block');
    $('.index_active2').css('display', 'block');
}
//显示理财产品详情
function product_detail() {
    $('.product_detail').css('display', 'block');
}
//关闭产品详情
function product_detail_none() {
    $('.product_detail').css('display', 'none');
}
//显示购买产品页
function product_detail_buy() {
    $('.product_detail_buy').css('display', 'block');
}
//关闭购买产品页
function product_detail_buy_none() {
    $('.product_detail_buy').css('display', 'none');
}
//显示个人中心页-功能列表-消息通知
function personal_center() {
    $('body').css('background-color', 'rgb(242, 242, 242)');
    $('#ind').css('font-weight', 'normal');
    $('.top').css('background-color', 'white');
    $('.index_active3').css('display', 'block');
    $('#per_cen').css('font-weight', 'bold');
    $('#fin').css('font-weight', 'normal');
    $('.function_list').css('display', 'block');
    $('.personal_center').css('display', 'block');
    $('.message_content').css('display', 'block');
    $('.message_content_history').css('display', 'block');
    // $('.purchased_products').css('display', 'block');
    $('.function_l2').css('box-shadow', 'none');
    $('.function_l1').css('box-shadow', '3px 3px 7px #474343');
    $('.function_l3').css('box-shadow', 'none');
    $('.function_l4').css('box-shadow', 'none');
}
//显示个人中心页-功能列表-已购产品
function purchased_products() {
    $('.index_active3').css('display', 'block');
    $('.function_list').css('display', 'block');
    $('.personal_center').css('display', 'block');
    $('.selected2').css('display', 'block');
    $('.purchased_products').css('display', 'block');
    $('.function_l1').css('box-shadow', 'none');
    $('.function_l2').css('box-shadow', '3px 3px 7px #474343');
    $('.function_l3').css('box-shadow', 'none');
    $('.function_l4').css('box-shadow', 'none');
}
//显示个人中心页-功能列表-购物车
function purchased_products_cart() {
    $('.index_active3').css('display', 'block');
    $('.function_list').css('display', 'block');
    $('.personal_center').css('display', 'block');
    $('.selected3').css('display', 'block');
    $('.purchased_products_cart').css('display', 'block');
    $('.function_l1').css('box-shadow', 'none');
    $('.function_l3').css('box-shadow', '3px 3px 7px #474343');
    $('.function_l2').css('box-shadow', 'none');
    $('.function_l4').css('box-shadow', 'none');
}
//显示个人中心页-功能列表-设置
function set_up() {
    $('.index_active3').css('display', 'block');
    $('.function_list').css('display', 'block');
    $('.set_up').css('display', 'block');
    $('.selected4').css('display', 'block');
    $('.personal_center').css('display', 'block');
    $('.function_l1').css('box-shadow', 'none');
    $('.function_l4').css('box-shadow', '3px 3px 7px #474343');
    $('.function_l3').css('box-shadow', 'none');
    $('.function_l1').css('box-shadow', 'none');
}

//显示修改密码界面
function xgmm() {
    $('.xgmm').css('display', 'block');
    $('.xiugai').css('display', 'none');
}

//隐藏修改密码界面
function xgmmyc() {
    $('.xgmm').css('display', 'none');
    $('.xiugai').css('display', 'block');
}

function financing_more1() {
    var finm = document.querySelectorAll('.financing_more1');

    for (let i = 0; i < finm.length; i++) {
        if (finm[i].style.display == 'none') {
            finm[i].style.display = 'block';
        } else if (finm[i].style.display == 'block') {
            finm[i].style.display = 'none';
        };
    }
}

function financing_more2() {
    var finm = document.querySelectorAll('.financing_more2');

    for (let i = 0; i < finm.length; i++) {
        if (finm[i].style.display == 'none') {
            finm[i].style.display = 'block';
        } else if (finm[i].style.display == 'block') {
            finm[i].style.display = 'none';
        };
    }
}

function calcuator() {
    var cal = document.querySelector('#calcuator');
    console.log(cal.style.display == 'none');
    // cal.style.display = 'block';
    if (cal.style.display == 'none') {
        cal.style.display = 'block';
    } else if (cal.style.display == 'block') {
        cal.style.display = 'none';
    };
}
