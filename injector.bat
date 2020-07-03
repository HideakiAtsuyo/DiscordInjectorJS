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
echo Installation 1 of 2
npm i
echo Installation 2 of 2(asar)
npm i -g asar
pause
exit
 
:Launch
Title Discord Injector - Injector
cls
echo 1) Discord Stable
echo 2) Discord Canary
echo 3) PTB
set /p choix=What do u want? (1/2/3):
if /I "%choix%"=="1" (node index.js discord)
if /I "%choix%"=="2" (node index.js discordcanary)
if /I "%choix%"=="3" (node index.js discordptb)
pause
goto end

:End
cls
echo.
exit
