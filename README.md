# React-Redux技术栈之 `redux-form` 详解

> React中没有类似Angular那样的双向数据绑定，在做一些表达复杂的后台类页面时，监听、赋值、传递、校验时编码相对复杂，满屏的样板代码伤痛欲绝，故引入可以解决这些问题的 `redux-form` (v6) 模块。本文在能够完成复杂表单类页面的代码例子上，尽量列举更多的可能或者可以开拓思路边边角角。


* 项目地址: [https://github.com/tedyuen/react-redux-form-v6-example](https://github.com/tedyuen/react-redux-form-v6-example)
* 演示方法: `npm install && npm run start`
* 如对翻译有困惑，请移步[官方文档](http://redux-form.com/6.8.0/)。转载请注明出处[Ted Yuen](https://github.com/tedyuen/react-redux-form-v6-example/blob/master/README.md)

## 目录

* [起步](#getting-started)
* [表单值的生命周期](#field-value-lifecycle)



<h2 id="getting-started">起步</h2>

#### 在使用 `redux-form` 之前，需要具备以下基础:

* [Redux](http://redux.js.org/) （[中文](http://cn.redux.js.org/)）
* [React](https://facebook.github.io/react/) 和 [高阶组件](https://facebook.github.io/react/docs/higher-order-components.html)

#### 关于 `redux-form` 的三个主要模块:

* **`formReducer reducer`** : 表单的各种操作以 Redux action 的方式，通过此 reducer 来促使 Redux store 数据的变化。
* **`reduxForm() HOC`** : 此高阶组件用以整合 Redux action 绑定的用户交互与您的组件，并返回一个新的组件供以使用。
* **`<Field/>`** : 用此代替您原本的 `<input/>` 组件，可以与redux-form的逻辑相连接。

#### 数据流:

在大部分情况下您不需要关心如何创建action，一切都是自动的。下图展示了一个简易的数据流:

![Data flow](https://raw.githubusercontent.com/erikras/redux-form/master/docs/reduxFormDiagram.png)

举个简单的例子，我们有一个被 `reduxForm()` 创建的表单组件，里面有一个用 `<Field/>` 创建的 `<input/>` 组件，数据流大概是这个样子的:

1. 用户点击这个 `<input/>` 组件,
2. "Focus action" 被触发,
3. formReducer 更新了对应的状态,
4. 这个状态被传回 `<input/>` 组件中。

与此类似的在这个 `<input/>` 中输入文字、更改状态、提交表单，也是遵循以上这个流程。

`redux-form` 还能基于此流程处理许多事情，诸如:表单验证与格式化，多参数与action的创建。基于以下的向导，请自助挖掘更深层次的功能。

#### 基本使用向导

##### 步骤 1/4: Form reducer

store需要知道组件如何发送action,因此我们需要在您的store中注册 `formReducer`，他可以服务于整个app中你定义的所有表单组件，因此只需要注册一次。

```javascript
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer 
})

const store = createStore(rootReducer)
```

注: 在reducer中合并的formReducer的key必须命名为"form"。如果您因某些原因需要自定义key，请移步 [getFormState config](#getformstate-config)查看详情。

##### 步骤 2/4: Form component

为了使您的表单组件可以与store进行交互，我们需要使用高价函数 `reduxForm()` 来包裹您的组件。他可以在您执行提交表单等操作的时候，以props的方式提供表单内的state。

```javascript
import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      { /* form body*/ }
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
```

现在我们已经有一个表单组件了，让我们添加一些input组件。

注: 如果您觉得 ()() 这类的语法很迷惑，您可以把它分两步来看:

```javascript
// ...

// create new, "configured" function
createReduxForm = reduxForm({ form: 'contact' })

// evaluate it for ContactForm component
ContactForm = createReduxForm( ContactForm )

export default ContactForm;
```

##### 步骤 3/4: Form `<Field/>` Components

`<Field/>` 组件可以连接所有input类型组件的数据到store中，基本用法如下:

```jsx
<Field name="inputName" component="input" type="text" />
```

它创建了一个text类型的`<input/>`组件，还提供了诸如 `value` `onChange` `onBlur`等属性，用于跟踪和维护此组件的各种状态。

注: `<Field/>` 组件很强大，除了基本的类型，还可以配置类或者无状态组件，欲了解更多，请移步[Field usage](#field-usage)。

```jsx
import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ContactForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact' 
})(ContactForm)

export default ContactForm;
```

从现在开始，表单上的操作数据已经可以填充至store，并可以执行提交表单操作了。

##### 步骤 4/4: Reacting to submit

提交的数据以JSON对象的形式注入了此表单组件的 `onSubmit` 方法里了，可以打印出来看:

```jsx
import React from 'react'
import ContactForm from './ContactForm'

class ContactPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    console.log(values)
  }
  render() {
    return (
      <ContactForm onSubmit={this.submit} />
    )
  }
}
```


