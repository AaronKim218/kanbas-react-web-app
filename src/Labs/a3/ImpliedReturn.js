function ImpliedReturn() {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return(
        <div>
            <h3>Implied Return</h3>
            fourTimesFive = {fourTimesFive}<br />
        </div>
    )
}

export default ImpliedReturn;