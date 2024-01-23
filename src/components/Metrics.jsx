export default function Metrics(props){
    return (
        <section className="metrics">
            {props.types.map((type, i) => {
                return (
                    <button
                        title={type.name}
                        key={i+1}
                    >
                        {type.name}
                    </button>
                )
            })}
        </section>
    )
}