var _bsaPRO_loaded=false;function _bsaPRO(){if(_bsaPRO_loaded)return;_bsaPRO_loaded=true;if(document.register)document.register('x-advertiser-pro');var apiurl='//srv.buysellads.com';for(var zones=[],zonesegments={},cl=function(cl){for(var n=!!document.getElementsByClassName,ret=[],els=n?document.getElementsByClassName(cl):document.getElementsByTagName('*'),p=n?false:new RegExp('(^|\\s)'+cl+'(\\s|$)'),i=0;i<els.length;i++)if(!p||p.test(els[i].className))ret.push(els[i]);return ret},bs=cl('bsaPROrocks'),segments=[],seg,zoneid,id,p=/bsap_([a-f0-9]+)/i,i=0;i<bs.length&&(zoneid=bs[i].getAttribute('data-serve'))&&(bs[i].className='bsap');i++){if(window['bsa_'+zoneid])continue;var ignore=bs[i].getAttribute('data-ignore'),thirdparty=bs[i].getAttribute('data-click')||'';window['bsa_'+zoneid]=(function(el,zoneid){return function(html){var protag=document.createElement('x-advertiser-pro');protag.innerHTML=html;if(!ignore){var links=protag.getElementsByTagName('a');for(var i=0;i<links.length;i++)links[i].setAttribute('href',thirdparty+links[i].getAttribute('href').replace('/ads/click/x/','/ads/click/track/yes/x/'))}el.parentNode.insertBefore(protag,el)}})(bs[i],zoneid);var c=document.createElement('script');c.type='text\/javascript';c.id='_bsaPRO_js';var qs=ignore?'ignore=yes':'track=1';c.src=apiurl+'/ads/'+zoneid+'.js?'+qs+'&r='+Math.random();c.setAttribute('async','async');document.getElementsByTagName('head')[0].appendChild(c)}}_bsaPRO();