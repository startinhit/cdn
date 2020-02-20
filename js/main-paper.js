/*-----------------------------------------------
*   Name: Startinhit Newspaper Premium Version For Blogspot
*   Version: 1.8.0
*   Last Updated: 01/01/2020
*   Author Name: Nguyễn Tỉnh
*   Author URI: https://admin.nguyentinhblog.com
*   Website: https://www.nguyentinhblog.com
----------------------------------------------- */
$(document).ready(function() {
    var media = $(window).width()
    if (media >= 880) {
      /*! Theia Sticky Sidebar | v1.7.0 - https://github.com/WeCodePixels/theia-sticky-sidebar */
      !function(i){i.fn.theiaStickySidebar=function(t){function e(t,e){return!0===t.initialized||!(i("body").width()<t.minWidth)&&(function(t,e){t.initialized=!0,0===i("#theia-sticky-sidebar-stylesheet-"+t.namespace).length&&i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-'+t.namespace+'">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));e.each(function(){var e={};if(e.sidebar=i(this),e.options=t||{},e.container=i(e.options.containerSelector),0==e.container.length&&(e.container=e.sidebar.parent()),e.sidebar.parents().css("-webkit-transform","none"),e.sidebar.css({position:e.options.defaultPosition,overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),e.stickySidebar=e.sidebar.find(".theiaStickySidebar"),0==e.stickySidebar.length){var a=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;e.sidebar.find("script").filter(function(i,t){return 0===t.type.length||t.type.match(a)}).remove(),e.stickySidebar=i("<div>").addClass("theiaStickySidebar").append(e.sidebar.children()),e.sidebar.append(e.stickySidebar)}e.marginBottom=parseInt(e.sidebar.css("margin-bottom")),e.paddingTop=parseInt(e.sidebar.css("padding-top")),e.paddingBottom=parseInt(e.sidebar.css("padding-bottom"));var n=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight();function d(){e.fixedScrollTop=0,e.sidebar.css({"min-height":"1px"}),e.stickySidebar.css({position:"static",width:"",transform:"none"})}e.stickySidebar.css("padding-top",1),e.stickySidebar.css("padding-bottom",1),n-=e.stickySidebar.offset().top,s=e.stickySidebar.outerHeight()-s-n,0==n?(e.stickySidebar.css("padding-top",0),e.stickySidebarPaddingTop=0):e.stickySidebarPaddingTop=1,0==s?(e.stickySidebar.css("padding-bottom",0),e.stickySidebarPaddingBottom=0):e.stickySidebarPaddingBottom=1,e.previousScrollTop=null,e.fixedScrollTop=0,d(),e.onScroll=function(e){if(e.stickySidebar.is(":visible"))if(i("body").width()<e.options.minWidth)d();else{if(e.options.disableOnResponsiveLayouts){var a=e.sidebar.outerWidth("none"==e.sidebar.css("float"));if(a+50>e.container.width())return void d()}var n,s,r=i(document).scrollTop(),c="static";if(r>=e.sidebar.offset().top+(e.paddingTop-e.options.additionalMarginTop)){var p,b=e.paddingTop+t.additionalMarginTop,l=e.paddingBottom+e.marginBottom+t.additionalMarginBottom,f=e.sidebar.offset().top,h=e.sidebar.offset().top+(n=e.container,s=n.height(),n.children().each(function(){s=Math.max(s,i(this).height())}),s),g=0+t.additionalMarginTop,S=e.stickySidebar.outerHeight()+b+l<i(window).height();p=S?g+e.stickySidebar.outerHeight():i(window).height()-e.marginBottom-e.paddingBottom-t.additionalMarginBottom;var u=f-r+e.paddingTop,m=h-r-e.paddingBottom-e.marginBottom,y=e.stickySidebar.offset().top-r,k=e.previousScrollTop-r;"fixed"==e.stickySidebar.css("position")&&"modern"==e.options.sidebarBehavior&&(y+=k),"stick-to-top"==e.options.sidebarBehavior&&(y=t.additionalMarginTop),"stick-to-bottom"==e.options.sidebarBehavior&&(y=p-e.stickySidebar.outerHeight()),y=k>0?Math.min(y,g):Math.max(y,p-e.stickySidebar.outerHeight()),y=Math.max(y,u),y=Math.min(y,m-e.stickySidebar.outerHeight());var v=e.container.height()==e.stickySidebar.outerHeight();c=(v||y!=g)&&(v||y!=p-e.stickySidebar.outerHeight())?r+y-e.sidebar.offset().top-e.paddingTop<=t.additionalMarginTop?"static":"absolute":"fixed"}if("fixed"==c){var x=i(document).scrollLeft();e.stickySidebar.css({position:"fixed",width:o(e.stickySidebar)+"px",transform:"translateY("+y+"px)",left:e.sidebar.offset().left+parseInt(e.sidebar.css("padding-left"))-x+"px",top:"0px"})}else if("absolute"==c){var T={};"absolute"!=e.stickySidebar.css("position")&&(T.position="absolute",T.transform="translateY("+(r+y-e.sidebar.offset().top-e.stickySidebarPaddingTop-e.stickySidebarPaddingBottom)+"px)",T.top="0px"),T.width=o(e.stickySidebar)+"px",T.left="",e.stickySidebar.css(T)}else"static"==c&&d();"static"!=c&&1==e.options.updateSidebarHeight&&e.sidebar.css({"min-height":e.stickySidebar.outerHeight()+e.stickySidebar.offset().top-e.sidebar.offset().top+e.paddingBottom}),e.previousScrollTop=r}},e.onScroll(e),i(document).on("scroll."+e.options.namespace,function(i){return function(){i.onScroll(i)}}(e)),i(window).on("resize."+e.options.namespace,function(i){return function(){i.stickySidebar.css({position:"static"}),i.onScroll(i)}}(e)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(e.stickySidebar[0],function(i){return function(){i.onScroll(i)}}(e))})}(t,e),!0)}function o(i){var t;try{t=i[0].getBoundingClientRect().width}catch(i){}return void 0===t&&(t=i.width()),t}return(t=i.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern",defaultPosition:"relative",namespace:"TSS"},t)).additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,function(t,o){e(t,o)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),i(document).on("scroll."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)),i(window).on("resize."+t.namespace,function(t,o){return function(a){var n=e(t,o);n&&i(this).unbind(a)}}(t,o)))}(t,this),this}}(jQuery);
    }
    
    /*! Shortcode.js by @nicinabox | v1.1.0 - https://github.com/nicinabox/shortcode.js */
    var Shortcode=function(e,t){e&&(this.el=e,this.tags=t,this.matches=[],this.regex="\\[{name}(\\s[\\s\\S]*?)?\\](?:((?!\\s*?(?:\\[{name}|\\[\\/(?!{name})))[\\s\\S]*?)(\\[/{name}\\]))?",this.el.jquery&&(this.el=this.el[0]),this.matchTags(),this.convertMatchesToNodes(),this.replaceNodes())};if(Shortcode.prototype.matchTags=function(){var e,t,a,r,n,s,o,i=this.el.outerHTML;for(var c in this.tags){if(!this.tags.hasOwnProperty(c))return;a=this.template(this.regex,{name:c});for(var h=0,p=(e=i.match(new RegExp(a,"g"))||[]).length;h<p;h++)r=(t=e[h].match(new RegExp(a)))[3]?"":void 0,s=t[0],n=this.escapeTagRegExp(s),o=this.parseOptions(t[1]),t[2]&&(r=t[2].trim(),s=s.replace(r,"").replace(/\n\s*/g,""),n=this.escapeTagRegExp(s).replace("\\]\\[","\\]([\\s\\S]*?)\\[")),this.matches.push({name:c,tag:s,regex:n,options:o,contents:r})}},Shortcode.prototype.convertMatchesToNodes=function(){var e,t,a=this.el.innerHTML;t=function(e,t,a,r,n,s,o){if(t)return e;var i=document.createElement("span");return i.setAttribute("data-sc-tag",this.tag),i.className="templateify-sc-node templateify-sc-node-"+this.name,i.outerHTML};for(var r=0,n=this.matches.length;r<n;r++)'((data-sc-tag=")|(<pre.*)|(<code.*))?',e=new RegExp('((data-sc-tag=")|(<pre.*)|(<code.*))?'+this.matches[r].regex,"g"),a=a.replace(e,t.bind(this.matches[r]));this.el.innerHTML=a},Shortcode.prototype.replaceNodes=function(){var e,t,a,r,n,s=this;this.el.querySelectorAll(".templateify-sc-node");n=function(e){e.jquery&&(e=e[0]),e=s.parseCallbackResult(e),r.parentNode.replaceChild(e,r)};for(var o=0,i=this.matches.length;o<i;o++)e=this.matches[o],(r=this.el.querySelector(".templateify-sc-node-"+e.name))&&r.dataset.scTag===e.tag&&void 0!==(t=this.tags[e.name].bind(e)(a=n.bind(e)))&&a(t)},Shortcode.prototype.parseCallbackResult=function(e){var t,a,r;switch(typeof e){case"function":e=document.createTextNode(e());break;case"string":if(t=document.createElement("div"),a=document.createDocumentFragment(),t.innerHTML=e,(r=t.childNodes).length){for(var n=0,s=r.length;n<s;n++)a.appendChild(r[n].cloneNode(!0));e=a}else e=document.createTextNode(e);break;case"object":e.nodeType||(e=JSON.stringify(e),e=document.createTextNode(e))}return e},Shortcode.prototype.parseOptions=function(e){var t,a={};if(e){(t=e.replace(/(\w+=)/g,"\n$1").split("\n")).shift();for(var r=0;r<t.length;r++){var n=t[r].split("=");a[n[0]]=n[1].replace(/\'|\"/g,"").trim()}return a}},Shortcode.prototype.escapeTagRegExp=function(e){return e.replace(/[\[\]\/]/g,"\\$&")},Shortcode.prototype.template=function(e,t){for(var a in t)e=e.replace(new RegExp("{"+a+"}","g"),t[a]);return e},String.prototype.trim=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},window.jQuery){var pluginName="shortcode";$.fn[pluginName]=function(e){return this.each(function(){$.data(this,pluginName)||$.data(this,pluginName,new Shortcode(this,e))}),this}}
    
    /*! MenuIfy by Templateify | v1.0.0 */
    !function(e){e.fn.menuify=function(){return this.each(function(){for(var t=e(this),n=t.find(".LinkList ul > li").children("a"),a=n.length,r=0;r<a;r++){var i=n.eq(r),u=i.text();if("_"!==u.charAt(0))if("_"===n.eq(r+1).text().charAt(0)){var s=i.parent();s.append('<ul class="sub-menu m-sub"/>')}"_"===u.charAt(0)&&(i.text(u.replace("_","")),i.parent().appendTo(s.children(".sub-menu")))}for(r=0;r<a;r++){var c=n.eq(r),l=c.text();if("_"!==l.charAt(0))if("_"===n.eq(r+1).text().charAt(0)){var p=c.parent();p.append('<ul class="sub-menu2 m-sub"/>')}"_"===l.charAt(0)&&(c.text(l.replace("_","")),c.parent().appendTo(p.children(".sub-menu2")))}t.find(".LinkList ul li ul").parent("li").addClass("has-sub")})}}(jQuery);
    
    if (media >= 440) {
    /*! Tabify by Templateify | v1.0.0 */
    !function(a){a.fn.tabify=function(t){return t=jQuery.extend({onHover:!1,animated:!0,transition:"fadeInUp"},t),this.each(function(){var e=a(this),s=e.children("[tab-ify]"),i="tab-active";if(1==t.onHover)var n="mouseenter";else n="click";e.prepend('<ul class="select-tab"></ul>'),s.each(function(){1==t.animated&&a(this).addClass("tab-animated"),e.find(".select-tab").append('<li><a href="javascript:;">'+a(this).attr("tab-ify")+"</a></li>")}).eq(0).addClass(i).addClass("tab-"+t.transition),e.find(".select-tab a").on(n,function(){var e=a(this).parent().index();return a(this).closest(".select-tab").find(".active").removeClass("active"),a(this).parent().addClass("active"),s.removeClass(i).removeClass("tab-"+t.transition).eq(e).addClass(i).addClass("tab-"+t.transition),!1}).eq(0).parent().addClass("active")})}}(jQuery);
    }
  
    ! function(a) {
        a.fn.lazyify = function() {
            return this.each(function() {
                var t = a(this),
                    dImg = t.attr('data-image'),
                    iWid = Math.round(t.width() * 1.2),
                    iHei = Math.round(t.height() * 1.2),
                    iSiz = '/w' + iWid + '-h' + iHei + '-p-k-no-nu',
                    img = '';
                if (dImg.match('s72-c')) {
                    img = dImg.replace('/s72-c', iSiz)
                } else if (dImg.match('w72-h')) {
                    img = dImg.replace('/w72-h72-p-k-no-nu', iSiz)
                } else {
                    img = dImg
                }
                a(window).on('resize scroll', lazyOnScroll);
  
                function lazyOnScroll() {
                    var wHeight = a(window).height(),
                        scrTop = a(window).scrollTop(),
                        offTop = t.offset().top;
                    if (scrTop + wHeight > offTop) {
                        var n = new Image();
                        n.onload = function() {
                            t.attr('style', 'background-image:url(' + this.src + ')').addClass('lazy-ify')
                        }, n.src = img
                    }
                }
                lazyOnScroll()
            })
        }
    }(jQuery);
    $('#startinhitnews-main-menu').menuify();
    $('#startinhitnews-main-menu .widget').addClass('show-menu');
    $(".show-search").click(function() {
        $(this), $("#search-form").toggleClass("show")
    });
    $('.blog-posts-headline,.related-title').each(function() {
        var $t = $(this),
            $m = $t.find('.more'),
            $mT = showMoreText;
        if ($mT != '') {
            $m.text($mT)
        }
    });
    $('.follow-by-email-text').each(function() {
        var $t = $(this),
            $fbet = followByEmailText;
        if ($fbet != '') {
            $t.text($fbet)
        }
    });
    if (data.view.isPost == 'true') {
        $('#post-body').shortcode({
            ads: function() {
                if (this.options != undefined) {
                    var i = this.options.id;
                    switch (i) {
                        case 'ads1':
                            return '<div id="new-before-ad"/>';
                            break;
                        case 'ads2':
                            return '<div id="new-after-ad"/>';
                            break;
                        default:
                            return '';
                            break
                    }
                }
            }
        });
        $('#new-before-ad').each(function() {
            var $t = $(this);
            if ($t.length) {
                $('#before-ad').appendTo($t)
            }
        });
        $('#new-after-ad').each(function() {
            var $t = $(this);
            if ($t.length) {
                $('#after-ad').appendTo($t)
            }
        });
        $('#main-before-ad .widget').each(function() {
            var $t = $(this);
            if ($t.length) {
                $t.appendTo($('#before-ad'))
            }
        });
        $('#main-after-ad .widget').each(function() {
            var $t = $(this);
            if ($t.length) {
                $t.appendTo($('#after-ad'))
            }
        });
    }
    $('#social-counter ul.social-icons li a').each(function() {
        var $t = $(this),
            $a = $t.find('.count'),
            $d = $t.data('content').trim(),
            $s = $d.split('$'),
            $u = $s[0],
            $c = $s[1];
        $t.attr('href', $u);
        $a.text($c)
    });
    if (media >= 440) {
        $('#sidebar-tabs').each(function() {
            $('#sidebar-tabs .widget').each(function() {
                var textTab = $(this).find('.widget-title > h3').text().trim();
                $(this).attr('tab-ify', textTab)
            });
            $('#sidebar-tabs').tabify();
            var wCount = $('#sidebar-tabs .widget').length;
            if (wCount >= 1) {
                $(this).addClass('tabs-' + wCount).show()
            }
        });
    }
    if (data.view.isSingleItem == 'true') {
        $('.avatar-image-container img').attr('src', function($this, i) {
            i = i.replace('//resources.blogblog.com/img/blank.gif', '//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-r/avatar.jpg');
            i = i.replace('//img1.blogblog.com/img/blank.gif', '//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s72-r/avatar.jpg');
            return i
        });
        $('.post-body a').each(function() {
            var $this = $(this),
                type = $this.text().trim(),
                sp = type.split('/'),
                txt = sp[0],
                ico = sp[1],
                color = sp.pop();
            if (type.match('button')) {
                $this.addClass('button').text(txt);
                if (ico != 'button') {
                    $this.addClass(ico)
                }
                if (color != 'button') {
                    $this.addClass('colored-button').css({
                        'background': color
                    })
                }
            }
        });
        $('.post-body blockquote').each(function() {
            var $this = $(this),
                type = $this.text().trim(),
                html = $this.html();
            if (type.match('code-css')) {
                $this.replaceWith('<pre class="css short-b">' + html + '</pre>')
            }
            if (type.match('code-js')) {
                $this.replaceWith('<pre class="javascript short-b">' + html + '</pre>')
            }
            if (type.match('code-xml')) {
                $this.replaceWith('<pre class="xml short-b">' + html + '</pre>')
            }
            if (type.match('code-php')) {
                $this.replaceWith('<pre class="php short-b">' + html + '</pre>')
            }
            if (type.match('code-scss')) {
                $this.replaceWith('<pre class="scss short-b">' + html + '</pre>')
            }
            if (type.match('colorbox-success')) {
                $this.replaceWith('<div class="colorbox colorbox-success short-b">' + html + '</div>')
            }
            if (type.match('colorbox-info')) {
                $this.replaceWith('<div class="colorbox colorbox-info short-b">' + html + '</div>')
            }
            if (type.match('colorbox-warning')) {
                $this.replaceWith('<div class="colorbox colorbox-warning short-b">' + html + '</div>')
            }
            if (type.match('colorbox-danger')) {
                $this.replaceWith('<div class="colorbox colorbox-danger short-b">' + html + '</div>')
            }
            var $sb = $('.post-body .short-b').find('b');
            $sb.each(function() {
                var $b = $(this),
                    $t = $b.text().trim();
                if ($t.match('code-css') || $t.match('code-js') || $t.match('code-xml') || $t.match('code-php') || $t.match('code-scss') || $t.match('colorbox-success') || $t.match('colorbox-info') || $t.match('colorbox-warning') || $t.match('colorbox-danger')) {
                    $b.replaceWith("")
                }
            })
        });
        $('.post-body strike').each(function() {
            var $this = $(this),
                type = $this.text().trim(),
                html = $this.html();
            if (type.match('contact-form')) {
                $this.replaceWith('<div class="contact-form"/>');
                $('.contact-form').append($('#ContactForm1'))
            }
            if (type.match('alert-success')) {
                $this.replaceWith('<div class="alert-message alert-success short-b">' + html + '</div>')
            }
            if (type.match('alert-info')) {
                $this.replaceWith('<div class="alert-message alert-info short-b">' + html + '</div>')
            }
            if (type.match('alert-warning')) {
                $this.replaceWith('<div class="alert-message alert-warning short-b">' + html + '</div>')
            }
            if (type.match('alert-danger')) {
                $this.replaceWith('<div class="alert-message alert-danger short-b">' + html + '</div>')
            }
            if (type.match('callout-success')) {
                $this.replaceWith('<div class="callout callout-success short-b">' + html + '</div>')
            }
            if (type.match('callout-info')) {
                $this.replaceWith('<div class="callout callout-info short-b">' + html + '</div>')
            }
            if (type.match('callout-warning')) {
                $this.replaceWith('<div class="callout callout-warning short-b">' + html + '</div>')
            }
            if (type.match('callout-danger')) {
                $this.replaceWith('<div class="callout callout-danger short-b">' + html + '</div>')
            }
            if (type.match('code')) {
                $this.replaceWith('<code class="short-b">' + html + '</code>')
            }
            if (type.match('kbd')) {
                $this.replaceWith('<kbd class="short-b">' + html + '</kbd>')
            }
            if (type.match('left-sidebar')) {
                $this.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
            }
            if (type.match('right-sidebar')) {
                $this.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
            }
            if (type.match('full-width')) {
                $this.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
            }
            var $sb = $('.post-body .short-b').find('b');
            $sb.each(function() {
                var $b = $(this),
                    $t = $b.text().trim();
                if ($t.match('alert-success') || $t.match('alert-info') || $t.match('alert-warning') || $t.match('alert-danger') || $t.match('callout-success') || $t.match('callout-info') || $t.match('callout-warning') || $t.match('callout-danger') || $t.match('code') || $t.match('kbd')) {
                    $b.replaceWith("")
                }
            })
        });
        $('.about-author .author-description span a').each(function() {
            var $this = $(this),
                cls = $this.text().trim(),
                url = $this.attr('href');
            $this.replaceWith('<li class="' + cls + '"><a href="' + url + '" title="' + cls + '" target="_blank"/></li>');
            $('.author-description').append($('.author-description span li'));
            $('.author-description').addClass('show-icons')
        });
    }
    $('.footer-widgets-wrap').each(function() {
        var $t = $(this),
            $n = $t.find('.no-items').length;
        if ($n == 3) {
            $('#footer-wrapper').addClass('compact-footer')
        }
    });
    if (media >= 880) {
        $('#startinhitnews-main-menu li').each(function() {
            var lc = $(this),
                ltx = lc.find('a'),
                am = ltx.attr('href'),
                st = am.toLowerCase(),
                $this = lc,
                li = $this,
                text = st;
            if (st.match('getmega')) {
                $this.addClass('has-sub mega-menu').append('<div class="getMega">' + am + '</div>')
            }
            $this.find('.getMega').shortcode({
                getMega: function() {
                    var label = this.options.label,
                        type = this.options.type,
                        num = 5;
                    ajaxMega($this, type, num, label, text);
                    if (type == 'mtabs') {
                        if (label != undefined) {
                            label = label.split('/')
                        }
                        megaTabs(li, type, label)
                    }
                }
            })
        });
  
        function megaTabs(li, type, label) {
            if (type == 'mtabs') {
                if (label != undefined) {
                    var lLen = label.length,
                        code = '<ul class="complex-tabs">';
                    for (var i = 0; i < lLen; i++) {
                        var tag = label[i];
                        if (tag) {
                            code += '<div class="mega-tab" tab-ify="' + tag + '"/>'
                        }
                    }
                    code += '</ul>';
                    li.addClass('mega-tabs mtabs').append(code);
                    li.find('a:first').attr('href', 'javascript:;');
                    $('.mega-tab').each(function() {
                        var $this = $(this),
                            label = $this.attr('tab-ify');
                        ajaxMega($this, 'megatabs', 4, label, 'getmega')
                    });
                    li.find('ul.complex-tabs').tabify({
                        onHover: true
                    })
                } else {
                    li.addClass('mega-tabs').append('<ul class="mega-widget">' + msgError() + '</ul>')
                }
            }
        }
    }
    if (media >= 680 && data.view.isHomepage == 'true') {
        loadJS('owl.carousel')
        $('#breaking-sec .HTML .widget-content').each(function() {
            var $this = $(this),
                text = $this.text().trim().toLowerCase();
            $this.shortcode({
                getBreaking: function() {
                    var num = this.options.results,
                        label = this.options.label;
                    ajaxBreaking($this, 'breaking', num, label, text)
                }
            })
        });
    }
    if (data.view.isHomepage == 'true') {
        $('#featured-sec .HTML .widget-content').each(function() {
            var $this = $(this),
                text = $this.text().trim().toLowerCase();
            $this.shortcode({
                getFeatured: function() {
                    var label = this.options.label,
                        type = this.options.type;
                    switch (type) {
                        case 'featured1':
                            var num = 4;
                            break;
                        case 'featured3':
                            num = 6;
                            break;
                        case 'featured6':
                            num = 3;
                            break;
                        default:
                            num = 5;
                            break
                    }
                    ajaxFeatured($this, type, num, label, text)
                }
            })
        });
        $('.block-posts .HTML .widget-content').each(function() {
            var $this = $(this),
                text = $this.text().trim().toLowerCase();
            $this.shortcode({
                getBlock: function() {
                    var num = this.options.results,
                        label = this.options.label,
                        type = this.options.type;
                    ajaxBlock($this, type, num, label, text)
                }
            })
        });
    }
    $('.startinhitnews-widget-ready .HTML .widget-content').each(function() {
        var $this = $(this),
            text = $this.text().trim().toLowerCase();
        $this.shortcode({
            getWidget: function() {
                var num = this.options.results,
                    label = this.options.label,
                    type = this.options.type;
                ajaxWidget($this, type, num, label, text)
            }
        })
    });
    $('.startinhitnews-related-content').each(function() {
        var $this = $(this),
            label = $this.find('.related-tag').attr('data-label'),
            num = relatedPostsNum;
        if (num >= 6) {
            num = 6
        } else {
            num = 3
        }
        ajaxRelated($this, 'related', num, label, 'getrelated')
    });
  
    function msgError() {
        return '<span class="no-posts"><b>Error:</b> No Results Found</span>'
    }
  
    function msgServerError() {
        return '<div class="no-posts error-503"><b>Failed to load resource:</b> the server responded with a status of 503</div>'
    }
  
    function beforeLoader() {
        return '<div class="loader"/>'
    }
  
    function getFeedUrl(type, num, label) {
        var furl = '';
        switch (label) {
            case 'recent':
                furl = '/feeds/posts/summary?alt=json&max-results=' + num;
                break;
            case 'comments':
                if (type == 'list') {
                    furl = '/feeds/comments/summary?alt=json&max-results=' + num
                } else {
                    furl = '/feeds/posts/summary/-/' + label + '?alt=json&max-results=' + num
                }
                break;
            default:
                furl = '/feeds/posts/summary/-/' + label + '?alt=json&max-results=' + num;
                break
        }
        return furl
    }
  
    function getPostLink(feed, i) {
        for (var x = 0; x < feed[i].link.length; x++)
            if (feed[i].link[x].rel == 'alternate') {
                var link = feed[i].link[x].href;
                break
            } return link
    }
  
    function getPostTitle(feed, i) {
        var n = feed[i].title.$t;
        return n
    }
  
    function getPostImage(feed, i) {
        if ('media$thumbnail' in feed[i]) {
            var src = feed[i].media$thumbnail.url;
            if (src.match('img.youtube.com')) {
                src = src.replace('/default.', '/0.')
            }
            var img = src
        } else {
            img = 'https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'
        }
        return img
    }
  
    function getPostAuthor(feed, i) {
        var n = feed[i].author[0].name.$t,
            by = messages.postedBy,
            em = '';
        if (by != '') {
            em = '<em>' + by + '</em>'
        } else {
            em = ''
        }
        var code = '<span class="entry-author">' + em + '<span class="by">' + n + '</span></span>';
        return code
    }
  
    function getPostDate(feed, i) {
        var c = feed[i].published.$t,
            d = c.substring(0, 4),
            f = c.substring(5, 7),
            m = c.substring(8, 10),
            h = monthFormat[parseInt(f, 10) - 1] + ' ' + m + ', ' + d;
        var on = messages.postedOn,
            em = '';
        if (on != '') {
            em = '<em>' + on + '</em>'
        } else {
            em = ''
        }
        var code = ['<span class="entry-time">' + em + '<time class="published" datetime="' + c + '">' + h + '</time></span>', '<span class="entry-time"><time class="published" datetime="' + c + '">' + h + '</time></span>'];
        return code
    }
  
    function getPostLabel(feed, i) {
        if (feed[i].category != undefined) {
            var tag = feed[i].category[0].term,
                code = '<span class="entry-category">' + tag + '</span>'
        } else {
            code = ''
        }
        return code
    }
  
    function getPostSnippet(feed, i) {
        var n = feed[i].summary.$t,
            u = $('<div>').html(n),
            c = u.text().trim().substr(0, 150),
            code = '<div class="entry-snippet">' + c + '\u2026</div>';
        return code
    }
  
    function getNumberComments(feed, i) {
        if ('thr$total' in feed[i]) {
            var u = feed[i].thr$total.$t,
                code = '<div class="number-comments">' + u + '</div>';
        }
        return code
    }
  
    function getPostComments(feed, i, link) {
        var n = feed[i].author[0].name.$t,
            e = feed[i].author[0].gd$image.src.replace('/s113', '/w72-h72-p-k-no-nu'),
            h = feed[i].title.$t;
        if (e.match('//img1.blogblog.com/img/blank.gif')) {
            var img = '//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w72-h72-p-k-no-nu/avatar.jpg'
        } else {
            var img = e
        }
        var code = '<article class="custom-item item-' + i + '"><a class="entry-image-link cmm-avatar" href="' + link + '"><span class="entry-thumb" data-image="' + img + '"/></a><h2 class="entry-title"><a href="' + link + '">' + n + '</a></h2><span class="cmm-snippet excerpt">' + h + '</span></article>';
        return code
    }
  
    function getFeatMeta(type, i, author, date) {
        var code = '<div class="entry-meta">' + date[1] + '</div>';
        switch (type) {
            case 'featured1':
            case 'featured2':
            case 'featured3':
            case 'featured4':
            case 'featured5':
            case 'featured6':
                switch (i) {
                    case 0:
                        switch (type) {
                            case 'featured1':
                            case 'featured2':
                            case 'featured4':
                                code = '<div class="entry-meta">' + author + date[0] + '</div>';
                                break
                        }
                        break;
                    case 1:
                        switch (type) {
                            case 'featured4':
                                code = '<div class="entry-meta">' + author + date[0] + '</div>';
                                break
                        }
                        break
                }
                break
        }
        return code
    }
  
    function getAjax($this, type, num, label) {
        switch (type) {
            case 'msimple':
            case 'megatabs':
            case 'breaking':
            case 'featured1':
            case 'featured2':
            case 'featured3':
            case 'featured4':
            case 'featured5':
            case 'featured6':
            case 'block1':
            case 'block2':
            case 'col-left':
            case 'col-right':
            case 'grid1':
            case 'grid2':
            case 'carousel':
            case 'videos':
            case 'list':
            case 'related':
                if (label == undefined) {
                    label = 'geterror404'
                }
                var furl = getFeedUrl(type, num, label);
                $.ajax({
                    url: furl,
                    type: 'GET',
                    dataType: 'json',
                    cache: true,
                    beforeSend: function(data) {
                        switch (type) {
                            case 'featured1':
                            case 'featured2':
                            case 'featured3':
                            case 'featured4':
                            case 'featured5':
                            case 'featured6':
                                $this.html(beforeLoader()).parent().addClass('show-ify show-' + type + '');
                                break;
                            case 'block1':
                            case 'block2':
                            case 'grid1':
                            case 'grid2':
                            case 'videos':
                            case 'carousel':
                            case 'related':
                                $this.html(beforeLoader()).parent().addClass('show-ify');
                                break;
                            case 'col-left':
                                $this.html(beforeLoader()).parent().addClass('column-left block-column show-ify');
                                break;
                            case 'col-right':
                                $this.html(beforeLoader()).parent().addClass('column-right block-column show-ify');
                                break;
                            case 'list':
                                $this.html(beforeLoader());
                                break
                        }
                    },
                    success: function(data) {
                        var html = '';
                        switch (type) {
                            case 'msimple':
                            case 'megatabs':
                                html = '<ul class="mega-widget">';
                                break;
                            case 'breaking':
                                html = '<div class="breaking-news">';
                                break;
                            case 'featured1':
                            case 'featured2':
                            case 'featured3':
                            case 'featured4':
                            case 'featured5':
                            case 'featured6':
                                html = '<div class="featured-grid ' + type + '">';
                                break;
                            case 'block1':
                                html = '<div class="block-posts-1">';
                                break;
                            case 'block2':
                                html = '<div class="block-posts-2 total-' + num + '">';
                                break;
                            case 'col-left':
                            case 'col-right':
                                html = '<div class="column-posts">';
                                break;
                            case 'grid1':
                                html = '<div class="grid-posts-1 total-' + num + '">';
                                break;
                            case 'grid2':
                                html = '<div class="grid-posts-2">';
                                break;
                            case 'carousel':
                                html = '<div class="block-carousel">';
                                break;
                            case 'videos':
                                html = '<div class="block-videos total-' + num + '">';
                                break;
                            case 'list':
                                html = '<div class="custom-widget">';
                                break;
                            case 'related':
                                html = '<div class="related-posts total-' + num + '">';
                                break
                        }
                        var entry = data.feed.entry;
                        if (entry != undefined) {
                            for (var i = 0, feed = entry; i < feed.length; i++) {
                                var link = getPostLink(feed, i),
                                    title = getPostTitle(feed, i, link),
                                    image = getPostImage(feed, i, link),
                                    author = getPostAuthor(feed, i),
                                    date = getPostDate(feed, i),
                                    tag = getPostLabel(feed, i),
                                    snippet = getPostSnippet(feed, i),
                                    comments = getNumberComments(feed, i),
                                    feat_meta = getFeatMeta(type, i, author, date);
                                var content = '';
                                switch (type) {
                                    case 'msimple':
                                    case 'megatabs':
                                        content += '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                        break;
                                    case 'breaking':
                                        content += '<article class="breaking-item"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2></article>';
                                        break;
                                    case 'featured1':
                                    case 'featured2':
                                    case 'featured3':
                                    case 'featured4':
                                    case 'featured5':
                                    case 'featured6':
                                        switch (i) {
                                            case 0:
                                                content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + feat_meta + '</div></div></article><div class="featured-scroll">';
                                                break;
                                            default:
                                                content += '<article class="featured-item item-' + i + '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2>' + feat_meta + '</div></div></article>';
                                                break
                                        }
                                        break;
                                    case 'block1':
                                        switch (i) {
                                            case 0:
                                                content += '<article class="block-item item-' + i + '"><div class="block-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '</div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + comments + '</div>' + snippet + '</article>';
                                                break;
                                            default:
                                                content += '<article class="block-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                                break
                                        }
                                        break;
                                    case 'block2':
                                        switch (i) {
                                            case 0:
                                                content += '<article class="block-item item-' + i + '"><div class="block-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-info">' + tag + '<h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + '</div></div></div></article><div class="block-grid">';
                                                break;
                                            default:
                                                content += '<article class="block-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                                break
                                        }
                                        break;
                                    case 'col-left':
                                    case 'col-right':
                                        switch (i) {
                                            case 0:
                                                content += '<article class="column-item item-' + i + '"><div class="column-inner"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '</div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + comments + '</div>' + snippet + '</article>';
                                                break;
                                            default:
                                                content += '<article class="column-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                                break
                                        }
                                        break;
                                    case 'grid1':
                                        content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                        break;
                                    case 'grid2':
                                        content += '<article class="grid-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a>' + tag + '</div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + author + date[0] + comments + '</div>' + snippet + '</article>';
                                        break;
                                    case 'carousel':
                                        content += '<article class="carousel-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                        break;
                                    case 'videos':
                                        content += '<article class="videos-item item-' + i + '"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/><span class="video-icon"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></article>';
                                        break;
                                    case 'list':
                                        switch (label) {
                                            case 'comments':
                                                var code = getPostComments(feed, i, link);
                                                content += code;
                                                break;
                                            default:
                                                content += '<article class="custom-item item-' + i + '"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a><div class="entry-header"><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                                break
                                        }
                                        break;
                                    case 'related':
                                        content += '<article class="related-item item-' + i + '"><div class="related-item-inner"><div class="entry-image"><a class="entry-image-link" href="' + link + '"><span class="entry-thumb" data-image="' + image + '"/></a></div><h2 class="entry-title"><a href="' + link + '">' + title + '</a></h2><div class="entry-meta">' + date[1] + '</div></div></article>';
                                        break
                                }
                                html += content
                            }
                        } else {
                            switch (type) {
                                case 'msimple':
                                case 'megatabs':
                                    html = '<ul class="mega-widget">' + msgError() + '</ul>';
                                    break;
                                default:
                                    html = msgError();
                                    break
                            }
                        }
                        switch (type) {
                            case 'msimple':
                                html += '</ul>';
                                $this.append(html).addClass('msimple');
                                $this.find('a:first').attr('href', function($this, href) {
                                    switch (label) {
                                        case 'recent':
                                            href = href.replace(href, '/search');
                                            break;
                                        default:
                                            href = href.replace(href, '/search/label/' + label);
                                            break
                                    }
                                    return href
                                });
                                break;
                            case 'breaking':
                                html += '</div></ul>';
                                $this.html(html).parent().addClass('show-ify');
                                var $slider = $this.find('.breaking-news, .entry-thumb');
                                $slider.owlCarousel({
                                    items: 1,
                                    animateOut: 'fadeOutRight',
                                    animateIn: 'fadeInRight',
                                    smartSpeed: 0,
                                    nav: true,
                                    navText: ['', ''],
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                    autoplayHoverPause: true,
                                    dots: false,
                                    mouseDrag: false,
                                    touchDrag: false,
                                    freeDrag: false,
                                    pullDrag: false
                                });
                                break;
                            case 'featured1':
                            case 'featured2':
                            case 'featured3':
                            case 'featured4':
                            case 'featured5':
                            case 'featured6':
                                html += '</div></div>';
                                $this.html(html);
                                break;
                            case 'block1':
                            case 'grid1':
                            case 'grid2':
                            case 'col-left':
                            case 'col-right':
                            case 'videos':
                                html += '</div>';
                                $this.html(html);
                                break;
                            case 'block2':
                                html += '</div></div>';
                                $this.html(html);
                                break;
                            case 'carousel':
                                html += '</div>';
                                $this.html(html);
                                var $slider = $this.find('.block-carousel');
                                $slider.owlCarousel({
                                    items: 3,
                                    slideBy: 3,
                                    margin: 20,
                                    smartSpeed: 150,
                                    nav: true,
                                    navText: ['', ''],
                                    loop: true,
                                    autoHeight: true,
                                    autoplay: false,
                                    dots: false,
                                    responsive: {
                                        0: {
                                            items: 1
                                        },
                                        541: {
                                            items: 2
                                        },
                                        681: {
                                            items: 3
                                        }
                                    }
                                });
                                break;
                            default:
                                html += '</div>';
                                $this.html(html);
                                break
                        }
                        $this.find('span.entry-thumb').lazyify()
                    },
                    error: function() {
                        switch (type) {
                            case 'msimple':
                                $this.append('<ul>' + msgServerError() + '</ul>');
                                break;
                            case 'breaking':
                                $this.html(msgServerError()).parent().addClass('show-ify');
                                break;
                            default:
                                $this.html(msgServerError());
                                break
                        }
                    }
                })
        }
    }
  
    function ajaxMega($this, type, num, label, text) {
        if (text.match('getmega')) {
            if (type == 'msimple' || type == 'megatabs' || type == 'mtabs') {
                return getAjax($this, type, num, label)
            } else {
                $this.addClass('has-sub mega-menu').append('<ul class="mega-widget">' + msgError() + '</ul>')
            }
        }
    }
  
    function ajaxBreaking($this, type, num, label, text) {
        if (text.match('getbreaking')) {
            if (type == 'breaking') {
                return getAjax($this, type, num, label)
            } else {
                $this.html(msgError()).parent().addClass('show-ify')
            }
        }
    }
  
    function ajaxFeatured($this, type, num, label, text) {
        if (text.match('getfeatured')) {
            if (type == 'featured1' || type == 'featured2' || type == 'featured3' || type == 'featured4' || type == 'featured5' || type == 'featured6') {
                return getAjax($this, type, num, label)
            } else {
                $this.html(beforeLoader()).parent().addClass('show-ify');
                setTimeout(function() {
                    $this.html(msgError())
                }, 500)
            }
        }
    }
  
    function ajaxBlock($this, type, num, label, text) {
        if (text.match('getblock')) {
            if (type == 'block1' || type == 'block2' || type == 'col-left' || type == 'col-right' || type == 'grid1' || type == 'grid2' || type == 'carousel' || type == 'videos') {
                var moreText = showMoreText,
                    text = '';
                if (moreText != '') {
                    text = moreText
                } else {
                    text = messages.showMore
                }
                $this.parent().find('.widget-title').append('<a class="more" href="/search/label/' + label + '">' + text + '</a>');
                return getAjax($this, type, num, label)
            } else {
                $this.html(msgError()).parent().addClass('show-ify')
            }
        }
    }
  
    function ajaxWidget($this, type, num, label, text) {
        if (text.match('getwidget')) {
            if (type == 'list') {
                return getAjax($this, type, num, label)
            } else {
                $this.html(msgError())
            }
        }
    }
  
    function ajaxRelated($this, type, num, label, text) {
        if (text.match('getrelated')) {
            return getAjax($this, type, num, label)
        }
    }
    if (data.view.isSingleItem == 'true') {
        $('.comments-title h3.title').each(function() {
            var $t = $(this),
                $tx = $t.text().trim(),
                $c = $t.attr('count').trim(),
                $m = $t.attr('message').trim(),
                $sp = $tx.split('/'),
                $r = '';
            if ($c == 0) {
                $r = $sp[1]
            } else {
                if ($sp[2] == undefined) {
                    $r = $sp[0] + ' ' + $m
                } else {
                    $r = $sp[0] + ' ' + $sp[2]
                }
            }
            $t.text($r)
        });
        $('.startinhitnews-blog-post-comments').each(function() {
            var $this = $(this),
                system = commentsSystem,
                facebook = '<div class="fb-comments" data-width="100%" data-href="' + disqus_blogger_current_url + '" order_by="time" data-numposts="5"></div>',
                sClass = 'comments-system-' + system;
            switch (system) {
                case 'blogger':
                    $this.addClass(sClass).show();
                    $('.entry-meta .entry-comments-link').addClass('show');
                    break;
                case 'disqus':
                    $this.addClass(sClass).show();
                    break;
                case 'facebook':
                    $this.addClass(sClass).show().find('#comments').replaceWith(facebook);
                    break;
                case 'hide':
                    $this.hide();
                    break;
                default:
                    $this.addClass('comments-system-default').show();
                    $('.entry-meta .entry-comments-link').addClass('show');
                    break
            }
        });
        // timeago
        !function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&"object"==typeof module.exports?t(require("jquery")):t(jQuery)}(function(t){t.timeago=function(e){return e instanceof Date?r(e):r("string"==typeof e?t.timeago.parse(e):"number"==typeof e?new Date(e):t.timeago.datetime(e))};var e=t.timeago;t.extend(t.timeago,{settings:{refreshMillis:6e4,allowPast:!0,allowFuture:!1,localeTitle:!1,cutoff:0,autoDispose:!0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:null,suffixFromNow:null,inPast:"vừa xong",seconds:"vừa xong",minute:"1 phút trước",minutes:"%d phút trước",hour:"1 giờ trước",hours:"%d giờ trước",day:"1 ngày trước",days:"%d ngày trước",month:"1 tháng trước",months:"%d tháng trước",year:"1 năm trước",years:"%d năm trước",wordSeparator:" ",numbers:[]}},inWords:function(e){if(!this.settings.allowPast&&!this.settings.allowFuture)throw"timeago allowPast and allowFuture settings can not both be set to false.";var i=this.settings.strings,a=i.prefixAgo,r=i.suffixAgo;if(this.settings.allowFuture&&e<0&&(a=i.prefixFromNow,r=i.suffixFromNow),!this.settings.allowPast&&e>=0)return this.settings.strings.inPast;var n=Math.abs(e)/1e3,o=n/60,s=o/60,u=s/24,l=u/365;function m(a,r){var n=t.isFunction(a)?a(r,e):a,o=i.numbers&&i.numbers[r]||r;return n.replace(/%d/i,o)}var c=n<45&&m(i.seconds,Math.round(n))||n<90&&m(i.minute,1)||o<45&&m(i.minutes,Math.round(o))||o<90&&m(i.hour,1)||s<24&&m(i.hours,Math.round(s))||s<42&&m(i.day,1)||u<30&&m(i.days,Math.round(u))||u<45&&m(i.month,1)||u<365&&m(i.months,Math.round(u/30))||l<1.5&&m(i.year,1)||m(i.years,Math.round(l)),d=i.wordSeparator||"";return void 0===i.wordSeparator&&(d=" "),t.trim([a,c,r].join(d))},parse:function(e){var i=t.trim(e);return i=(i=(i=(i=(i=i.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")).replace(/([\+\-]\d\d)$/," $100"),new Date(i)},datetime:function(i){var a=e.isTime(i)?t(i).attr("datetime"):t(i).attr("title");return e.parse(a)},isTime:function(e){return"time"===t(e).get(0).tagName.toLowerCase()}});var i={init:function(){i.dispose.call(this);var r=t.proxy(a,this);r();var n=e.settings;n.refreshMillis>0&&(this._timeagoInterval=setInterval(r,n.refreshMillis))},update:function(i){var r=i instanceof Date?i:e.parse(i);t(this).data("timeago",{datetime:r}),e.settings.localeTitle&&t(this).attr("title",r.toLocaleString()),a.apply(this)},updateFromDOM:function(){t(this).data("timeago",{datetime:e.parse(e.isTime(this)?t(this).attr("datetime"):t(this).attr("title"))}),a.apply(this)},dispose:function(){this._timeagoInterval&&(window.clearInterval(this._timeagoInterval),this._timeagoInterval=null)}};function a(){var i=e.settings;if(i.autoDispose&&!t.contains(document.documentElement,this))return t(this).timeago("dispose"),this;var a=function(i){if(!(i=t(i)).data("timeago")){i.data("timeago",{datetime:e.datetime(i)});var a=t.trim(i.text());e.settings.localeTitle?i.attr("title",i.data("timeago").datetime.toLocaleString()):!(a.length>0)||e.isTime(i)&&i.attr("title")||i.attr("title",a)}return i.data("timeago")}(this);return isNaN(a.datetime)||(0===i.cutoff||Math.abs(n(a.datetime))<i.cutoff?t(this).text(r(a.datetime)):t(this).attr("title").length>0&&t(this).text(t(this).attr("title"))),this}function r(t){return e.inWords(n(t))}function n(t){return(new Date).getTime()-t.getTime()}t.fn.timeago=function(t,e){var a=t?i[t]:i.init;if(!a)throw new Error("Unknown function name '"+t+"' for timeago");return this.each(function(){a.call(this,e)}),this},document.createElement("abbr"),document.createElement("time")}),$(".date-time a").each(function(){var t=$(this),e=(e=(e=t.html()).replace("SA","AM")).replace("CH","PM");t.attr("datetime",e),t.html(jQuery.timeago(e))});
    }
    $(function() {
        $('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();
        if (media <= 880) {
            $('.mobile-logo').each(function() {
                var $t = $(this),
                    $l = $('#main-logo .header-widget a').clone();
                $l.find('#h1-tag').remove();
                $l.appendTo($t)
            });
            $('#mobile-menu').each(function() {
                var $t = $(this),
                    $m = $('#startinhitnews-main-menu-nav').clone();
                $m.attr('id', 'main-mobile-nav');
                $m.find('.getMega, .mega-widget, .mega-tab').remove();
                $m.find('li.mega-tabs .complex-tabs').each(function() {
                    var $eq = $(this);
                    $eq.replaceWith($eq.find('> ul.select-tab').attr('class', 'sub-menu m-sub'))
                });
                $m.find('.mega-menu > a').each(function() {
                    var $a = $(this),
                        $h = $a.attr('href').trim().toLowerCase();
                    if ($h.match('getmega')) {
                        $a.attr('href', '/search')
                    }
                });
                $m.find('.mega-tabs ul li > a').each(function() {
                    var $a = $(this),
                        $l = $a.text().trim();
                    $a.attr('href', '/search/label/' + $l)
                });
                $m.appendTo($t);
                $('.show-mobile-menu, .hide-mobile-menu, .overlay').on('click', function() {
                    $('body').toggleClass('nav-active')
                });
                $('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>');
                $('.mobile-menu .mega-menu').find('.submenu-toggle').remove();
                $('.mobile-menu .mega-tabs').append('<div class="submenu-toggle"/>');
                $('.mobile-menu ul li .submenu-toggle').on('click', function($this) {
                    if ($(this).parent().hasClass('has-sub')) {
                        $this.preventDefault();
                        if (!$(this).parent().hasClass('show')) {
                            $(this).parent().addClass('show').children('.m-sub').slideToggle(170)
                        } else {
                            $(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)
                        }
                    }
                })
            });
            $('.social-mobile').each(function() {
                var $t = $(this),
                    $l = $('#about-section .social-footer').clone();
                $l.removeClass('social-color');
                $l.appendTo($t)
            });
        }
        $(window).scroll(function() {
            if (fixedMenu == true) {
                if ($(window).scrollTop() >= 190) {
                    $('.navbar-wrap .navbar').addClass('scroll');
                } else {
                    $('.navbar-wrap .navbar').removeClass('scroll');
                }
            }
        });
        if (media >= 880) {
            $('#main-wrapper, #sidebar-wrapper').each(function() {
                if (fixedSidebar == true) {
                    $(this).theiaStickySidebar({
                        additionalMarginTop: 60,
                        additionalMarginBottom: 20
                    })
                }
            });
        }
        if(media >= 880){
var showImageAdBlocker = 0;
function cancelAdBlocker() {
    document.getElementById("wrapperBlocker").remove();
}
function showImage() {
    if (showImageAdBlocker == 0) {
        document.getElementById("imageGuide").style.display = 'block';
        document.getElementById("wrapperBlockerStep1").style.display = 'none';
        document.getElementById("wrapperBlockerStep2").style.display = 'block';
        showImageAdBlocker = 1;
    } else {
        window.location.reload();
    }
}
document.addEventListener('DOMContentLoaded', function() {
    if(document.getElementById("wrapfabber").clientHeight <= 0){

        var body = document.body;
        var wrapperNoFlash = '<div id="wrapperBlocker" style="width:100%;height:100%;position: absolute;top: 0;font-family: Lato,sans-serif;overflow:auto;">\
            <div style="width: 100%;height: 100%;position: fixed;top: 0;left: 0;background: #000;z-index: 999;opacity: 0.8;"></div>\
            <div id="wrapperBlockerStep1" style="-webkit-box-sizing: border-box;box-sizing: border-box;width: 650px;margin: 0 auto;text-align: center;z-index: 9999;background-color: #fff;padding: 30px;position: relative;margin-top: 78px;margin-bottom: 78px;border-radius: 10px;color: #000;padding-bottom: 40px;overflow:auto;">\
                <img src="https://4.bp.blogspot.com/-gXZslqQcBUc/W2vvJr_PbmI/AAAAAAAAF4E/Mjn-M5lNYEAC79qSF9mhousBIHKkEQYXACLcBGAs/s320/eye_iris-tips.png" />\
                <h2 style="margin:0;padding:0;line-height: 50px;">Phát hiện AdBlocker</h2>\
                <p style="margin:0;font-size: 16px;line-height: 35px;">Chào bạn! Chúng tôi phát hiện rằng bạn đang sử dụng trình chặn quảng cáo.</p>\
                <p style="margin:0;font-size: 16px;line-height: 35px;">Iris Tips vẫn đang từng ngày chia sẻ các thủ thuật hoàn toàn miễn phí đến bạn.</p>\
                <p style="margin:0;font-size: 16px;line-height: 35px;margin-bottom: 35px;">Thích Iris Tips? Vui lòng cho Iris Tips vào whilelist trong trình chặn quảng cáo nhé ^_^</p>\
                <span ga-on="click" ga-event-action="click" ga-event-category="adblocker" ga-event-label="step1Cancel" onclick="cancelAdBlocker();" style="display:none;cursor: pointer;text-transform: uppercase;padding: 13px;color: #000;margin-right: 20px;" href="javascript:void(0)">Cancel</span>\
                <span ga-on="click" ga-event-action="click" ga-event-category="adblocker" ga-event-label="step1Yes" onclick="showImage()" style="cursor: pointer;text-transform: uppercase;padding: 13px;color: #000;background: #00fff2;border-radius: 4px;margin-left: 20px;" href="javascript:void(0)">Ok, mình sẽ whitelist Iris Tips</span>\
            </div>\
            <div id="wrapperBlockerStep2" style="display:none;-webkit-box-sizing: border-box;box-sizing: border-box;width: 650px;margin: 0 auto;z-index: 9999;background-color: #fff;padding: 30px;position: relative;margin-top: 78px;margin-bottom: 78px;border-radius: 10px;color: #000;padding-bottom: 40px;overflow:auto;height:500px">\
                <h2 style="margin:0;padding:0;line-height: 50px;text-align: center;">Whitelist bằng cách nào?</h2>\
                <p style="margin:0;font-size: 16px;line-height: 35px;margin-bottom: 5px;">Click vào icon của trình chặn quảng cáo AdBlock trên thanh menu.</p>\
                <p style="margin:0;font-size: 16px;line-height: 25px;">Đối với AdBlock: Chọn \'<b>Don\'t run on pages on this domain</b>\' để vô hiệu hóa Ad-Blocker trên Iris Tips</p>\
                <p style="margin:0;font-size: 16px;line-height: 25px;">Đối với Adblock Plus: Click chọn \'<b>Enabled on this site</b>\' để vô hiệu hóa Ad-Blocker trên Iris Tips</p>\
                <p style="margin:0;font-size: 16px;line-height: 35px;margin-bottom: 35px;margin-top: 5px;">Xong rồi đấy. Sau khi bạn đã whitelist Iris Tips, click vào nút \'Done\' nhé!</p>\
                <img id="imageGuide" style="margin: 0 auto;margin-bottom: 35px;margin-top: -15px;" src="https://4.bp.blogspot.com/-Amv1PcQ73Wc/W2vvJk8rltI/AAAAAAAAF4A/T33VsOyXyUMeEKOjs17GsuprzLFnU-FwACLcBGAs/s320/qc_iris-tips.png" />\
                <div style="text-align: center;"><span ga-on="click" ga-event-action="click" ga-event-category="adblocker" ga-event-label="step2Yes" onclick="showImage()" style="cursor: pointer;text-transform: uppercase;padding: 13px;color: #000;background: #00fff2;border-radius: 4px;margin-left: 20px;" href="javascript:void(0)">Done! ^_^</span></div>\
            </div>\
        </div>';
body.insertAdjacentHTML('beforeend', wrapperNoFlash);
document.body.style.overflow="hidden";
    }
});
  }
        if (media >= 540) {
            jQuery(document).ready(function() {
                    jQuery(window).scroll(function() {
                        220 < jQuery(this).scrollTop() ? jQuery("#scrollToTop").fadeIn(600) : jQuery("#scrollToTop").fadeOut(600)
                    })
                }),
                $(function() {
                    $(document).ready(function() {
                        $(".gototop").click(function() {
                            var t = $("#top").offset().top;
                            return $("html,body").animate({
                                scrollTop: t
                            }, 1e3)
                        }), $(".gotobottom").click(function() {
                            var t = $("#bottom").offset().top;
                            return $("html,body").animate({
                                scrollTop: t
                            }, 1e3)
                        })
                    })
                });
        }
        if (data.view.isMultipleItems == 'true') {
            $('#load-more-link').each(function() {
                var $this = $(this),
                    $loadLink = $this.data('load');
                if ($loadLink) {
                    $('#load-more-link').show()
                }
                $('#load-more-link').on('click', function(a) {
                    $('#load-more-link').hide();
                    $.ajax({
                        url: $loadLink,
                        success: function(data) {
                            var $p = $(data).find('.blog-posts');
                            $p.find('.index-post').addClass('post-animated post-fadeInUp');
                            $('.blog-posts').append($p.html());
                            $loadLink = $(data).find('#load-more-link').data('load');
                            if ($loadLink) {
                                $('#load-more-link').show()
                            } else {
                                $('#load-more-link').hide();
                                $('#blog-pager .no-more').addClass('show')
                            }
                            $('.index-post .entry-image-link .entry-thumb').lazyify()
                        },
                        beforeSend: function() {
                            $('#blog-pager .loading').show()
                        },
                        complete: function() {
                            $('#blog-pager .loading').hide()
                        }
                    });
                    a.preventDefault()
                })
            })
        }
    });
    if (data.view.isMobileRequest == 'true') {
        // delete ?m=1
        var uri;if((uri=window.location.toString()).indexOf("%3D","%3D")>0){var clean_uri=uri.substring(0,uri.indexOf("%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("%3D%3D","%3D%3D")>0){clean_uri=uri.substring(0,uri.indexOf("%3D%3D"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("&m=1","&m=1")>0){clean_uri=uri.substring(0,uri.indexOf("&m=1"));window.history.replaceState({},document.title,clean_uri)}if((uri=window.location.toString()).indexOf("?m=1","?m=1")>0){clean_uri=uri.substring(0,uri.indexOf("?m=1"));window.history.replaceState({},document.title,clean_uri)}var protocol=window.location.protocol.replace(/\:/g,"");if("http"==protocol){var url=window.location.href.replace("http","https");window.location.replace(url)}
    }
    if (data.view.isPost == 'true') {
      // box category
      var postBody=document.querySelector(".post-body"),titleChapter=postBody.querySelectorAll("h2,h3");if(3<=titleChapter.length){var i,leChapteraptor=[];for(i=0;i<titleChapter.length;i++)anchorChapter="chapter-"+(i+1),titleChapter[i].setAttribute("id",anchorChapter),titleChapter[i].setAttribute("title","Lên đầu trang"),leChapteraptor[i]="<li data-target=#"+anchorChapter+">"+titleChapter[i].innerHTML+"</li>";$(".box_category").html('<p>Nội dung chính <label></label></p><ul class="chapter">'+leChapteraptor.join("")+"</ul>")}else $(".box_category").remove();for($(function(){var t=$(".post-body a[name=more]");t?$(".box_category").insertAfter(t):$(".box_category").remove()}),$(".box_category p>label").click(function(){$(this).toggleClass("show"),$(this).parent().parent().find("ul").slideToggle("slow")}),$(".box_category li").bind("click",function(){var t=$(this).attr("data-target");$("html, body").stop().animate({scrollTop:$(t).offset().top-70},"slow")}),k=0;k<titleChapter.length;k++)titleChapter[k].addEventListener("click",function(){$("html, body").stop().animate({scrollTop:$(".box_category").position().top},"slow")});
      // get title posts
      $('.post-nav')['each'](function() {
          var getLinkOlderPost = $('a.blog-pager-older-link')['attr']('href'),
              getLinkNewerPost = $('a.blog-pager-newer-link')['attr']('href');
          $['ajax']({
              url: getLinkOlderPost,
              type: 'get',
              success: function(data) {
                  var getTitle = $(data)['find']('.blog-post h1.entry-title')['text']();
                  $('.post-older a .post-nav-inner p')['text'](getTitle)
              }
          });
          $['ajax']({
              url: getLinkNewerPost,
              type: 'get',
              success: function(data) {
                  var getTitle = $(data)['find']('.blog-post h1.entry-title')['text']();
                  $('.post-newer a .post-nav-inner p')['text'](getTitle)
              }
          })
      });
      // post views
      $(function(){jQuery.getScript("https://cdn.firebase.com/js/client/2.3.2/firebase.js").done(function(){$.each($(".post-views"),function(t,a){var e=$(a).find("#postviews"),i=$('link[rel="canonical"]').attr("href"),n=new Firebase("https://nguyen-tinh.firebaseio.com/pages/id/"+$(a).attr("data-id"));n.once("value",function(t){var r=t.val(),l=!1;null==r&&((r={}).value=0,r.url=$(a).attr("data-href"),r.id=$(a).attr("data-id"),l=!0),e.text(r.value),r.value++,"/"!=window.location.pathname&&$(a).attr("data-href")==i&&(l?n.set(r):n.child("value").set(r.value))})})})});
      // lazy load
      !function(e){e.fn.lazyload=function(t){var o={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};t&&e.extend(o,t);var n=this;return"scroll"==o.event&&e(o.container).bind("scroll",function(t){var i=0;n.each(function(){if(e.abovethetop(this,o)||e.leftofbegin(this,o));else if(e.belowthefold(this,o)||e.rightoffold(this,o)){if(i++>o.failurelimit)return!1}else e(this).trigger("appear")});var r=e.grep(n,function(e){return!e.loaded});n=e(r)}),this.each(function(){var t=this;null==e(t).attr("original")&&e(t).attr("original",e(t).attr("src")),"scroll"!=o.event||null==e(t).attr("src")||o.placeholder==e(t).attr("src")||e.abovethetop(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.rightoffold(t,o)?(o.placeholder?e(t).attr("src",o.placeholder):e(t).removeAttr("src"),t.loaded=!1):t.loaded=!0,e(t).one("appear",function(){this.loaded||e("<img />").bind("load",function(){e(t).hide().attr("src",e(t).attr("original"))[o.effect](o.effectspeed),t.loaded=!0}).attr("src",e(t).attr("original"))}),"scroll"!=o.event&&e(t).bind(o.event,function(o){t.loaded||e(t).trigger("appear")})}),e(o.container).trigger(o.event),this},e.belowthefold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).height()+e(window).scrollTop();else n=e(o.container).offset().top+e(o.container).height();return n<=e(t).offset().top-o.threshold},e.rightoffold=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).width()+e(window).scrollLeft();else n=e(o.container).offset().left+e(o.container).width();return n<=e(t).offset().left-o.threshold},e.abovethetop=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollTop();else n=e(o.container).offset().top;return n>=e(t).offset().top+o.threshold+e(t).height()},e.leftofbegin=function(t,o){if(void 0===o.container||o.container===window)var n=e(window).scrollLeft();else n=e(o.container).offset().left;return n>=e(t).offset().left+o.threshold+e(t).width()},e.extend(e.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})}(jQuery),$(function(){$(".separator img,.tr-caption-container img").lazyload({placeholder:"//1.bp.blogspot.com/-Qg5bi1ZtDdM/VZ5nHAyYBqI/AAAAAAAAChE/exGnasO4oyk/s640/arlinadesign.gif",effect:"fadeIn",threshold:"-50"})});
    }
  });
  // dark mode
  function auto(){document.body.classList.add('auto');if(new Date().getHours()>21||new Date().getHours()<6){document.body.classList.add('dark');localStorage.setItem('227519dark','true')}else{document.body.classList.remove('dark');localStorage.setItem('227519dark','false')}}function dark(){localStorage.getItem('227519dark')=='true'?document.body.classList.add('dark'):document.body.classList.remove('dark')}if(localStorage.getItem('227519auto')=='true'){auto()}else{localStorage.getItem('227519dark')==null?auto():dark()}function toggle(){localStorage.setItem('227519auto',localStorage.getItem('227519auto')=='true'?'false':'true');localStorage.getItem('227519auto')=='true'?auto():document.body.classList.remove('auto')}function mode(){document.body.classList.remove('auto');localStorage.removeItem('227519auto');localStorage.setItem('227519dark',localStorage.getItem('227519dark')=='true'?'false':'true');dark()}
