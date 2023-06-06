import React , { Component} from "react";

class ClassProps extends Component {

        
      
        render() {
            const {course1,course2}=this.props
            return(
                <div>
                    <h3>Class_Props Example</h3>
                    <p>Course1: {course1} </p>
                    <p>Course2: {course2} </p>
                </div>
            )
        }
}

export default ClassProps;