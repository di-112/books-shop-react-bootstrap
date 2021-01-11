(this["webpackJsonpweb-shop"]=this["webpackJsonpweb-shop"]||[]).push([[0],{109:function(e,t,c){},110:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(0),s=c.n(o),r=c(45),a=c.n(r),i=(c(109),c(110),c(18)),b=c(231),l=c(232),j=function(e){var t=e.handleSubmit;return Object(n.jsxs)("form",{className:"d-flex",onSubmit:t,children:[Object(n.jsx)(l.a,{component:"input",className:"form-control mr-2",name:"book",type:"search",placeholder:"Edit book...","aria-label":"Search"}),Object(n.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:" Search"})]})},u=j=Object(b.a)({form:"searchForm"})(j),d=function(e){return Object(n.jsx)("header",{className:"header navbar navbar-expand-lg navbar-light bg-light",children:Object(n.jsxs)("div",{className:"header__container",children:[Object(n.jsx)(i.b,{to:"/home",exact:!0,onClick:e.setBooks,className:"navbar-brand","aria-current":"page",href:"#",children:Object(n.jsx)("img",{src:"https://f0.pngfuel.com/png/1024/338/computer-icons-e-book-e-readers-book-png-clip-art-thumbnail.png",alt:""})}),Object(n.jsxs)("div",{className:"header__menu collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(n.jsxs)("ul",{className:"header__links navbar-nav mr-auto mb-2 mb-lg-0",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/home",exact:!0,className:"nav-link","aria-current":"page",onClick:e.setBooks,href:"#",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.b,{to:"/cart",className:"nav-link","aria-current":"page",href:"#",children:"Cart"})})]}),Object(n.jsxs)(i.b,{to:"/cart",className:"cartIcon d-flex","aria-current":"page",href:"#",children:[Object(n.jsx)("img",{title:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430",src:"https://baden-shop.ru/images/basket.png",alt:""}),e.choosenBooks.length?Object(n.jsx)("span",{children:function(e){for(var t=0,c=0;c<e.length;c++)t+=e[c].count;return t}(e.choosenBooks)}):""]}),Object(n.jsx)(u,{onSubmit:function(t){e.searchBook(t.book)}})]})]})})},h=c(10),O=c(30),k=c(6),m=c(102),f={getBooks:function(){return m.get("https://web-shop-fd168-default-rtdb.firebaseio.com/books.json").then((function(e){return e.data}))}},p="booksReducer/SET_BOOKS",x="booksReducer/SEARCH_BOOK",g="booksReducer/TOGGLE_IS_LOADING",B="booksReducer/SET_ALERT",v={books:[],isLoading:!1,alert:{}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(k.a)(Object(k.a)({},e),{},{books:t.books?Object(O.a)(t.books):Object(O.a)(e.books)});case x:return Object(k.a)(Object(k.a)({},e),{},{books:[t.book]});case g:return Object(k.a)(Object(k.a)({},e),{},{isLoading:t.isLoading});case B:return Object(k.a)(Object(k.a)({},e),{},{alert:Object(k.a)({},t.alert)});default:return Object(k.a)({},e)}},_=function(e){return{type:p,books:e}},y=function(e){return{type:g,isLoading:e}},C=function(e){return{type:B,alert:e}},E=function(){return function(e){e(y(!0)),e(C(!1)),f.getBooks().then((function(t){e(_(Object(O.a)(t))),e(y(!1))}))}},w="cartReducer/ADD_BOOK",P="cartReducer/REMOVE_BOOK",L="cartReducer/INCREMENT_COUNT_BOOK",R="cartReducer/DECREMENT_COUNT_BOOK",S={choosenBooks:[],allPrice:0},D=function(e){for(var t=0,c=0;c<e.length;c++)t+=e[c].price*e[c].count;return t},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,c=[],n=0;switch(t.type){case w:return c=e.choosenBooks.concat([Object(k.a)(Object(k.a)({},t.book),{},{count:1})]),n=D(c),Object(k.a)(Object(k.a)({},e),{},{choosenBooks:c,allPrice:n});case P:return c=e.choosenBooks.filter((function(e){return e.title!=t.book.title})),n=D(c),Object(k.a)(Object(k.a)({},e),{},{choosenBooks:c,allPrice:n});case L:return e.choosenBooks.map((function(e){return e.title})).includes(t.book.title)?(c=e.choosenBooks.map((function(e){return e.title===t.book.title?Object(k.a)(Object(k.a)({},e),{},{count:e.count+1}):e})),n=D(c),Object(k.a)(Object(k.a)({},e),{},{choosenBooks:c,allPrice:n})):Object(k.a)({},e);case R:return e.choosenBooks.map((function(e){return e.title})).includes(t.book.title)?(c=e.choosenBooks.map((function(e){return e.title===t.book.title&&e.count>1?Object(k.a)(Object(k.a)({},e),{},{count:e.count-1}):e})),n=D(c),Object(k.a)(Object(k.a)({},e),{},{choosenBooks:c,allPrice:n})):Object(k.a)({},e);default:return Object(k.a)({},e)}},T=function(e){return{type:w,book:e}},F=function(e){return{type:P,book:e}},I=Object(h.b)((function(e){return{choosenBooks:e.cart.choosenBooks}}),{addBook:T,removeBook:F})((function(e){var t=e.book,c=e.addBook,o=e.choosenBooks,s=e.removeBook;return Object(n.jsxs)("div",{class:"card book",children:[Object(n.jsx)("img",{src:t.image,class:"card-img-top book__img",alt:"..."}),Object(n.jsxs)("div",{class:"card-body book__body",children:[Object(n.jsx)("h5",{class:"card-title",children:t.title}),Object(n.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{children:" \u0410\u0432\u0442\u043e\u0440:"})," ",t.author]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{children:"\u0426\u0435\u043d\u0430:"})," ",t.price," \u0440\u0443\u0431."]}),Object(n.jsxs)("li",{className:"list-group-item",children:[Object(n.jsx)("span",{children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433:"})," ",t.rating,"/5"]})]}),Object(n.jsx)("div",{className:"btn_container",children:o.map((function(e){return e.title})).includes(t.title)?Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),s(t)},className:"btn btn-danger",children:" \u0423\u0434\u0430\u043b\u0438\u0442\u044c"}):Object(n.jsx)("button",{onClick:function(e){e.preventDefault(),c(t)},className:"btn btn-primary",children:" \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})]})})),K=Object(h.b)((function(){}),{setBooks:E,sortPriceDown:function(){return function(e){e(y(!0)),f.getBooks().then((function(t){e(_(Object(O.a)(t).sort((function(e,t){return t.price-e.price})))),e(y(!1))}))}},sortPriceUp:function(){return function(e){e(y(!0)),f.getBooks().then((function(t){e(_(Object(O.a)(t).sort((function(e,t){return e.price-t.price})))),e(y(!1))}))}}})((function(e){var t=e.books,c=e.setBooks,o=e.sortPriceDown,s=e.sortPriceUp;return 1===t.length?Object(n.jsxs)("div",{className:"search container",children:[t.map((function(e){return Object(n.jsx)(I,{book:e},e.title)})),Object(n.jsx)("button",{className:"btn btn-danger",onClick:c,children:"\u041d\u0430\u0437\u0430\u0434"})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"sortBooksBtns container",children:[Object(n.jsx)("button",{className:"btn btn-secondary",onClick:o,children:"\u0426\u0435\u043d\u0430 \u2193"}),Object(n.jsx)("button",{className:"btn btn-secondary",onClick:s,children:"\u0426\u0435\u043d\u0430 \u2191"}),Object(n.jsx)("button",{className:"btn btn-secondary",onClick:c,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})]}),Object(n.jsx)("div",{className:"books container",children:t&&t.map((function(e){return Object(n.jsx)(I,{book:e},e.title)}))})]})})),M=function(){return Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)("div",{className:"spinner-border text-dark",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})})},U=c(9),G=c(8),H=Object(h.b)((function(){}),{incrementCountBook:function(e){return{type:L,book:e}},decrementCountBook:function(e){return{type:R,book:e}}})((function(e){var t=e.book,c=e.removeBook,o=e.incrementCountBook,s=e.decrementCountBook;return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"cart__book",children:[Object(n.jsx)("img",{src:t.image,alt:"",className:"book__img"}),Object(n.jsx)("span",{className:"book__title",children:t.title}),Object(n.jsxs)("div",{className:"book_count",children:[Object(n.jsx)("button",{className:"btn btn-danger",disabled:1===t.count,onClick:function(e){e.preventDefault(),s(t)},children:"-"}),Object(n.jsxs)("span",{className:"",children:[" ",t.count," \u0448\u0442. "]}),Object(n.jsx)("button",{className:"btn btn-success",onClick:function(e){e.preventDefault(),o(t)},children:"+"})]}),Object(n.jsxs)("span",{className:"book__price",children:[t.price," \u0440\u0443\u0431."]}),Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(e){e.preventDefault(),c(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},t.title)})),J=Object(h.b)((function(e){return{choosenBooks:e.cart.choosenBooks,allPrice:e.cart.allPrice}}),{addBook:T,removeBook:F})((function(e){return Object(n.jsx)("div",{className:"cart container",children:e.choosenBooks.length?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("ul",{children:e.choosenBooks.map((function(t){return Object(n.jsx)("li",{children:Object(n.jsx)(H,{book:t,removeBook:e.removeBook,addBook:e.addBook})})}))}),Object(n.jsxs)("div",{className:"cart__price",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430: ",Object(n.jsxs)("span",{children:[e.allPrice," \u0440\u0443\u0431\u043b\u0435\u0439"]})," ",Object(n.jsx)("a",{className:"btn btn-success",href:"https://qiwi.com/",target:"_blank",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]}):Object(n.jsxs)("div",{className:"cartEmpty",children:[Object(n.jsx)("p",{style:{textAlign:"center"},children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(n.jsx)(i.b,{to:"/",exact:!0,type:"button",class:"btn btn-danger",children:"Back"})]})})})),q=function(e){var t="danger"===e.alert.type?"alert-danger":"success"===e.alert.type?"alert-success":"alert-warning",c="";switch(t){case"alert-danger":c="\u041a\u043d\u0438\u0433\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430";break;case"alert-success":c="\u041a\u043d\u0438\u0433\u0430 \u043d\u0430\u0439\u0434\u0435\u043d\u0430";break;case"alert-warning":c="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}return Object(n.jsxs)("div",{className:"alert ".concat(t),children:[Object(n.jsxs)("span",{children:[" ",Object(n.jsx)("strong",{children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!"})," ",c," "]}),Object(n.jsx)("button",{onClick:function(){return e.changeAlert({show:!1,type:""})},type:"button",class:"alert__closeBtn close",children:"\xd7"})]})},V=Object(h.b)((function(e){return{books:e.books.books,alert:e.books.alert}}),{changeAlert:C})((function(e){return Object(n.jsx)(n.Fragment,{children:e.alert.show?Object(n.jsx)(q,{alert:e.alert,changeAlert:e.changeAlert}):Object(n.jsx)(K,{books:e.books})})}));var z=Object(G.d)(U.f,Object(h.b)((function(e){return{books:e.books.books,isLoading:e.books.isLoading,alert:e.books.alert,searchedBook:e.books.searchedBook,choosenBooks:e.cart.choosenBooks}}),{setBooks:E,searchBook:function(e){return function(t){t(y(!0)),console.log("response.data"),f.getBooks().then((function(c){var n=!1;c.forEach((function(c){c.title===e&&(t(function(e){return{type:x,book:e}}(c)),n=!0)})),n||t(C({type:"danger",show:!0})),t(y(!1))}))}},changeAlert:C}))((function(e){return Object(o.useEffect)((function(){e.setBooks()}),[]),Object(n.jsxs)("div",{className:"App container-xxl",children:[Object(n.jsx)(U.a,{to:"/home"}),Object(n.jsx)(d,{setBooks:e.setBooks,searchBook:e.searchBook,choosenBooks:e.choosenBooks}),e.isLoading?Object(n.jsx)(M,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(U.b,{path:"/home",exact:!0,render:function(){return Object(n.jsx)(V,{})}}),Object(n.jsx)(U.b,{path:"/cart",exact:!0,render:function(){return Object(n.jsx)(J,{})}})]})]})})),Q=c(233),W=c(103),X=Object(G.c)({form:Q.a,books:N,cart:A}),Y=Object(G.e)(X,Object(G.a)(W.a)),Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,234)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),o(e),s(e),r(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(i.a,{children:Object(n.jsx)(h.a,{store:Y,children:Object(n.jsx)(z,{})})})}),document.getElementById("root")),Z()}},[[230,1,2]]]);
//# sourceMappingURL=main.8c9973aa.chunk.js.map