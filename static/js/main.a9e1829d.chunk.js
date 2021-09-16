(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),r=a.n(s),i=(a(13),a(0));function l(){return Object(i.jsx)("nav",{className:"#e040fb purple accent-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"Logo"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Reposit"})})})]})})}function o(){return Object(i.jsx)("footer",{className:"page-footer #e040fb purple accent-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Reposit"})]})})})}var h=a(2),j=a(3),d=a(5),p=a(4),b=a(8);function u(e){var t=e.Title,a=e.Year,c=e.imdbID,n=e.Type,s=e.Poster;return Object(i.jsxs)("div",{id:c,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x450?text=".concat(t)}):Object(i.jsx)("img",{className:"activator",src:s})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:n})]})]})]})}function m(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(i.jsx)(u,Object(b.a)({},e),e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing found"})})}function v(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var O=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:"all"},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){e.props.searchMovies(e.state.search,e.state.type)}))},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"row",children:[Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{placeholder:"search",id:"email_inline",type:"search",className:"validate",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("p",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies only"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series only"})]})]})})]})}}]),a}(c.Component),x="9cadd4b2",f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.searchMovies=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(O,{searchMovies:this.searchMovies}),a?Object(i.jsx)(v,{}):Object(i.jsx)(m,{movies:t})]})}}]),a}(c.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(f,{}),Object(i.jsx)(o,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a9e1829d.chunk.js.map