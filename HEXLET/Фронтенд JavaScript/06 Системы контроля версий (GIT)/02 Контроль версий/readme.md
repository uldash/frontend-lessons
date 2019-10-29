в системах Linux есть команда diff, с помощью которой можно выяснить различия между любыми файлами даже без использования СКВ. Эти изменения можно сохранить в файл, а затем, используя программу patch, применить к исходному файлу.

$ diff index.js index2.js > index.patch

1c1
< const a = 5;
---
> const a = 8;
3a4
> console.log(a - b);

$ patch index.js -i index.patch -o index2.js