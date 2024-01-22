export default function Metrics(props){
    return (
        <section className="metrics">
            {props.types.map(type => {
                return (
                    <button
                        title={type.name}
                    >
                        {type.name}
                    </button>
                )
            })}
        </section>
    )
}