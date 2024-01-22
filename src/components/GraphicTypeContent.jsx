export default function GraphicTypeContent(props){
    return (
        <section className="graphic-type-content">
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