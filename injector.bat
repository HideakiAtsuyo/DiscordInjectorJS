@echo off
Title Discord Injector - Home
cls
color 0
:question
echo 1) Install modules
echo 2) Launch Injector
echo 3) Exit
set /p choix=What do u want? (1/2/3):
 
if /I "%choix%"=="1" (goto :Install)
if /I "%choix%"=="2" (goto :Launch)
if /I "%choix%"=="3" (goto :End)
goto question
 
:Install
Title Discord Injector - Installation
cls
npm i
echo Finished!
goto question
 
:Launch
Title Discord Injector - Injector
cls
echo 1) Discord Stable
echo 2) Discord Canary
echo 3) PTB(Later)
set /p choix=What do u want? (1/2/3):
if /I "%choix%"=="1" (node index.js Discord)
if /I "%choix%"=="2" (node index.js Canary)
if /I "%choix%"=="3" (node index.js PTB)
pause
goto end

:End
cls
echo.
msg * Bye %username%
exit
