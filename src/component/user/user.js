import { React,Component } from "react";
import { View, Text } from 'react-native';

// import PropTypes from 'prop-types';

class User extends Component{
    static defaultProps={
        name:"Bilgi yok",
        number:"Bilgi yok",
        email:"Bilgi yok",
    }
constructor(props){  //initstate işlemi denebilir
    super(props);

    this.state = {
        test:"test ",
        isVisible: true //buradan da çağırarak istediğimiz yerde bu özelliği kullanabiliriz.
    }

}    
// state = {  //böyle de state oluşturulabilir
//     isVisible: true
// }

    render(){
        const {name,number,email} =this.props;
        const {isVisible} =this.state;
        return (
            <View>
                isVisible ? <Text>{this.state.test}</Text> : null
            </View>

            //ilgili kısımda {this.state.test} diyerek state elemanına ulaşılabilir
        );
    }
} 