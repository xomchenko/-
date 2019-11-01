
$(function(){
    /*плагин*/
    (function($){
        $.fn.liImageLoad = function(){
            return this.each(function(){
                var imgEl = $(this),
                    imgElHeight = imgEl.attr('height'),
                    imgElSrc = imgEl.data('src'),
                    imgElPosTop = imgEl.offset().top,
                    imgElPosBot = (imgElPosTop + imgEl.outerHeight()),
                    wH = $(window).height(),
                    wT = $(window).scrollTop(),
                    wB = (wT + wH),
                    f1 = false,
                    data = 'data:image/gif;base64,R0lGODlhMgAyAIAAAO7u7gAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjAgNjEuMTM0Nzc3LCAyMDEwLzAyLzEyLTE3OjMyOjAwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkU3RDVGRjNGQjRFMTFFMTk5OEVCNEEyNEEzOUZFMTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkU3RDVGRjRGQjRFMTFFMTk5OEVCNEEyNEEzOUZFMTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTdENUZGMUZCNEUxMUUxOTk4RUI0QTI0QTM5RkUxNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRTdENUZGMkZCNEUxMUUxOTk4RUI0QTI0QTM5RkUxNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAAAAAAALAAAAAAyADIAQAIzhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKicFADs='
                    
                    imgEl.attr('src',data)
                 
                function imgElPos(){    
                    if(f1 == false){
                        if(imgElPosBot > wT && imgElPosTop < wB){
                            f1 = true;
                            imgEl.attr('src',imgElSrc).load(function(){
                                imgEl.css({opacity:'0'}).animate({opacity:'1'});
                            });
                        }
                    }
                }
                imgElPos();
                $(window).on('scroll',function(){
                    wH = $(window).height();    
                    wT = $(window).scrollTop();
                    wB = (wT + wH);
                    imgElPos()
                })
            });
        };
    })(jQuery);
    
    /*инициализация плагина*/
    $('img[data-src]').liImageLoad();
});