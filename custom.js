var listCluster = ['cluster1', 'cluster2', 'cluster3'];
var isProccessGetVoucher = false;
var formatSpecialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

(function ($) {
  jQuery('.type-all').click(function () {
    // window.location = '/wellness-journey?title='+title;
    jQuery('select[id*=edit-type').val('All');
    jQuery('[id*=edit-submit-wellness-joyney-list]').click();
    removeBtnLoadMore();
  });
  jQuery('.type-songvui').click(function () {
    // window.location = '/wellness-journey?type=songvui&title='+title;
    jQuery('select[id*=edit-type').val('dinhduong')
    jQuery('[id*=edit-submit-wellness-joyney-list]').click()
    removeBtnLoadMore()
  })
  jQuery('.type-songkhoe').click(function () {
    // window.location = '/wellness-journey?type=songkhoe&title='+title;
    jQuery('select[id*=edit-type').val('suckhoe')
    jQuery('[id*=edit-submit-wellness-joyney-list]').click()
    removeBtnLoadMore()
  })
  jQuery('.type-tanhuong').click(function () {
    // window.location = '/wellness-journey?type=tanhuong&title='+title;
    jQuery('select[id*=edit-type').val('tanhuong')
    jQuery('[id*=edit-submit-wellness-joyney-list]').click()
    removeBtnLoadMore()
  })
  jQuery('.enjoy-search-but').on('click', function () {
    var searchString = jQuery('.enjoy-search-but').prev().children().val()
    jQuery('[id*=edit-title').val(searchString)
    jQuery('select[id*=edit-type').val('All')
    jQuery('[id*=edit-submit-wellness-joyney-list]').click()
    removeBtnLoadMore()
    //jQuery('[id*=edit-title').val(searchString);
    //jQuery('.enjoy-search-but').prev().children().val("");
  })
  jQuery('.enjoy-search input').on('keyup', function (e) {
    if (e.keyCode === 13) {
      var searchString = jQuery('.enjoy-search-but').prev().children().val()
      jQuery('[id*=edit-title').val(searchString)
      jQuery('select[id*=edit-type').val('All')
      if (jQuery('[id*=edit-submit-wellness-joyney-list]').length > 0) {
        jQuery('[id*=edit-submit-wellness-joyney-list]').click()
        removeBtnLoadMore()
      }
      if (jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').length > 0) {
        jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
        removeBtnLoadMore()
      }
    }
  })

  // Load more click
  jQuery('#load-more-button').click(function () {
    jQuery('.pager__item .button').trigger('click')
  })

  jQuery('#chk_all').on('click', function () {
    jQuery('[id*=edit-field-formular-type-value]').val('All')
    jQuery('.slug-checkbox').remove()
    jQuery('[id*=edit-submit-nestle-recipes]').trigger('click')
  })
  jQuery('#chk_buaangiadinh').on('click', function () {
    jQuery('[id*=edit-field-formular-type-value]').val('do_an')
    var texContent = jQuery('#chk_buaangiadinh').next().text()
    jQuery('.slug-checkbox').remove()
    jQuery('.nestle-slugs').append(
      '<span class="slug-del slug-checkbox">' + texContent + '</span>',
    )
    jQuery('[id*=edit-submit-nestle-recipes]').click()
  })
  jQuery('#chk_chebiendouong').on('click', function () {
    jQuery('[id*=edit-field-formular-type-value]').val('do_uong')
    var texContent = jQuery('#chk_chebiendouong').next().text()
    jQuery('.slug-checkbox').remove()
    jQuery('.nestle-slugs').append(
      '<span class="slug-del slug-checkbox">' + texContent + '</span>',
    )
    jQuery('[id*=edit-submit-nestle-recipes]').click()
  })

  if (
    jQuery('#recipe_select_branch').length > 0 &&
    jQuery('#edit-field-brand-target-id-1').length > 0
  ) {
    jQuery('#recipe_select_branch ul').html('')
    for (
      var i = 0;
      i < jQuery('#edit-field-brand-target-id-1 option').length;
      i++
    ) {
      var elm = jQuery('#edit-field-brand-target-id-1 option')[i]
      if (jQuery(elm).val() == 'All' || jQuery(elm).val() == '') {
        jQuery('#recipe_select_branch ul').append(
          '<li class="selected" data-target="">Nhãn hiệu</li>',
        )
      } else {
        if (!formatSpecialChar.test(jQuery(elm).val())) {
          jQuery('#recipe_select_branch ul').append(
            '<li data-target="' +
            jQuery(elm).val().replace(/[&\/\\#,+()$~%.'":*?<>{};]/g, '') +
            '">' +
            jQuery(elm).text() +
            '</li>',
          )
        }

      }
    }
  }

  jQuery(document).on('click', '#recipe_select_branch li', function () {
    var brandSelect = jQuery(this).attr('data-target')
    jQuery('[id*=edit-field-brand-target-id-1]').val(brandSelect)
    jQuery('.slug-branch').remove()
    if (brandSelect != '') {
      var texContent = jQuery(this).text()
      jQuery('.nestle-slugs').append(
        '<span class="slug-del slug-branch">' + texContent + '</span>',
      )
    }
    jQuery('[id*=edit-submit-nestle-recipes]').click()
  })

  jQuery(document).on('click', '#recipe_sort li', function () {
    var sortSelect = jQuery(this).attr('data-target')
    jQuery('[id*=edit-sort-order]').val(sortSelect)
    jQuery('[id*=edit-submit-nestle-recipes]').click()
  })

  jQuery(document).on('click', '.nestle-search-but', function () {
    jQuery('[id*=edit-title]').val($('.nestle-search input').val())
    jQuery('[id*=edit-submit-nestle-recipes]').click()
  })

  jQuery('.nestle-search input').on('keyup', function (e) {
    if (e.keyCode === 13) {
      jQuery('[id*=edit-title]').val($('.nestle-search input').val())
      jQuery('[id*=edit-submit-nestle-recipes]').click()
    }
  })

  //Webform contact
  jQuery(document).on('click', '.danhgia', function () {
    jQuery('[id*=edit-type]').val('danh_gia')
    jQuery('.expire-info-wrapper').hide()
  })
  jQuery(document).on('click', '.denghi', function () {
    jQuery('[id*=edit-type]').val('de_nghi')
    jQuery('.expire-info-wrapper').hide()
  })
  jQuery(document).on('click', '.khonghailong', function () {
    jQuery('[id*=edit-type]').val('khong_hai_long')
    jQuery('.expire-info-wrapper').show()
  })

  // Search box


  function processSearch(elm) {
    if (formatSpecialChar.test(jQuery(elm)
      .val())) {
      alert('Vui lòng không nhập ký tự đặc biêt.');
      return '';
    }

    var search_text = jQuery(elm)
      .val()
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/[&\/\\#,+()$~%.'":*?<>{};]/g, '')
      .replaceAll('\&', '');
    window.location = '/nestle-search?search=' + encodeURI(search_text);
  }

  jQuery('.search-box .search-but').on('click', function () {
    processSearch('.search-box #search-input');
  });

  jQuery('.search-top-but').on('click', function () {
    processSearch('#search-top-input');
  });

  jQuery('.search-box input').on('keyup', function (e) {
    if (e.keyCode === 13) {
      processSearch('.search-box #search-input');
    }
  })

  $.urlParam = function (name) {
    var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(
      window.location.href,
    )
    if (results && results[1]) {
      return results[1] || 0;
    }
    return '';
  }
  var search_param = $.urlParam('search');
  if (search_param.length > 0) {
    var searchStringFromUrl = decodeURIComponent(search_param).replace(/[&\/\\#,+()$~%.'":*?<>{};]/g, '');
    jQuery('#search-input').val(searchStringFromUrl);
    jQuery('#search-top-input').val(searchStringFromUrl);
  }

  var recipeCount = jQuery('.swiper-slide').length
  jQuery('.recipe-count').html(recipeCount)

  var happeningCount = jQuery('.happen-item').length
  jQuery('.happening-count').html(happeningCount)

  var wellnessCount = jQuery('.enjoy-items .fs-box').length
  jQuery('.wellness-count').html(wellnessCount)

  // Search top button
  jQuery('#search-top-input').keypress(function (event) {
    var keycode = event.keyCode ? event.keyCode : event.which
    if (keycode == '13') {
      processSearch('#search-top-input');
    }
  });

  jQuery(document).on('click', '.slug-checkbox', function () {
    if ($('.slug-checkbox').text() !== 'Tất cả') {
      jQuery('#chk_all').click()
      jQuery(this).remove()
    }
  })

  jQuery(document).on('click', '.slug-branch', function () {
    jQuery('#recipe_select_branch li[data-target=""]').click()
    jQuery(this).remove()
  })

  jQuery(document).on('click', '.slug-delAll', function () {
    jQuery('.slug-del').remove()
    jQuery('[id*=edit-brand]').val('')
    jQuery('#chk_all').click()
    jQuery('[id*=edit-submit-nestle-recipes]').click()
  })

  jQuery('.kid-all').click(function () {
    jQuery('select[id*=edit-field').val('All')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('.kid-dinhduong').click(function () {
    jQuery('select[id*=edit-field').val('andinhduong')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('.kid-khauphan').click(function () {
    jQuery('select[id*=edit-field').val('khauphan')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('.kid-nuocuong').click(function () {
    jQuery('select[id*=edit-field').val('nuocuong')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('.kid-hoatdong').click(function () {
    jQuery('select[id*=edit-field').val('hoatdong')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('.kid-thuongthuc').click(function () {
    jQuery('select[id*=edit-field').val('thuongthuc')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('.kid-search').on('click', function () {
    var searchString = jQuery('.kid-search').prev().children().val()
    jQuery('[id*=edit-title').val(searchString)
    jQuery('select[id*=edit-field').val('All')
    jQuery('[id*=edit-submit-nestle-wellness-joyney-kid]').click()
    removeBtnLoadMore()
  })
  jQuery('#signIn').click(function () {
    jQuery('#edit-submit').trigger('click')
  })

  if (window.location.pathname == '/dang-nhap' || window.location.pathname == '/dang-nhap-thanh-vien') {
    isLoginHassglt = false
    if (document.cookie.search(/\sglt_3(.*)=/) > 0) {
      isLoginHassglt = true
      window.location.href = '/'
      return
    }
    checkLogin()
  }

  if (
    window.location.pathname == '/dang-nhap' ||
    window.location.pathname == '/dang-ky'
  ) {
    jQuery('.node--type-article').remove()
    jQuery('div[data-drupal-messages=""]').remove()
  }

  jQuery(document).on('click', '.js-load-more', function () {
    if (jQuery('.js-pager__items .pager__item a').length > 0) {
      jQuery('.js-pager__items .pager__item a').trigger('click')
    }
    removeBtnLoadMore()
  })

  jQuery(document).on('click', '.js-buy-ecom', function () {
    var that = this
    var linkTiki = jQuery(that).attr('data-tiki')
    var linkSendo = jQuery(that).attr('data-sendo')
    var linkLazada = jQuery(that).attr('data-lazada')
    var linkShoppe = jQuery(that).attr('data-shopee')
    var linkAnother = jQuery(that).attr('data-another')
    var productName = jQuery(that).prev().text()
    var productImage = jQuery(that).parent().prev().clone()
    var productBrand = jQuery(that).prev().prev().clone().html()
    jQuery('.popup-overlay .event-box').html(productImage)
    jQuery('.popup-overlay .fs-brush-popup h3').text(productName)
    jQuery('.popup-overlay .fs-brush-popup .brush-box').html(productBrand)
    if (linkTiki != null) {
      jQuery('.link-tiki').removeClass('out-of-stock')
      jQuery('.link-tiki').attr('href', linkTiki)
      jQuery('.link-tiki span').text('Mua ngay')
    } else {
      jQuery('.link-tiki').addClass('out-of-stock')
      jQuery('.link-tiki').attr('href', 'javascrip:void(0)')
      jQuery('.link-tiki span').text('Hết hàng')
    }

    if (linkSendo != null) {
      jQuery('.link-sendo').removeClass('out-of-stock')
      jQuery('.link-sendo').attr('href', linkSendo)
      jQuery('.link-tiki span').text('Mua ngay')
    } else {
      jQuery('.link-sendo').addClass('out-of-stock')
      jQuery('.link-sendo').attr('href', 'javascrip:void(0)')
      jQuery('.link-sendo span').text('Hết hàng')
    }

    if (linkLazada != null) {
      jQuery('.link-lazada').removeClass('out-of-stock')
      jQuery('.link-lazada').attr('href', linkLazada)
      jQuery('.link-lazada span').text('Mua ngay')
    } else {
      jQuery('.link-lazada').addClass('out-of-stock')
      jQuery('.link-lazada').attr('href', 'javascrip:void(0)')
      jQuery('.link-lazada span').text('Hết hàng')
    }

    if (linkShoppe != null) {
      jQuery('.link-shopee').removeClass('out-of-stock')
      jQuery('.link-shopee').attr('href', linkShoppe)
      jQuery('.link-shopee span').text('Mua ngay')
    } else {
      jQuery('.link-shopee').addClass('out-of-stock')
      jQuery('.link-shopee').attr('href', 'javascrip:void(0)')
      jQuery('.link-shopee span').text('Hết hàng')
    }

    if (linkAnother != null) {
      jQuery('.link-another').removeClass('out-of-stock')
      jQuery('.link-another').attr('href', linkAnother)
      jQuery('.link-another span').text('Mua ngay')
    } else {
      jQuery('.link-another').addClass('out-of-stock')
      jQuery('.link-another').attr('href', 'javascrip:void(0)')
      jQuery('.link-another span').text('Hết hàng')
    }
  })

  removeBtnLoadMore()
  AdimoInit()
  retrieveGigyaIDDatalayer()

  if (
    window.location.pathname == '/reset-password' ||
    window.location.pathname == '/quen-mat-khau'
  ) {
    initResetPasswordScreen()
  }
  if (jQuery('.js-detect-banner').length > 0) {
    var subCategoryNeedActive = jQuery('.js-detect-banner').eq(0).attr('data-menu');
    jQuery('.short-sub[data-target-menu="' + subCategoryNeedActive + '"]').addClass('active');
  }

  if (window.location.pathname == '/cung-nestle-don-tet-tran-day') {
    if (document.cookie.search(/\sglt_3(.*)=/) > 0) {
      // jQuery.ajax({
      //   url: '/voucher_rest_api/get_gift',
      //   type: 'Get',
      //   contentType: 'application/json; charset=utf-8',
      //   success: function (data) {
      //     isProccessGetVoucher = false;
      //     if (jQuery('.voucher[data-popup="voucher"]').length > 0) {
      //       var popupVoucher = jQuery('.voucher[data-popup="voucher"]');
      //       popupVoucher.addClass('code');
      //       popupVoucher.find('.popup-wrap').html('<div class="title-box"><div class="small-title">Gia Đình Nestlé Tặng Bạn <br>Voucher Mua Hàng <br class="fs-sp">50.000VNĐ</div><p>Chào mừng bạn đến với Gia Đình Nestlé! <br>Gửi tặng bạn mã code:</p></div><div class="fs-txt"><div class="box-code"><div class="code" id="code"> ' + data.data.data.voucher_code + '</div><span class="copy-code">SAO CHÉP MÃ</span></div><div class="note-code">trị giá <strong>50.000VNĐ</strong> áp dụng <br class="fs-sp">khi mua sắm tại <a href="https://tiki.vn/" title="Tiki">Tiki.</a></div><div class="fs-buts"><a href="javascript:void(0);" class="fs-but but-yellow no-icon go-to-promotion" title="SẮM TẾT NGAY"><span class="fs-but--txt">KHÁM PHÁ ƯU ĐÃI NESTLÉ</span></a></div></div>');
      //     }
      //   },
      //   error: function (data) {
      //     alert('Lỗi nhận voucher, Vui lòng thử lại sau');
      //     jQuery('.popup-overlay').fadeOut(300, function () {
      //       jQuery('body').removeClass('fs-no-scroll')
      //     })
      //   }
      // })
      if (jQuery('.js-change-brief').length > 0) {
        jQuery('.js-change-brief').html('Chúc mừng bạn đã nhận được <br class="fs-sp"><strong>mã mua hàng<br class="fs-sp"> 50.000VNĐ</strong> tại Tiki<br class="fs-pc">Thỏa sức chốt deal –<br class="fs-sp"> hốt lộc, cùng Nestlé đón Tết tràn đầy');
        jQuery('.js-show-gigya-login').addClass('go-to-promotion').removeClass('js-show-gigya-login');
        jQuery('.js-get-voucher').addClass('go-to-promotion').removeClass('js-get-voucher');
        jQuery('.fs-but--voucher span').html('SẮM TẾT NGAY')
        jQuery('.go-to-promotion').on('click', function () {
          jQuery('.is-tet').hide();
        });
      }
    } else {
      isLoginHassglt = false
      checkLogin()
    }
  }
  checkTypeUser();
  setTypeUser();
  setFilterPersonalize();
})(jQuery)
var isLoginHassglt = false
jQuery(document).on('click', '.go-to-promotion', function () {
  jQuery('.popup-overlay').fadeOut(300, function () {
    jQuery('body').removeClass('fs-no-scroll')
  })
  jQuery('.is-tet').hide();
});
function checkLogin() {
  setTimeout(function () {
    if (document.cookie.search(/\sglt_3(.*)=/) > 0) {
      isLoginHassglt = true
      waitForRedirectAfterLogin()
    } else {
      isLoginHassglt = false
      checkLogin()
    }
  }, 2000)
}

function waitForRedirectAfterLogin() {
  setTimeout(function () {
    if (isLoginHassglt == true) {
      // Push gigyaUID to datalayer
      gigya.ids.getAccountInfo({
        'callback': function (data) {
          jQuery.cookie("gigyaID", data.UID, { path: '/', domain: 'giadinhnestle.com.vn', secure: true });
        }
      })
      window.location.href = '/cung-nestle-don-tet-tran-day'
    }
  }, 2000)
}

function removeBtnLoadMore() {
  setTimeout(function () {
    jQuery('.enjoy-items').find('div.fs-buts:not(:last-child)').remove()
    if (jQuery('.js-pager__items .pager__item a').length == 0) {
      jQuery('.js-load-more').parent().remove()
    }
  }, 700)
}

var englishFile = [
  'What would you like to contact us about?',
  'I have a question/suggestion',
  'I have a praise',
  'I have a complaint',
  'Your Contact Information',
  'I agree to Nestlé processing my personal data as set out in the Nestlé Privacy Notice.',
  'How would you like us to get in touch with you? *',
  'Country *',
  'Product Information',
  'Best before date',
  'Your Contact Information',
  'How would you like us to get in touch with you? *',
  'State',
]

var vietnamFile = [
  'Bạn muốn liên hệ với chúng tôi về vấn đề gì?',
  'Tôi có một câu hỏi / gợi ý',
  'Tôi có một lời khen ngợi',
  'Tôi có khiếu nại',
  'Thông tin liên lạc của bạn',
  'Tôi đồng ý để Nestlé xử lý dữ liệu cá nhân của tôi như được nêu trong Thông báo về quyền riêng tư của Nestlé.',
  'Bạn muốn chúng tôi liên lạc với bạn bằng cách nào? * ',
  'Quốc gia *',
  'Thông tin sản phẩm',
  'Tốt nhất trước ngày',
  'Thông tin liên lạc của bạn',
  'Bạn muốn chúng tôi liên lạc với bạn bằng cách nào? * ',
  'Tiểu bang',
]

var placeHolderEnglish = [
  'Your message *',
  'First Name',
  'Last Name',
  'Email address *',
  'Phone',
  'Product description',
  'Batch code',
  'Bar code',
  'Email address *',
  'Your Street',
  'City',
  'Postal code',
]

var placeHolderVietnam = [
  'Tin nhắn của bạn *',
  'Tên đầu tiên',
  'Họ',
  'Địa chỉ email *',
  'Điện thoại',
  'Mô tả Sản phẩm',
  'Mã lô',
  'Mã vạch',
  'Địa chỉ email *',
  'Phố của bạn',
  'Thành phố',
  'Mã bưu điện',
]

// (function () {
//   if (window.location.href.includes('lien-he')) {
//     setTimeout(function () {
//       jQuery('#edit-country').val('VN');
//       jQuery('#edit-submit').val('Gửi');
//       for (var index = 0; index < englishFile.length; index++) {
//         var lang = englishFile[index];
//         if (index != 12) {
//           var elmLang = jQuery(jQuery(':contains("' + lang + '")')[jQuery(':contains("' + lang + '")').length - 1]);
//           if (elmLang.length > 0) {
//             elmLang.text(vietnamFile[index]);
//           }
//         } else {
//           var elmLang = jQuery(jQuery(':contains("' + lang + '")')[jQuery(':contains("' + lang + '")').length - 2]);
//           if (elmLang.length > 0) {
//             elmLang.text(vietnamFile[index]);
//           }
//         }
//       }
//       for (var index = 0; index < placeHolderEnglish.length; index++) {
//         var lang = placeHolderEnglish[index];
//         var elmLang = jQuery('[placeholder="' + lang + '"]');
//         if (elmLang.length > 0) {
//           elmLang.attr('placeholder', placeHolderVietnam[index]);
//         }
//       }
//     }, 100);
//   }
// })();

jQuery.fn.randomize = function (tree, childElem) {
  return this.each(function () {
    var $this = jQuery(this)
    if (tree) $this = jQuery(this).find(tree)
    var unsortedElems = $this.children(childElem)
    var elems = unsortedElems.clone()

    elems.sort(function () {
      return Math.round(Math.random()) - 0.5
    })

    for (var i = 0; i < elems.length; i++) {
      unsortedElems.eq(i).replaceWith(elems[i])
    }
  })
}

// (function () {
//   if (jQuery('.nestle-homepage-wrapper').length > 0) {
//     for (var i = 0; i < 4; i++) {
//       jQuery('.enjoy-items').randomize('.fs-box');
//     }
//   }
//   if (jQuery('.detail-social').length > 0) {
//     var currentUrl = window.location.href;
//     var fbLink = 'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl;
//     var linkedLink = 'https://www.linkedin.com/shareArticle?mini=true&url=' + currentUrl;
//     jQuery('.detail-social ul li:nth(0) a').attr('href', fbLink);
//     jQuery('.detail-social ul li:nth(1) a').attr('href', linkedLink);
//   }
//   if (jQuery('.distribution-side')) {
//     jQuery('.distribution-side ul li a').each(function () {
//       var that = this;
//       var linkBrand = jQuery(that).attr('href');
//       if (!linkBrand.includes(window.location.hostname) && linkBrand != null && linkBrand != 'internal:/' &&
//         linkBrand != '' && linkBrand != 'route:') {
//         jQuery(that).attr('target', '_blank');
//       } else if (linkBrand == null || linkBrand == '' || linkBrand == 'route:' || linkBrand == 'internal:/') {
//         jQuery(that).attr('href', 'javascript:void(0)');
//         jQuery(that).css('cursor', 'context-menu');
//       }

//       if (jQuery(that).attr('href') == 'javascript:void(0)') {
//         jQuery(that).attr('target', '');
//         jQuery(that).css('cursor', 'context-menu');
//       }
//     });
//   }

// })();

jQuery('.detail-social ul li:nth(2)').on('click', function () {
  copyToClipboard(window.location.href)
})

function copyToClipboard(val) {
  var jQuerytemp = jQuery('<input>')
  jQuery('body').append(jQuerytemp)
  jQuerytemp.val(val).select()
  document.execCommand('copy')
  jQuerytemp.remove()
  alert('Bạn vừa mới copy ' + val)
}

document.querySelectorAll('.banner-box > h2').forEach(function (item) {
  if (item.style.color == 'rgb(255, 255, 255)') {
    if (jQuery(item).prev().children().text() == '') {
      jQuery(item).parent().addClass('has-brush-no-title')
    }
    item.style.display = 'none'
    item.style.paddingBottom = '4rem'
  }
})

// 2020914 - Quan hide brand name for nbrand page only
if (window.location.pathname == '/nhan-hieu-nestle') {
  jQuery('.brush-box').hide()
}

function AdimoInit() {
  timeout = 200
  if (typeof Adimo == 'object') {
    Adimo.main.init('https://basketads.adimo.co', false)
  } else {
    setTimeout(AdimoInit(), timeout)
  }
}

function initResetPasswordScreen() {
  timeout = 200
  if (typeof gigya == 'object') {
    gigya.accounts.showScreenSet({
      screenSet: 'Nestle-RegistrationLogin',
      containerID: 'gigya-reset-password',
      startScreen: 'gigya-reset-password-screen',
    })
  } else {
    setTimeout(initResetPasswordScreen, timeout)
  }
}

function retrieveGigyaIDDatalayer() {
  dataLayer[0].gigyaUID = Cookies.get('gigyaID');
}

jQuery(document).on('click', '.js-show-gigya-login', function () {
  jQuery('.popup-inr').removeClass('active');
  jQuery('.is-tet').fadeIn(300, function () {
    if (jQuery('.popup-scroll').length) {
      boxScroll();
    }
    jQuery('body').addClass('fs-no-scroll');
  });
  gigya.accounts.showScreenSet({
    screenSet: 'Nestle-RegistrationLogin'
  });

  var cssTaLoginCheck = setInterval(function () {
    if (jQuery('#gigya-screen-dialog-page-overlay').length > 0) {
      jQuery('#gigya-screen-dialog-page-overlay').parent().addClass('ta-css-gigya');
      clearInterval(cssTaLoginCheck);
    }
  }, 200);
});

jQuery(document).on('click', '.js-get-voucher', function () {
  // if (isProccessGetVoucher) {
  //   return '';
  // }
  // isProccessGetVoucher = true;
  var target = 'voucher';
  jQuery('.popup-inr').css('opacity', 1);
  jQuery('.popup-inr[data-popup=' + target + ']').addClass('active');
  jQuery('.is-tet').fadeIn(300, function () {
    if (jQuery('.popup-scroll').length) {
      boxScroll();
    }
    jQuery('body').addClass('fs-no-scroll');
  });

  // if (document.cookie.search(/\sglt_3(.*)=/) > 0) {
  //   jQuery.ajax({
  //     url: '/voucher_rest_api/get_gift',
  //     type: 'Get',
  //     contentType: 'application/json; charset=utf-8',
  //     success: function (data) {
  //       isProccessGetVoucher = false;
  //       if (jQuery('.voucher[data-popup="voucher"]').length > 0) {
  //         var popupVoucher = jQuery('.voucher[data-popup="voucher"]');
  //         popupVoucher.addClass('code');
  //         popupVoucher.find('.popup-wrap').html('<div class="title-box"><div class="small-title">Gia Đình Nestlé Tặng Bạn <br>Voucher Mua Hàng <br class="fs-sp">50.000VNĐ</div><p>Chào mừng bạn đến với Gia Đình Nestlé! <br>Gửi tặng bạn mã code:</p></div><div class="fs-txt"><div class="box-code"><div class="code" id="code"> ' + data.data.data.voucher_code + '</div><span class="copy-code">SAO CHÉP MÃ</span></div><div class="note-code">trị giá <strong>50.000VNĐ</strong> áp dụng <br class="fs-sp">khi mua sắm tại <a href="https://tiki.vn/" title="Tiki">Tiki.</a></div><div class="fs-buts"><a href="javascript:void(0);" class="fs-but but-yellow no-icon go-to-promotion" title="SẮM TẾT NGAY"><span class="fs-but--txt">KHÁM PHÁ ƯU ĐÃI NESTLÉ</span></a></div></div>');
  //       }
  //     },
  //     error: function (data) {
  //       if (document.cookie.search(/\sglt_3(.*)=/) > 0) {
  //         alert('Lỗi nhận voucher, Vui lòng thử lại sau');
  //       }
  //       jQuery('.popup-overlay').fadeOut(300, function () {
  //         jQuery('body').removeClass('fs-no-scroll')
  //       })
  //     }
  //   });

  // } else {
  //   isProccessGetVoucher = false;
  // }
});

// function personalizeSetInfoUser() {

// }

function checkTypeUser() {
  if (jQuery('.tags').length > 0) {
    var localCluster = {
      cluster1: [],
      cluster2: [],
      cluster3: [],
    };
    var tempData = localStorage.getItem('clusterInfoParse');
    if (tempData == undefined || tempData == '' || tempData == null) {
      localStorage.setItem('clusterInfoParse', '');
    } else {
      localCluster = JSON.parse(tempData);
    }
    var tagsHtml = jQuery('.tags span');
    for (let index = 0; index < tagsHtml.length; index++) {
      var currenTag = tagsHtml.eq(index).text();
      if (listCluster.indexOf(currenTag) >= 0) {
        if (localCluster[currenTag] != null) {
          if (localCluster[currenTag].indexOf(window.location.pathname) < 0) {
            localCluster[currenTag].push(window.location.pathname);
            localStorage.setItem('clusterInfoParse', JSON.stringify(localCluster));
          }
        } else {
          localCluster[currenTag] = [];
          localCluster[currenTag].push(window.location.pathname);
          localStorage.setItem('clusterInfoParse', JSON.stringify(localCluster));
        }
      }
    }

  }
  pasrseClusterUser();

}

function pasrseClusterUser() {
  var clusterUserLocalStorage = localStorage.getItem('clusterUserNologin');
  if (clusterUserLocalStorage == undefined || clusterUserLocalStorage == '' || clusterUserLocalStorage == null
    || listCluster.indexOf(clusterUserLocalStorage) < 0) {
    localStorage.setItem('clusterUserNologin', '');
    var clusterInfoParseLocalStorage = localStorage.getItem('clusterInfoParse');

    if (clusterInfoParseLocalStorage != undefined && clusterInfoParseLocalStorage != '' && clusterInfoParseLocalStorage != null) {
      var clusterInfoParseLocal = JSON.parse(clusterInfoParseLocalStorage);
      var clusterUserNologin = '';
      var maxLengthCluster = 0;
      for (const iterator in clusterInfoParseLocal) {
        if (clusterInfoParseLocal[iterator].length > maxLengthCluster) {
          if (clusterInfoParseLocal[iterator].length > 2) {
            maxLengthCluster = clusterInfoParseLocal[iterator].length;
            clusterUserNologin = iterator;
          }
        }
      }
      localStorage.setItem('clusterUserNologin', clusterUserNologin);
    }
  }
}


function setTypeUser() {
  setTimeout(function () {
    gigya.accounts.getAccountInfo({
      callback: function (res) {
        var params = {
          data: {
            title: ""
          }
        };
        if (res.errorCode == 0 && (res.data.title == null || res.data.title == undefined || res.data.title == '')) {
          pasrseClusterUser();
          var clusterUser = localStorage.getItem('clusterUserNologin');
          if (clusterUser == undefined || clusterUser == '' || clusterUser == null || listCluster.indexOf(clusterUser) < 0) {
            localStorage.setItem('clusterUserNologin', '');
            if (jQuery('.popup-inr[data-question="1"]').length > 0) {
              jQuery('.popup-inr').hide();
              jQuery('.popup-inr[data-question="1"]').show();
              jQuery('.popup-overlay').show();
            }
          } else {
            params.data.title = clusterUser;
          }
          gigya.accounts.setAccountInfo(params);
          localStorage.setItem('clusterUserNologin', params.data.title);
          setFilterPersonalize();
          if (jQuery('.user-cluster').length > 0) {
            jQuery('.user-cluster').text('Bạn là ' + params.data.title);
          }
        } else {
          if (res.data != undefined && res.data != '' && res.data != null) {
            localStorage.setItem('clusterUserNologin', res.data.title);
            if (jQuery('.user-cluster').length > 0) {
              jQuery('.user-cluster').text('Bạn là ' + res.data.title);
            }
            setFilterPersonalize();
          }

        }

      }
    });
  }, 2000)
}

function setFilterPersonalize() {
  setTimeout(function () {
    if (window.location.pathname == '/test-personalize') {
      var clusterUser = localStorage.getItem('clusterUserNologin');
      if (clusterUser != undefined && clusterUser != '' && clusterUser != null && listCluster.indexOf(clusterUser) >= 0) {
        if (jQuery('[id*="edit-field-tags-target-id"]').length > 0) {
          jQuery('[id*="edit-field-tags-target-id"]').val(clusterUser);
          jQuery('[id*="edit-submit-test-personalize"]').trigger('click');
          setTimeout(() => {
            if (jQuery('.user-cluster').length > 0) {
              jQuery('.user-cluster').text('Bạn là ' + clusterUser);
            }
          }, 500);
        }
      }
    }
  }, 200);
}

jQuery(document).on('click', '.clear-cluster', function () {
  var params = {
    data: {
      title: ""
    }
  };

  gigya.accounts.setAccountInfo(params);
  localStorage.setItem('clusterInfoParse', '');
  localStorage.setItem('clusterUserNologin', '');
  if (jQuery('[id*="edit-field-tags-target-id"]').length > 0) {
    jQuery('[id*="edit-field-tags-target-id"]').val('');
    jQuery('[id*="edit-submit-test-personalize"]').trigger('click');
  }
});

jQuery(document).on('click', '.check-type-user-btn', function () {
  var params = {
    data: {
      title: ""
    }
  };
  var answer = jQuery(this).parents('.popup-wrap').find('input[type=radio]:checked').attr('data-answer');
  switch (answer) {
    case 'A1':
      params.data.title = "cluster1";
      showPopupCheckUser('final');
      break;
    case 'A2':
      showPopupCheckUser(2);
      break;
    case 'B1':
      params.data.title = "cluster1";
      showPopupCheckUser('final');
      break;
    case 'B2':
      params.data.title = "cluster2";
      showPopupCheckUser('final');
      break;
    case 'B3':
      params.data.title = "cluster3";
      showPopupCheckUser('final');
      break;
  }
  if (params.data.title != undefined && params.data.title != '' && params.data.title != null) {
    gigya.accounts.setAccountInfo(params);
    localStorage.setItem('clusterUserNologin', params.data.title);
    setFilterPersonalize();
    if (jQuery('.user-cluster').length > 0) {
      jQuery('.user-cluster').text('Bạn là ' + params.data.title);
    }
  }

});

function showPopupCheckUser(type) {
  var elmPopup = '.popup-inr[data-question="' + type + '"]'
  jQuery('.popup-inr').hide();
  jQuery(elmPopup).show();
  jQuery('.popup-overlay').show();
}
jQuery('.show-popup-template').on('click', function () {
  var dataPopupId = jQuery(this).attr('data-popup');
  jQuery('.cp_popup').addClass('detail_popup')
  jQuery('.popup_detail').html(jQuery('[data-popup-show="' + dataPopupId + '"]').html());
  openPopUp();
});

function openVideo(byThis, type) {

  if (document.querySelector('.cp_nestle') !== null) {

    if (type == 'yt' && document.querySelector('#nestleVideo') !== null) {

      document.querySelector('.cp_video--mp4').classList.remove('active');
      document.querySelector('.cp_video--yt').classList.add('active');
      var nestleVideoId = byThis.getAttribute('data-video');
      nestleVideo.src = 'https://www.youtube.com/embed/' + nestleVideoId + '?rel=0&amp;autoplay=1&amp;playsinline=1';

    } else if (type == 'mp4') {
      var srcVideo = jQuery('#cpVideo source[type="video/mp4"]').attr('src');
      jQuery('.cp_nestle').append('<video class= "cp_video cp_video--mp4" width = "320" height = "240" id = "cpMp4Video" muted playsinline controls ><source src="' + srcVideo + '" type="video/mp4">Your browser does not support the video tag.</video>');
      document.querySelector('.cp_video--yt').classList.remove('active');
      document.querySelector('.cp_video--mp4').classList.add('active');
      cpMp4Video.play();

    }
    document.querySelector('.cp_nestle').classList.add('cp_nestle--show');

  }

  // Close video inline on banner
  if (document.querySelector('#cpVideo') !== null) {
    cpVideo.pause();
  }

}