
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

![[Pasted image 20230227001516.png]]

> we can always open two command lines on our ***VSCODE*** in order for us to execute those commands, if the `emulator` or `adb` command still doesn't work, you can restart your VSCODE or open the cmd with `admin` rights.

### SHADOWS

> Shadows are really important in making cards, thus creating one in react-native is not by simply assigning box-shadow, for it will not work on both `ios` and `android` so we will assign things like

![[Pasted image 20230227094452.png]]

![[Pasted image 20230227094725.png]]

### DRY - Don't repeat yourself

> This can be done on both `components` and `stylings`, which can be also applied for functions such as `headers` on API calls, and also for `caching` and `reduxing`

![[Pasted image 20230227095924.png]]

**here is a good example for it**, below are the changes made for those components
![[Pasted image 20230227101659.png]]

Also check the effect of how ***easy*** to just copy and integrate it on other components, ***box shadow*** ing is something ***important*** rather than simple borders



# Navigation

>After some gruesome manipulation of reusable `components`, we'll dive more on navigations, navigations lets you transfer from one `screen` to another `screen`. ***LEAVING*** unnecessary datas, and bringing through `routes.params` such needed data for the `user -journey`

HOW?
- `npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context`
- You can create a different file directory for all of your `navigations` 
- `Enclosed` all of your navigation through `Navigation` component from react native for you to have an access to it `import { NavigationContainer } from "@react-navigation/native";`
![[Pasted image 20230227151443.png]]

then you can just simply call it on the `App.js`

>The navigator will define will how one `screen` will behave on user perspective here we can add `createNativeStackNavigator` for multiple screenings and Name it as Stack

`const Stack = createStackNavigator()`

hierarchy would be
`<NavigationContainer>`
	`<Stack.Navigator>`
		`<Stack.Screen name="title that will appear on top" ``component=`{componentdeclaration}/>`

>Note if somethings doesn't appear check your App.js, maybe try to remove all views that incorporates the `<Navigation/>` root


***BUT*** we can map it and declare the name and components in an `array`
![[Pasted image 20230227214746.png]]
![[Pasted image 20230227214840.png]]

>Note: `navigation` props could only be obtained inside the Stack.Screen, if you have another component inside that stack screen, you can either pass again as `props` or `const navigation=useNavigation()`



![[Pasted image 20230227230338.png]]

>Note: we can add options object in the `navs` each item for us to determine the behavior of navigations and animations per navigate

![[Pasted image 20230228032851.png]]

>Sometimes you need that `headerRight` property and has to pass `navigation` props also, we can't do it and can't navigate it if we just simply pass it to the array. So for our app to work we just set a `conditioning`

### GLOBAL STATE MANAGEMENT: REDUX

![[Pasted image 20230228033656.png]]

Here is a good example of how does the Global State Management really is necessary, for bigger projects passing ***props*** like states and functions are so easy. But when the project ***escalates***, it is hard to maintain that could cause a lots of errors and chaos on the team.

On second illustration, those screen without cart item as props can't access(**PROP DRILLING**) the cartItem on the APP, whilst the first illustration has an **ACCESSS** without even declaring it. And that's the power of REDUX/GLOBAL STATE MANAGEMENT, there are more alternative to redux. But for our own experience, we'll use redux for this.

### REDUX PARTS

![[Pasted image 20230228034556.png]]

## STORE AND SLICES

> The store the main source of global state, that we can  access ***ANYWHERE*** if implemented **RIGHT**

> Slices are just another term for initial states that your project will have

## STATE

>This could be rendered by UI, just like on our earlier example cartItem.

### TRIGGERING: is the event where you will try to manipulate the state from the store

![[Pasted image 20230228035212.png]]

> Once we clicked the WITHDRAW button, it will trigger an ***EVENT*** which is has no right to manipulate the data unless you will attach a ***DISPATCH ACTION*** into it.

![[Pasted image 20230228035738.png]]

> But the **ACTION*** needs to be validated by the reducer of which state it can manipulate on the **STORE**, once the ACTION has been matched with **REDUCER ACTION** and the state has responded, the UI WILL receive the **UPDATED STATE**, but needs a triggering functions such as `useEffect`

![[Pasted image 20230228040036.png]]

## EXECUTION: File structure
- npm install @reduxjs/toolkit react-redux
- create folders such as `/redux` inside of it has `/store` `/reducers` `/actions`

![[Pasted image 20230228040456.png]]


### EXECUTION: STORE and SLICES
- `import { configureStore } from "@reduxjs/toolkit";`

![[Pasted image 20230228040708.png]]

![[Pasted image 20230228041331.png]]

>Next connect slice to the store

![[Pasted image 20230228041520.png]]


### EXECUTION: Provider and App.js

`import { Provider } from "react-redux";`

![[Pasted image 20230228040910.png]]


### EXECUTION: Checking if the products could be obtained using useSelector

![[Pasted image 20230228041829.png]]

Let's try to incorporate it, and using it to display the list of products

![[Pasted image 20230228041952.png]]

![[Pasted image 20230228042053.png]]

### EXECUTION: Getting selectedProduct pt 1

![[Pasted image 20230228042229.png]]

> Initiate another initialState

![[Pasted image 20230228042457.png]]

>Create a `reducer`, if you want to retrieve/manipulate/delete the source `data` and insert it on another `initialState`

>But now let's just check what will be the output of printing the `action` and `state`

![[Pasted image 20230228043103.png]]

> and once we clicked it this will show.

![[Pasted image 20230228043143.png]]


### EXECUTION: Getting selectedProduct pt 2

![[Pasted image 20230228043559.png]]

> Then we just need to return the navigation to the products screen and use useSelector to determine the selected Product and here it is

![[Pasted image 20230228043707.png]]






