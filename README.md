# React Native Use Refresh Screen Hook

A simple hook used to refresh an entire screen or re-run some side effects (inside of useEffect)

## Installation
```
yarn add react-native-refresh-screen-hook
```

## Motivation

React native does not provide a default way of refreshing entire screens like the browser, so some times a user might take an action an delete an item from the view, so the view should be refreshed or we should fetch the data from the API again. 


### Usage
```js
import useRefreshHook from 'react-native-refresh-screen-hook';


const HomeScreen = () =>{
    const [todoListRefreshState, refreshTodoList] = useRefreshHook();
    const [todoList, setTodoList] = useState([]);

    useEffect (() =>{
        // fetch todo list
        setTodoList(data);

        // Add the todo list refresh as a use effect dependency
    },[todoListRefreshState])

    return (
        <View>
            <View>
              {
                todoList.map(list =>{
                    <View>
                       // List data here
                    <TouchableOpacity onPress={() =>
                    {
                      deleteItem(list.id)
                      .then(()=>{
                        // Call the refresh function to re run the related side effect
                        refresh()
                      })
                    }}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                    </View>
                })
              }
            </View>
        </View>
    )
```

### Notes
- You can call the hook once and get a state that can be passed to all your hooks as a dependency, which effectively means you are refreshing the entire screen.
- You can call the hook more than once, and have some hooks dependant on the first refresh state and other hooks dependant on another refresh state and so no.