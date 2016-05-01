Sudo Todo
===

The interview test answer for Sudo.

## Requirement

* Node 4.0+
* `aoi` ( To install, just run `npm install aoi -g` )

## Usage

* `npm run serve` - Run the development server.
* `npm run build` - Build `app.js` and `style.css`

## Structure

This project build Todo App using React, and includes below components.

* `TodoList` - The main application, control all events
  * `Header`
    * `Navigation`
    * `AddTodoItem` - The child of `TodoItem` modified to implement add behavior
  * `ListView` - The abstract component, using `data` property to generate list view
    * `TodoItem` - The component include `input` and `button` can edit/mark.

### Helper Class

#### Simple Store

The simple store implement a data set to save Todo.

> `StorageStore` is the child of `SimpleStore` override `save` method to save data into `localStorage`

#### Simple Router

The very simple router use `#hashtag` to assert which page should show.

> In this app, I use it to generate filter object to help app check which state should use in current page.

### Component

#### Icon Button

This component provide very simple way to show FontAwesome's icon font.

## Things can improve

Due the time limit (my personal reason), I just have about 1 day to implement this app. So I list some point can improve to make this app better.

### React

#### Sticky Top

The test require to sticky the header, but I just direct set the value to sticky it.
The React philosophy is make component reusable, so it must can use in anywhere.

> The CSS has same problem, for clip the list, I direct set height to make gradient background can fit header height.

#### Store

The React/Flux make us use simple way to control data-flow, so I create `SimpleStore` and only call it on Root(`TodoList`).
For this reason, I create very deep callback chain, to let the inner component can call the store API.
So, it could be resolve by create a true Flux structure with Dispatcher/Actions to improve it.

#### Router

For the same reason, I make very simple router to implement filter.
But it depend on `EventEmitter` and not work well with React.
This maybe just use some library like `react-router` can be solved;

### CSS

I starting using BEM style to manage my visual component. But there still have many constraint I cannot work well.

#### Duplicate CSS

When I create a `modifier` I need to write same CSS into it.
But the `@extend` feature in SCSS is a better way to make the CSS could be reuse.
The source code still have many position can improve by this way.

#### State Manage

To change state, I add each `element` with it own state.
But this state is partner state change, so I must add state into partner and modify all `element` with this state.

> The `bemify` mixin help me fast construct BEM style CSS, but it still have some limit let me not correctly use it.


