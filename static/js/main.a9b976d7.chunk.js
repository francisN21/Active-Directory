(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(12),r=n.n(c),i=(n(22),n.p,n(23),n(13)),o=n(14),l=n(17),u=n(16),h=(n(24),n(0)),d=function(e){return Object(h.jsx)("div",{className:" search-placeholder",children:Object(h.jsx)("form",{children:Object(h.jsx)("input",{onChange:e.handleInputChange,value:e.userSearch,className:" search-bar",name:"search",type:"text",placeholder:"Search by First or Last name","aria-label":"Search"})})})},j=n(15),m=n.n(j),p=function(){return m.a.get("https://randomuser.me/api/?results=50")},b=(n(44),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={sort:"",employees:[],userSearch:""},e.handleInputChange=function(t){if(t.target.name="search"){!function(t){var n="";n+=t,e.setState({userSearch:n}),console.log(n)}(t.target.value.toLowerCase()||t.target.value)}},e.sortByFirstname=function(){var t=e.state.employees.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:void 0}));"y"===e.state.sort?(t.reverse(),e.setState({sort:"x"})):e.setState({sort:"y"}),e.setState({employees:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({employees:t.data.results}),console.log(e.state.employees[0])})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container position-relative",children:[Object(h.jsx)(d,{handleInputChange:this.handleInputChange,search:this.state.userSearch}),Object(h.jsx)("button",{onClick:this.sortByFirstname,children:"Sort by Name"}),this.state.employees.map((function(t){return t.name.first.toLowerCase().includes(e.state.userSearch)||t.name.last.toLowerCase().includes(e.state.userSearch)?Object(h.jsxs)("div",{className:"user-container col-md-12",children:[Object(h.jsx)("img",{className:"user-image",src:t.picture.medium,alt:"dp"}),Object(h.jsxs)("p",{children:[t.name.first," ",t.name.last]}),Object(h.jsxs)("p",{children:[t.location.city,", ",t.location.state]}),Object(h.jsx)("p",{children:t.email}),Object(h.jsx)("p",{children:t.cell})]},t.login.uuid):null}))]})}}]),n}(a.Component)),f=(n(45),function(){return Object(h.jsx)("div",{className:"col-md-12 nav-container  position-relative",children:Object(h.jsx)("h1",{className:"header-content",children:"Active Directory"})})});var v=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(f,{})}),Object(h.jsx)("div",{className:"content-container",children:Object(h.jsx)(b,{})})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),O()}},[[46,1,2]]]);
//# sourceMappingURL=main.a9b976d7.chunk.js.map