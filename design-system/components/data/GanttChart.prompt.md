One-line: the Timeline screen's centrepiece.

```jsx
<GanttChart months={['Jan','Feb','Mar','Apr']}
  rows={[{label:'Concept Design',start:0,span:1,status:'completed'},
         {label:'Working Drawing',start:2,span:1.4,status:'ontrack',percent:75}]}
  milestones={[{at:0.5,done:true}]} />
```

Status colours: `completed` violet-500, `ontrack` violet-300, `delayed` amber-100 fill with amber text, `pending` neutral track.
