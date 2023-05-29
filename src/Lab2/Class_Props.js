import { Component} from "react";

class Class_Props extends Component {
      
        render() {
            return(
                <div>
                    <h3>Class_Props Example</h3>
                    <p>Course1: {this.props.course1} </p>
                    <p>Course2: {this.props.course2} </p>
                </div>
            )
        }
}

export default Class_Props;