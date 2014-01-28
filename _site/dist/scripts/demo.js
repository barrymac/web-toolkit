
//v8.0
var hljs=new function(){function k(v){return v.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function t(v){return v.nodeName.toLowerCase()}function i(w,x){var v=w&&w.exec(x);return v&&v.index==0}function d(v){return Array.prototype.map.call(v.childNodes,function(w){if(w.nodeType==3){return b.useBR?w.nodeValue.replace(/\n/g,""):w.nodeValue}if(t(w)=="br"){return"\n"}return d(w)}).join("")}function r(w){var v=(w.className+" "+(w.parentNode?w.parentNode.className:"")).split(/\s+/);v=v.map(function(x){return x.replace(/^language-/,"")});return v.filter(function(x){return j(x)||x=="no-highlight"})[0]}function o(x,y){var v={};for(var w in x){v[w]=x[w]}if(y){for(var w in y){v[w]=y[w]}}return v}function u(x){var v=[];(function w(y,z){for(var A=y.firstChild;A;A=A.nextSibling){if(A.nodeType==3){z+=A.nodeValue.length}else{if(t(A)=="br"){z+=1}else{if(A.nodeType==1){v.push({event:"start",offset:z,node:A});z=w(A,z);v.push({event:"stop",offset:z,node:A})}}}}return z})(x,0);return v}function q(w,y,C){var x=0;var F="";var z=[];function B(){if(!w.length||!y.length){return w.length?w:y}if(w[0].offset!=y[0].offset){return(w[0].offset<y[0].offset)?w:y}return y[0].event=="start"?w:y}function A(H){function G(I){return" "+I.nodeName+'="'+k(I.value)+'"'}F+="<"+t(H)+Array.prototype.map.call(H.attributes,G).join("")+">"}function E(G){F+="</"+t(G)+">"}function v(G){(G.event=="start"?A:E)(G.node)}while(w.length||y.length){var D=B();F+=k(C.substr(x,D[0].offset-x));x=D[0].offset;if(D==w){z.reverse().forEach(E);do{v(D.splice(0,1)[0]);D=B()}while(D==w&&D.length&&D[0].offset==x);z.reverse().forEach(A)}else{if(D[0].event=="start"){z.push(D[0].node)}else{z.pop()}v(D.splice(0,1)[0])}}return F+k(C.substr(x))}function m(y){function v(z){return(z&&z.source)||z}function w(A,z){return RegExp(v(A),"m"+(y.cI?"i":"")+(z?"g":""))}function x(D,C){if(D.compiled){return}D.compiled=true;D.k=D.k||D.bK;if(D.k){var z={};function E(G,F){if(y.cI){F=F.toLowerCase()}F.split(" ").forEach(function(H){var I=H.split("|");z[I[0]]=[G,I[1]?Number(I[1]):1]})}if(typeof D.k=="string"){E("keyword",D.k)}else{Object.keys(D.k).forEach(function(F){E(F,D.k[F])})}D.k=z}D.lR=w(D.l||/\b[A-Za-z0-9_]+\b/,true);if(C){if(D.bK){D.b=D.bK.split(" ").join("|")}if(!D.b){D.b=/\B|\b/}D.bR=w(D.b);if(!D.e&&!D.eW){D.e=/\B|\b/}if(D.e){D.eR=w(D.e)}D.tE=v(D.e)||"";if(D.eW&&C.tE){D.tE+=(D.e?"|":"")+C.tE}}if(D.i){D.iR=w(D.i)}if(D.r===undefined){D.r=1}if(!D.c){D.c=[]}var B=[];D.c.forEach(function(F){if(F.v){F.v.forEach(function(G){B.push(o(F,G))})}else{B.push(F=="self"?D:F)}});D.c=B;D.c.forEach(function(F){x(F,D)});if(D.starts){x(D.starts,C)}var A=D.c.map(function(F){return F.bK?"\\.?\\b("+F.b+")\\b\\.?":F.b}).concat([D.tE]).concat([D.i]).map(v).filter(Boolean);D.t=A.length?w(A.join("|"),true):{exec:function(F){return null}};D.continuation={}}x(y)}function c(S,L,J,R){function v(U,V){for(var T=0;T<V.c.length;T++){if(i(V.c[T].bR,U)){return V.c[T]}}}function z(U,T){if(i(U.eR,T)){return U}if(U.eW){return z(U.parent,T)}}function A(T,U){return !J&&i(U.iR,T)}function E(V,T){var U=M.cI?T[0].toLowerCase():T[0];return V.k.hasOwnProperty(U)&&V.k[U]}function w(Z,X,W,V){var T=V?"":b.classPrefix,U='<span class="'+T,Y=W?"":"</span>";U+=Z+'">';return U+X+Y}function N(){var U=k(C);if(!I.k){return U}var T="";var X=0;I.lR.lastIndex=0;var V=I.lR.exec(U);while(V){T+=U.substr(X,V.index-X);var W=E(I,V);if(W){H+=W[1];T+=w(W[0],V[0])}else{T+=V[0]}X=I.lR.lastIndex;V=I.lR.exec(U)}return T+U.substr(X)}function F(){if(I.sL&&!f[I.sL]){return k(C)}var T=I.sL?c(I.sL,C,true,I.continuation.top):g(C);if(I.r>0){H+=T.r}if(I.subLanguageMode=="continuous"){I.continuation.top=T.top}return w(T.language,T.value,false,true)}function Q(){return I.sL!==undefined?F():N()}function P(V,U){var T=V.cN?w(V.cN,"",true):"";if(V.rB){D+=T;C=""}else{if(V.eB){D+=k(U)+T;C=""}else{D+=T;C=U}}I=Object.create(V,{parent:{value:I}})}function G(T,X){C+=T;if(X===undefined){D+=Q();return 0}var V=v(X,I);if(V){D+=Q();P(V,X);return V.rB?0:X.length}var W=z(I,X);if(W){var U=I;if(!(U.rE||U.eE)){C+=X}D+=Q();do{if(I.cN){D+="</span>"}H+=I.r;I=I.parent}while(I!=W.parent);if(U.eE){D+=k(X)}C="";if(W.starts){P(W.starts,"")}return U.rE?0:X.length}if(A(X,I)){throw new Error('Illegal lexeme "'+X+'" for mode "'+(I.cN||"<unnamed>")+'"')}C+=X;return X.length||1}var M=j(S);if(!M){throw new Error('Unknown language: "'+S+'"')}m(M);var I=R||M;var D="";for(var K=I;K!=M;K=K.parent){if(K.cN){D=w(K.cN,D,true)}}var C="";var H=0;try{var B,y,x=0;while(true){I.t.lastIndex=x;B=I.t.exec(L);if(!B){break}y=G(L.substr(x,B.index-x),B[0]);x=B.index+y}G(L.substr(x));for(var K=I;K.parent;K=K.parent){if(K.cN){D+="</span>"}}return{r:H,value:D,language:S,top:I}}catch(O){if(O.message.indexOf("Illegal")!=-1){return{r:0,value:k(L)}}else{throw O}}}function g(y,x){x=x||b.languages||Object.keys(f);var v={r:0,value:k(y)};var w=v;x.forEach(function(z){if(!j(z)){return}var A=c(z,y,false);A.language=z;if(A.r>w.r){w=A}if(A.r>v.r){w=v;v=A}});if(w.language){v.second_best=w}return v}function h(v){if(b.tabReplace){v=v.replace(/^((<[^>]+>|\t)+)/gm,function(w,z,y,x){return z.replace(/\t/g,b.tabReplace)})}if(b.useBR){v=v.replace(/\n/g,"<br>")}return v}function p(z){var y=d(z);var A=r(z);if(A=="no-highlight"){return}var v=A?c(A,y,true):g(y);var w=u(z);if(w.length){var x=document.createElementNS("http://www.w3.org/1999/xhtml","pre");x.innerHTML=v.value;v.value=q(w,u(x),y)}v.value=h(v.value);z.innerHTML=v.value;z.className+=" hljs "+(!A&&v.language||"");z.result={language:v.language,re:v.r};if(v.second_best){z.second_best={language:v.second_best.language,re:v.second_best.r}}}var b={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};function s(v){b=o(b,v)}function l(){if(l.called){return}l.called=true;var v=document.querySelectorAll("pre code");Array.prototype.forEach.call(v,p)}function a(){addEventListener("DOMContentLoaded",l,false);addEventListener("load",l,false)}var f={};var n={};function e(v,x){var w=f[v]=x(this);if(w.aliases){w.aliases.forEach(function(y){n[y]=v})}}function j(v){return f[v]||f[n[v]]}this.highlight=c;this.highlightAuto=g;this.fixMarkup=h;this.highlightBlock=p;this.configure=s;this.initHighlighting=l;this.initHighlightingOnLoad=a;this.registerLanguage=e;this.getLanguage=j;this.inherit=o;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";this.BNR="\\b(0b[01]+)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\[\\s\\S]",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE]};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE]};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.BNM={cN:"number",b:this.BNR,r:0};this.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gim]*/,i:/\n/,c:[this.BE,{b:/\[/,e:/\]/,r:0,c:[this.BE]}]};this.TM={cN:"title",b:this.IR,r:0};this.UTM={cN:"title",b:this.UIR,r:0}}();hljs.registerLanguage("bash",function(b){var a={cN:"variable",v:[{b:/\$[\w\d#@][\w\d_]*/},{b:/\$\{(.*?)\}/}]};var d={cN:"string",b:/"/,e:/"/,c:[b.BE,a,{cN:"variable",b:/\$\(/,e:/\)/,c:[b.BE]}]};var c={cN:"string",b:/'/,e:/'/};return{l:/-?[a-z\.]+/,k:{keyword:"if then else elif fi for break continue while in do done exit return set declare case esac export exec",literal:"true false",built_in:"printf echo read cd pwd pushd popd dirs let eval unset typeset readonly getopts source shopt caller type hash bind help sudo",operator:"-ne -eq -lt -gt -f -d -e -s -l -a"},c:[{cN:"shebang",b:/^#![^\n]+sh\s*$/,r:10},{cN:"function",b:/\w[\w\d_]*\s*\(\s*\)\s*\{/,rB:true,c:[b.inherit(b.TM,{b:/\w[\w\d_]*/})],r:0},b.HCM,b.NM,d,c,a]}});hljs.registerLanguage("cs",function(b){var a="abstract as base bool break byte case catch char checked const continue decimal default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long new null object operator out override params private protected public readonly ref return sbyte sealed short sizeof stackalloc static string struct switch this throw true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async await ascending descending from get group into join let orderby partial select set value var where yield";return{k:a,c:[{cN:"comment",b:"///",e:"$",rB:true,c:[{cN:"xmlDocTag",b:"///|<!--|-->"},{cN:"xmlDocTag",b:"</?",e:">"}]},b.CLCM,b.CBLCLM,{cN:"preprocessor",b:"#",e:"$",k:"if else elif endif define undef warning error line region endregion pragma checksum"},{cN:"string",b:'@"',e:'"',c:[{b:'""'}]},b.ASM,b.QSM,b.CNM,{bK:"protected public private internal",e:/[{;=]/,k:a,c:[{bK:"class namespace interface",starts:{c:[b.TM]}},{b:b.IR+"\\s*\\(",rB:true,c:[b.TM]}]}]}});hljs.registerLanguage("ruby",function(e){var h="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var g="and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor";var a={cN:"yardoctag",b:"@[A-Za-z]+"};var i={cN:"comment",v:[{b:"#",e:"$",c:[a]},{b:"^\\=begin",e:"^\\=end",c:[a],r:10},{b:"^__END__",e:"\\n$"}]};var c={cN:"subst",b:"#\\{",e:"}",k:g};var d={cN:"string",c:[e.BE,c],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:"%[qw]?\\(",e:"\\)"},{b:"%[qw]?\\[",e:"\\]"},{b:"%[qw]?{",e:"}"},{b:"%[qw]?<",e:">",r:10},{b:"%[qw]?/",e:"/",r:10},{b:"%[qw]?%",e:"%",r:10},{b:"%[qw]?-",e:"-",r:10},{b:"%[qw]?\\|",e:"\\|",r:10},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/}]};var b={cN:"params",b:"\\(",e:"\\)",k:g};var f=[d,i,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+e.IR+"::)?"+e.IR}]},i]},{cN:"function",bK:"def",e:" |$|;",r:0,c:[e.inherit(e.TM,{b:h}),b,i]},{cN:"constant",b:"(::)?(\\b[A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[d,{b:h}],r:0},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{b:"("+e.RSR+")\\s*",c:[i,{cN:"regexp",c:[e.BE,c],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}],r:0}];c.c=f;b.c=f;return{k:g,c:f}});hljs.registerLanguage("diff",function(a){return{c:[{cN:"chunk",r:10,v:[{b:/^\@\@ +\-\d+,\d+ +\+\d+,\d+ +\@\@$/},{b:/^\*\*\* +\d+,\d+ +\*\*\*\*$/},{b:/^\-\-\- +\d+,\d+ +\-\-\-\-$/}]},{cN:"header",v:[{b:/Index: /,e:/$/},{b:/=====/,e:/=====$/},{b:/^\-\-\-/,e:/$/},{b:/^\*{3} /,e:/$/},{b:/^\+\+\+/,e:/$/},{b:/\*{5}/,e:/\*{5}$/}]},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}});hljs.registerLanguage("javascript",function(a){return{aliases:["js"],k:{keyword:"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"},c:[{cN:"pi",b:/^\s*('|")use strict('|")/,r:10},a.ASM,a.QSM,a.CLCM,a.CBLCLM,a.CNM,{b:"("+a.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[a.CLCM,a.CBLCLM,a.REGEXP_MODE,{b:/</,e:/>;/,r:0,sL:"xml"}],r:0},{cN:"function",bK:"function",e:/\{/,c:[a.inherit(a.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:"params",b:/\(/,e:/\)/,c:[a.CLCM,a.CBLCLM],i:/["'\(]/}],i:/\[|%/},{b:/\$[(.]/},{b:"\\."+a.IR,r:0}]}});hljs.registerLanguage("xml",function(a){var c="[A-Za-z0-9\\._:-]+";var d={b:/<\?(php)?(?!\w)/,e:/\?>/,sL:"php",subLanguageMode:"continuous"};var b={eW:true,i:/</,r:0,c:[d,{cN:"attribute",b:c,r:0},{b:"=",r:0,c:[{cN:"value",v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s\/>]+/}]}]}]};return{aliases:["html"],cI:true,c:[{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{title:"style"},c:[b],starts:{e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{title:"script"},c:[b],starts:{e:"<\/script>",rE:true,sL:"javascript"}},{b:"<%",e:"%>",sL:"vbscript"},d,{cN:"pi",b:/<\?\w+/,e:/\?>/,r:10},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ /><]+",r:0},b]}]}});hljs.registerLanguage("markdown",function(a){return{c:[{cN:"header",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"blockquote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{cN:"horizontal_rule",b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].+?[\\)\\]]",rB:true,c:[{cN:"link_label",b:"\\[",e:"\\]",eB:true,rE:true,r:0},{cN:"link_url",b:"\\]\\(",e:"\\)",eB:true,eE:true},{cN:"link_reference",b:"\\]\\[",e:"\\]",eB:true,eE:true,}],r:10},{b:"^\\[.+\\]:",e:"$",rB:true,c:[{cN:"link_reference",b:"\\[",e:"\\]",eB:true,eE:true},{cN:"link_url",b:"\\s",e:"$"}]}]}});hljs.registerLanguage("css",function(a){var b="[a-zA-Z-][a-zA-Z0-9_-]*";var c={cN:"function",b:b+"\\(",e:"\\)",c:["self",a.NM,a.ASM,a.QSM]};return{cI:true,i:"[=/|']",c:[a.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{cN:"at_rule",b:"@",e:"[{;]",c:[{cN:"keyword",b:/\S+/},{b:/\s/,eW:true,eE:true,r:0,c:[c,a.ASM,a.QSM,a.NM]}]},{cN:"tag",b:b,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[a.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[c,a.NM,a.QSM,a.ASM,a.CBLCLM,{cN:"hexcolor",b:"#[0-9A-Fa-f]+"},{cN:"important",b:"!important"}]}}]}]}]}});hljs.registerLanguage("http",function(a){return{i:"\\S",c:[{cN:"status",b:"^HTTP/[0-9\\.]+",e:"$",c:[{cN:"number",b:"\\b\\d{3}\\b"}]},{cN:"request",b:"^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",rB:true,e:"$",c:[{cN:"string",b:" ",e:" ",eB:true,eE:true}]},{cN:"attribute",b:"^\\w",e:": ",eE:true,i:"\\n|\\s|=",starts:{cN:"string",e:"$"}},{b:"\\n\\n",starts:{sL:"",eW:true}}]}});hljs.registerLanguage("java",function(b){var a="false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws";return{k:a,i:/<\//,c:[{cN:"javadoc",b:"/\\*\\*",e:"\\*/",c:[{cN:"javadoctag",b:"(^|\\s)@[A-Za-z]+"}],r:10},b.CLCM,b.CBLCLM,b.ASM,b.QSM,{bK:"protected public private",e:/[{;=]/,k:a,c:[{cN:"class",bK:"class interface",eW:true,i:/[:"<>]/,c:[{bK:"extends implements",r:10},b.UTM]},{b:b.UIR+"\\s*\\(",rB:true,c:[b.UTM]}]},b.CNM,{cN:"annotation",b:"@[A-Za-z]+"}]}});hljs.registerLanguage("php",function(b){var e={cN:"variable",b:"\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*"};var a={cN:"preprocessor",b:/<\?(php)?|\?>/};var c={cN:"string",c:[b.BE,a],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},b.inherit(b.ASM,{i:null}),b.inherit(b.QSM,{i:null})]};var d={v:[b.BNM,b.CNM]};return{cI:true,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[b.CLCM,b.HCM,{cN:"comment",b:"/\\*",e:"\\*/",c:[{cN:"phpdoc",b:"\\s@[A-Za-z]+"},a]},{cN:"comment",b:"__halt_compiler.+?;",eW:true,k:"__halt_compiler",l:b.UIR},{cN:"string",b:"<<<['\"]?\\w+['\"]?$",e:"^\\w+;",c:[b.BE]},a,e,{cN:"function",bK:"function",e:/[;{]/,i:"\\$|\\[|%",c:[b.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",e,b.CBLCLM,c,d]}]},{cN:"class",bK:"class interface",e:"{",i:/[:\(\$"]/,c:[{bK:"extends implements",r:10},b.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[b.UTM]},{bK:"use",e:";",c:[b.UTM]},{b:"=>"},c,d]}});hljs.registerLanguage("python",function(a){var f={cN:"prompt",b:/^(>>>|\.\.\.) /};var b={cN:"string",c:[a.BE],v:[{b:/(u|b)?r?'''/,e:/'''/,c:[f],r:10},{b:/(u|b)?r?"""/,e:/"""/,c:[f],r:10},{b:/(u|r|ur)'/,e:/'/,r:10},{b:/(u|r|ur)"/,e:/"/,r:10},{b:/(b|br)'/,e:/'/,},{b:/(b|br)"/,e:/"/,},a.ASM,a.QSM]};var d={cN:"number",r:0,v:[{b:a.BNR+"[lLjJ]?"},{b:"\\b(0o[0-7]+)[lLjJ]?"},{b:a.CNR+"[lLjJ]?"}]};var e={cN:"params",b:/\(/,e:/\)/,c:["self",f,d,b]};var c={e:/:/,i:/[${=;\n]/,c:[a.UTM,e]};return{k:{keyword:"and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda nonlocal|10 None True False",built_in:"Ellipsis NotImplemented"},i:/(<\/|->|\?)/,c:[f,d,b,a.HCM,a.inherit(c,{cN:"function",bK:"def",r:10}),a.inherit(c,{cN:"class",bK:"class"}),{cN:"decorator",b:/@/,e:/$/},{b:/\b(print|exec)\(/}]}});hljs.registerLanguage("sql",function(a){return{cI:true,i:/[<>]/,c:[{cN:"operator",b:"\\b(begin|end|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma|grant|merge)\\b(?!:)",e:";",eW:true,k:{keyword:"all partial global month current_timestamp using go revoke smallint indicator end-exec disconnect zone with character assertion to add current_user usage input local alter match collate real then rollback get read timestamp session_user not integer bit unique day minute desc insert execute like ilike|2 level decimal drop continue isolation found where constraints domain right national some module transaction relative second connect escape close system_user for deferred section cast current sqlstate allocate intersect deallocate numeric public preserve full goto initially asc no key output collation group by union session both last language constraint column of space foreign deferrable prior connection unknown action commit view or first into float year primary cascaded except restrict set references names table outer open select size are rows from prepare distinct leading create only next inner authorization schema corresponding option declare precision immediate else timezone_minute external varying translation true case exception join hour default double scroll value cursor descriptor values dec fetch procedure delete and false int is describe char as at in varchar null trailing any absolute current_time end grant privileges when cross check write current_date pad begin temporary exec time update catalog user sql date on identity timezone_hour natural whenever interval work order cascade diagnostics nchar having left call do handler load replace truncate start lock show pragma exists number trigger if before after each row merge matched database",aggregate:"count sum min max avg"},c:[{cN:"string",b:"'",e:"'",c:[a.BE,{b:"''"}]},{cN:"string",b:'"',e:'"',c:[a.BE,{b:'""'}]},{cN:"string",b:"`",e:"`",c:[a.BE]},a.CNM]},a.CBLCLM,{cN:"comment",b:"--",e:"$"}]}});hljs.registerLanguage("ini",function(a){return{cI:true,i:/\S/,c:[{cN:"comment",b:";",e:"$"},{cN:"title",b:"^\\[",e:"\\]"},{cN:"setting",b:"^[a-z0-9\\[\\]_-]+[ \\t]*=[ \\t]*",e:"$",c:[{cN:"value",eW:true,k:"on off true false yes no",c:[a.QSM,a.NM],r:0}]}]}});hljs.registerLanguage("perl",function(c){var d="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when";var f={cN:"subst",b:"[$@]\\{",e:"\\}",k:d};var g={b:"->{",e:"}"};var a={cN:"variable",v:[{b:/\$\d/},{b:/[\$\%\@\*](\^\w\b|#\w+(\:\:\w+)*|{\w+}|\w+(\:\:\w*)*)/},{b:/[\$\%\@\*][^\s\w{]/,r:0}]};var e={cN:"comment",b:"^(__END__|__DATA__)",e:"\\n$",r:5};var h=[c.BE,f,a];var b=[a,c.HCM,e,{cN:"comment",b:"^\\=\\w",e:"\\=cut",eW:true},g,{cN:"string",c:h,v:[{b:"q[qwxr]?\\s*\\(",e:"\\)",r:5},{b:"q[qwxr]?\\s*\\[",e:"\\]",r:5},{b:"q[qwxr]?\\s*\\{",e:"\\}",r:5},{b:"q[qwxr]?\\s*\\|",e:"\\|",r:5},{b:"q[qwxr]?\\s*\\<",e:"\\>",r:5},{b:"qw\\s+q",e:"q",r:5},{b:"'",e:"'",c:[c.BE]},{b:'"',e:'"'},{b:"`",e:"`",c:[c.BE]},{b:"{\\w+}",c:[],r:0},{b:"-?\\w+\\s*\\=\\>",c:[],r:0}]},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\/\\/|"+c.RSR+"|\\b(split|return|print|reverse|grep)\\b)\\s*",k:"split return print reverse grep",r:0,c:[c.HCM,e,{cN:"regexp",b:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",r:10},{cN:"regexp",b:"(m|qr)?/",e:"/[a-z]*",c:[c.BE],r:0}]},{cN:"sub",bK:"sub",e:"(\\s*\\(.*?\\))?[;{]",r:5},{cN:"operator",b:"-\\w\\b",r:0}];f.c=b;g.c=b;return{k:d,c:b}});hljs.registerLanguage("objectivec",function(a){var d={keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign self synchronized id nonatomic super unichar IBOutlet IBAction strong weak @private @protected @public @try @property @end @throw @catch @finally @synthesize @dynamic @selector @optional @required",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"NSString NSDictionary CGRect CGPoint UIButton UILabel UITextView UIWebView MKMapView UISegmentedControl NSObject UITableViewDelegate UITableViewDataSource NSThread UIActivityIndicator UITabbar UIToolBar UIBarButtonItem UIImageView NSAutoreleasePool UITableView BOOL NSInteger CGFloat NSException NSLog NSMutableString NSMutableArray NSMutableDictionary NSURL NSIndexPath CGSize UITableViewCell UIView UIViewController UINavigationBar UINavigationController UITabBarController UIPopoverController UIPopoverControllerDelegate UIImage NSNumber UISearchBar NSFetchedResultsController NSFetchedResultsChangeType UIScrollView UIScrollViewDelegate UIEdgeInsets UIColor UIFont UIApplication NSNotFound NSNotificationCenter NSNotification UILocalNotification NSBundle NSFileManager NSTimeInterval NSDate NSCalendar NSUserDefaults UIWindow NSRange NSArray NSError NSURLRequest NSURLConnection UIInterfaceOrientation MPMoviePlayerController dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"};var c=/[a-zA-Z@][a-zA-Z0-9_]*/;var b="@interface @class @protocol @implementation";return{k:d,l:c,i:"</",c:[a.CLCM,a.CBLCLM,a.CNM,a.QSM,{cN:"string",b:"'",e:"[^\\\\]'",i:"[^\\\\][^']"},{cN:"preprocessor",b:"#import",e:"$",c:[{cN:"title",b:'"',e:'"'},{cN:"title",b:"<",e:">"}]},{cN:"preprocessor",b:"#",e:"$"},{cN:"class",b:"("+b.split(" ").join("|")+")\\b",e:"({|$)",k:b,l:c,c:[a.UTM]},{cN:"variable",b:"\\."+a.UIR,r:0}]}});hljs.registerLanguage("coffeescript",function(c){var b={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",reserved:"case default function var void with const let enum export import native __hasProp __extends __slice __bind __indexOf",built_in:"npm require console print module exports global window document"};var a="[A-Za-z$_][0-9A-Za-z$_]*";var f=c.inherit(c.TM,{b:a});var e={cN:"subst",b:/#\{/,e:/}/,k:b};var d=[c.BNM,c.inherit(c.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[c.BE]},{b:/'/,e:/'/,c:[c.BE]},{b:/"""/,e:/"""/,c:[c.BE,e]},{b:/"/,e:/"/,c:[c.BE,e]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[e,c.HCM]},{b:"//[gim]*",r:0},{b:"/\\S(\\\\.|[^\\n])*?/[gim]*(?=\\s|\\W|$)"}]},{cN:"property",b:"@"+a},{b:"`",e:"`",eB:true,eE:true,sL:"javascript"}];e.c=d;return{k:b,c:d.concat([{cN:"comment",b:"###",e:"###"},c.HCM,{cN:"function",b:"("+a+"\\s*=\\s*)?(\\(.*\\))?\\s*\\B[-=]>",e:"[-=]>",rB:true,c:[f,{cN:"params",b:"\\(",rB:true,c:[{b:/\(/,e:/\)/,k:b,c:["self"].concat(d)}]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:true,i:/[:="\[\]]/,c:[f]},f]},{cN:"attribute",b:a+":",e:":",rB:true,eE:true,r:0}])}});hljs.registerLanguage("nginx",function(c){var b={cN:"variable",v:[{b:/\$\d+/},{b:/\$\{/,e:/}/},{b:"[\\$\\@]"+c.UIR}]};var a={eW:true,l:"[a-z/_]+",k:{built_in:"on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"},r:0,i:"=>",c:[c.HCM,{cN:"string",c:[c.BE,b],v:[{b:/"/,e:/"/},{b:/'/,e:/'/}]},{cN:"url",b:"([a-z]+):/",e:"\\s",eW:true,eE:true},{cN:"regexp",c:[c.BE,b],v:[{b:"\\s\\^",e:"\\s|{|;",rE:true},{b:"~\\*?\\s+",e:"\\s|{|;",rE:true},{b:"\\*(\\.[a-z\\-]+)+"},{b:"([a-z\\-]+\\.)+\\*"}]},{cN:"number",b:"\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"},{cN:"number",b:"\\b\\d+[kKmMgGdshdwy]*\\b",r:0},b]};return{c:[c.HCM,{b:c.UIR+"\\s",e:";|{",rB:true,c:[c.inherit(c.UTM,{starts:a})],r:0}],i:"[^\\s\\}]"}});hljs.registerLanguage("json",function(a){var e={literal:"true false null"};var d=[a.QSM,a.CNM];var c={cN:"value",e:",",eW:true,eE:true,c:d,k:e};var b={b:"{",e:"}",c:[{cN:"attribute",b:'\\s*"',e:'"\\s*:\\s*',eB:true,eE:true,c:[a.BE],i:"\\n",starts:c}],i:"\\S"};var f={b:"\\[",e:"\\]",c:[a.inherit(c,{cN:null})],i:"\\S"};d.splice(d.length,0,b,f);return{c:d,k:e,i:"\\S"}});hljs.registerLanguage("apache",function(a){var b={cN:"number",b:"[\\$%]\\d+"};return{cI:true,c:[a.HCM,{cN:"tag",b:"</?",e:">"},{cN:"keyword",b:/\w+/,r:0,k:{common:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{e:/$/,r:0,k:{literal:"on off all"},c:[{cN:"sqbracket",b:"\\s\\[",e:"\\]$"},{cN:"cbracket",b:"[\\$%]\\{",e:"\\}",c:["self",b]},b,a.QSM]}}],i:/\S/}});hljs.registerLanguage("cpp",function(a){var b={keyword:"false int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long throw volatile static protected bool template mutable if public friend do return goto auto void enum else break new extern using true class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue wchar_t inline delete alignof char16_t char32_t constexpr decltype noexcept nullptr static_assert thread_local restrict _Bool complex _Complex _Imaginary",built_in:"std string cin cout cerr clog stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf"};return{aliases:["c"],k:b,i:"</",c:[a.CLCM,a.CBLCLM,a.QSM,{cN:"string",b:"'\\\\?.",e:"'",i:"."},{cN:"number",b:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},a.CNM,{cN:"preprocessor",b:"#",e:"$",c:[{b:"include\\s*<",e:">",i:"\\n"},a.CLCM]},{cN:"stl_container",b:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",e:">",k:b,r:10,c:["self"]}]}});hljs.registerLanguage("makefile",function(a){var b={cN:"variable",b:/\$\(/,e:/\)/,c:[a.BE]};return{c:[a.HCM,{b:/^\w+\s*\W*=/,rB:true,r:0,starts:{cN:"constant",e:/\s*\W*=/,eE:true,starts:{e:/$/,r:0,c:[b],}}},{cN:"title",b:/^[\w]+:\s*$/},{cN:"phony",b:/^\.PHONY:/,e:/$/,k:".PHONY",l:/[\.\w]+/},{b:/^\t+/,e:/$/,c:[a.QSM,b]}]}});

//modified for AMD/RequireJS.
//by Peter Mouland
if (typeof window.define === "function" && window.define.amd) {
    define('lib/highlight', [],function() {
        return hljs;
    });
};
if (typeof demo==='undefined') demo={};
demo.displayCode = (function( hljs){

    function DisplayCode(options){
        this.header = options.header;
        this.feature = options.feature;
        this.dir = options.dir;
        this.fileNames = options.fileNames;
        this.styled = options.styled;
        this.$lightboxLink = $('a[href*="#!code/' + this.feature + '"]');

        if (!$('#code-' + this.feature).length){
            this.getCode();
        }
    }

    DisplayCode.prototype.getCode = function(){
        this.fileCount = 0;
        this.filesReceived = 0;
        this.getFile(this.dir, 'notes', 'html', true);
        for (var i in this.fileNames){
            this.getFile(this.dir, this.fileNames[i], 'html');
            this.getFile(this.dir, this.fileNames[i], 'notes.html', true);
            this.getFile(this.dir, this.fileNames[i], 'js');
            this.getFile(this.dir, this.fileNames[i], 'require.js');
        }
    };

    DisplayCode.prototype.getFile = function(dir, featureFile, ext, styled){
        this.fileCount++;
        var self = this;
        var dfd = $.ajax({
            crossDomain: true,
            cache: false,
            dataType: 'html',
            url: dir + '/' + featureFile + '.' + ext
        });
        dfd.always(function(data){
            self.filesReceived++;
            self[self.feature + '-' + featureFile + ext] = (typeof data === 'string') ? data : '';
            self.addToPage(featureFile, ext, styled);
        });
    };

    DisplayCode.prototype.addToPage = function(featureFile, ext, styled){
        this.$container = this.$lightboxLink.parent().parent().find('.code-container');
        this.$tabList = this.$container.find('.tabs');

        this.addContainer();
        this.addTab(featureFile, ext, styled);
        this.addCode(featureFile, ext, styled);
        if (this.fileCount === this.filesReceived){
            $('#code-' + this.feature).inPageNav();
            this.$lightboxLink.lightbox({closeButtonColour: 'black'});
        }
    };

    DisplayCode.prototype.addContainer = function(){
        if (this.$container.length){ return ; }
        var $notesContainer = this.createContainer('notes','html',true);
        this.$container = $('<div class="cushioned code-container clearfix tabs-container page-nav" data-function="tabs" id="code-' + this.feature + '"><h3 class="code-h3">' + this.header + '</h3></div>');
        this.$tabList = $('<ul class="tabs clearfix" role="tablist" ><div class="dropdown-tab-select"><a href="#!" aria-controls="dropdown" aria-label="more tabs" class="medium">&hellip;</a><ul class="more-tabs"></ul></div></ul>');
        this.$container.append($notesContainer).append(this.$tabList);
        this.$lightboxLink.parent().parent().append(this.$container);
    };

    DisplayCode.prototype.createContainer = function(featureFile, ext, styled){
        var id = this.feature + '-' + featureFile + ext + '-container';
        if (this.styled || styled){
            return $('<div id="' + id + '" class="styled ' + ext + '"></div> ');
        } else {
            return $('<h4 class="intro smaller">' + ext.toUpperCase() + '</h4> <pre><code class="language-' + ext.replace('require.','') + ' hljs vhdl"  id="' + id + '"></code></pre>');
        }

    };

    DisplayCode.prototype.addTab = function(featureFile, styled){
        var tabName =  this.feature + '-' + featureFile;
        if (this.$container.find('#' + tabName + '-tab').length){ return ; }
        if(featureFile==='notes'){ return; }

        var featureFileLabel = featureFile || 'default';
        featureFileLabel = featureFileLabel.replace(/([A-Z][a-z])/g, ' $1').replace(/([a-z])([AI])/g, '$1 $2'); // the last one for single-letter words 'A' and 'I'
        featureFileLabel = featureFileLabel.charAt(0).toUpperCase() + featureFileLabel.slice(1); // capitalise the first letter

        var $tabListItem = $('<li id="' + tabName + '-tab" aria-controls="' + tabName + '-tab-contents" role="tab" class="tab"><a href="#!' + tabName + '-tab-contents" class="skycom-ellipsis internal-link"><span>' + featureFileLabel + '</span></a></li>');
        this.$tabList.prepend($tabListItem);

        var $tab = $('<div class="tabpanel" id="' + tabName + '-tab-contents" class="tabpanel selected" aria-labeledby="' + tabName + '-tab" role="tabpanel"></div>');
        var $tabContents = $('<section class="tabcontents clearfix"></section>');
        $tabContents.append(this.createContainer(featureFile, 'notes.html', styled))
            .append(this.createContainer(featureFile, 'html'))
            .append(this.createContainer(featureFile, 'require.js'))
            .append(this.createContainer(featureFile, 'js'));

        $tab.append($tabContents);
        this.$container.append($tab);

    };

    DisplayCode.prototype.addCode = function(featureFile, ext, styled){
        var fnName = (this.styled || styled) ? 'Styled' : 'Highlighted';
        this['add' + fnName + 'Code'](featureFile, ext);
    };

    DisplayCode.prototype.addStyledCode = function(featureFile, ext){
        var id = this.feature + '-' + featureFile;
        var codeDom = document.getElementById(id + ext + '-container'),
            code = this[id + ext];

        var $code = $(code.replace(/{{ site.version }}/g,$('#current-version').text()));
        if (ext.indexOf('js')>-1){
            $code = $.parseHTML($code);
        }
        $(codeDom).append($code);
    };

    DisplayCode.prototype.addHighlightedCode = function(featureFile, ext){
        var id = this.feature + '-' + featureFile;
        var languageShortHand = ext.replace('require.','');
        var language = (languageShortHand=='js') ? 'javascript' : 'xml';
        var codeDom = document.getElementById(id + ext + '-container'),
            code = this[id + ext] || 'none',
            codeNode;

        var highlighted = hljs.highlight(language, code, true);
//        codeNode = document.createTextNode(highlighted.value);
        $(codeDom).append(highlighted.value);
//        codeDom.appendChild(highlighted.value);

    };

    return DisplayCode;

});

if (typeof window.define === "function" && window.define.amd) {
    define('demo/displayCode', ['lib/highlight'],function( hljs) {
        return demo.displayCode( hljs);
    });
} else {
    demo.displayCode = demo.displayCode( hljs);
};
if (typeof demo==='undefined') demo={};
demo.menu = (function(){

    var menuIsSticky = false;
    var offset = $('#toolkit-menu-tabs').offset().top;
    var hideSubMenuTimeout;

    function bindEvents() {
        $(window).on('scroll', stickMenuToTop);
        $('#toolkit-menu-tabs [role=tablist] li').on('mouseenter mouseleave', toggleSubMenu);
        $('#toolkit-menu-tabs .tabpanel').on('mouseenter mouseleave', toggleSubMenu);
    }

    function toggleSubMenu(e){

        if (e.type==='mouseleave'){
            hideSubMenuTimeout = setTimeout(function(){
                hideAllSubMenus();
                showSeletcedSubMenu();
            },250);
        } else {
            clearTimeout(hideSubMenuTimeout);
            showHoveredSubMenu($('#' + $(this).attr('aria-controls')));
        }
    }

    function hideAllSubMenus(){
        $('#toolkit-menu-tabs .tabpanel').removeClass('selected');
    }

    function showHoveredSubMenu($el){
        if (!$el.length){ return; }
        hideAllSubMenus();
        $el.addClass('selected');
    }

    function showSeletcedSubMenu(){
        $('#toolkit-menu-tabs .tabpanel li.selected').closest('.tabpanel').addClass('selected');
    }

    function stickMenuToTop(){
//        todo: if position:sticky is not supported
        var top = window.scrollY;
        if (menuIsSticky && top<offset){
            menuIsSticky = false;
            $('#toolkit-menu-tabs').removeClass('stick');
            $('h1.demo-header').removeAttr('style');
        } else if (!menuIsSticky && top>offset) {
            menuIsSticky = true;
            $('#toolkit-menu-tabs').addClass('stick');
            $('h1.demo-header').attr('style','padding-bottom:' + $('#toolkit-menu-tabs').height() + 'px');
        }
    }

    bindEvents();

});

if (typeof window.define === "function" && window.define.amd){
    define('demo/menu', [], function() {
        return demo.menu();
    });
} else {
    demo.menu();
}
;
!function (name, context, definition) {
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        module.exports = definition();
    } else if (typeof define === 'function' && typeof define.amd  === 'object') {
        define('chai',[],function () {
            return definition();
        });
    } else {
        context[name] = definition();
    }
}('chai', this, function () {

    function require(p) {
        var path = require.resolve(p)
            , mod = require.modules[path];
        if (!mod) throw new Error('failed to require "' + p + '"');
        if (!mod.exports) {
            mod.exports = {};
            mod.call(mod.exports, mod, mod.exports, require.relative(path));
        }
        return mod.exports;
    }

    require.modules = {};

    require.resolve = function (path) {
        var orig = path
            , reg = path + '.js'
            , index = path + '/index.js';
        return require.modules[reg] && reg
            || require.modules[index] && index
            || orig;
    };

    require.register = function (path, fn) {
        require.modules[path] = fn;
    };

    require.relative = function (parent) {
        return function(p){
            if ('.' != p.charAt(0)) return require(p);

            var path = parent.split('/')
                , segs = p.split('/');
            path.pop();

            for (var i = 0; i < segs.length; i++) {
                var seg = segs[i];
                if ('..' == seg) path.pop();
                else if ('.' != seg) path.push(seg);
            }

            return require(path.join('/'));
        };
    };

    require.alias = function (from, to) {
        var fn = require.modules[from];
        require.modules[to] = fn;
    };


    require.register("chai.js", function(module, exports, require){
        /*!
         * chai
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        var used = []
            , exports = module.exports = {};

        /*!
         * Chai version
         */

        exports.version = '1.5.0';

        /*!
         * Primary `Assertion` prototype
         */

        exports.Assertion = require('./chai/assertion');

        /*!
         * Assertion Error
         */

        exports.AssertionError = require('./chai/error');

        /*!
         * Utils for plugins (not exported)
         */

        var util = require('./chai/utils');

        /**
         * # .use(function)
         *
         * Provides a way to extend the internals of Chai
         *
         * @param {Function}
         * @returns {this} for chaining
         * @api public
         */

        exports.use = function (fn) {
            if (!~used.indexOf(fn)) {
                fn(this, util);
                used.push(fn);
            }

            return this;
        };

        /*!
         * Core Assertions
         */

        var core = require('./chai/core/assertions');
        exports.use(core);

        /*!
         * Expect interface
         */

        var expect = require('./chai/interface/expect');
        exports.use(expect);

        /*!
         * Should interface
         */

        var should = require('./chai/interface/should');
        exports.use(should);

        /*!
         * Assert interface
         */

        var assert = require('./chai/interface/assert');
        exports.use(assert);

    }); // module: chai.js

    require.register("chai/assertion.js", function(module, exports, require){
        /*!
         * chai
         * http://chaijs.com
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependencies.
         */

        var AssertionError = require('./error')
            , util = require('./utils')
            , flag = util.flag;

        /*!
         * Module export.
         */

        module.exports = Assertion;


        /*!
         * Assertion Constructor
         *
         * Creates object for chaining.
         *
         * @api private
         */

        function Assertion (obj, msg, stack) {
            flag(this, 'ssfi', stack || arguments.callee);
            flag(this, 'object', obj);
            flag(this, 'message', msg);
        }

        /*!
         * ### Assertion.includeStack
         *
         * User configurable property, influences whether stack trace
         * is included in Assertion error message. Default of false
         * suppresses stack trace in the error message
         *
         *     Assertion.includeStack = true;  // enable stack on error
         *
         * @api public
         */

        Assertion.includeStack = false;

        /*!
         * ### Assertion.showDiff
         *
         * User configurable property, influences whether or not
         * the `showDiff` flag should be included in the thrown
         * AssertionErrors. `false` will always be `false`; `true`
         * will be true when the assertion has requested a diff
         * be shown.
         *
         * @api public
         */

        Assertion.showDiff = true;

        Assertion.addProperty = function (name, fn) {
            util.addProperty(this.prototype, name, fn);
        };

        Assertion.addMethod = function (name, fn) {
            util.addMethod(this.prototype, name, fn);
        };

        Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
            util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
        };

        Assertion.overwriteProperty = function (name, fn) {
            util.overwriteProperty(this.prototype, name, fn);
        };

        Assertion.overwriteMethod = function (name, fn) {
            util.overwriteMethod(this.prototype, name, fn);
        };

        /*!
         * ### .assert(expression, message, negateMessage, expected, actual)
         *
         * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
         *
         * @name assert
         * @param {Philosophical} expression to be tested
         * @param {String} message to display if fails
         * @param {String} negatedMessage to display if negated expression fails
         * @param {Mixed} expected value (remember to check for negation)
         * @param {Mixed} actual (optional) will default to `this.obj`
         * @api private
         */

        Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
            var ok = util.test(this, arguments);
            if (true !== showDiff) showDiff = false;
            if (true !== Assertion.showDiff) showDiff = false;

            if (!ok) {
                var msg = util.getMessage(this, arguments)
                    , actual = util.getActual(this, arguments);
                throw new AssertionError({
                    message: msg
                    , actual: actual
                    , expected: expected
                    , stackStartFunction: (Assertion.includeStack) ? this.assert : flag(this, 'ssfi')
                    , showDiff: showDiff
                });
            }
        };

        /*!
         * ### ._obj
         *
         * Quick reference to stored `actual` value for plugin developers.
         *
         * @api private
         */

        Object.defineProperty(Assertion.prototype, '_obj',
            { get: function () {
                return flag(this, 'object');
            }
                , set: function (val) {
                flag(this, 'object', val);
            }
            });

    }); // module: chai/assertion.js

    require.register("chai/core/assertions.js", function(module, exports, require){
        /*!
         * chai
         * http://chaijs.com
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        module.exports = function (chai, _) {
            var Assertion = chai.Assertion
                , toString = Object.prototype.toString
                , flag = _.flag;

            /**
             * ### Language Chains
             *
             * The following are provide as chainable getters to
             * improve the readability of your assertions. They
             * do not provide an testing capability unless they
             * have been overwritten by a plugin.
             *
             * **Chains**
             *
             * - to
             * - be
             * - been
             * - is
             * - that
             * - and
             * - have
             * - with
             * - at
             * - of
             *
             * @name language chains
             * @api public
             */

            [ 'to', 'be', 'been'
                , 'is', 'and', 'have'
                , 'with', 'that', 'at'
                , 'of' ].forEach(function (chain) {
                    Assertion.addProperty(chain, function () {
                        return this;
                    });
                });

            /**
             * ### .not
             *
             * Negates any of assertions following in the chain.
             *
             *     expect(foo).to.not.equal('bar');
             *     expect(goodFn).to.not.throw(Error);
             *     expect({ foo: 'baz' }).to.have.property('foo')
             *       .and.not.equal('bar');
             *
             * @name not
             * @api public
             */

            Assertion.addProperty('not', function () {
                flag(this, 'negate', true);
            });

            /**
             * ### .deep
             *
             * Sets the `deep` flag, later used by the `equal` and
             * `property` assertions.
             *
             *     expect(foo).to.deep.equal({ bar: 'baz' });
             *     expect({ foo: { bar: { baz: 'quux' } } })
             *       .to.have.deep.property('foo.bar.baz', 'quux');
             *
             * @name deep
             * @api public
             */

            Assertion.addProperty('deep', function () {
                flag(this, 'deep', true);
            });

            /**
             * ### .a(type)
             *
             * The `a` and `an` assertions are aliases that can be
             * used either as language chains or to assert a value's
             * type.
             *
             *     // typeof
             *     expect('test').to.be.a('string');
             *     expect({ foo: 'bar' }).to.be.an('object');
             *     expect(null).to.be.a('null');
             *     expect(undefined).to.be.an('undefined');
             *
             *     // language chain
             *     expect(foo).to.be.an.instanceof(Foo);
             *
             * @name a
             * @alias an
             * @param {String} type
             * @param {String} message _optional_
             * @api public
             */

            function an (type, msg) {
                if (msg) flag(this, 'message', msg);
                type = type.toLowerCase();
                var obj = flag(this, 'object')
                    , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';

                this.assert(
                    type === _.type(obj)
                    , 'expected #{this} to be ' + article + type
                    , 'expected #{this} not to be ' + article + type
                );
            }

            Assertion.addChainableMethod('an', an);
            Assertion.addChainableMethod('a', an);

            /**
             * ### .include(value)
             *
             * The `include` and `contain` assertions can be used as either property
             * based language chains or as methods to assert the inclusion of an object
             * in an array or a substring in a string. When used as language chains,
             * they toggle the `contain` flag for the `keys` assertion.
             *
             *     expect([1,2,3]).to.include(2);
             *     expect('foobar').to.contain('foo');
             *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
             *
             * @name include
             * @alias contain
             * @param {Object|String|Number} obj
             * @param {String} message _optional_
             * @api public
             */

            function includeChainingBehavior () {
                flag(this, 'contains', true);
            }

            function include (val, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object')
                this.assert(
                    ~obj.indexOf(val)
                    , 'expected #{this} to include ' + _.inspect(val)
                    , 'expected #{this} to not include ' + _.inspect(val));
            }

            Assertion.addChainableMethod('include', include, includeChainingBehavior);
            Assertion.addChainableMethod('contain', include, includeChainingBehavior);

            /**
             * ### .ok
             *
             * Asserts that the target is truthy.
             *
             *     expect('everthing').to.be.ok;
             *     expect(1).to.be.ok;
             *     expect(false).to.not.be.ok;
             *     expect(undefined).to.not.be.ok;
             *     expect(null).to.not.be.ok;
             *
             * @name ok
             * @api public
             */

            Assertion.addProperty('ok', function () {
                this.assert(
                    flag(this, 'object')
                    , 'expected #{this} to be truthy'
                    , 'expected #{this} to be falsy');
            });

            /**
             * ### .true
             *
             * Asserts that the target is `true`.
             *
             *     expect(true).to.be.true;
             *     expect(1).to.not.be.true;
             *
             * @name true
             * @api public
             */

            Assertion.addProperty('true', function () {
                this.assert(
                    true === flag(this, 'object')
                    , 'expected #{this} to be true'
                    , 'expected #{this} to be false'
                    , this.negate ? false : true
                );
            });

            /**
             * ### .false
             *
             * Asserts that the target is `false`.
             *
             *     expect(false).to.be.false;
             *     expect(0).to.not.be.false;
             *
             * @name false
             * @api public
             */

            Assertion.addProperty('false', function () {
                this.assert(
                    false === flag(this, 'object')
                    , 'expected #{this} to be false'
                    , 'expected #{this} to be true'
                    , this.negate ? true : false
                );
            });

            /**
             * ### .null
             *
             * Asserts that the target is `null`.
             *
             *     expect(null).to.be.null;
             *     expect(undefined).not.to.be.null;
             *
             * @name null
             * @api public
             */

            Assertion.addProperty('null', function () {
                this.assert(
                    null === flag(this, 'object')
                    , 'expected #{this} to be null'
                    , 'expected #{this} not to be null'
                );
            });

            /**
             * ### .undefined
             *
             * Asserts that the target is `undefined`.
             *
             *      expect(undefined).to.be.undefined;
             *      expect(null).to.not.be.undefined;
             *
             * @name undefined
             * @api public
             */

            Assertion.addProperty('undefined', function () {
                this.assert(
                    undefined === flag(this, 'object')
                    , 'expected #{this} to be undefined'
                    , 'expected #{this} not to be undefined'
                );
            });

            /**
             * ### .exist
             *
             * Asserts that the target is neither `null` nor `undefined`.
             *
             *     var foo = 'hi'
             *       , bar = null
             *       , baz;
             *
             *     expect(foo).to.exist;
             *     expect(bar).to.not.exist;
             *     expect(baz).to.not.exist;
             *
             * @name exist
             * @api public
             */

            Assertion.addProperty('exist', function () {
                this.assert(
                    null != flag(this, 'object')
                    , 'expected #{this} to exist'
                    , 'expected #{this} to not exist'
                );
            });


            /**
             * ### .empty
             *
             * Asserts that the target's length is `0`. For arrays, it checks
             * the `length` property. For objects, it gets the count of
             * enumerable keys.
             *
             *     expect([]).to.be.empty;
             *     expect('').to.be.empty;
             *     expect({}).to.be.empty;
             *
             * @name empty
             * @api public
             */

            Assertion.addProperty('empty', function () {
                var obj = flag(this, 'object')
                    , expected = obj;

                if (Array.isArray(obj) || 'string' === typeof object) {
                    expected = obj.length;
                } else if (typeof obj === 'object') {
                    expected = Object.keys(obj).length;
                }

                this.assert(
                    !expected
                    , 'expected #{this} to be empty'
                    , 'expected #{this} not to be empty'
                );
            });

            /**
             * ### .arguments
             *
             * Asserts that the target is an arguments object.
             *
             *     function test () {
             *       expect(arguments).to.be.arguments;
             *     }
             *
             * @name arguments
             * @alias Arguments
             * @api public
             */

            function checkArguments () {
                var obj = flag(this, 'object')
                    , type = Object.prototype.toString.call(obj);
                this.assert(
                    '[object Arguments]' === type
                    , 'expected #{this} to be arguments but got ' + type
                    , 'expected #{this} to not be arguments'
                );
            }

            Assertion.addProperty('arguments', checkArguments);
            Assertion.addProperty('Arguments', checkArguments);

            /**
             * ### .equal(value)
             *
             * Asserts that the target is strictly equal (`===`) to `value`.
             * Alternately, if the `deep` flag is set, asserts that
             * the target is deeply equal to `value`.
             *
             *     expect('hello').to.equal('hello');
             *     expect(42).to.equal(42);
             *     expect(1).to.not.equal(true);
             *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
             *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
             *
             * @name equal
             * @alias equals
             * @alias eq
             * @alias deep.equal
             * @param {Mixed} value
             * @param {String} message _optional_
             * @api public
             */

            function assertEqual (val, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'deep')) {
                    return this.eql(val);
                } else {
                    this.assert(
                        val === obj
                        , 'expected #{this} to equal #{exp}'
                        , 'expected #{this} to not equal #{exp}'
                        , val
                        , this._obj
                        , true
                    );
                }
            }

            Assertion.addMethod('equal', assertEqual);
            Assertion.addMethod('equals', assertEqual);
            Assertion.addMethod('eq', assertEqual);

            /**
             * ### .eql(value)
             *
             * Asserts that the target is deeply equal to `value`.
             *
             *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
             *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
             *
             * @name eql
             * @alias eqls
             * @param {Mixed} value
             * @param {String} message _optional_
             * @api public
             */

            function assertEql(obj, msg) {
                if (msg) flag(this, 'message', msg);
                this.assert(
                    _.eql(obj, flag(this, 'object'))
                    , 'expected #{this} to deeply equal #{exp}'
                    , 'expected #{this} to not deeply equal #{exp}'
                    , obj
                    , this._obj
                    , true
                );
            }

            Assertion.addMethod('eql', assertEql);
            Assertion.addMethod('eqls', assertEql);

            /**
             * ### .above(value)
             *
             * Asserts that the target is greater than `value`.
             *
             *     expect(10).to.be.above(5);
             *
             * Can also be used in conjunction with `length` to
             * assert a minimum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.above(2);
             *     expect([ 1, 2, 3 ]).to.have.length.above(2);
             *
             * @name above
             * @alias gt
             * @alias greaterThan
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertAbove (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len > n
                        , 'expected #{this} to have a length above #{exp} but got #{act}'
                        , 'expected #{this} to not have a length above #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj > n
                        , 'expected #{this} to be above ' + n
                        , 'expected #{this} to be at most ' + n
                    );
                }
            }

            Assertion.addMethod('above', assertAbove);
            Assertion.addMethod('gt', assertAbove);
            Assertion.addMethod('greaterThan', assertAbove);

            /**
             * ### .least(value)
             *
             * Asserts that the target is greater than or equal to `value`.
             *
             *     expect(10).to.be.at.least(10);
             *
             * Can also be used in conjunction with `length` to
             * assert a minimum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.of.at.least(2);
             *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
             *
             * @name least
             * @alias gte
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertLeast (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len >= n
                        , 'expected #{this} to have a length at least #{exp} but got #{act}'
                        , 'expected #{this} to have a length below #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj >= n
                        , 'expected #{this} to be at least ' + n
                        , 'expected #{this} to be below ' + n
                    );
                }
            }

            Assertion.addMethod('least', assertLeast);
            Assertion.addMethod('gte', assertLeast);

            /**
             * ### .below(value)
             *
             * Asserts that the target is less than `value`.
             *
             *     expect(5).to.be.below(10);
             *
             * Can also be used in conjunction with `length` to
             * assert a maximum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.below(4);
             *     expect([ 1, 2, 3 ]).to.have.length.below(4);
             *
             * @name below
             * @alias lt
             * @alias lessThan
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertBelow (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len < n
                        , 'expected #{this} to have a length below #{exp} but got #{act}'
                        , 'expected #{this} to not have a length below #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj < n
                        , 'expected #{this} to be below ' + n
                        , 'expected #{this} to be at least ' + n
                    );
                }
            }

            Assertion.addMethod('below', assertBelow);
            Assertion.addMethod('lt', assertBelow);
            Assertion.addMethod('lessThan', assertBelow);

            /**
             * ### .most(value)
             *
             * Asserts that the target is less than or equal to `value`.
             *
             *     expect(5).to.be.at.most(5);
             *
             * Can also be used in conjunction with `length` to
             * assert a maximum length. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.of.at.most(4);
             *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
             *
             * @name most
             * @alias lte
             * @param {Number} value
             * @param {String} message _optional_
             * @api public
             */

            function assertMost (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len <= n
                        , 'expected #{this} to have a length at most #{exp} but got #{act}'
                        , 'expected #{this} to have a length above #{exp}'
                        , n
                        , len
                    );
                } else {
                    this.assert(
                        obj <= n
                        , 'expected #{this} to be at most ' + n
                        , 'expected #{this} to be above ' + n
                    );
                }
            }

            Assertion.addMethod('most', assertMost);
            Assertion.addMethod('lte', assertMost);

            /**
             * ### .within(start, finish)
             *
             * Asserts that the target is within a range.
             *
             *     expect(7).to.be.within(5,10);
             *
             * Can also be used in conjunction with `length` to
             * assert a length range. The benefit being a
             * more informative error message than if the length
             * was supplied directly.
             *
             *     expect('foo').to.have.length.within(2,4);
             *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
             *
             * @name within
             * @param {Number} start lowerbound inclusive
             * @param {Number} finish upperbound inclusive
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('within', function (start, finish, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object')
                    , range = start + '..' + finish;
                if (flag(this, 'doLength')) {
                    new Assertion(obj, msg).to.have.property('length');
                    var len = obj.length;
                    this.assert(
                        len >= start && len <= finish
                        , 'expected #{this} to have a length within ' + range
                        , 'expected #{this} to not have a length within ' + range
                    );
                } else {
                    this.assert(
                        obj >= start && obj <= finish
                        , 'expected #{this} to be within ' + range
                        , 'expected #{this} to not be within ' + range
                    );
                }
            });

            /**
             * ### .instanceof(constructor)
             *
             * Asserts that the target is an instance of `constructor`.
             *
             *     var Tea = function (name) { this.name = name; }
             *       , Chai = new Tea('chai');
             *
             *     expect(Chai).to.be.an.instanceof(Tea);
             *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
             *
             * @name instanceof
             * @param {Constructor} constructor
             * @param {String} message _optional_
             * @alias instanceOf
             * @api public
             */

            function assertInstanceOf (constructor, msg) {
                if (msg) flag(this, 'message', msg);
                var name = _.getName(constructor);
                this.assert(
                    flag(this, 'object') instanceof constructor
                    , 'expected #{this} to be an instance of ' + name
                    , 'expected #{this} to not be an instance of ' + name
                );
            };

            Assertion.addMethod('instanceof', assertInstanceOf);
            Assertion.addMethod('instanceOf', assertInstanceOf);

            /**
             * ### .property(name, [value])
             *
             * Asserts that the target has a property `name`, optionally asserting that
             * the value of that property is strictly equal to  `value`.
             * If the `deep` flag is set, you can use dot- and bracket-notation for deep
             * references into objects and arrays.
             *
             *     // simple referencing
             *     var obj = { foo: 'bar' };
             *     expect(obj).to.have.property('foo');
             *     expect(obj).to.have.property('foo', 'bar');
             *
             *     // deep referencing
             *     var deepObj = {
             *         green: { tea: 'matcha' }
             *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
             *     };

             *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
             *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
             *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
             *
             * You can also use an array as the starting point of a `deep.property`
             * assertion, or traverse nested arrays.
             *
             *     var arr = [
             *         [ 'chai', 'matcha', 'konacha' ]
             *       , [ { tea: 'chai' }
             *         , { tea: 'matcha' }
             *         , { tea: 'konacha' } ]
             *     ];
             *
             *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
             *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
             *
             * Furthermore, `property` changes the subject of the assertion
             * to be the value of that property from the original object. This
             * permits for further chainable assertions on that property.
             *
             *     expect(obj).to.have.property('foo')
             *       .that.is.a('string');
             *     expect(deepObj).to.have.property('green')
             *       .that.is.an('object')
             *       .that.deep.equals({ tea: 'matcha' });
             *     expect(deepObj).to.have.property('teas')
             *       .that.is.an('array')
             *       .with.deep.property('[2]')
             *         .that.deep.equals({ tea: 'konacha' });
             *
             * @name property
             * @alias deep.property
             * @param {String} name
             * @param {Mixed} value (optional)
             * @param {String} message _optional_
             * @returns value of property for chaining
             * @api public
             */

            Assertion.addMethod('property', function (name, val, msg) {
                if (msg) flag(this, 'message', msg);

                var descriptor = flag(this, 'deep') ? 'deep property ' : 'property '
                    , negate = flag(this, 'negate')
                    , obj = flag(this, 'object')
                    , value = flag(this, 'deep')
                        ? _.getPathValue(name, obj)
                        : obj[name];

                if (negate && undefined !== val) {
                    if (undefined === value) {
                        msg = (msg != null) ? msg + ': ' : '';
                        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
                    }
                } else {
                    this.assert(
                        undefined !== value
                        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
                        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
                }

                if (undefined !== val) {
                    this.assert(
                        val === value
                        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
                        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
                        , val
                        , value
                    );
                }

                flag(this, 'object', value);
            });


            /**
             * ### .ownProperty(name)
             *
             * Asserts that the target has an own property `name`.
             *
             *     expect('test').to.have.ownProperty('length');
             *
             * @name ownProperty
             * @alias haveOwnProperty
             * @param {String} name
             * @param {String} message _optional_
             * @api public
             */

            function assertOwnProperty (name, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                this.assert(
                    obj.hasOwnProperty(name)
                    , 'expected #{this} to have own property ' + _.inspect(name)
                    , 'expected #{this} to not have own property ' + _.inspect(name)
                );
            }

            Assertion.addMethod('ownProperty', assertOwnProperty);
            Assertion.addMethod('haveOwnProperty', assertOwnProperty);

            /**
             * ### .length(value)
             *
             * Asserts that the target's `length` property has
             * the expected value.
             *
             *     expect([ 1, 2, 3]).to.have.length(3);
             *     expect('foobar').to.have.length(6);
             *
             * Can also be used as a chain precursor to a value
             * comparison for the length property.
             *
             *     expect('foo').to.have.length.above(2);
             *     expect([ 1, 2, 3 ]).to.have.length.above(2);
             *     expect('foo').to.have.length.below(4);
             *     expect([ 1, 2, 3 ]).to.have.length.below(4);
             *     expect('foo').to.have.length.within(2,4);
             *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
             *
             * @name length
             * @alias lengthOf
             * @param {Number} length
             * @param {String} message _optional_
             * @api public
             */

            function assertLengthChain () {
                flag(this, 'doLength', true);
            }

            function assertLength (n, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                new Assertion(obj, msg).to.have.property('length');
                var len = obj.length;

                this.assert(
                    len == n
                    , 'expected #{this} to have a length of #{exp} but got #{act}'
                    , 'expected #{this} to not have a length of #{act}'
                    , n
                    , len
                );
            }

            Assertion.addChainableMethod('length', assertLength, assertLengthChain);
            Assertion.addMethod('lengthOf', assertLength, assertLengthChain);

            /**
             * ### .match(regexp)
             *
             * Asserts that the target matches a regular expression.
             *
             *     expect('foobar').to.match(/^foo/);
             *
             * @name match
             * @param {RegExp} RegularExpression
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('match', function (re, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                this.assert(
                    re.exec(obj)
                    , 'expected #{this} to match ' + re
                    , 'expected #{this} not to match ' + re
                );
            });

            /**
             * ### .string(string)
             *
             * Asserts that the string target contains another string.
             *
             *     expect('foobar').to.have.string('bar');
             *
             * @name string
             * @param {String} string
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('string', function (str, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                new Assertion(obj, msg).is.a('string');

                this.assert(
                    ~obj.indexOf(str)
                    , 'expected #{this} to contain ' + _.inspect(str)
                    , 'expected #{this} to not contain ' + _.inspect(str)
                );
            });


            /**
             * ### .keys(key1, [key2], [...])
             *
             * Asserts that the target has exactly the given keys, or
             * asserts the inclusion of some keys when using the
             * `include` or `contain` modifiers.
             *
             *     expect({ foo: 1, bar: 2 }).to.have.keys(['foo', 'bar']);
             *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.keys('foo', 'bar');
             *
             * @name keys
             * @alias key
             * @param {String...|Array} keys
             * @api public
             */

            function assertKeys (keys) {
                var obj = flag(this, 'object')
                    , str
                    , ok = true;

                keys = keys instanceof Array
                    ? keys
                    : Array.prototype.slice.call(arguments);

                if (!keys.length) throw new Error('keys required');

                var actual = Object.keys(obj)
                    , len = keys.length;

                // Inclusion
                ok = keys.every(function(key){
                    return ~actual.indexOf(key);
                });

                // Strict
                if (!flag(this, 'negate') && !flag(this, 'contains')) {
                    ok = ok && keys.length == actual.length;
                }

                // Key string
                if (len > 1) {
                    keys = keys.map(function(key){
                        return _.inspect(key);
                    });
                    var last = keys.pop();
                    str = keys.join(', ') + ', and ' + last;
                } else {
                    str = _.inspect(keys[0]);
                }

                // Form
                str = (len > 1 ? 'keys ' : 'key ') + str;

                // Have / include
                str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;

                // Assertion
                this.assert(
                    ok
                    , 'expected #{this} to ' + str
                    , 'expected #{this} to not ' + str
                );
            }

            Assertion.addMethod('keys', assertKeys);
            Assertion.addMethod('key', assertKeys);

            /**
             * ### .throw(constructor)
             *
             * Asserts that the function target will throw a specific error, or specific type of error
             * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
             * for the error's message.
             *
             *     var err = new ReferenceError('This is a bad function.');
             *     var fn = function () { throw err; }
             *     expect(fn).to.throw(ReferenceError);
             *     expect(fn).to.throw(Error);
             *     expect(fn).to.throw(/bad function/);
             *     expect(fn).to.not.throw('good function');
             *     expect(fn).to.throw(ReferenceError, /bad function/);
             *     expect(fn).to.throw(err);
             *     expect(fn).to.not.throw(new RangeError('Out of range.'));
             *
             * Please note that when a throw expectation is negated, it will check each
             * parameter independently, starting with error constructor type. The appropriate way
             * to check for the existence of a type of error but for a message that does not match
             * is to use `and`.
             *
             *     expect(fn).to.throw(ReferenceError)
             *        .and.not.throw(/good function/);
             *
             * @name throw
             * @alias throws
             * @alias Throw
             * @param {ErrorConstructor} constructor
             * @param {String|RegExp} expected error message
             * @param {String} message _optional_
             * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
             * @api public
             */

            function assertThrows (constructor, errMsg, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                new Assertion(obj, msg).is.a('function');

                var thrown = false
                    , desiredError = null
                    , name = null
                    , thrownError = null;

                if (arguments.length === 0) {
                    errMsg = null;
                    constructor = null;
                } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
                    errMsg = constructor;
                    constructor = null;
                } else if (constructor && constructor instanceof Error) {
                    desiredError = constructor;
                    constructor = null;
                    errMsg = null;
                } else if (typeof constructor === 'function') {
                    name = (new constructor()).name;
                } else {
                    constructor = null;
                }

                try {
                    obj();
                } catch (err) {
                    // first, check desired error
                    if (desiredError) {
                        this.assert(
                            err === desiredError
                            , 'expected #{this} to throw #{exp} but #{act} was thrown'
                            , 'expected #{this} to not throw #{exp}'
                            , desiredError
                            , err
                        );

                        return this;
                    }
                    // next, check constructor
                    if (constructor) {
                        this.assert(
                            err instanceof constructor
                            , 'expected #{this} to throw #{exp} but #{act} was thrown'
                            , 'expected #{this} to not throw #{exp} but #{act} was thrown'
                            , name
                            , err
                        );

                        if (!errMsg) return this;
                    }
                    // next, check message
                    var message = 'object' === _.type(err) && "message" in err
                        ? err.message
                        : '' + err;

                    if ((message != null) && errMsg && errMsg instanceof RegExp) {
                        this.assert(
                            errMsg.exec(message)
                            , 'expected #{this} to throw error matching #{exp} but got #{act}'
                            , 'expected #{this} to throw error not matching #{exp}'
                            , errMsg
                            , message
                        );

                        return this;
                    } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
                        this.assert(
                            ~message.indexOf(errMsg)
                            , 'expected #{this} to throw error including #{exp} but got #{act}'
                            , 'expected #{this} to throw error not including #{act}'
                            , errMsg
                            , message
                        );

                        return this;
                    } else {
                        thrown = true;
                        thrownError = err;
                    }
                }

                var actuallyGot = ''
                    , expectedThrown = name !== null
                        ? name
                        : desiredError
                        ? '#{exp}' //_.inspect(desiredError)
                        : 'an error';

                if (thrown) {
                    actuallyGot = ' but #{act} was thrown'
                }

                this.assert(
                    thrown === true
                    , 'expected #{this} to throw ' + expectedThrown + actuallyGot
                    , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
                    , desiredError
                    , thrownError
                );
            };

            Assertion.addMethod('throw', assertThrows);
            Assertion.addMethod('throws', assertThrows);
            Assertion.addMethod('Throw', assertThrows);

            /**
             * ### .respondTo(method)
             *
             * Asserts that the object or class target will respond to a method.
             *
             *     Klass.prototype.bar = function(){};
             *     expect(Klass).to.respondTo('bar');
             *     expect(obj).to.respondTo('bar');
             *
             * To check if a constructor will respond to a static function,
             * set the `itself` flag.
             *
             *    Klass.baz = function(){};
             *    expect(Klass).itself.to.respondTo('baz');
             *
             * @name respondTo
             * @param {String} method
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('respondTo', function (method, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object')
                    , itself = flag(this, 'itself')
                    , context = ('function' === _.type(obj) && !itself)
                        ? obj.prototype[method]
                        : obj[method];

                this.assert(
                    'function' === typeof context
                    , 'expected #{this} to respond to ' + _.inspect(method)
                    , 'expected #{this} to not respond to ' + _.inspect(method)
                );
            });

            /**
             * ### .itself
             *
             * Sets the `itself` flag, later used by the `respondTo` assertion.
             *
             *    function Foo() {}
             *    Foo.bar = function() {}
             *    Foo.prototype.baz = function() {}
             *
             *    expect(Foo).itself.to.respondTo('bar');
             *    expect(Foo).itself.not.to.respondTo('baz');
             *
             * @name itself
             * @api public
             */

            Assertion.addProperty('itself', function () {
                flag(this, 'itself', true);
            });

            /**
             * ### .satisfy(method)
             *
             * Asserts that the target passes a given truth test.
             *
             *     expect(1).to.satisfy(function(num) { return num > 0; });
             *
             * @name satisfy
             * @param {Function} matcher
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('satisfy', function (matcher, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                this.assert(
                    matcher(obj)
                    , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
                    , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
                    , this.negate ? false : true
                    , matcher(obj)
                );
            });

            /**
             * ### .closeTo(expected, delta)
             *
             * Asserts that the target is equal `expected`, to within a +/- `delta` range.
             *
             *     expect(1.5).to.be.closeTo(1, 0.5);
             *
             * @name closeTo
             * @param {Number} expected
             * @param {Number} delta
             * @param {String} message _optional_
             * @api public
             */

            Assertion.addMethod('closeTo', function (expected, delta, msg) {
                if (msg) flag(this, 'message', msg);
                var obj = flag(this, 'object');
                this.assert(
                    Math.abs(obj - expected) <= delta
                    , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
                    , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
                );
            });

        };

    }); // module: chai/core/assertions.js

    require.register("chai/error.js", function(module, exports, require){
        /*!
         * chai
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Main export
         */

        module.exports = AssertionError;

        /**
         * # AssertionError (constructor)
         *
         * Create a new assertion error based on the Javascript
         * `Error` prototype.
         *
         * **Options**
         * - message
         * - actual
         * - expected
         * - operator
         * - startStackFunction
         *
         * @param {Object} options
         * @api public
         */

        function AssertionError (options) {
            options = options || {};
            this.message = options.message;
            this.actual = options.actual;
            this.expected = options.expected;
            this.operator = options.operator;
            this.showDiff = options.showDiff;

            if (options.stackStartFunction && Error.captureStackTrace) {
                var stackStartFunction = options.stackStartFunction;
                Error.captureStackTrace(this, stackStartFunction);
            }
        }

        /*!
         * Inherit from Error
         */

        AssertionError.prototype = Object.create(Error.prototype);
        AssertionError.prototype.name = 'AssertionError';
        AssertionError.prototype.constructor = AssertionError;

        /**
         * # toString()
         *
         * Override default to string method
         */

        AssertionError.prototype.toString = function() {
            return this.message;
        };

    }); // module: chai/error.js

    require.register("chai/interface/assert.js", function(module, exports, require){
        /*!
         * chai
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */


        module.exports = function (chai, util) {

            /*!
             * Chai dependencies.
             */

            var Assertion = chai.Assertion
                , flag = util.flag;

            /*!
             * Module export.
             */

            /**
             * ### assert(expression, message)
             *
             * Write your own test expressions.
             *
             *     assert('foo' !== 'bar', 'foo is not bar');
             *     assert(Array.isArray([]), 'empty arrays are arrays');
             *
             * @param {Mixed} expression to test for truthiness
             * @param {String} message to display on error
             * @name assert
             * @api public
             */

            var assert = chai.assert = function (express, errmsg) {
                var test = new Assertion(null);
                test.assert(
                    express
                    , errmsg
                    , '[ negation message unavailable ]'
                );
            };

            /**
             * ### .fail(actual, expected, [message], [operator])
             *
             * Throw a failure. Node.js `assert` module-compatible.
             *
             * @name fail
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @param {String} operator
             * @api public
             */

            assert.fail = function (actual, expected, message, operator) {
                throw new chai.AssertionError({
                    actual: actual
                    , expected: expected
                    , message: message
                    , operator: operator
                    , stackStartFunction: assert.fail
                });
            };

            /**
             * ### .ok(object, [message])
             *
             * Asserts that `object` is truthy.
             *
             *     assert.ok('everything', 'everything is ok');
             *     assert.ok(false, 'this will fail');
             *
             * @name ok
             * @param {Mixed} object to test
             * @param {String} message
             * @api public
             */

            assert.ok = function (val, msg) {
                new Assertion(val, msg).is.ok;
            };

            /**
             * ### .equal(actual, expected, [message])
             *
             * Asserts non-strict equality (`==`) of `actual` and `expected`.
             *
             *     assert.equal(3, '3', '== coerces values to strings');
             *
             * @name equal
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.equal = function (act, exp, msg) {
                var test = new Assertion(act, msg);

                test.assert(
                    exp == flag(test, 'object')
                    , 'expected #{this} to equal #{exp}'
                    , 'expected #{this} to not equal #{act}'
                    , exp
                    , act
                );
            };

            /**
             * ### .notEqual(actual, expected, [message])
             *
             * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
             *
             *     assert.notEqual(3, 4, 'these numbers are not equal');
             *
             * @name notEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.notEqual = function (act, exp, msg) {
                var test = new Assertion(act, msg);

                test.assert(
                    exp != flag(test, 'object')
                    , 'expected #{this} to not equal #{exp}'
                    , 'expected #{this} to equal #{act}'
                    , exp
                    , act
                );
            };

            /**
             * ### .strictEqual(actual, expected, [message])
             *
             * Asserts strict equality (`===`) of `actual` and `expected`.
             *
             *     assert.strictEqual(true, true, 'these booleans are strictly equal');
             *
             * @name strictEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.strictEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.equal(exp);
            };

            /**
             * ### .notStrictEqual(actual, expected, [message])
             *
             * Asserts strict inequality (`!==`) of `actual` and `expected`.
             *
             *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
             *
             * @name notStrictEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.notStrictEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.not.equal(exp);
            };

            /**
             * ### .deepEqual(actual, expected, [message])
             *
             * Asserts that `actual` is deeply equal to `expected`.
             *
             *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
             *
             * @name deepEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.deepEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.eql(exp);
            };

            /**
             * ### .notDeepEqual(actual, expected, [message])
             *
             * Assert that `actual` is not deeply equal to `expected`.
             *
             *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
             *
             * @name notDeepEqual
             * @param {Mixed} actual
             * @param {Mixed} expected
             * @param {String} message
             * @api public
             */

            assert.notDeepEqual = function (act, exp, msg) {
                new Assertion(act, msg).to.not.eql(exp);
            };

            /**
             * ### .isTrue(value, [message])
             *
             * Asserts that `value` is true.
             *
             *     var teaServed = true;
             *     assert.isTrue(teaServed, 'the tea has been served');
             *
             * @name isTrue
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isTrue = function (val, msg) {
                new Assertion(val, msg).is['true'];
            };

            /**
             * ### .isFalse(value, [message])
             *
             * Asserts that `value` is false.
             *
             *     var teaServed = false;
             *     assert.isFalse(teaServed, 'no tea yet? hmm...');
             *
             * @name isFalse
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isFalse = function (val, msg) {
                new Assertion(val, msg).is['false'];
            };

            /**
             * ### .isNull(value, [message])
             *
             * Asserts that `value` is null.
             *
             *     assert.isNull(err, 'there was no error');
             *
             * @name isNull
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNull = function (val, msg) {
                new Assertion(val, msg).to.equal(null);
            };

            /**
             * ### .isNotNull(value, [message])
             *
             * Asserts that `value` is not null.
             *
             *     var tea = 'tasty chai';
             *     assert.isNotNull(tea, 'great, time for tea!');
             *
             * @name isNotNull
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotNull = function (val, msg) {
                new Assertion(val, msg).to.not.equal(null);
            };

            /**
             * ### .isUndefined(value, [message])
             *
             * Asserts that `value` is `undefined`.
             *
             *     var tea;
             *     assert.isUndefined(tea, 'no tea defined');
             *
             * @name isUndefined
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isUndefined = function (val, msg) {
                new Assertion(val, msg).to.equal(undefined);
            };

            /**
             * ### .isDefined(value, [message])
             *
             * Asserts that `value` is not `undefined`.
             *
             *     var tea = 'cup of chai';
             *     assert.isDefined(tea, 'tea has been defined');
             *
             * @name isUndefined
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isDefined = function (val, msg) {
                new Assertion(val, msg).to.not.equal(undefined);
            };

            /**
             * ### .isFunction(value, [message])
             *
             * Asserts that `value` is a function.
             *
             *     function serveTea() { return 'cup of tea'; };
             *     assert.isFunction(serveTea, 'great, we can have tea now');
             *
             * @name isFunction
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isFunction = function (val, msg) {
                new Assertion(val, msg).to.be.a('function');
            };

            /**
             * ### .isNotFunction(value, [message])
             *
             * Asserts that `value` is _not_ a function.
             *
             *     var serveTea = [ 'heat', 'pour', 'sip' ];
             *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
             *
             * @name isNotFunction
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotFunction = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('function');
            };

            /**
             * ### .isObject(value, [message])
             *
             * Asserts that `value` is an object (as revealed by
             * `Object.prototype.toString`).
             *
             *     var selection = { name: 'Chai', serve: 'with spices' };
             *     assert.isObject(selection, 'tea selection is an object');
             *
             * @name isObject
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isObject = function (val, msg) {
                new Assertion(val, msg).to.be.a('object');
            };

            /**
             * ### .isNotObject(value, [message])
             *
             * Asserts that `value` is _not_ an object.
             *
             *     var selection = 'chai'
             *     assert.isObject(selection, 'tea selection is not an object');
             *     assert.isObject(null, 'null is not an object');
             *
             * @name isNotObject
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotObject = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('object');
            };

            /**
             * ### .isArray(value, [message])
             *
             * Asserts that `value` is an array.
             *
             *     var menu = [ 'green', 'chai', 'oolong' ];
             *     assert.isArray(menu, 'what kind of tea do we want?');
             *
             * @name isArray
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isArray = function (val, msg) {
                new Assertion(val, msg).to.be.an('array');
            };

            /**
             * ### .isNotArray(value, [message])
             *
             * Asserts that `value` is _not_ an array.
             *
             *     var menu = 'green|chai|oolong';
             *     assert.isNotArray(menu, 'what kind of tea do we want?');
             *
             * @name isNotArray
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotArray = function (val, msg) {
                new Assertion(val, msg).to.not.be.an('array');
            };

            /**
             * ### .isString(value, [message])
             *
             * Asserts that `value` is a string.
             *
             *     var teaOrder = 'chai';
             *     assert.isString(teaOrder, 'order placed');
             *
             * @name isString
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isString = function (val, msg) {
                new Assertion(val, msg).to.be.a('string');
            };

            /**
             * ### .isNotString(value, [message])
             *
             * Asserts that `value` is _not_ a string.
             *
             *     var teaOrder = 4;
             *     assert.isNotString(teaOrder, 'order placed');
             *
             * @name isNotString
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotString = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('string');
            };

            /**
             * ### .isNumber(value, [message])
             *
             * Asserts that `value` is a number.
             *
             *     var cups = 2;
             *     assert.isNumber(cups, 'how many cups');
             *
             * @name isNumber
             * @param {Number} value
             * @param {String} message
             * @api public
             */

            assert.isNumber = function (val, msg) {
                new Assertion(val, msg).to.be.a('number');
            };

            /**
             * ### .isNotNumber(value, [message])
             *
             * Asserts that `value` is _not_ a number.
             *
             *     var cups = '2 cups please';
             *     assert.isNotNumber(cups, 'how many cups');
             *
             * @name isNotNumber
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotNumber = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('number');
            };

            /**
             * ### .isBoolean(value, [message])
             *
             * Asserts that `value` is a boolean.
             *
             *     var teaReady = true
             *       , teaServed = false;
             *
             *     assert.isBoolean(teaReady, 'is the tea ready');
             *     assert.isBoolean(teaServed, 'has tea been served');
             *
             * @name isBoolean
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isBoolean = function (val, msg) {
                new Assertion(val, msg).to.be.a('boolean');
            };

            /**
             * ### .isNotBoolean(value, [message])
             *
             * Asserts that `value` is _not_ a boolean.
             *
             *     var teaReady = 'yep'
             *       , teaServed = 'nope';
             *
             *     assert.isNotBoolean(teaReady, 'is the tea ready');
             *     assert.isNotBoolean(teaServed, 'has tea been served');
             *
             * @name isNotBoolean
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.isNotBoolean = function (val, msg) {
                new Assertion(val, msg).to.not.be.a('boolean');
            };

            /**
             * ### .typeOf(value, name, [message])
             *
             * Asserts that `value`'s type is `name`, as determined by
             * `Object.prototype.toString`.
             *
             *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
             *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
             *     assert.typeOf('tea', 'string', 'we have a string');
             *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
             *     assert.typeOf(null, 'null', 'we have a null');
             *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
             *
             * @name typeOf
             * @param {Mixed} value
             * @param {String} name
             * @param {String} message
             * @api public
             */

            assert.typeOf = function (val, type, msg) {
                new Assertion(val, msg).to.be.a(type);
            };

            /**
             * ### .notTypeOf(value, name, [message])
             *
             * Asserts that `value`'s type is _not_ `name`, as determined by
             * `Object.prototype.toString`.
             *
             *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
             *
             * @name notTypeOf
             * @param {Mixed} value
             * @param {String} typeof name
             * @param {String} message
             * @api public
             */

            assert.notTypeOf = function (val, type, msg) {
                new Assertion(val, msg).to.not.be.a(type);
            };

            /**
             * ### .instanceOf(object, constructor, [message])
             *
             * Asserts that `value` is an instance of `constructor`.
             *
             *     var Tea = function (name) { this.name = name; }
             *       , chai = new Tea('chai');
             *
             *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
             *
             * @name instanceOf
             * @param {Object} object
             * @param {Constructor} constructor
             * @param {String} message
             * @api public
             */

            assert.instanceOf = function (val, type, msg) {
                new Assertion(val, msg).to.be.instanceOf(type);
            };

            /**
             * ### .notInstanceOf(object, constructor, [message])
             *
             * Asserts `value` is not an instance of `constructor`.
             *
             *     var Tea = function (name) { this.name = name; }
             *       , chai = new String('chai');
             *
             *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
             *
             * @name notInstanceOf
             * @param {Object} object
             * @param {Constructor} constructor
             * @param {String} message
             * @api public
             */

            assert.notInstanceOf = function (val, type, msg) {
                new Assertion(val, msg).to.not.be.instanceOf(type);
            };

            /**
             * ### .include(haystack, needle, [message])
             *
             * Asserts that `haystack` includes `needle`. Works
             * for strings and arrays.
             *
             *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
             *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
             *
             * @name include
             * @param {Array|String} haystack
             * @param {Mixed} needle
             * @param {String} message
             * @api public
             */

            assert.include = function (exp, inc, msg) {
                var obj = new Assertion(exp, msg);

                if (Array.isArray(exp)) {
                    obj.to.include(inc);
                } else if ('string' === typeof exp) {
                    obj.to.contain.string(inc);
                }
            };

            /**
             * ### .match(value, regexp, [message])
             *
             * Asserts that `value` matches the regular expression `regexp`.
             *
             *     assert.match('foobar', /^foo/, 'regexp matches');
             *
             * @name match
             * @param {Mixed} value
             * @param {RegExp} regexp
             * @param {String} message
             * @api public
             */

            assert.match = function (exp, re, msg) {
                new Assertion(exp, msg).to.match(re);
            };

            /**
             * ### .notMatch(value, regexp, [message])
             *
             * Asserts that `value` does not match the regular expression `regexp`.
             *
             *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
             *
             * @name notMatch
             * @param {Mixed} value
             * @param {RegExp} regexp
             * @param {String} message
             * @api public
             */

            assert.notMatch = function (exp, re, msg) {
                new Assertion(exp, msg).to.not.match(re);
            };

            /**
             * ### .property(object, property, [message])
             *
             * Asserts that `object` has a property named by `property`.
             *
             *     assert.property({ tea: { green: 'matcha' }}, 'tea');
             *
             * @name property
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.property = function (obj, prop, msg) {
                new Assertion(obj, msg).to.have.property(prop);
            };

            /**
             * ### .notProperty(object, property, [message])
             *
             * Asserts that `object` does _not_ have a property named by `property`.
             *
             *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
             *
             * @name notProperty
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.notProperty = function (obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.property(prop);
            };

            /**
             * ### .deepProperty(object, property, [message])
             *
             * Asserts that `object` has a property named by `property`, which can be a
             * string using dot- and bracket-notation for deep reference.
             *
             *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
             *
             * @name deepProperty
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.deepProperty = function (obj, prop, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop);
            };

            /**
             * ### .notDeepProperty(object, property, [message])
             *
             * Asserts that `object` does _not_ have a property named by `property`, which
             * can be a string using dot- and bracket-notation for deep reference.
             *
             *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
             *
             * @name notDeepProperty
             * @param {Object} object
             * @param {String} property
             * @param {String} message
             * @api public
             */

            assert.notDeepProperty = function (obj, prop, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop);
            };

            /**
             * ### .propertyVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property` with value given
             * by `value`.
             *
             *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
             *
             * @name propertyVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.propertyVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.property(prop, val);
            };

            /**
             * ### .propertyNotVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property`, but with a value
             * different from that given by `value`.
             *
             *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
             *
             * @name propertyNotVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.propertyNotVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.property(prop, val);
            };

            /**
             * ### .deepPropertyVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property` with value given
             * by `value`. `property` can use dot- and bracket-notation for deep
             * reference.
             *
             *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
             *
             * @name deepPropertyVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.deepPropertyVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.have.deep.property(prop, val);
            };

            /**
             * ### .deepPropertyNotVal(object, property, value, [message])
             *
             * Asserts that `object` has a property named by `property`, but with a value
             * different from that given by `value`. `property` can use dot- and
             * bracket-notation for deep reference.
             *
             *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
             *
             * @name deepPropertyNotVal
             * @param {Object} object
             * @param {String} property
             * @param {Mixed} value
             * @param {String} message
             * @api public
             */

            assert.deepPropertyNotVal = function (obj, prop, val, msg) {
                new Assertion(obj, msg).to.not.have.deep.property(prop, val);
            };

            /**
             * ### .lengthOf(object, length, [message])
             *
             * Asserts that `object` has a `length` property with the expected value.
             *
             *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
             *     assert.lengthOf('foobar', 5, 'string has length of 6');
             *
             * @name lengthOf
             * @param {Mixed} object
             * @param {Number} length
             * @param {String} message
             * @api public
             */

            assert.lengthOf = function (exp, len, msg) {
                new Assertion(exp, msg).to.have.length(len);
            };

            /**
             * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
             *
             * Asserts that `function` will throw an error that is an instance of
             * `constructor`, or alternately that it will throw an error with message
             * matching `regexp`.
             *
             *     assert.throw(fn, 'function throws a reference error');
             *     assert.throw(fn, /function throws a reference error/);
             *     assert.throw(fn, ReferenceError);
             *     assert.throw(fn, ReferenceError, 'function throws a reference error');
             *     assert.throw(fn, ReferenceError, /function throws a reference error/);
             *
             * @name throws
             * @alias throw
             * @alias Throw
             * @param {Function} function
             * @param {ErrorConstructor} constructor
             * @param {RegExp} regexp
             * @param {String} message
             * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
             * @api public
             */

            assert.Throw = function (fn, errt, errs, msg) {
                if ('string' === typeof errt || errt instanceof RegExp) {
                    errs = errt;
                    errt = null;
                }

                new Assertion(fn, msg).to.Throw(errt, errs);
            };

            /**
             * ### .doesNotThrow(function, [constructor/regexp], [message])
             *
             * Asserts that `function` will _not_ throw an error that is an instance of
             * `constructor`, or alternately that it will not throw an error with message
             * matching `regexp`.
             *
             *     assert.doesNotThrow(fn, Error, 'function does not throw');
             *
             * @name doesNotThrow
             * @param {Function} function
             * @param {ErrorConstructor} constructor
             * @param {RegExp} regexp
             * @param {String} message
             * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
             * @api public
             */

            assert.doesNotThrow = function (fn, type, msg) {
                if ('string' === typeof type) {
                    msg = type;
                    type = null;
                }

                new Assertion(fn, msg).to.not.Throw(type);
            };

            /**
             * ### .operator(val1, operator, val2, [message])
             *
             * Compares two values using `operator`.
             *
             *     assert.operator(1, '<', 2, 'everything is ok');
             *     assert.operator(1, '>', 2, 'this will fail');
             *
             * @name operator
             * @param {Mixed} val1
             * @param {String} operator
             * @param {Mixed} val2
             * @param {String} message
             * @api public
             */

            assert.operator = function (val, operator, val2, msg) {
                if (!~['==', '===', '>', '>=', '<', '<=', '!=', '!=='].indexOf(operator)) {
                    throw new Error('Invalid operator "' + operator + '"');
                }
                var test = new Assertion(eval(val + operator + val2), msg);
                test.assert(
                    true === flag(test, 'object')
                    , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
                    , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
            };

            /**
             * ### .closeTo(actual, expected, delta, [message])
             *
             * Asserts that the target is equal `expected`, to within a +/- `delta` range.
             *
             *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
             *
             * @name closeTo
             * @param {Number} actual
             * @param {Number} expected
             * @param {Number} delta
             * @param {String} message
             * @api public
             */

            assert.closeTo = function (act, exp, delta, msg) {
                new Assertion(act, msg).to.be.closeTo(exp, delta);
            };

            /*!
             * Undocumented / untested
             */

            assert.ifError = function (val, msg) {
                new Assertion(val, msg).to.not.be.ok;
            };

            /*!
             * Aliases.
             */

            (function alias(name, as){
                assert[as] = assert[name];
                return alias;
            })
                ('Throw', 'throw')
                ('Throw', 'throws');
        };

    }); // module: chai/interface/assert.js

    require.register("chai/interface/expect.js", function(module, exports, require){
        /*!
         * chai
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        module.exports = function (chai, util) {
            chai.expect = function (val, message) {
                return new chai.Assertion(val, message);
            };
        };


    }); // module: chai/interface/expect.js

    require.register("chai/interface/should.js", function(module, exports, require){
        /*!
         * chai
         * Copyright(c) 2011-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        module.exports = function (chai, util) {
            var Assertion = chai.Assertion;

            function loadShould () {
                // modify Object.prototype to have `should`
                Object.defineProperty(Object.prototype, 'should',
                    {
                        set: function (value) {
                            // See https://github.com/chaijs/chai/issues/86: this makes
                            // `whatever.should = someValue` actually set `someValue`, which is
                            // especially useful for `global.should = require('chai').should()`.
                            //
                            // Note that we have to use [[DefineProperty]] instead of [[Put]]
                            // since otherwise we would trigger this very setter!
                            Object.defineProperty(this, 'should', {
                                value: value,
                                enumerable: true,
                                configurable: true,
                                writable: true
                            });
                        }
                        , get: function(){
                        if (this instanceof String || this instanceof Number) {
                            return new Assertion(this.constructor(this));
                        } else if (this instanceof Boolean) {
                            return new Assertion(this == true);
                        }
                        return new Assertion(this);
                    }
                        , configurable: true
                    });

                var should = {};

                should.equal = function (val1, val2, msg) {
                    new Assertion(val1, msg).to.equal(val2);
                };

                should.Throw = function (fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.Throw(errt, errs);
                };

                should.exist = function (val, msg) {
                    new Assertion(val, msg).to.exist;
                }

                // negation
                should.not = {}

                should.not.equal = function (val1, val2, msg) {
                    new Assertion(val1, msg).to.not.equal(val2);
                };

                should.not.Throw = function (fn, errt, errs, msg) {
                    new Assertion(fn, msg).to.not.Throw(errt, errs);
                };

                should.not.exist = function (val, msg) {
                    new Assertion(val, msg).to.not.exist;
                }

                should['throw'] = should['Throw'];
                should.not['throw'] = should.not['Throw'];

                return should;
            };

            chai.should = loadShould;
            chai.Should = loadShould;
        };

    }); // module: chai/interface/should.js

    require.register("chai/utils/addChainableMethod.js", function(module, exports, require){
        /*!
         * Chai - addChainingMethod utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependencies
         */

        var transferFlags = require('./transferFlags');

        /*!
         * Module variables
         */

        // Check whether `__proto__` is supported
        var hasProtoSupport = '__proto__' in Object;

        // Without `__proto__` support, this module will need to add properties to a function.
        // However, some Function.prototype methods cannot be overwritten,
        // and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
        var excludeNames = /^(?:length|name|arguments|caller)$/;

        /**
         * ### addChainableMethod (ctx, name, method, chainingBehavior)
         *
         * Adds a method to an object, such that the method can also be chained.
         *
         *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
         *       var obj = utils.flag(this, 'object');
         *       new chai.Assertion(obj).to.be.equal(str);
         *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
         *
         * The result can then be used as both a method assertion, executing both `method` and
         * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
         *
         *     expect(fooStr).to.be.foo('bar');
         *     expect(fooStr).to.be.foo.equal('foo');
         *
         * @param {Object} ctx object to which the method is added
         * @param {String} name of method to add
         * @param {Function} method function to be used for `name`, when called
         * @param {Function} chainingBehavior function to be called every time the property is accessed
         * @name addChainableMethod
         * @api public
         */

        module.exports = function (ctx, name, method, chainingBehavior) {
            if (typeof chainingBehavior !== 'function')
                chainingBehavior = function () { };

            Object.defineProperty(ctx, name,
                { get: function () {
                    chainingBehavior.call(this);

                    var assert = function () {
                        var result = method.apply(this, arguments);
                        return result === undefined ? this : result;
                    };

                    // Use `__proto__` if available
                    if (hasProtoSupport) {
                        assert.__proto__ = this;
                    }
                    // Otherwise, redefine all properties (slow!)
                    else {
                        var asserterNames = Object.getOwnPropertyNames(ctx);
                        asserterNames.forEach(function (asserterName) {
                            if (!excludeNames.test(asserterName)) {
                                var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
                                Object.defineProperty(assert, asserterName, pd);
                            }
                        });
                    }

                    transferFlags(this, assert);
                    return assert;
                }
                    , configurable: true
                });
        };

    }); // module: chai/utils/addChainableMethod.js

    require.register("chai/utils/addMethod.js", function(module, exports, require){
        /*!
         * Chai - addMethod utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### .addMethod (ctx, name, method)
         *
         * Adds a method to the prototype of an object.
         *
         *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
         *       var obj = utils.flag(this, 'object');
         *       new chai.Assertion(obj).to.be.equal(str);
         *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.addMethod('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(fooStr).to.be.foo('bar');
         *
         * @param {Object} ctx object to which the method is added
         * @param {String} name of method to add
         * @param {Function} method function to be used for name
         * @name addMethod
         * @api public
         */

        module.exports = function (ctx, name, method) {
            ctx[name] = function () {
                var result = method.apply(this, arguments);
                return result === undefined ? this : result;
            };
        };

    }); // module: chai/utils/addMethod.js

    require.register("chai/utils/addProperty.js", function(module, exports, require){
        /*!
         * Chai - addProperty utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### addProperty (ctx, name, getter)
         *
         * Adds a property to the prototype of an object.
         *
         *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
         *       var obj = utils.flag(this, 'object');
         *       new chai.Assertion(obj).to.be.instanceof(Foo);
         *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.addProperty('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.be.foo;
         *
         * @param {Object} ctx object to which the property is added
         * @param {String} name of property to add
         * @param {Function} getter function to be used for name
         * @name addProperty
         * @api public
         */

        module.exports = function (ctx, name, getter) {
            Object.defineProperty(ctx, name,
                { get: function () {
                    var result = getter.call(this);
                    return result === undefined ? this : result;
                }
                    , configurable: true
                });
        };

    }); // module: chai/utils/addProperty.js

    require.register("chai/utils/eql.js", function(module, exports, require){
        // This is (almost) directly from Node.js assert
        // https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/assert.js

        module.exports = _deepEqual;

        var getEnumerableProperties = require('./getEnumerableProperties');

        // for the browser
        var Buffer;
        try {
            Buffer = require('buffer').Buffer;
        } catch (ex) {
            Buffer = {
                isBuffer: function () { return false; }
            };
        }

        function _deepEqual(actual, expected, memos) {

            // 7.1. All identical values are equivalent, as determined by ===.
            if (actual === expected) {
                return true;

            } else if (Buffer.isBuffer(actual) && Buffer.isBuffer(expected)) {
                if (actual.length != expected.length) return false;

                for (var i = 0; i < actual.length; i++) {
                    if (actual[i] !== expected[i]) return false;
                }

                return true;

                // 7.2. If the expected value is a Date object, the actual value is
                // equivalent if it is also a Date object that refers to the same time.
            } else if (actual instanceof Date && expected instanceof Date) {
                return actual.getTime() === expected.getTime();

                // 7.3. Other pairs that do not both pass typeof value == 'object',
                // equivalence is determined by ==.
            } else if (typeof actual != 'object' && typeof expected != 'object') {
                return actual === expected;

                // 7.4. For all other Object pairs, including Array objects, equivalence is
                // determined by having the same number of owned properties (as verified
                // with Object.prototype.hasOwnProperty.call), the same set of keys
                // (although not necessarily the same order), equivalent values for every
                // corresponding key, and an identical 'prototype' property. Note: this
                // accounts for both named and indexed properties on Arrays.
            } else {
                return objEquiv(actual, expected, memos);
            }
        }

        function isUndefinedOrNull(value) {
            return value === null || value === undefined;
        }

        function isArguments(object) {
            return Object.prototype.toString.call(object) == '[object Arguments]';
        }

        function objEquiv(a, b, memos) {
            if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
                return false;

            // an identical 'prototype' property.
            if (a.prototype !== b.prototype) return false;

            // check if we have already compared a and b
            var i;
            if (memos) {
                for(i = 0; i < memos.length; i++) {
                    if ((memos[i][0] === a && memos[i][1] === b) ||
                        (memos[i][0] === b && memos[i][1] === a))
                        return true;
                }
            } else {
                memos = [];
            }

            //~~~I've managed to break Object.keys through screwy arguments passing.
            //   Converting to array solves the problem.
            if (isArguments(a)) {
                if (!isArguments(b)) {
                    return false;
                }
                a = pSlice.call(a);
                b = pSlice.call(b);
                return _deepEqual(a, b, memos);
            }
            try {
                var ka = getEnumerableProperties(a),
                    kb = getEnumerableProperties(b),
                    key;
            } catch (e) {//happens when one is a string literal and the other isn't
                return false;
            }

            // having the same number of owned properties (keys incorporates
            // hasOwnProperty)
            if (ka.length != kb.length)
                return false;

            //the same set of keys (although not necessarily the same order),
            ka.sort();
            kb.sort();
            //~~~cheap key test
            for (i = ka.length - 1; i >= 0; i--) {
                if (ka[i] != kb[i])
                    return false;
            }

            // remember objects we have compared to guard against circular references
            memos.push([ a, b ]);

            //equivalent values for every corresponding key, and
            //~~~possibly expensive deep test
            for (i = ka.length - 1; i >= 0; i--) {
                key = ka[i];
                if (!_deepEqual(a[key], b[key], memos)) return false;
            }

            return true;
        }

    }); // module: chai/utils/eql.js

    require.register("chai/utils/flag.js", function(module, exports, require){
        /*!
         * Chai - flag utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### flag(object ,key, [value])
         *
         * Get or set a flag value on an object. If a
         * value is provided it will be set, else it will
         * return the currently set value or `undefined` if
         * the value is not set.
         *
         *     utils.flag(this, 'foo', 'bar'); // setter
         *     utils.flag(this, 'foo'); // getter, returns `bar`
         *
         * @param {Object} object (constructed Assertion
         * @param {String} key
         * @param {Mixed} value (optional)
         * @name flag
         * @api private
         */

        module.exports = function (obj, key, value) {
            var flags = obj.__flags || (obj.__flags = Object.create(null));
            if (arguments.length === 3) {
                flags[key] = value;
            } else {
                return flags[key];
            }
        };

    }); // module: chai/utils/flag.js

    require.register("chai/utils/getActual.js", function(module, exports, require){
        /*!
         * Chai - getActual utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * # getActual(object, [actual])
         *
         * Returns the `actual` value for an Assertion
         *
         * @param {Object} object (constructed Assertion)
         * @param {Arguments} chai.Assertion.prototype.assert arguments
         */

        module.exports = function (obj, args) {
            var actual = args[4];
            return 'undefined' !== typeof actual ? actual : obj._obj;
        };

    }); // module: chai/utils/getActual.js

    require.register("chai/utils/getEnumerableProperties.js", function(module, exports, require){
        /*!
         * Chai - getEnumerableProperties utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### .getEnumerableProperties(object)
         *
         * This allows the retrieval of enumerable property names of an object,
         * inherited or not.
         *
         * @param {Object} object
         * @returns {Array}
         * @name getEnumerableProperties
         * @api public
         */

        module.exports = function getEnumerableProperties(object) {
            var result = [];
            for (var name in object) {
                result.push(name);
            }
            return result;
        };

    }); // module: chai/utils/getEnumerableProperties.js

    require.register("chai/utils/getMessage.js", function(module, exports, require){
        /*!
         * Chai - message composition utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependancies
         */

        var flag = require('./flag')
            , getActual = require('./getActual')
            , inspect = require('./inspect')
            , objDisplay = require('./objDisplay');

        /**
         * ### .getMessage(object, message, negateMessage)
         *
         * Construct the error message based on flags
         * and template tags. Template tags will return
         * a stringified inspection of the object referenced.
         *
         * Messsage template tags:
         * - `#{this}` current asserted object
         * - `#{act}` actual value
         * - `#{exp}` expected value
         *
         * @param {Object} object (constructed Assertion)
         * @param {Arguments} chai.Assertion.prototype.assert arguments
         * @name getMessage
         * @api public
         */

        module.exports = function (obj, args) {
            var negate = flag(obj, 'negate')
                , val = flag(obj, 'object')
                , expected = args[3]
                , actual = getActual(obj, args)
                , msg = negate ? args[2] : args[1]
                , flagMsg = flag(obj, 'message');

            msg = msg || '';
            msg = msg
                .replace(/#{this}/g, objDisplay(val))
                .replace(/#{act}/g, objDisplay(actual))
                .replace(/#{exp}/g, objDisplay(expected));

            return flagMsg ? flagMsg + ': ' + msg : msg;
        };

    }); // module: chai/utils/getMessage.js

    require.register("chai/utils/getName.js", function(module, exports, require){
        /*!
         * Chai - getName utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * # getName(func)
         *
         * Gets the name of a function, in a cross-browser way.
         *
         * @param {Function} a function (usually a constructor)
         */

        module.exports = function (func) {
            if (func.name) return func.name;

            var match = /^\s?function ([^(]*)\(/.exec(func);
            return match && match[1] ? match[1] : "";
        };

    }); // module: chai/utils/getName.js

    require.register("chai/utils/getPathValue.js", function(module, exports, require){
        /*!
         * Chai - getPathValue utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * @see https://github.com/logicalparadox/filtr
         * MIT Licensed
         */

        /**
         * ### .getPathValue(path, object)
         *
         * This allows the retrieval of values in an
         * object given a string path.
         *
         *     var obj = {
         *         prop1: {
         *             arr: ['a', 'b', 'c']
         *           , str: 'Hello'
         *         }
         *       , prop2: {
         *             arr: [ { nested: 'Universe' } ]
         *           , str: 'Hello again!'
         *         }
         *     }
         *
         * The following would be the results.
         *
         *     getPathValue('prop1.str', obj); // Hello
         *     getPathValue('prop1.att[2]', obj); // b
         *     getPathValue('prop2.arr[0].nested', obj); // Universe
         *
         * @param {String} path
         * @param {Object} object
         * @returns {Object} value or `undefined`
         * @name getPathValue
         * @api public
         */

        var getPathValue = module.exports = function (path, obj) {
            var parsed = parsePath(path);
            return _getPathValue(parsed, obj);
        };

        /*!
         * ## parsePath(path)
         *
         * Helper function used to parse string object
         * paths. Use in conjunction with `_getPathValue`.
         *
         *      var parsed = parsePath('myobject.property.subprop');
         *
         * ### Paths:
         *
         * * Can be as near infinitely deep and nested
         * * Arrays are also valid using the formal `myobject.document[3].property`.
         *
         * @param {String} path
         * @returns {Object} parsed
         * @api private
         */

        function parsePath (path) {
            var str = path.replace(/\[/g, '.[')
                , parts = str.match(/(\\\.|[^.]+?)+/g);
            return parts.map(function (value) {
                var re = /\[(\d+)\]$/
                    , mArr = re.exec(value)
                if (mArr) return { i: parseFloat(mArr[1]) };
                else return { p: value };
            });
        };

        /*!
         * ## _getPathValue(parsed, obj)
         *
         * Helper companion function for `.parsePath` that returns
         * the value located at the parsed address.
         *
         *      var value = getPathValue(parsed, obj);
         *
         * @param {Object} parsed definition from `parsePath`.
         * @param {Object} object to search against
         * @returns {Object|Undefined} value
         * @api private
         */

        function _getPathValue (parsed, obj) {
            var tmp = obj
                , res;
            for (var i = 0, l = parsed.length; i < l; i++) {
                var part = parsed[i];
                if (tmp) {
                    if ('undefined' !== typeof part.p)
                        tmp = tmp[part.p];
                    else if ('undefined' !== typeof part.i)
                        tmp = tmp[part.i];
                    if (i == (l - 1)) res = tmp;
                } else {
                    res = undefined;
                }
            }
            return res;
        };

    }); // module: chai/utils/getPathValue.js

    require.register("chai/utils/getProperties.js", function(module, exports, require){
        /*!
         * Chai - getProperties utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### .getProperties(object)
         *
         * This allows the retrieval of property names of an object, enumerable or not,
         * inherited or not.
         *
         * @param {Object} object
         * @returns {Array}
         * @name getProperties
         * @api public
         */

        module.exports = function getProperties(object) {
            var result = Object.getOwnPropertyNames(subject);

            function addProperty(property) {
                if (result.indexOf(property) === -1) {
                    result.push(property);
                }
            }

            var proto = Object.getPrototypeOf(subject);
            while (proto !== null) {
                Object.getOwnPropertyNames(proto).forEach(addProperty);
                proto = Object.getPrototypeOf(proto);
            }

            return result;
        };

    }); // module: chai/utils/getProperties.js

    require.register("chai/utils/index.js", function(module, exports, require){
        /*!
         * chai
         * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Main exports
         */

        var exports = module.exports = {};

        /*!
         * test utility
         */

        exports.test = require('./test');

        /*!
         * type utility
         */

        exports.type = require('./type');

        /*!
         * message utility
         */

        exports.getMessage = require('./getMessage');

        /*!
         * actual utility
         */

        exports.getActual = require('./getActual');

        /*!
         * Inspect util
         */

        exports.inspect = require('./inspect');

        /*!
         * Object Display util
         */

        exports.objDisplay = require('./objDisplay');

        /*!
         * Flag utility
         */

        exports.flag = require('./flag');

        /*!
         * Flag transferring utility
         */

        exports.transferFlags = require('./transferFlags');

        /*!
         * Deep equal utility
         */

        exports.eql = require('./eql');

        /*!
         * Deep path value
         */

        exports.getPathValue = require('./getPathValue');

        /*!
         * Function name
         */

        exports.getName = require('./getName');

        /*!
         * add Property
         */

        exports.addProperty = require('./addProperty');

        /*!
         * add Method
         */

        exports.addMethod = require('./addMethod');

        /*!
         * overwrite Property
         */

        exports.overwriteProperty = require('./overwriteProperty');

        /*!
         * overwrite Method
         */

        exports.overwriteMethod = require('./overwriteMethod');

        /*!
         * Add a chainable method
         */

        exports.addChainableMethod = require('./addChainableMethod');


    }); // module: chai/utils/index.js

    require.register("chai/utils/inspect.js", function(module, exports, require){
        // This is (almost) directly from Node.js utils
        // https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

        var getName = require('./getName');
        var getProperties = require('./getProperties');
        var getEnumerableProperties = require('./getEnumerableProperties');

        module.exports = inspect;

        /**
         * Echos the value of a value. Trys to print the value out
         * in the best way possible given the different types.
         *
         * @param {Object} obj The object to print out.
         * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
         *    properties of objects.
         * @param {Number} depth Depth in which to descend in object. Default is 2.
         * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
         *    output. Default is false (no coloring).
         */
        function inspect(obj, showHidden, depth, colors) {
            var ctx = {
                showHidden: showHidden,
                seen: [],
                stylize: function (str) { return str; }
            };
            return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
        }

        // https://gist.github.com/1044128/
        var getOuterHTML = function(element) {
            if ('outerHTML' in element) return element.outerHTML;
            var ns = "http://www.w3.org/1999/xhtml";
            var container = document.createElementNS(ns, '_');
            var elemProto = (window.HTMLElement || window.Element).prototype;
            var xmlSerializer = new XMLSerializer();
            var html;
            if (document.xmlVersion) {
                return xmlSerializer.serializeToString(element);
            } else {
                container.appendChild(element.cloneNode(false));
                html = container.innerHTML.replace('><', '>' + element.innerHTML + '<');
                container.innerHTML = '';
                return html;
            }
        };

        // Returns true if object is a DOM element.
        var isDOMElement = function (object) {
            if (typeof HTMLElement === 'object') {
                return object instanceof HTMLElement;
            } else {
                return object &&
                    typeof object === 'object' &&
                    object.nodeType === 1 &&
                    typeof object.nodeName === 'string';
            }
        };

        function formatValue(ctx, value, recurseTimes) {
            // Provide a hook for user-specified inspect functions.
            // Check that value is an object with an inspect function on it
            if (value && typeof value.inspect === 'function' &&
                // Filter out the util module, it's inspect function is special
                value.inspect !== exports.inspect &&
                // Also filter out any prototype objects using the circular check.
                !(value.constructor && value.constructor.prototype === value)) {
                return value.inspect(recurseTimes);
            }

            // Primitive types cannot have properties
            var primitive = formatPrimitive(ctx, value);
            if (primitive) {
                return primitive;
            }

            // If it's DOM elem, get outer HTML.
            if (isDOMElement(value)) {
                return getOuterHTML(value);
            }

            // Look up the keys of the object.
            var visibleKeys = getEnumerableProperties(value);
            var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

            // Some type of object without properties can be shortcutted.
            // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
            // a `stack` plus `description` property; ignore those for consistency.
            if (keys.length === 0 || (isError(value) && (
                (keys.length === 1 && keys[0] === 'stack') ||
                    (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
                ))) {
                if (typeof value === 'function') {
                    var name = getName(value);
                    var nameSuffix = name ? ': ' + name : '';
                    return ctx.stylize('[Function' + nameSuffix + ']', 'special');
                }
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                }
                if (isDate(value)) {
                    return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
                }
                if (isError(value)) {
                    return formatError(value);
                }
            }

            var base = '', array = false, braces = ['{', '}'];

            // Make Array say that they are Array
            if (isArray(value)) {
                array = true;
                braces = ['[', ']'];
            }

            // Make functions say that they are functions
            if (typeof value === 'function') {
                var name = getName(value);
                var nameSuffix = name ? ': ' + name : '';
                base = ' [Function' + nameSuffix + ']';
            }

            // Make RegExps say that they are RegExps
            if (isRegExp(value)) {
                base = ' ' + RegExp.prototype.toString.call(value);
            }

            // Make dates with properties first say the date
            if (isDate(value)) {
                base = ' ' + Date.prototype.toUTCString.call(value);
            }

            // Make error with message first say the error
            if (isError(value)) {
                return formatError(value);
            }

            if (keys.length === 0 && (!array || value.length == 0)) {
                return braces[0] + base + braces[1];
            }

            if (recurseTimes < 0) {
                if (isRegExp(value)) {
                    return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
                } else {
                    return ctx.stylize('[Object]', 'special');
                }
            }

            ctx.seen.push(value);

            var output;
            if (array) {
                output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
            } else {
                output = keys.map(function(key) {
                    return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
                });
            }

            ctx.seen.pop();

            return reduceToSingleString(output, base, braces);
        }


        function formatPrimitive(ctx, value) {
            switch (typeof value) {
                case 'undefined':
                    return ctx.stylize('undefined', 'undefined');

                case 'string':
                    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                        .replace(/'/g, "\\'")
                        .replace(/\\"/g, '"') + '\'';
                    return ctx.stylize(simple, 'string');

                case 'number':
                    return ctx.stylize('' + value, 'number');

                case 'boolean':
                    return ctx.stylize('' + value, 'boolean');
            }
            // For some reason typeof null is "object", so special case here.
            if (value === null) {
                return ctx.stylize('null', 'null');
            }
        }


        function formatError(value) {
            return '[' + Error.prototype.toString.call(value) + ']';
        }


        function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
            var output = [];
            for (var i = 0, l = value.length; i < l; ++i) {
                if (Object.prototype.hasOwnProperty.call(value, String(i))) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                        String(i), true));
                } else {
                    output.push('');
                }
            }
            keys.forEach(function(key) {
                if (!key.match(/^\d+$/)) {
                    output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
                        key, true));
                }
            });
            return output;
        }


        function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
            var name, str;
            if (value.__lookupGetter__) {
                if (value.__lookupGetter__(key)) {
                    if (value.__lookupSetter__(key)) {
                        str = ctx.stylize('[Getter/Setter]', 'special');
                    } else {
                        str = ctx.stylize('[Getter]', 'special');
                    }
                } else {
                    if (value.__lookupSetter__(key)) {
                        str = ctx.stylize('[Setter]', 'special');
                    }
                }
            }
            if (visibleKeys.indexOf(key) < 0) {
                name = '[' + key + ']';
            }
            if (!str) {
                if (ctx.seen.indexOf(value[key]) < 0) {
                    if (recurseTimes === null) {
                        str = formatValue(ctx, value[key], null);
                    } else {
                        str = formatValue(ctx, value[key], recurseTimes - 1);
                    }
                    if (str.indexOf('\n') > -1) {
                        if (array) {
                            str = str.split('\n').map(function(line) {
                                return '  ' + line;
                            }).join('\n').substr(2);
                        } else {
                            str = '\n' + str.split('\n').map(function(line) {
                                return '   ' + line;
                            }).join('\n');
                        }
                    }
                } else {
                    str = ctx.stylize('[Circular]', 'special');
                }
            }
            if (typeof name === 'undefined') {
                if (array && key.match(/^\d+$/)) {
                    return str;
                }
                name = JSON.stringify('' + key);
                if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
                    name = name.substr(1, name.length - 2);
                    name = ctx.stylize(name, 'name');
                } else {
                    name = name.replace(/'/g, "\\'")
                        .replace(/\\"/g, '"')
                        .replace(/(^"|"$)/g, "'");
                    name = ctx.stylize(name, 'string');
                }
            }

            return name + ': ' + str;
        }


        function reduceToSingleString(output, base, braces) {
            var numLinesEst = 0;
            var length = output.reduce(function(prev, cur) {
                numLinesEst++;
                if (cur.indexOf('\n') >= 0) numLinesEst++;
                return prev + cur.length + 1;
            }, 0);

            if (length > 60) {
                return braces[0] +
                    (base === '' ? '' : base + '\n ') +
                    ' ' +
                    output.join(',\n  ') +
                    ' ' +
                    braces[1];
            }

            return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
        }

        function isArray(ar) {
            return Array.isArray(ar) ||
                (typeof ar === 'object' && objectToString(ar) === '[object Array]');
        }

        function isRegExp(re) {
            return typeof re === 'object' && objectToString(re) === '[object RegExp]';
        }

        function isDate(d) {
            return typeof d === 'object' && objectToString(d) === '[object Date]';
        }

        function isError(e) {
            return typeof e === 'object' && objectToString(e) === '[object Error]';
        }

        function objectToString(o) {
            return Object.prototype.toString.call(o);
        }

    }); // module: chai/utils/inspect.js

    require.register("chai/utils/objDisplay.js", function(module, exports, require){
        /*!
         * Chai - flag utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependancies
         */

        var inspect = require('./inspect');

        /**
         * ### .objDisplay (object)
         *
         * Determines if an object or an array matches
         * criteria to be inspected in-line for error
         * messages or should be truncated.
         *
         * @param {Mixed} javascript object to inspect
         * @name objDisplay
         * @api public
         */

        module.exports = function (obj) {
            var str = inspect(obj)
                , type = Object.prototype.toString.call(obj);

            if (str.length >= 40) {
                if (type === '[object Function]') {
                    return !obj.name || obj.name === ''
                        ? '[Function]'
                        : '[Function: ' + obj.name + ']';
                } else if (type === '[object Array]') {
                    return '[ Array(' + obj.length + ') ]';
                } else if (type === '[object Object]') {
                    var keys = Object.keys(obj)
                        , kstr = keys.length > 2
                            ? keys.splice(0, 2).join(', ') + ', ...'
                            : keys.join(', ');
                    return '{ Object (' + kstr + ') }';
                } else {
                    return str;
                }
            } else {
                return str;
            }
        };

    }); // module: chai/utils/objDisplay.js

    require.register("chai/utils/overwriteMethod.js", function(module, exports, require){
        /*!
         * Chai - overwriteMethod utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### overwriteMethod (ctx, name, fn)
         *
         * Overwites an already existing method and provides
         * access to previous function. Must return function
         * to be used for name.
         *
         *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
         *       return function (str) {
         *         var obj = utils.flag(this, 'object');
         *         if (obj instanceof Foo) {
         *           new chai.Assertion(obj.value).to.equal(str);
         *         } else {
         *           _super.apply(this, arguments);
         *         }
         *       }
         *     });
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.overwriteMethod('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.equal('bar');
         *
         * @param {Object} ctx object whose method is to be overwritten
         * @param {String} name of method to overwrite
         * @param {Function} method function that returns a function to be used for name
         * @name overwriteMethod
         * @api public
         */

        module.exports = function (ctx, name, method) {
            var _method = ctx[name]
                , _super = function () { return this; };

            if (_method && 'function' === typeof _method)
                _super = _method;

            ctx[name] = function () {
                var result = method(_super).apply(this, arguments);
                return result === undefined ? this : result;
            }
        };

    }); // module: chai/utils/overwriteMethod.js

    require.register("chai/utils/overwriteProperty.js", function(module, exports, require){
        /*!
         * Chai - overwriteProperty utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### overwriteProperty (ctx, name, fn)
         *
         * Overwites an already existing property getter and provides
         * access to previous value. Must return function to use as getter.
         *
         *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
         *       return function () {
         *         var obj = utils.flag(this, 'object');
         *         if (obj instanceof Foo) {
         *           new chai.Assertion(obj.name).to.equal('bar');
         *         } else {
         *           _super.call(this);
         *         }
         *       }
         *     });
         *
         *
         * Can also be accessed directly from `chai.Assertion`.
         *
         *     chai.Assertion.overwriteProperty('foo', fn);
         *
         * Then can be used as any other assertion.
         *
         *     expect(myFoo).to.be.ok;
         *
         * @param {Object} ctx object whose property is to be overwritten
         * @param {String} name of property to overwrite
         * @param {Function} getter function that returns a getter function to be used for name
         * @name overwriteProperty
         * @api public
         */

        module.exports = function (ctx, name, getter) {
            var _get = Object.getOwnPropertyDescriptor(ctx, name)
                , _super = function () {};

            if (_get && 'function' === typeof _get.get)
                _super = _get.get

            Object.defineProperty(ctx, name,
                { get: function () {
                    var result = getter(_super).call(this);
                    return result === undefined ? this : result;
                }
                    , configurable: true
                });
        };

    }); // module: chai/utils/overwriteProperty.js

    require.register("chai/utils/test.js", function(module, exports, require){
        /*!
         * Chai - test utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Module dependancies
         */

        var flag = require('./flag');

        /**
         * # test(object, expression)
         *
         * Test and object for expression.
         *
         * @param {Object} object (constructed Assertion)
         * @param {Arguments} chai.Assertion.prototype.assert arguments
         */

        module.exports = function (obj, args) {
            var negate = flag(obj, 'negate')
                , expr = args[0];
            return negate ? !expr : expr;
        };

    }); // module: chai/utils/test.js

    require.register("chai/utils/transferFlags.js", function(module, exports, require){
        /*!
         * Chai - transferFlags utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /**
         * ### transferFlags(assertion, object, includeAll = true)
         *
         * Transfer all the flags for `assertion` to `object`. If
         * `includeAll` is set to `false`, then the base Chai
         * assertion flags (namely `object`, `ssfi`, and `message`)
         * will not be transferred.
         *
         *
         *     var newAssertion = new Assertion();
         *     utils.transferFlags(assertion, newAssertion);
         *
         *     var anotherAsseriton = new Assertion(myObj);
         *     utils.transferFlags(assertion, anotherAssertion, false);
         *
         * @param {Assertion} assertion the assertion to transfer the flags from
         * @param {Object} object the object to transfer the flags too; usually a new assertion
         * @param {Boolean} includeAll
         * @name getAllFlags
         * @api private
         */

        module.exports = function (assertion, object, includeAll) {
            var flags = assertion.__flags || (assertion.__flags = Object.create(null));

            if (!object.__flags) {
                object.__flags = Object.create(null);
            }

            includeAll = arguments.length === 3 ? includeAll : true;

            for (var flag in flags) {
                if (includeAll ||
                    (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
                    object.__flags[flag] = flags[flag];
                }
            }
        };

    }); // module: chai/utils/transferFlags.js

    require.register("chai/utils/type.js", function(module, exports, require){
        /*!
         * Chai - type utility
         * Copyright(c) 2012-2013 Jake Luer <jake@alogicalparadox.com>
         * MIT Licensed
         */

        /*!
         * Detectable javascript natives
         */

        var natives = {
            '[object Arguments]': 'arguments'
            , '[object Array]': 'array'
            , '[object Date]': 'date'
            , '[object Function]': 'function'
            , '[object Number]': 'number'
            , '[object RegExp]': 'regexp'
            , '[object String]': 'string'
        };

        /**
         * ### type(object)
         *
         * Better implementation of `typeof` detection that can
         * be used cross-browser. Handles the inconsistencies of
         * Array, `null`, and `undefined` detection.
         *
         *     utils.type({}) // 'object'
         *     utils.type(null) // `null'
         *     utils.type(undefined) // `undefined`
         *     utils.type([]) // `array`
         *
         * @param {Mixed} object to detect type of
         * @name type
         * @api private
         */

        module.exports = function (obj) {
            var str = Object.prototype.toString.call(obj);
            if (natives[str]) return natives[str];
            if (obj === null) return 'null';
            if (obj === undefined) return 'undefined';
            if (obj === Object(obj)) return 'object';
            return typeof obj;
        };

    }); // module: chai/utils/type.js

    require.alias("./chai.js", "chai");

    return require('chai');
});
if (typeof demo==='undefined') demo={};
demo.tests = (function(mocha){

    function runTest(hash){
        var spec = hash.replace('test/','');
        var script = document.createElement('script');
        script.src = "test/specs/" + spec + ".js"; //get the spec
        script.onload =  function(){ //once loaded
            var $runTestLink = $('a[href*="#' + hash + '"]'),
                $mocha = $('<div id="mocha" class="mocha-container"></div>');
            $runTestLink.parent().after($mocha);
            var grep = window[spec]();
            mocha.grep(grep);
            mocha.run(function(){
                updateTestsResults($runTestLink, $mocha);
                $mocha.attr('id','mocha-' + spec);
            });
            $runTestLink.removeAttr('href');
            $('html, body').animate({
                scrollTop: $mocha.parent().prev().offset().top
            }, 200);
            createLightbox($mocha, spec);
            $runTestLink.on('click', function(){
                showLightbox($('#' +  spec + '-lightbox'));
            });
        };
        document.head.appendChild(script);
    }

    function updateTestsResults($runTestLink, $mocha){
        var findFailure = $mocha.find('.failures em').text();

        if(findFailure === '0'){
            $runTestLink.prepend("<span class='dev-button result-summary'><i class='skycon-tick colour' aria-hidden='true'></i> Tests Passed</span>");
        } else {
            $runTestLink.prepend("<span class='dev-button result-summary error'><i class='skycon-warning colour' aria-hidden='true'></i> Tests Failed</span>");
        }
    }

    function hideLightbox(e,$box){
        e.preventDefault();
        var hide =  $(e.target).hasClass('lightbox-close') ||
            (!$(e.target).hasClass('lightbox-content') && !$(e.target).parents('.lightbox-content').length);
        if ( hide){
            $box.hide().removeClass('lightbox-open');
        }
    }

    function showLightbox($box){
        $box.show().addClass('lightbox-open');
    }

    function createLightbox($mocha, spec){
        //todo: make lightbox do this automatically
        var lightboxDiv = document.createElement('div');
        var container = document.createElement('div');
        var article = document.createElement('article');
        var $close = $('<a class="internal-link lightbox-close skycon-close black" href="#"><span class="speak">Close</span></a>');
        lightboxDiv.className = 'lightbox';
        lightboxDiv.id = spec + '-lightbox';
        container.className = 'skycom-container lightbox-container clearfix';
        article.className = 'lightbox-content skycom-10 skycom-offset1';
        $(article).append($close);
        $(article).append($mocha.find('#mocha-stats'));
        $(article).append($mocha.find('#mocha-report'));
        $(container).append($(article));
        $(lightboxDiv).append($(container));
        $mocha.append($(lightboxDiv));
        showLightbox($('#' +  spec + '-lightbox'));
        $close.add($(lightboxDiv)).on('click', function(e){
            hideLightbox(e, $('#' +  spec + '-lightbox'));
        });
    }

    function registerTests(){
        if (!window.require || !window.describe){
            setTimeout(registerTests,250);
            return;
        }
        var hashes = [];
        $('.run-test').each(function(){
            hashes.push($(this).attr('href').split('#')[1]);
        });
        window.toolkit.hashManager.register(hashes, runTest);
    }

    registerTests();

});

if (typeof window.define === "function" && window.define.amd){
    define('demo/tests', ['chai'], function(chai) {

        window.chai = chai;
        window.assert = chai.assert;
        window.expect = chai.expect;
        window.to = chai.to;
        window.should = chai.should(); //just for now - refactor as always later :)

        return demo.tests(mocha);
    });
} else {
    demo.tests();
}
;
if (typeof demo==='undefined') demo={};
demo.skycons = (function() {


    function sortSkyconsTable(){
        var skycons = [];
        var rows = $('#wiki-skycons tbody tr');
        rows.each(function(i){
            skycons.push({i:i, skycon:$(this).find('td').first().text().trim()});
        });
        skycons.sort(function (a, b) {
            if (a.skycon > b.skycon) {
                return 1;
            } else if (a.skycon < b.skycon) {
                return -1;
            } else {
                return 0;
            }
        });
        $('#wiki-skycons tbody tr').remove();
        for (var i=0; i<skycons.length; i++){
            $('#wiki-skycons tbody').append($(rows[skycons[i].i]));
        }
    }

    sortSkyconsTable();

});

if (typeof window.define === "function" && window.define.amd){
    define('demo/skycons',  [],function() {
        return demo.skycons();
    });
} else {
    demo.skycons();
}
;
if (typeof demo==='undefined') demo={};
demo.main = (function(DisplayCode, menu, tests, skycons) {

    function bindEvents() {
        toolkit.hashManager.register('code/*',showCode);
    }

    function showCode(hash){
        var styled = false;
        var $lightboxLink = $('a[href="#!' + hash + '"]');
        var feature = hash.replace(/code\//g,'');
        var version = $('#current-version').text(),
            host = 'http://web-toolkit.global.sky.com',
            dir = '_site/_includes';
        if (location.hostname.indexOf('local')===0){
            host = 'http://' + location.host;
            dir = '../_includes';
        } else if (document.location.host === "skyglobal.github.io"){
            host = 'http://skyglobal.github.io/web-toolkit',
            dir = '../_includes';
        }
        var featureFiles, codeBase, route;
        if ($lightboxLink.attr('data-docs')){
            featureFiles = $lightboxLink.attr('data-docs');
            codeBase = feature;
            route = host + '/' + version + '/' + dir + '/' + codeBase;
            styled = true;
        } else {
            featureFiles = $('a[href*="#' + feature + '"]').attr('data-diff-demos');
            codeBase = $('a[href*="#' + feature + '"]').attr('data-diff');
            route = host + '/' + version + '/' + dir + '/' + codeBase;
        }
        new DisplayCode({
            header: $lightboxLink.parent().text().replace($lightboxLink.text(),'').trim(),
            feature: feature,
            dir: route,
            fileNames: featureFiles.split(','),
            styled: styled
        });
    }

    function toggle(){
        var $toggler = $(this);
        var $example = $('div[data-toggle=' + $toggler.attr('for') + ']');
        if ($example.hasClass('open')){
            $toggler.removeClass('open');
            $example.removeClass('open');
        } else {
            $toggler.addClass('open');
            $example.addClass('open');
        }
    }

    bindEvents();

});

if (typeof window.define === "function" && window.define.amd){
    require(['demo/displayCode',
        'demo/menu',
        'demo/tests',
        'demo/skycons'], function(displayCode, menu, tests, skycons) {
        demo.main(displayCode, menu, tests, skycons);
    });
} else {
    demo.main(demo.displayCode, demo.menu, demo.tests, demo.skycons);
}
;
define("demo", function(){});
