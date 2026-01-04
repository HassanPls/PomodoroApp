function Box(props) {
    return (
        <div className="space-y-4 p-6 bg-slate-300 rounded-md shadow flex flex-col text-center">
            {props.children}
        </div>
    )
}

export default Box;