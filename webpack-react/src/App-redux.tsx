import * as React from "react";
import { connect } from "react-redux";

// Определяем типы пропсов
interface ReduxAppProps {
    testStore: string[]; // testStore — это массив строк
    addElement: (payload: string) => void; // addElement — функция, принимающая строку
}

interface ReduxAppState {
    inputValue: string; // локальное состояние для хранения ввода
}

class ReduxApp extends React.Component<ReduxAppProps, ReduxAppState> {
    constructor(props: ReduxAppProps) {
        super(props);
        this.state = { inputValue: "" };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
    };

    handleClick = () => {
        this.props.addElement(this.state.inputValue);
        console.log("Текущее состояние store:", this.props.testStore); // Логим перед обновлением
        this.setState({ inputValue: "" }); // Очищаем input после отправки
    };

    componentDidUpdate(prevProps: ReduxAppProps) {
        // Проверяем, изменился ли store, чтобы не логировать лишний раз
        if (prevProps.testStore !== this.props.testStore) {
            console.log("Обновленный store:", this.props.testStore);
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>Click Me</button>
                <ul>
                    {this.props.testStore.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Функция для получения состояния из Redux
const mapStateToProps = (state: string[]) => ({
    testStore: state,
});

// Функция для создания действий (actions)
const mapDispatchToProps = (dispatch: (action: { type: string; payload: string }) => void) => ({
    addElement: (payload: string) => dispatch({ type: "WRITE", payload }),
});

// Подключаем Redux к компоненту
export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
