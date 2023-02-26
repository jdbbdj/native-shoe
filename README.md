
### React Native tips

> it is advisable to run your emulator using adb

***HOW***?
- make a path for
- C:\Users\%Users%\AppData\Local\Android\Sdk\platform-tools - for `adb` to be recongnized
-  C:\Users\%Users%\AppData\Local\Android\Sdk\emulator - for `emulator` to be recongnized
- `emulator -list-avds` it will show the emulator name that you created in android studio `Pixel_4_API_29`, if there isn't to be found create one
- run this command `emulator -avd Pixel_4_API_29` to open the emulator without opening the android studio
- If this `Android Studio error: cannot connect to daemon` something appeared, just run `adb start-server`, but to double check if there isn't adb running you can `adb kill-server`
- then run the `emulator -avd Pixel_4_API_29` again
- then run `npm start android` or `expo start --android`

![image](https://user-images.githubusercontent.com/75722677/221424478-97bc0917-4fca-4ed7-9761-4975bcc5822d.png)


> we can always open two command lines on our ***VSCODE*** in order for us to execute those commands, if the `emulator` or `adb` command still doesn't work, you can restart your VSCODE or open the cmd with `admin` rights.
