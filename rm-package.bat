@echo off

GOTO comment
> RUN THIS FILE TO DELETE THE CURSED NODE_MODULES AS FAST AS YOUR EX HAS LEFT YOU.
:comment

:: Delete `node_modules` really fast via Windows Utility.
CALL del /f/s/q "node_modules" > nul && rmdir /s/q "node_modules"

:: Prevent Auto Close - For Logging Purposes
:: cmd /k
