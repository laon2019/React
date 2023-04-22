const MyButton = ({ text, type, onClick}) =>{
    //'positive', 'negative'외에의 type들은 default타입을 넣어줌 
    const btnType = ['positive', 'negative'].includes(type)? type:'default';

    return (
        <button className={["MyButton", `MyButton_${type}`].join(" ")} onClick={onClick}>
            {text}
        </button>
    );
};

MyButton.defaultProps = {
    type: "default",
};

export default MyButton;