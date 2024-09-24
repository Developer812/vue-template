;(window._iconfont_svg_string_4690133 =
  '<svg><symbol id="icon-icon_label_mine_plane_theme" viewBox="0 0 1024 1024"><path d="M901.791846 1024H122.230886a122.22976 122.22976 0 0 1-46.848-235.12064 1024.7296 1024.7296 0 0 1 873.2672 0A122.22976 122.22976 0 0 1 901.791846 1024zM512.011366 614.4a307.2 307.2 0 1 1 307.2-307.2 307.2 307.2 0 0 1-307.2 307.2z m144.81664-216.6912a38.4 38.4 0 0 0-54.30784 0 128 128 0 0 1-181.0176 0 38.4 38.4 0 0 0-54.30784 54.30784 204.8 204.8 0 0 0 289.63328 0 38.4 38.4 0 0 0 0-54.30784z"  ></path></symbol></svg>'),
  ((n) => {
    var e = (t = (t = document.getElementsByTagName('script'))[
        t.length - 1
      ]).getAttribute('data-injectcss'),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        d,
        a,
        c,
        s = function (e, t) {
          t.parentNode.insertBefore(e, t)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (e) {
          console && console.log(e)
        }
      }
      ;(o = function () {
        var e,
          t = document.createElement('div')
        ;(t.innerHTML = n._iconfont_svg_string_4690133),
          (t = t.getElementsByTagName('svg')[0]) &&
            (t.setAttribute('aria-hidden', 'true'),
            (t.style.position = 'absolute'),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = 'hidden'),
            (t = t),
            (e = document.body).firstChild
              ? s(t, e.firstChild)
              : e.appendChild(t))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((d = o),
            (a = n.document),
            (c = !1),
            r(),
            (a.onreadystatechange = function () {
              'complete' == a.readyState && ((a.onreadystatechange = null), l())
            }))
    }
    function l() {
      c || ((c = !0), d())
    }
    function r() {
      try {
        a.documentElement.doScroll('left')
      } catch (e) {
        return void setTimeout(r, 50)
      }
      l()
    }
  })(window)
