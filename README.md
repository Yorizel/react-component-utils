# react-component-utils
## What is this project about?
#### This library was made based in some vue directives

-----------------------------------------------------------------------------------------------------------------------

### If Component
How to use the if component, basically you put your component that needs to be rendered conditionally inside the component and put your condition as a props
```
<If condition={yourCondition}>
    <SomeComponent/>
</If>
```
### IfElse Component

How to use the ifElse component, basically you put your components that needs to be rendered conditionally inside the component and put your condition as a props, the first component represents the true condition the second the false condition
```
<IfElse condition={yourCondition}>
    <ComponentThatRendersWhenConditionIsTrue/>
    <ComponentThatRendersWhenConditionIsFalse/>
</IfElse>
```
### For Component

How to use the for component, basically you put your array that will be iterated and put an arrow function that receives some props to pass it to your component, if you desire you con type the props as an object from your array
```
<For array={yourArray}>
    {(props) => <YourComponentThatNeedProps/>}
</For>
```
### ElseIf Component

How to use the elseIf component, the elseIf component is basically the same as the if component
```
<ElseIf condition={yourCondition}>
    <YourComponent/>
</ElseIf>
```
### Show Component

How to use the show component, the show component is basically the same as the if component, but it puts display hidden on element
```
<Show condition={yourCondition}>
    <SomeComponent/>
</Show>
```
### Template Component

How to use the template component, the template component is basically a react fragment it was made to be used as the first component in your template code, so you can put multiple components in your template
```
<Template>
    <SomeComponent/>
    <SomeComponent/>
    <SomeComponent/>
    <SomeComponent/>
</Template>
```
-----------------------------------------------------------------------------------------------------------------------



