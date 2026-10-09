import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const html=fs.readFileSync('index.html','utf8');
assert(html.includes('rel="canonical" href="https://wpjourneys.com/socotra/"'));
assert(html.includes('http-equiv="refresh" content="0; url=https://wpjourneys.com/socotra/"'));
assert(html.includes('<a href="https://wpjourneys.com/socotra/">'));
for(const [search,hash]of [['',''],['?utm_source=legacy&x=1','#itinerary']]){
 let seen;vm.runInNewContext(html.match(/<script>(.*?)<\/script>/s)[1],{URL,location:{search,hash,replace:url=>seen=url}});assert.equal(seen,'https://wpjourneys.com/socotra/'+search+hash);
}
assert(html.length<2000,'No outdated itinerary copy is served');
console.log('PASS exact current URL, immediate HTML redirect, canonical/link and query/fragment preservation');
