import { React,Component,TouchableOpacity } from "react";
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
    // constructor(e){
    //     super(props)
    //     this.onPress = this.onPress.bind(this) //şeklinde de kullanılabilir bind
    // }
    onPress(e){
        console.log(this);
        this.setState({
            isVisible: !isVisible  //fonksiyon her çağırılıdığında isvisible değeri değişir ve tekrar render edilir
        })
    }

    render(){
        const {name,number,email} =this.props;
        const {isVisible} =this.state;
        return (
            <View> 
                isVisible ? <TouchableOpacity onPress= {this.onPress.bind(this)}> <Text>{this.state.test}</Text> </TouchableOpacity>  : null
            </View>
            //bind fonksiyonu, yazılan fonksiyonun classını tanımasını sağlar. yani olmadığında null dönerken, olduğunda user objesini gösterir.

            //ilgili kısımda {this.state.test} diyerek state elemanına ulaşılabilir
        );
    }
} 