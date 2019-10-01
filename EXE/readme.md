# Windows js to exe file

В винде можно скомпилить javascript файл в исполняемый, в .net фраемворке есть
компилятор.
Путь к компилятору, нпр:
C:\Windows\Microsoft.NET\Framework\v4.0.30319\jsc.exe
Компилятор содержиться в каждой версии .net fraemwork

Лучше добавить путь в переменную Path пользователя, тогда
для компиляции js в exe выполним

```cmd
jsc <myapp.js>
```

В результате получим exe файл