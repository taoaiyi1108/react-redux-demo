### 学习笔记

#### react-redux
- `npm install react-redux`
```javascript
/* index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import store from './store';
const App = (
    <Provider store={store}>
    {/* Provider 是一个连接器，Provider组件中的所有组件都可以获取到store中的值 */}
        <TodoList />
    </Provider>
)

ReactDOM.render(App, document.getElementById('root'));
```