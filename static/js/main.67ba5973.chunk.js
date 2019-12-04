(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/tortoise_white.b97c5779.png"},135:function(e,t,a){e.exports=a(275)},140:function(e,t,a){},141:function(e,t,a){},143:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),o=a.n(i),c=(a(140),a(18)),s=a(20),l=a(25),u=a(21),m=a(24),p=(a(141),a(53)),f=a.n(p),h=a(119),v=a.n(h),d=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("img",{src:v.a,alt:"logo",width:500,height:100,mode:"fit"}))}}]),t}(n.Component),g=a(277),y=a(329),E=a(11),k=a.n(E),b=a(13),w=a(35),j=(a(143),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={artist:void 0,artistInfo:""},e.refreshArtist=e.refreshArtist.bind(Object(w.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getArtist",value:function(){var e=Object(b.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.abrupt("return",new Promise((function(e,a){void 0!==t.props.spotifyApi?t.props.spotifyApi.getMyCurrentPlaybackState().then((function(n){void 0!==n.item?(t.setState({artist:n.item.artists[0].name}),e()):a("Error: Invalid Song Object")})):a("Error: Invalid Spotify API")})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getArtistInfo",value:function(){var e=this,t="https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&origin=*&indexpageids&titles="+e.state.artist;fetch(t).then((function(e){return e.json()})).then((function(t){var a=t.query.pageids[0],n=t.query.pages[a].extract;e.setState({artistInfo:n})}))}},{key:"refreshArtist",value:function(){var e=Object(b.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getArtist();case 2:this.getArtistInfo();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"artist"},this.state.artistInfo)}}]),t}(n.Component)),O=(a(144),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={artist:void 0,song:void 0,LyricsInfo:"No Lyrics loaded yet"},e.refreshArtist=e.refreshArtist.bind(Object(w.a)(e)),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getSong",value:function(){var e=Object(b.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.abrupt("return",new Promise((function(e,a){void 0!==t.props.spotifyApi?t.props.spotifyApi.getMyCurrentPlaybackState().then((function(n){void 0!==n.item?(t.setState({song:n.item.name}),e()):a()})):a()})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getArtist",value:function(){var e=Object(b.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.abrupt("return",new Promise((function(e,a){void 0!==t.props.spotifyApi?t.props.spotifyApi.getMyCurrentPlaybackState().then((function(n){void 0!==n.item?(t.setState({artist:n.item.artists[0].name}),e()):a()})):a()})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestLyricsFor",value:function(){var e=Object(b.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}throw new TypeError("Input value was undefined!");case 2:return e.abrupt("return",new Promise(function(){var e=Object(b.a)(k.a.mark((function e(a,n){var r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cors-anywhere.herokuapp.com/",e.next=3,fetch("https://cors-anywhere.herokuapp.com/"+"https://some-random-api.ml/lyrics/?title=".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:r=e.sent,a(r.lyrics);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLyrics",value:function(){var e=Object(b.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,e.next=3,this.requestLyricsFor(t.state.song+" "+t.state.artist);case 3:a=e.sent,t.setState({LyricsInfo:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refreshArtist",value:function(){var e=Object(b.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getSong();case 2:return e.next=4,this.getArtist();case 4:this.getLyrics();case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"componentWillUnmount",value:function(){this.props.onRef(void 0)}},{key:"render",value:function(){var e=this.state.LyricsInfo;return void 0===e&&(e="No Lyrics loaded yet"),r.a.createElement("div",{className:"lyrics"},e.split("\n").map((function(e,t){return r.a.createElement("p",{key:t,"text-align":"center"},e)})))}}]),t}(n.Component)),P=(a(145),a(82)),x=(a(146),a(120)),S=a(318),A=a(321),C=a(319),N=a(320),T=a(330),I=a(317),_=a(322),L=a(315),M=new f.a,R=Object(x.a)({root:{width:"100%",overflowX:"auto"},table:{minWidth:650},tableWrapper:{maxHeight:440,overflow:"auto"}}),D="https://api.spotify.com/v1/recommendations?",q=function e(){Object(c.a)(this,e),this.get=function(e,t){var a=new XMLHttpRequest;a.responseType="json",a.onreadystatechange=function(){4===a.readyState&&200===a.status&&t(a.response)};var n=M.getAccessToken();a.open("GET",e,!0),a.setRequestHeader("Authorization","Bearer "+n),a.send()}};function U(e,t,a,n,r){return{song:e,artist:t,albumCover:a,preview:n,addToQueue:r}}var W=[],H=void 0,B=void 0;function K(){return(K=Object(b.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){void 0!==M?(M.getMyCurrentPlaybackState().then((function(e){if(H=void 0,B=void 0,void 0!==e.item){if(H=e.item.id,1===e.item.artists[0].id.length)B=e.item.artists[0].id;else{B=e.item.artists[0].id;for(var t=1;t<e.item.artists.length;t++)B=B+","+e.item.artists[t].id}console.log(B)}})),e()):t()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){!function(){K.apply(this,arguments)}(),function(e){var t=new q,a=D;console.log(B),void 0!==B&&void 0!==H&&(a=a+"seed_artists="+B+"&seed_tracks="+H+"&limit="+e+"&market=US",console.log(a),t.get(a,(function(t){W=[];var a="";if(void 0!==t)for(var n=0;n<e;n++){var r=t.tracks[n].name,i=t.tracks[n].artists[0].name;a=null!=t.tracks[n].preview_url?t.tracks[n].preview_url:"No Preview Available";var o=U(r,i,t.tracks[n].album.images[0].url,a);W.push(o)}})))}(e)}function F(){var e=R(),t=r.a.useState(0),a=Object(P.a)(t,2),n=a[0],i=a[1],o=r.a.useState(10),c=Object(P.a)(o,2),s=c[0],l=c[1],u=r.a.createElement(L.a,null,"play_circle_outline");V(50);return W.length>0?r.a.createElement(I.a,{className:e.root},r.a.createElement("div",{className:e.tableWrapper},r.a.createElement(S.a,{className:e.table,stickyHeader:!0,"aria-label":"Song Recommendations"},r.a.createElement(C.a,null,r.a.createElement(N.a,null,r.a.createElement(A.a,null),r.a.createElement(A.a,{align:"left"},"Song Name"),r.a.createElement(A.a,{align:"left"},"Artist"),r.a.createElement(A.a,{align:"left"},"Preview"))),r.a.createElement(_.a,null,W.slice(n*s,n*s+s).map((function(e){return r.a.createElement(N.a,{hover:!0,className:"Row",key:e.song},r.a.createElement(A.a,{className:"AlbumCover",align:"left"},r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.albumCover,alt:"album cover"}))),r.a.createElement(A.a,{component:"th",scope:"row"},e.song),r.a.createElement(A.a,{align:"left"},e.artist),r.a.createElement(A.a,{align:"left",component:"a",href:e.preview},r.a.createElement("div",null,u)))}))))),r.a.createElement(T.a,{rowsPerPageOptions:[5,10,25],component:"div",count:W.length,rowsPerPage:s,page:n,backIconButtonProps:{"aria-label":"previous page"},nextIconButtonProps:{"aria-label":"next page"},onChangePage:function(e,t){i(t)},onChangeRowsPerPage:function(e){l(+e.target.value),i(0)}})):r.a.createElement("div",null)}var J=a(125),X=a(324),Y=a(62),z=a(325),G=a(326),Q=a(331),$=a(327),Z=a(328),ee=a(323),te=a(63),ae=a.n(te),ne=a(122),re=a.n(ne),ie=a(126),oe=new f.a,ce=void 0,se="",le=!1,ue="dark",me="#4caf50",pe=Y.a,fe=!0,he=!1,ve=r.a.createElement(L.a,null,"pause_circle_outline"),de=r.a.createElement(L.a,null,"shuffle");function ge(e){var t=e.toString(16);return 1===t.length?"0"+t:t}var ye=Object(J.a)({palette:{type:ue,primary:{main:me},secondary:pe}}),Ee=function(e){function t(){var e;Object(c.a)(this,t);var a=(e=Object(l.a)(this,Object(u.a)(t).call(this))).getHashParams();return e.state={loggedIn:!!a.access_token,nowPlaying:{name:"Not Checked",artistName:"Not Checked",songInfo:"",image:""}},a.access_token&&oe.setAccessToken(a.access_token),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"getHashParams",value:function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t}},{key:"getNowPlaying",value:function(){var e=this;void 0!==j&&this.ArtistProfile.refreshArtist(),void 0!==O&&this.Lyrics.refreshArtist(),oe.getMyCurrentPlaybackState().then((function(t){var a,n,r,i;if(void 0===t.item)a="You are not currently playing any songs on Spotify",n="You are not currently playing any songs on Spotify",i="",r=void 0;else{a=t.item.name,n=t.item.artists[0].name,r=t.item.album.images[0].url,se=r,i=a+" - "+n;var o=t.progress_ms,c=t.item.duration_ms;ce=c-o}e.setState({nowPlaying:{name:a,artistName:n,image:r,songInfo:i}})}))}},{key:"getNextSong",value:function(){oe.skipToNext(),this.refresh(),console.log(ce)}},{key:"getLastSong",value:function(){oe.skipToPrevious(),this.refresh(),console.log(ce)}},{key:"getPause",value:function(){fe?(oe.pause(),ve=r.a.createElement(L.a,null,"play_circle_outline"),this.refresh(),fe=!1):(oe.play(),ve=r.a.createElement(L.a,null,"pause_circle_outline"),this.refresh(),fe=!0)}},{key:"getShuffle",value:function(){he?(oe.setShuffle(!1),de=r.a.createElement(L.a,null,"shuffle"),he=!1):(oe.setShuffle(!0),de=r.a.createElement(L.a,null,"shuffle"),he=!0)}},{key:"componentDidMount",value:function(){this.getNowPlaying()}},{key:"refresh",value:function(){this.getNowPlaying(),le&&this.updateTheme();var e=this;setTimeout((function(){e.getNowPlaying(),le&&e.updateTheme()}),250),clearTimeout(),setTimeout((function(){e.getNowPlaying(),le&&e.updateTheme()}),500),clearTimeout()}},{key:"defaultTheme",value:function(){le=!1,me="#4caf50",ye=Object(J.a)({palette:{type:ue,primary:{main:me},secondary:pe}}),console.log(le),this.forceUpdate()}},{key:"setColor",value:function(){console.log(se),""!==se&&(re.a.from(se).getPalette().then((function(e){return t=Math.round(e.Vibrant._rgb[0]),a=Math.round(e.Vibrant._rgb[1]),n=Math.round(e.Vibrant._rgb[2]),me="#"+ge(t)+ge(a)+ge(n);var t,a,n})),ye=Object(J.a)({palette:{type:ue,primary:{main:me},secondary:pe}}),this.forceUpdate())}},{key:"updateTheme",value:function(){le=!0,console.log(le),this.setColor();var e=this;setTimeout((function(){e.setColor()}),250),clearTimeout()}},{key:"themeModeToggle",value:function(){"dark"===ue?(ue="light",ye=Object(J.a)({palette:{type:ue,primary:{main:me},secondary:pe}})):(ue="dark",ye=Object(J.a)({palette:{type:ue,primary:{main:me},secondary:pe}})),this.forceUpdate()}},{key:"onKeyDown",value:function(e,t,a){"left"===e?this.getLastSong():"right"===e?this.getNextSong():"space"===e?this.getPause():"s"===e?this.getShuffle():"r"===e&&this.refresh()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(ie.a,{keyName:"right,left,space,s,r",onKeyDown:this.onKeyDown.bind(this)}),r.a.createElement(X.a,{theme:ye},r.a.createElement(z.a,null),r.a.createElement("div",null,r.a.createElement(d,null)),r.a.createElement("a",{href:"http://localhost:4002/login"},r.a.createElement(g.a,{variant:"contained",color:"primary"},"Login with Spotify")),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:function(){return e.refresh()}},"Refresh")),r.a.createElement("div",null,r.a.createElement(G.a,{container:!0,spacing:3},r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement(Q.a,null,r.a.createElement($.a,{expandIcon:r.a.createElement(ae.a,{color:"primary"})},r.a.createElement(ee.a,null,"Artist Profile")),r.a.createElement(Z.a,{padding:"0"},r.a.createElement(j,{spotifyApi:oe,onRef:function(t){return e.ArtistProfile=t}})))),r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement("img",{src:this.state.nowPlaying.image,alt:"album cover",width:300,height:300,mode:"fit",style:{windows:100}})),r.a.createElement(G.a,{item:!0,xs:4},r.a.createElement(Q.a,null,r.a.createElement($.a,{expandIcon:r.a.createElement(ae.a,{color:"primary"})},r.a.createElement(ee.a,null,"Lyrics")),r.a.createElement(Z.a,{padding:"0"},r.a.createElement(O,{spotifyApi:oe,onRef:function(t){return e.Lyrics=t}})))))),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"outlined"},this.state.nowPlaying.songInfo)),r.a.createElement("div",null,r.a.createElement(y.a,{variant:"contained",color:"primary"},r.a.createElement(g.a,{onClick:function(){return e.getLastSong()}},r.a.createElement(L.a,null,"skip_previous")),r.a.createElement(g.a,{onClick:function(){return e.getPause()}},ve),r.a.createElement(g.a,{onClick:function(){return e.getNextSong()}},r.a.createElement(L.a,null,"skip_next")),r.a.createElement(g.a,{onClick:function(){return e.getShuffle()}},de))),r.a.createElement("div",null,r.a.createElement(Q.a,null,r.a.createElement($.a,{expandIcon:r.a.createElement(ae.a,{color:"primary"})},r.a.createElement(ee.a,null,"Song Recommendations")),r.a.createElement(Z.a,null,r.a.createElement(F,null)))),r.a.createElement("div",null,r.a.createElement(y.a,{variant:"contained",color:"primary"},r.a.createElement(g.a,{onClick:function(){return e.defaultTheme()}},"Default Theme"),r.a.createElement(g.a,{onClick:function(){return e.updateTheme()}},"Adaptive Theme"))),r.a.createElement("div",null,r.a.createElement(g.a,{variant:"outlined",color:"primary",onClick:function(){return e.themeModeToggle()}},"Dark/Light Mode Toggle"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[135,1,2]]]);
//# sourceMappingURL=main.67ba5973.chunk.js.map