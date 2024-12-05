@echo off
setlocal enabledelayedexpansion

set "targetDir=./"

cd /d "%targetDir%"

set "jsFiles="
for %%f in (*.js) do set "jsFiles=!jsFiles! %%f"

rem 遍历存储的.js 文件
for %%j in (!jsFiles!) do (
    set "currentJsFile=%%j"
    set "djsFile=!currentJsFile:.js=.d.js!"
    if not exist "!djsFile!" (
        echo Processing!currentJsFile! to create!djsFile!
        obfuscator-io-deobfuscator "!currentJsFile!" -o "./out/!djsFile!"
    ) else (
        echo!djsFile! already exists. Skipping!currentJsFile!
    )
)

endlocal