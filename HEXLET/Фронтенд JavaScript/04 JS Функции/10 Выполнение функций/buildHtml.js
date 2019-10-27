/*
Модуль tags содержит набор функций, позволяющих генерировать HTML с помощью функций.

table(
  tr(td('one'), td('two')),
  tr(td('three'), td('four'))
);
В результате вызовов возвращается вот такой HTML:

<table>
  <tr>
    <td>one</td>
    <td>two</td>
  </tr>
  <tr>
    <td>three</td>
    <td>four</td>
  </tr>
</table>
buildHtml.js
Реализуйте и экспортируйте по умолчанию функцию buildHtml, простой вызов которой:

buildHtml();
создаёт и возвращает следующий HTML:

<table>
  <tr>
    <td>lang</td>
    <td>comment</td>
  </tr>
  <tr>
    <td>php</td>
    <td>statements</td>
  </tr>
  <tr>
    <td>clojure</td>
    <td>expressions</td>
  </tr>
</table>
*/

//const table = require('tags');
import { table } from 'tags'
//const tr = require('tags');
//const td = require('tags');

//const buildHtml = () => "<table>\n\t<tr>\n\t\t<td>lang</td>\n\t\t<td>comment</td>\n\t</tr>\n\t<tr>\n\t\t<td>php</td>\n\t\t<td>statements</td>\n\t</tr>\n\t<tr>\n\t\t<td>clojure</td>\n\t\t<td>expressions</td>\n\t</tr>\n</table>"
const buildHtml = () => {
    table(tr(td('lang'), td('comment')),
        tr(td('php'), td('statements')),
        tr(td('clojure'), td('expressions')))

}
console.log(buildHtml());