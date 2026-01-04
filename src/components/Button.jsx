function Button(props) {
  return (
    <button {...props} className="size-full bg-green-400 text-slate-900 p-2 rounded-md hover:bg-green-500 active:bg-slate-600 transition-all">
      {props.children}
    </button>
  );
}

export default Button;
