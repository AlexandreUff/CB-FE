export default function GraphicTypeContent(props){
    
    return (
        <section className="graphic-type-content">
            {props.types.map((type, i) => {
                return (
                    <button
                        title={type.name}
                        key={i+1}
                        onClick={() => props.graphicHandler(i, type.name)}
                        className={props.rateTypeCurrent === i ? "button-selected" : ""}
                    >
                        {type.name}
                    </button>
                )
            })}
        </section>
    )
}