function ListTodosComponent(){

    const today = new Date()
    const targetDate = new Date(today.getFullYear(),
                                today.getMonth(),
                                today.getDate() + 1 )

    const todos = [
                    {id : 1, description: 'Learn React', done: false, targetDate: targetDate},
                    {id : 2, description: 'Learn Cloud',  done: false, targetDate: targetDate},
                    {id : 3, description: 'Make Fullstack Project', done: false, targetDate: targetDate}
                ]

    return(
        <div className="container">
            <h2> Todo Lists </h2>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id </td>
                            <td>Description </td>
                            <td>Is Done? </td>
                            <td>Target Date </td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        todos.map(
                            todo => (
                                <tr key = {todo.id} >
                                    <td> {todo.id} </td>
                                    <td> {todo.description} </td>
                                    <td> {todo.done.toString()} </td>
                                    <td> {todo.targetDate.toDateString()} </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table> 
            </div>
        </div>
    )
}

export default ListTodosComponent