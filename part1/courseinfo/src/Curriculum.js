const Curriculum = (props) => {
    return (
        <div>
            <h1>{props.curriculumName}</h1>
            {props.curriculum.map(item => {
                return (
                    <Course key={item.id} course={item} />
                )
            })}
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course.name}/>
            {props.course.parts.map(item => {
                return (
                    <p key={item.id}>
                        {item.part} {item.exercises}
                    </p>
                )
            })}
            <Total course={props.course} />
        </div>
    )
}

const Header = ({course}) => {
    return (
        <h2>{course}</h2>
    )
}

const Total = (props) => {

let total_exercises = () => {    
    const total = props.course.parts.reduce((total, current) => {
    return total + current.exercises    
    }, 0)
    return total
}

return (
    <p><b>total of {total_exercises()} exercises</b></p>
)
}

export default Curriculum