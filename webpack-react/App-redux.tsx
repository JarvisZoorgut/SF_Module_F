import * as React from "react";
import { connect } from "react-redux";
import changeFramework from "./src/redux/reducers/frameworks";
import changeLibrary from "./src/redux/reducers/libraries";

// Определяем интерфейсы для пропсов и состояния
interface ReduxAppProps {
    libraries: string[];
    frameworks: string[];
    addLibrary: (payload: string) => void;
    addFramework: (payload: string) => void;
}

interface ReduxAppState {
    inputValue: string;
}

class ReduxApp extends React.Component<ReduxAppProps, ReduxAppState> {
    constructor(props: ReduxAppProps) {
        super(props);
        this.state = { inputValue: "" };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ inputValue: event.target.value });
    };

    handleAddLibrary = () => {
        if (this.state.inputValue.trim() === "") return;
        this.props.addLibrary(this.state.inputValue);
        console.log("Добавлен в libraries:", this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    handleAddFramework = () => {
        if (this.state.inputValue.trim() === "") return;
        this.props.addFramework(this.state.inputValue);
        console.log("Добавлен в frameworks:", this.state.inputValue);
        this.setState({ inputValue: "" });
    };

    componentDidUpdate(prevProps: ReduxAppProps) {
        if (
            JSON.stringify(prevProps.libraries) !== JSON.stringify(this.props.libraries) ||
            JSON.stringify(prevProps.frameworks) !== JSON.stringify(this.props.frameworks)
        ) {
            console.log("Обновленный store:", {
                libraries: this.props.libraries,
                frameworks: this.props.frameworks
            });
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
                <button onClick={this.handleAddLibrary}>Добавить в Libraries</button>
                <button onClick={this.handleAddFramework}>Добавить в Frameworks</button>

                <h3>Libraries:</h3>
                <ul>
                    {this.props.libraries.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>Frameworks:</h3>
                <ul>
                    {this.props.frameworks.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// ✅ Исправленный mapStateToProps (если у тебя combineReducers)
const mapStateToProps = (state: any) => ({
    libraries: state.changeLibrary || [], // Теперь это массив
    frameworks: state.changeFramework || [], // Теперь это массив
});

// ✅ Исправленный mapDispatchToProps
const mapDispatchToProps = (dispatch: any) => ({
    addLibrary: (payload: string) => dispatch({ type: "ADD_LIBRARY", payload }),
    addFramework: (payload: string) => dispatch({ type: "ADD_FRAMEWORK", payload }),
});

// Подключаем Redux к компоненту
export default connect(mapStateToProps, mapDispatchToProps)(ReduxApp);
