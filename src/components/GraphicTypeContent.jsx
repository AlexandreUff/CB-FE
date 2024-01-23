export default function GraphicTypeContent(props){
    return (
        <section className="graphic-type-content">
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