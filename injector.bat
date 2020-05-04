@echo off
Title Discord Injector - Home
cls
color 0
:question
echo 1) Install modules
echo 2) Launch bot(if he crash you have to relaunch it)
echo 3) Launch bot(if he crash he relaunch itself)
echo 4) Exit
set /p choix=What do u want? (1/2/3):
 
if /I "%choix%"=="1" (goto :Install)
if /I "%choix%"=="2" (goto :Launch)
if /I "%choix%"=="4" (goto :End)
goto question
 
:Install
Title Discord Injector - Installation
cls
echo.
npm i
echo Finished!
goto question
 
:Launch
Title Discord Injector - Injector
cls
echo.
echo Launch the injector..
node index.js
echo.
echo Injection finished!
pause
goto end

:End
cls
echo.
msg * Bye %username%
exit
