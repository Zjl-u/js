window.addEventListener('load', function () {
    var lft = document.querySelector('.lft');
    var rit = document.querySelector('.rit');
    var focus = document.querySelector('.focus');
    focus.addEventListener('mouseenter', function () {
        lft.style.display = 'block';
        rit.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function () {
        lft.style.display = 'none';
        rit.style.display = 'none';
        timer = setInterval(function () {
            rit.click();
        }, 2000)
    })
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            var focusWidth = focus.offsetWidth;
            annimate(ul, -index * 1044);
        })
    }
    ol.children[0].className = 'current';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    rit.addEventListener('click', function () {
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0
        }
        num++;
        annimate(ul, -num * 1044)
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        circleChange();
    })
    lft.addEventListener('click', function () {
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * 1044 + 'px';
        }
        num--;
        annimate(ul, -num * 1044)
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        circleChange();
    })
    function circleChange() {
        for (var i = 0; i < ul.children.length; i++) {
            ol.children[i].className = '';
            ol.children[circle].className = 'current';
        }
    }
    var timer = setInterval(function () {
        rit.click();
    }, 2000)
})