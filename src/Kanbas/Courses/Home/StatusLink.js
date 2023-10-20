function StatusLink({ children }) {
    return (
        <button className="list-group-item m-2 bg-light">
            {children}
        </button>
    );
}

export default StatusLink;