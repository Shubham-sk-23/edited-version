import ExpenseItem from "./ExpenseItem";



function Expenses(props){
    console.log(props)
    return(
        <>
        <ExpenseItem
        title={props.main[0].title}
        amount={props.main[0].amount}
        date={props.main[0].date}
      ></ExpenseItem>
            <ExpenseItem
        title={props.main[1].title}
        amount={props.main[1].amount}
        date={props.main[1].date}
      ></ExpenseItem>
            <ExpenseItem
        title={props.main[2].title}
        amount={props.main[2].amount}
        date={props.main[2].date}
      ></ExpenseItem>
            <ExpenseItem
        title={props.main[3].title}
        amount={props.main[3].amount}
        date={props.main[3].date}
      ></ExpenseItem>
        </>
    )

}


export default Expenses;