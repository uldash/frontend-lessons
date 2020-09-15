2020.11.09
input Git

git config --global user.name "user-name"
git config --global user.email "email"
В комитах будет показываться кто является автором

показать все настройки:
git config --list
git config --list --show-origin

git init
создать репозиторий
git add <file>
добавить файлы в SA
git commit -m 'annotation'
добавить файл в бд гита

git cat-file -p <hash>
показать файл коммита в папке .git\objects

git log
покажет все коммиты в данной ветке

git checkout -b <имя ветки>
создать новую ветку и перейти в неё

git checkout <имя ветки>
перейти на ветку

git branch
показать ветки

git branch -v
показать ветки с хэшами

git log --all
покажет все коммиты

merge/слияние
переходим в ветку master
git checkout master
git merge dev
вливание изменеий из ветки dev в ветку master
(если master не изменялся, такой merge называется Fast-forward)

git branch -D <ветка>
удалить указанную ветку, коммиты не удаляются, становятся detach

git switch -c <new-branch-name>
создать новую ветку у детачнутого коммита
fit switch -
отменить операцию создания

но так же можно находясь в детачнутом коммите просто создать новую ветку
git checkout -b <branch-name>

git log --graph --decorate --all
красивый вывод

git log --graph --decorate $(git rev-list -g --all)
покажет все коммиты, в том числе и детач коммиты

git remote add origin https://github.com/uldash/demo-repo.git
git branch -M master
git push -u origin master
связать локальный репозиторий с СУЩЕСТВУЮЩИМ удаленным репозиторием на github 

git remote -v
показать к какому удаленному репозиторию привязан наш локальный репо

git clone https://<адрес репо>
клонировать репозиторий, ВАЖНО, клонируется только ветка master

git checkout -b dev
создаем в локальном репо ветку и переходим в неё
git pull origin dev
забираем себе remote ветку
git push origin dev
отсылаем на удаленный репо выбранную ветку