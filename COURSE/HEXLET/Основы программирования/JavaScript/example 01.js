const reverse = (text, i = 0) => (i >= text.length) ? '' : `${reverse(text, i + 1)}${text[i]}`;
//const reverse = (text, i = 0) => (i >= text.length) ? '' : `print ${i} ${reverse(text, i + 1)}${text[i]}`;
//const reverse = (str, i = 0) => (i >= str.length) ? '' : `${reverse(str, i + 1)}${str[i]}`;

console.log(reverse('Hello!'));