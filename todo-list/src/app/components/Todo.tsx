import styles from "./Todo.modules.css";

type TodoProps={
    todo:{
        text: "string";
        id: number;
    };
};

export function Todo({ todo }: TodoProps) {
    return (
        <>
    
            <div className="container">
                <p>{todo.text}</p>
                <button>X</button>
            </div>
        </>
    );
}